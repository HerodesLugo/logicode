type WorkflowStep = {
  number: number;
  title: string;
  description: string;
};

type Metric = {
  value: string;
  label: string;
  description: string;
};

const steps: WorkflowStep[] = [
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

const metrics: Metric[] = [
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

export function WorkflowSection() {
  return (
    <section className="w-full bg-brand-light-bg py-20 lg:py-[84px]">
      <div className="section-container flex flex-col gap-10">
        {/* ── Section header ──────────────────────────────── */}
        <div className="flex flex-col gap-4 max-w-[760px]">
          <span className="text-accent text-sm font-medium">
            Cybersecurity Workflow
          </span>
          <h2 className="text-heading text-3xl lg:text-[32px] font-bold">
            From threat intel to incident resolution.
          </h2>
          <p className="text-body text-sm leading-relaxed max-w-[740px]">
            Cyberscout streamlines complex investigations into repeatable
            processes that align teams, maintain analytical rigor, and
            accelerate incident response.
          </p>
        </div>

        {/* ── Two-column layout ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left card: 4-step process */}
          <div className="bg-card-bg rounded-[20px] p-8 flex flex-col gap-[60px]">
            {/* Card header */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-xl text-accent">
                Threat landscape assessment
              </h3>
              <p className="text-body-muted text-xs">
                Vulnerability prioritization and mitigation
              </p>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="grid grid-cols-[64px_1fr] gap-[18px]">
                  {/* Number badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-[20px] bg-tag-bg flex items-center justify-center">
                    <span className="text-accent text-2xl font-normal">
                      {step.number}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="text-heading text-lg font-bold">
                      {step.title}
                    </span>
                    <p className="text-body text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card: metrics */}
          <div className="bg-card-bg rounded-[20px] p-8 flex flex-col justify-between gap-8">
            {/* Card header */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-xl text-accent">
                Operational impact
              </h3>
              <p className="text-body-muted text-xs leading-relaxed">
                Built for organizations that require clarity under pressure:
                SOC teams, incident responders, threat hunters, and security
                analysts.
              </p>
            </div>

            {/* Metric rows */}
            <div className="flex flex-col gap-8">
              {metrics.map((metric) => (
                <div key={metric.value} className="flex flex-col gap-1">
                  <span className="text-accent text-5xl font-normal leading-none">
                    {metric.value}
                  </span>
                  <span className="font-display font-semibold text-sm text-heading mt-2">
                    {metric.label}
                  </span>
                  <p className="text-body text-xs leading-relaxed max-w-[520px]">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
