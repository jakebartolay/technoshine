import DivisionServicesGrid from "@/components/ui/DivisionServicesGrid";
import { divisions } from "@/data/divisions";

export default function TradingProducts() {
  return <DivisionServicesGrid division={divisions.trading} />;
}
