// src/config.ts
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;
export const API_ENDPOINTS = {
  CHECK_PRIVACY: `${BACKEND_URL}/api/check_privacy`,        // POST endpoint for privacy checks
  CONTACT: `${BACKEND_URL}/api/contact`,           // POST endpoint for contact form submissions
  HEALTH_CHECK: `${BACKEND_URL}/api/health_check`,  // GET endpoint for health checks
};
