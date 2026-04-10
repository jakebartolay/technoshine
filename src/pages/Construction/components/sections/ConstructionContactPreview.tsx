import { type FormEvent, useState } from "react";

import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import ConstructionSectionTitle from "@/pages/Construction/components/common/ConstructionSectionTitle";
import { constructionCompanyInfo } from "@/pages/Construction/data/constructionCompanyInfo";
import { submitContactForm } from "@/services/contactService";

type ConstructionContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: ConstructionContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ConstructionContactPreview() {
  const [form, setForm] = useState<ConstructionContactFormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await submitContactForm({
        name: form.name,
        email: form.email,
        message: [`Phone: ${form.phone || "Not provided"}`, "", form.message].join("\n"),
      });
      setSubmitted(true);
      setForm(initialFormState);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24">
      <ConstructionContainer className="grid gap-8 lg:grid-cols-2">
        <div>
          <ConstructionSectionTitle
            eyebrow="Contact Us"
            title="Ready to discuss your project?"
            text="Reach out to Technoshine for construction, renovation, modular works, and finishing solutions."
          />
          <div className="mt-8 space-y-4 text-base leading-8 text-slate-700">
            <p>
              <span className="font-bold">Phone:</span> {constructionCompanyInfo.contact.phone}
            </p>
            <p>
              <span className="font-bold">Email:</span> {constructionCompanyInfo.contact.email}
            </p>
            <p>
              <span className="font-bold">Address:</span> {constructionCompanyInfo.contact.address}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Inquiry Sent!</h3>
              <p className="text-gray-600">Thank you. Our construction team will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                placeholder="Full Name"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                placeholder="Email Address"
              />
              <input
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                placeholder="Phone Number"
              />
              <textarea
                required
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="min-h-[150px] rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                placeholder="Tell us about your project"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </ConstructionContainer>
    </section>
  );
}
