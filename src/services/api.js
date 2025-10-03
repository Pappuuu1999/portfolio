// src/services/api.js

// ✅ Use environment variable if deployed, else default to local backend
const rawApiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const API_URL = rawApiUrl.replace(/\/+$/, ""); // trim trailing slashes to avoid redirects

// ✅ Fetch all projects
export async function fetchProjects() {
  const res = await fetch(`${API_URL}/api/projects`); // avoid double slashes
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

// ✅ Fetch all services (if needed)
export async function fetchServices() {
  const res = await fetch(`${API_URL}/api/services`);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}
