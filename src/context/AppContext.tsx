import { createContext, useContext } from "react";

import { companyInfo } from "@/data/company";

type AppContextValue = {
  companyName: string;
  supportEmail: string;
  supportPhone: string;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider
      value={{
        companyName: companyInfo.name,
        supportEmail: companyInfo.email,
        supportPhone: companyInfo.phone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }

  return context;
}
