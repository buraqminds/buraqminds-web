export type SocialLinks = {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  location: string;
  social: SocialLinks;
  services: Service[];
};

export const siteConfig = {
  name: "Buraq Minds",
  tagline: "Intelligence. Security. Innovation.",
  description:
    "Buraq Minds designs smart, secure, and scalable software solutions that redefine how businesses innovate, operate, and grow.",
  url: "https://buraqminds.com",
  email: "info@buraqminds.com",
  location: "Rawalpindi, Punjab, Pakistan",
  social: {
    facebook: "https://www.facebook.com/BuraqMinds.co/",
    instagram: "https://www.instagram.com/buraqminds/",
    linkedin: "https://www.linkedin.com/company/buraqminds",
    twitter: "https://x.com/BuraqMinds",
  },
  services: [
    {
      slug: "saas-development",
      title: "SaaS Development",
      shortDesc:
        "End-to-end SaaS products built for scale, subscription growth, and long-term maintainability.",
    },
    {
      slug: "cybersecurity-vapt",
      title: "Cybersecurity & VAPT",
      shortDesc:
        "Proactive security assessments and vulnerability testing to protect your systems and data.",
    },
    {
      slug: "cloud-devops",
      title: "Cloud & DevOps",
      shortDesc:
        "Cloud-native infrastructure, CI/CD pipelines, and DevOps practices for reliable delivery.",
    },
    {
      slug: "ai-machine-learning",
      title: "AI & Machine Learning",
      shortDesc:
        "Intelligent automation and ML solutions that turn data into actionable business insights.",
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      shortDesc:
        "Native and cross-platform mobile apps with polished UX and performance at the core.",
    },
    {
      slug: "blockchain-solutions",
      title: "Blockchain Solutions",
      shortDesc:
        "Secure decentralized applications, smart contracts, and Web3 integrations for modern businesses.",
    },
    {
      slug: "qa-automation",
      title: "QA Automation",
      shortDesc:
        "Automated testing strategies that improve quality, speed up releases, and reduce regressions.",
    },
    {
      slug: "web-development",
      title: "Web Development",
      shortDesc:
        "Fast, responsive, and SEO-friendly web applications tailored to your brand and users.",
    },
    {
      slug: "staff-augmentation",
      title: "Staff Augmentation",
      shortDesc:
        "Skilled engineers embedded in your team to accelerate delivery without long hiring cycles.",
    },
  ],
} satisfies SiteConfig;
