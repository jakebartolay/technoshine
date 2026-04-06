import { Link } from "react-router-dom";

import { constructionRoutes } from "@/pages/Construction/constructionRoutes";

export default function ConstructionNotFound() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
            Page Not Found
          </p>
          <h1 className="mt-4 text-4xl font-black text-slate-950">
            The construction page you requested is not available.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Try going back to the Construction homepage or browse our services and projects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to={constructionRoutes.home}
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Back to Construction Home
            </Link>
            <Link
              to={constructionRoutes.services}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
