import DivisionServicesGrid from "@/components/ui/DivisionServicesGrid";
import { divisions } from "@/data/divisions";

export default function ConstructionServices() {
  return <DivisionServicesGrid division={divisions.construction} />;
}
