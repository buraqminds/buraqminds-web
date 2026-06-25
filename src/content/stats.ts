export type StatItem = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
};

export const stats: StatItem[] = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Client Rating" },
];
