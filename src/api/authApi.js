import apiRequest from "./apiClient";

export async function getWebsiteUser() {
  return apiRequest("/auth/website/me");
}

export async function logoutWebsite() {
  return apiRequest("/auth/website/logout", {
    method: "POST",
  });
}

export async function startGoogleWebsiteLogin() {
  const data = await apiRequest("/auth/google/website-start");

  if (!data?.authUrl) {
    throw new Error("Google login URL was not returned");
  }

  window.location.href = data.authUrl;
}

export async function startMicrosoftWebsiteLogin() {
  const data = await apiRequest("/auth/microsoft/website-start");

  if (!data?.authUrl) {
    throw new Error("Microsoft login URL was not returned");
  }

  window.location.href = data.authUrl;
}
