import DivisionServicesGrid from "@/components/ui/DivisionServicesGrid";
import { divisions } from "@/data/divisions";

export default function StonecareServices() {
  return <DivisionServicesGrid division={divisions.stonecare} />;
}
