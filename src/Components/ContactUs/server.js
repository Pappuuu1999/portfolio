import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  // Create Vite server in development
  const vite = await (await import('vite')).createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');

      // 2. Apply Vite HTML transforms.
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the server entry.
      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

      // 4. Render the app's HTML.
      const { html: appHtml } = render(url);

      // 5. Inject the app-rendered HTML into the template.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(5173, () => {
    console.log('Server started at http://localhost:5173');
  });
}

createServer();