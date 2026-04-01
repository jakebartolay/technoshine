import { brandAssets, teamImages } from "@/assets/siteAssets";

export type TeamMember = {
  name: string;
  role: string;
  division: string;
  image: string;
  facebookUrl: string;
  linkedinUrl: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Erwin Torrefiel",
    role: "Managing Director",
    division: "Executive",
    image: teamImages.erwin,
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jo Torrefiel",
    role: "Head of Operations",
    division: "Operations",
    image: brandAssets.fallbackAvatar,
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Rich Nicollie Torrefiel",
    role: "President",
    division: "Executive",
    image: teamImages.rich,
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mary-Lou Robellon",
    role: "Executive Manager",
    division: "Operations",
    image: teamImages.maryLou,
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mark Antony Daga",
    role: "Technical Manager",
    division: "StoneCare",
    image: teamImages.mark,
    facebookUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Monica Mangilit",
    role: "Trading Lead",
    division: "Trading",
    image: teamImages.monica,
    facebookUrl: "#",
    linkedinUrl: "#",
  },
];
