import apiRequest from "./apiClient";

export async function submitContactForm({ email, subject, description }) {
  return apiRequest("/contactus", {
    method: "POST",

    body: JSON.stringify({
      email,
      subject,
      description,
    }),
  });
}
