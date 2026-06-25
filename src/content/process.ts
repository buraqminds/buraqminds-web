export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Diagnose",
    description:
      "We map business goals, technical constraints, risk exposure, and launch requirements before writing code.",
  },
  {
    title: "Architect",
    description:
      "We define the product architecture, data model, security boundaries, and delivery plan with clear milestones.",
  },
  {
    title: "Build",
    description:
      "Our team ships clean, tested software through focused sprints, review cycles, and transparent communication.",
  },
  {
    title: "Scale",
    description:
      "We harden, monitor, automate, and extend the platform so it stays reliable as demand increases.",
  },
];
