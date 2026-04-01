import DivisionProjectsGrid from "@/components/ui/DivisionProjectsGrid";
import { divisions } from "@/data/divisions";

export default function StonecareProjects() {
  return <DivisionProjectsGrid division={divisions.stonecare} />;
}
