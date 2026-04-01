import DivisionHero from "@/components/ui/DivisionHero";
import { divisions } from "@/data/divisions";

export default function ConstructionLanding() {
  return <DivisionHero division={divisions.construction} />;
}
