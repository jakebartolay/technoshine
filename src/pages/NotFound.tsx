import { AlertCircle, ArrowLeft, House } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { appRoutes } from "@/utils/routes";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate(appRoutes.home);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-950 px-4 py-24">
      <Card className="mx-4 w-full max-w-md border-gray-800 bg-white/95 shadow-2xl">
        <CardContent className="pt-6">
          <div className="mb-4 flex gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you requested does not exist or may have been moved.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleGoBack}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>

            <button
              onClick={() => navigate(appRoutes.home)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              <House className="h-4 w-4" />
              TECHNOSHINE
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
