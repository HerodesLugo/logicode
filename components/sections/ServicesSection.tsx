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
  darkIcon: ComponentType<SvgIconProps>;
  LightIcon: ComponentType<SvgIconProps>;
}[] = [
  { name: "Incidents", darkIcon: IncidentsIcon, LightIcon: IncidentsIcon },
  {
    name: "Notices\nand Alerts",
    darkIcon: NoticesIcon,
    LightIcon: NoticesIcon,
  },
  { name: "Solutions", darkIcon: SolutionsIcon, LightIcon: SolutionsIcon },
  { name: "Reports", darkIcon: ReportsIcon, LightIcon: ReportsIcon },
  { name: "Guides", darkIcon: GuidesIcon, LightIcon: GuidesIcon },
  {
    name: "National SOC\nNetwork",
    darkIcon: NationalSocIcon,
    LightIcon: NationalSocIcon,
  },
  { name: "Training", darkIcon: TrainingIcon, LightIcon: TrainingIcon },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-brand-light-bg py-6 lg:py-10">
      <div className="section-container">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-6 pb-6 pt-2 sm:grid sm:grid-cols-4 md:grid-cols-7 sm:overflow-visible sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 sm:mx-0 sm:px-0">
          {services.map((svc) => (
            <button
              key={svc.name}
              className="snap-center shrink-0 w-[150px] sm:w-auto bg-card-bg dark:bg-[linear-gradient(221deg,#263f64_8%,#0d1521_92%)] rounded-[20px] p-6 lg:p-7 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Light mode: icon component */}
              <svc.LightIcon className="w-[70px] h-[70px] text-brand dark:hidden" />
              {/* Dark mode: Figma asset icon */}
              <svc.LightIcon className="w-[70px] h-[70px] text-brand dark:hidden" />
              <svc.darkIcon className="hidden dark:block w-[70px] h-[70px] object-contain" />

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
