import { companyInfo } from "@/data/company";

export default function TradingTopbar() {
  return (
    <div className="hidden bg-slate-950 text-slate-200 md:block">
      <div className="container-shell flex items-center justify-between py-3 text-sm">
        <p>Road safety and industrial barrier solutions for project-ready deployments.</p>
        <div className="flex items-center gap-6">
          <span>Email: {companyInfo.email}</span>
          <span>Call: {companyInfo.phone}</span>
        </div>
      </div>
    </div>
  );
}
