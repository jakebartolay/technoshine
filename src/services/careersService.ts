import { apiClient } from "@/api/client";
import { companyInfo } from "@/data/company";

export type CareerApplicationPayload = {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: File;
  message: string;
};

export type CareerApplicationResult = {
  mode: "api" | "mailto";
};

function buildCareerMailto(payload: CareerApplicationPayload) {
  const subject = `Career Application - ${payload.position} - ${payload.name}`;
  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Position: ${payload.position}`,
    `Resume: ${payload.resume.name}`,
    "",
    "Message:",
    payload.message.trim() || "(No additional message)",
    "",
    "Please attach the selected resume file before sending this email.",
  ].join("\n");

  return `mailto:${companyInfo.careersEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitCareerApplication(
  payload: CareerApplicationPayload,
): Promise<CareerApplicationResult> {
  const endpoint = import.meta.env.VITE_CAREERS_ENDPOINT;

  if (!endpoint) {
    window.location.href = buildCareerMailto(payload);
    return { mode: "mailto" };
  }

  const formData = new FormData();
  formData.set("name", payload.name);
  formData.set("email", payload.email);
  formData.set("phone", payload.phone);
  formData.set("position", payload.position);
  formData.set("resume", payload.resume);
  formData.set("message", payload.message);
  formData.set("recipient", companyInfo.careersEmail);

  await apiClient.post(endpoint, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return { mode: "api" };
}
