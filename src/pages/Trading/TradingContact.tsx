import { type FormEvent, useState } from "react";

import { companyInfo } from "@/data/company";
import TradingPageBanner from "@/pages/Trading/components/common/TradingPageBanner";
import TradingReveal from "@/pages/Trading/components/common/TradingReveal";
import { submitContactForm } from "@/services/contactService";

type TradingContactFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
};

const initialFormState: TradingContactFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  product: "",
  message: "",
};

export default function TradingContact() {
  const [form, setForm] = useState<TradingContactFormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const detailedMessage = [
      `Phone: ${form.phone || "Not provided"}`,
      `Company: ${form.company || "Not provided"}`,
      `Product Needed: ${form.product || "Not provided"}`,
      "",
      form.message,
    ]
      .join("\n")
      .trim();

    try {
      await submitContactForm({
        name: form.name,
        email: form.email,
        message: detailedMessage,
      });
      setSubmitted(true);
      setForm(initialFormState);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <TradingPageBanner
        title="Contact Us"
        subtitle="Tell us about your product needs, quantity requirements, and project timeline."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <TradingReveal>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
                Get In Touch
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white">
                Let&apos;s talk about your project
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                Share your requirements and our team will get back to you with product
                guidance and quotation support.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  {companyInfo.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  {companyInfo.phone}
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span>{" "}
                  {companyInfo.addressLines.join(" ")}
                </p>
              </div>
            </div>
          </TradingReveal>

          <TradingReveal delay={0.1}>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
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
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      required
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                      placeholder="Full name"
                    />
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                      placeholder="Email address"
                    />
                    <input
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                      placeholder="Phone number"
                    />
                    <input
                      value={form.company}
                      onChange={(event) => setForm({ ...form, company: event.target.value })}
                      className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                      placeholder="Company"
                    />
                  </div>

                  <input
                    value={form.product}
                    onChange={(event) => setForm({ ...form, product: event.target.value })}
                    className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                    placeholder="Product needed"
                  />
                  <textarea
                    required
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className="mt-5 min-h-40 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                    placeholder="Tell us about quantity, specifications, and project details"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </TradingReveal>
        </div>

        <div className="container-shell mt-12 overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
          <iframe
            title="Technoshine location"
            src={companyInfo.mapEmbedUrl}
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
