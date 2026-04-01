export const companyInfo = {
  name: "TECHNOSHINE",
  tagline: "Building excellence across industries in the Philippines.",
  email: "contactus@technoshineph.com",
  phone: "+63 917 824 1220",
  addressLines: [
    "Unit 110 Union Square Condominium,",
    "15th Avenue, Cubao, Quezon City, Philippines",
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Union+Square+Condominium+15th+Avenue+Cubao+Quezon+City+Philippines&output=embed",
} as const;

export const aboutStats = [
  { target: 30, suffix: "+", label: "Years of Experience" },
  { target: 5000, suffix: "+", label: "Projects Completed" },
  { target: 100, suffix: "%", label: "Client Satisfaction" },
  { target: 3, suffix: "+", label: "Business Divisions" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
] as const;
