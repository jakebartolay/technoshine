import { apiClient } from "@/api/client";

export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(payload: ContactFormPayload) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (!endpoint) {
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    return { success: true, payload };
  }

  const response = await apiClient.post(endpoint, payload);
  return response.data;
}
