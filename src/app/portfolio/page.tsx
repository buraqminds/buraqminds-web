import { projects } from "@/content/projects";
import PortfolioClient from "./PortfolioClient";

export function generateMetadata() {
  return {
    title: "Portfolio",
    description:
      "Explore Buraq Minds case studies across AI, cybersecurity, cloud, mobile, blockchain, and automation.",
  };
}

export default function PortfolioPage() {
  return <PortfolioClient projects={projects} />;
}
