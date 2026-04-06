import type { ConstructionCoreValue } from "@/pages/Construction/constructionTypes";

type ConstructionCompanyInfo = {
  name: string;
  tagline: string;
  subtitle: string;
  story: string;
  vision: string;
  mission: string[];
  goal: string;
  coreValues: ConstructionCoreValue[];
  qualityPolicyTitle: string;
  qualityPolicy: string;
  qualityPoints: string[];
  process: string[];
  contact: {
    phone: string;
    email: string;
    secondaryEmail: string;
    address: string;
  };
};

export const constructionCompanyInfo: ConstructionCompanyInfo = {
  name: "Technoshine Construction",
  tagline: "Building. Restoring. Perfecting Spaces.",
  subtitle:
    "Construction and finishing solutions for residential, commercial, and institutional projects.",
  story:
    "Technoshine is a trusted construction and finishing company known for quality workmanship, reliability, and premium project delivery. From restoration and renovation to fit-out and modular construction, the company continues to serve clients with strong technical experience and a commitment to detail.",
  vision:
    "To be a reliable and trusted construction company delivering quality, safe, and sustainable projects.",
  mission: [
    "Provide high-quality construction, renovation, and finishing services through skilled workmanship and professional project execution.",
    "Exceed client expectations through timely delivery, transparency, and dependable service.",
    "Promote innovation, continuous improvement, and customer satisfaction in every project.",
  ],
  goal:
    "To expand construction capabilities in civil works, architectural finishes, and specialized project solutions.",
  coreValues: [
    {
      title: "Commitment",
      description:
        "We value dedication to quality service and long-term customer trust.",
    },
    {
      title: "Passion",
      description:
        "We bring energy, care, and attention to every project we handle.",
    },
    {
      title: "Integrity",
      description:
        "We work honestly, responsibly, and professionally in every engagement.",
    },
    {
      title: "Professionalism",
      description:
        "We maintain discipline, reliability, and respect in project delivery.",
    },
  ],
  qualityPolicyTitle: "Committed to Safety, Quality, and On-Time Delivery",
  qualityPolicy:
    "Technoshine Construction is committed to providing construction services that meet client needs, quality standards, and project requirements through planning, execution, and continuous improvement.",
  qualityPoints: [
    "Deliver quality service to maintain excellent customer relations.",
    "Keep customer satisfaction at the center of the business.",
    "Understand and fulfill project requirements.",
    "Carry out work consistently to defined standards.",
    "Use the right skills and resources for project delivery.",
    "Train staff and support continuous improvement.",
    "Improve systems and procedures continuously.",
  ],
  process: [
    "Project Consultation and Site Inspection",
    "Design Review and Cost Estimate",
    "Project Planning and Scheduling",
    "Construction and Quality Control",
    "Project Turnover and Support",
  ],
  contact: {
    phone: "+63 917 824 1220",
    email: "erwin.torrefiel@technoshineph.com",
    secondaryEmail: "stonecare@technoshineph.com",
    address: "Unit 110 Union Square Condominium, 15th Ave, Cubao, Quezon City",
  },
};
