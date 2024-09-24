export type CheckResult = {
  ip_address: string;
  result_color: "green" | "red" | "yellow" | "gray";
  result_text: "low_risk" | "high_risk" | "medium_risk" | "unknown_risk";
};
