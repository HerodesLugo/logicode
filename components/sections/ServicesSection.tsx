import {
  IncidentsIcon,
  NoticesIcon,
  SolutionsIcon,
  ReportsIcon,
  GuidesIcon,
  NationalSocIcon,
  TrainingIcon,
} from "@/components/icons";
import type { ComponentProps, ComponentType } from "react";

type SvgIconProps = ComponentProps<"svg">;

const services: {
  name: string;
  Icon: ComponentType<SvgIconProps>;
}[] = [
  { name: "Incidents", Icon: IncidentsIcon },
  { name: "Notices\nand Alerts", Icon: NoticesIcon },
  { name: "Solutions", Icon: SolutionsIcon },
  { name: "Reports", Icon: ReportsIcon },
  { name: "Guides", Icon: GuidesIcon },
  { name: "National SOC\nNetwork", Icon: NationalSocIcon },
  { name: "Training", Icon: TrainingIcon },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-brand-light-bg py-6 lg:py-10">
      <div className="section-container">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-6 pb-6 pt-2 sm:grid sm:grid-cols-4 md:grid-cols-7 sm:overflow-visible sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 sm:mx-0 sm:px-0">
          {services.map((svc) => (
            <button
              key={svc.name}
              className="snap-center shrink-0 w-[150px] sm:w-auto bg-card-bg dark:bg-[linear-gradient(221deg,#263f64_8%,#0d1521_92%)] rounded-[20px] p-6 lg:p-7 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <svc.Icon className="w-[70px] h-[70px] text-brand dark:text-green-400 transition-colors" />

              <span className="text-heading text-sm text-center whitespace-pre-line leading-tight">
                {svc.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
