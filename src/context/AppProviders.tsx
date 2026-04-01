import { AppContextProvider } from "@/context/AppContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <AppContextProvider>{children}</AppContextProvider>;
}
