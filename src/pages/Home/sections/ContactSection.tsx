import { FormEvent, useState } from "react";

import { companyInfo } from "@/data/company";
import { submitContactForm } from "@/services/contactService";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await submitContactForm(form);
      setSubmitted(true);
      setForm(initialFormState);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-scroll-offset="0" className="bg-gradient-to-br from-orange-500 to-orange-600 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 grid items-start gap-16 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
              Contact Us
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Let&apos;s Work Together
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-orange-100">
              Ready to start your next project? Get in touch with our team and let&apos;s discuss how TechnoShine PH can bring your vision to life.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 text-white">
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-white/60">Email</p>
                  <p className="font-medium text-white">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-white/60">Phone</p>
                  <p className="font-medium text-white">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-white/60">Address</p>
                  <p className="font-medium leading-snug text-white">
                    {companyInfo.addressLines[0]}
                    <br />
                    {companyInfo.addressLines[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-bold text-gray-900">Send a Message</h3>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white shadow-lg shadow-orange-100 transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
          <iframe
            title="TechnoShine PH Location"
            src={companyInfo.mapEmbedUrl}
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
