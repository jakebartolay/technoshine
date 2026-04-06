import { FormEvent, useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  Send,
} from "lucide-react";

import { companyInfo } from "@/data/company";
import { homeBrandIconMeta } from "@/pages/Home/homeBrandIcons";
import {
  submitCareerApplication,
  type CareerApplicationResult,
} from "@/services/careersService";

type CareersFormState = {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: File | null;
  message: string;
};

const initialFormState: CareersFormState = {
  name: "",
  email: "",
  phone: "",
  position: "",
  resume: null,
  message: "",
};

const hiringDivisions = [
  { key: "stonecare", label: "StoneCare" },
  { key: "trading", label: "Trading" },
  { key: "construction", label: "Construction" },
] as const;

function formatFileSize(size: number) {
  if (size >= 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  return `${Math.max(1, Math.round(size / 1024))} KB`;
}

export default function CareersSection() {
  const [form, setForm] = useState<CareersFormState>(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<CareerApplicationResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const TechnoshineIcon = homeBrandIconMeta.technoshine.icon;
  const phoneHref = `tel:${companyInfo.phone.replace(/[^\d+]/g, "")}`;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.resume) {
      setErrorMessage("Please upload your resume before submitting your application.");
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const result = await submitCareerApplication({
        name: form.name,
        email: form.email,
        phone: form.phone,
        position: form.position,
        resume: form.resume,
        message: form.message,
      });

      setSubmissionResult(result);
      setForm(initialFormState);
      setFileInputKey((current) => current + 1);
    } catch (error) {
      setErrorMessage("We could not prepare your application right now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-gray-950 pb-14 pt-28 text-white md:pb-20 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.16),transparent_30%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-start gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden md:block">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-orange-200">
                <TechnoshineIcon className="h-4 w-4" />
                Careers at Technoshine
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
                Join our team.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300">
                We&apos;re accepting applications for StoneCare, Trading, and Construction roles. Send your
                application to{" "}
                <a
                  href={`mailto:${companyInfo.careersEmail}`}
                  className="font-semibold text-orange-300 transition-colors hover:text-orange-200"
                >
                  {companyInfo.careersEmail}
                </a>
                .
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">Hiring Inbox</p>
                      <a
                        href={`mailto:${companyInfo.careersEmail}`}
                        className="mt-1 block text-base font-semibold text-white transition-colors hover:text-orange-200"
                      >
                        {companyInfo.careersEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-200">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">Contact Line</p>
                      <a
                        href={phoneHref}
                        className="mt-1 block text-base font-semibold text-white transition-colors hover:text-orange-200"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-200">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Hiring divisions</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">
                      We review applicants across our core services.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {hiringDivisions.map((division) => {
                    const divisionMeta = homeBrandIconMeta[division.key];
                    const DivisionIcon = divisionMeta.icon;

                    return (
                      <div
                        key={division.key}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-2xl ${divisionMeta.surfaceClassName} ${divisionMeta.iconClassName}`}
                        >
                          <DivisionIcon className="h-4 w-4" />
                        </div>
                        <p className="text-sm font-semibold text-white">{division.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl rounded-[28px] bg-white p-6 text-gray-900 shadow-2xl shadow-black/20 sm:p-8">
            {submissionResult ? (
              <div className="flex h-full flex-col justify-center py-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {submissionResult.mode === "api" ? "Application sent!" : "Email draft ready"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {submissionResult.mode === "api"
                    ? "Your application was submitted successfully. Our hiring team will review it and get in touch if your profile matches an open role."
                    : `Your email app should open a draft addressed to ${companyInfo.careersEmail}. Please attach your selected resume file and click Send to complete your application.`}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionResult(null);
                    setErrorMessage(null);
                  }}
                  className="mt-6 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 md:hidden">
                    <TechnoshineIcon className="h-4 w-4" />
                    Careers
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Career Application</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Fill out the form below and we&apos;ll route it to the hiring team at{" "}
                    <span className="font-semibold text-orange-600">{companyInfo.careersEmail}</span>.
                  </p>
                  <div className="mt-4 space-y-1 text-sm text-gray-500 md:hidden">
                    <p>Email: {companyInfo.careersEmail}</p>
                    <p>Phone: {companyInfo.phone}</p>
                  </div>
                </div>

                {errorMessage ? (
                  <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
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
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      placeholder="+63 9XX XXX XXXX"
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Position</label>
                    <input
                      type="text"
                      required
                      value={form.position}
                      onChange={(event) => setForm({ ...form, position: event.target.value })}
                      placeholder="Position you are applying for"
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Resume Upload</label>
                  <div className="rounded-[24px] border border-dashed border-orange-200 bg-orange-50/60 p-4">
                    <input
                      key={fileInputKey}
                      type="file"
                      required
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={(event) =>
                        setForm({
                          ...form,
                          resume: event.target.files?.[0] ?? null,
                        })
                      }
                      className="block w-full cursor-pointer text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:font-semibold file:text-orange-700 file:shadow-sm hover:file:bg-orange-100"
                    />
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                      <FileText className="h-4 w-4 flex-shrink-0 text-orange-500" />
                      {form.resume
                        ? `Selected: ${form.resume.name} (${formatFileSize(form.resume.size)})`
                        : "Accepted files: PDF, DOC, DOCX"}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="Tell us about your background, experience, or availability."
                    className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-orange-100 transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Preparing application..." : "Submit application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
