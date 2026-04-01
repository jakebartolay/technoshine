import DivisionProjectsGrid from "@/components/ui/DivisionProjectsGrid";
import { divisions } from "@/data/divisions";

export default function TradingCatalog() {
  return <DivisionProjectsGrid division={divisions.trading} />;
}
