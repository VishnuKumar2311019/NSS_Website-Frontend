// Utility to provide API base URL for frontend requests.
// Set REACT_APP_API_BASE in your .env for a custom backend (e.g. https://api.example.com)
const API_BASE = process.env.REACT_APP_API_BASE || '';

export { API_BASE };
