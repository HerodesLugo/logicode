import type { WorkflowStep, Metric } from "./types";

export const steps: WorkflowStep[] = [
  {
    number: 1,
    title: "Collect and structure",
    description:
      "Integrate endpoint data, network traffic, security logs, and cloud events, structuring them into a unified security data model.",
  },
  {
    number: 2,
    title: "Correlate and prioritize",
    description:
      "Use machine learning to correlate data, prioritize alerts, and identify potential threats based on risk scores and behavioral patterns.",
  },
  {
    number: 3,
    title: "Visualize attack vectors",
    description:
      "Visualize threat actor movements across systems to understand the scope of the incident and identify compromised assets.",
  },
  {
    number: 4,
    title: "Generate actionable reports",
    description:
      "Generate detailed reports with clear evidence, risk assessments, and recommended actions for remediation.",
  },
];

export const metrics: Metric[] = [
  {
    value: "5.2x",
    label: "Faster threat detection per incident",
    description:
      "Analysts identify and respond to threats more quickly by automating data correlation and visualization.",
  },
  {
    value: "31%",
    label: "Decrease in alert fatigue",
    description:
      "Machine learning algorithms filter out false positives, allowing analysts to focus on genuine threats and reduce alert fatigue.",
  },
  {
    value: "24/7",
    label: "Continuous monitoring",
    description:
      "Real-time monitoring and analysis ensure continuous protection, enabling rapid response to emerging threats and minimizing potential damage.",
  },
];
