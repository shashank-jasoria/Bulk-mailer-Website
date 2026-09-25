const API_URL = import.meta.env.VITE_API_URL;

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_URL}/api${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    // Response may not contain JSON.
  }

  if (!response.ok) {
    const error = new Error(data?.error || "Something went wrong");

    error.status = response.status;
    error.data = data;

    throw error;
  }

  return data;
}

export default apiRequest;
