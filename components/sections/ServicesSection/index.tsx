import { FadeUp } from "@/components/ui/FadeUp";
import { services } from "./data";

export function ServicesSection() {
  return (
    <section className="w-full bg-brand-light-bg py-6 lg:py-10">
      <FadeUp>
        <div className="section-container">
        <div className="flex overflow-x-auto snap-x  snap-mandatory gap-4 lg:gap-6 pb-6 pt-2 sm:grid sm:grid-cols-4 lg:grid-cols-7 sm:overflow-visible sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 sm:mx-0 sm:px-0">
          {services.map((svc) => (
            <button
              key={svc.name}
              className="snap-center shrink-0 w-[150px] sm:w-auto bg-card-bg dark:bg-[linear-gradient(221deg,#263f64_8%,#0d1521_92%)] rounded-[20px] p-6 lg:p-7 flex flex-col items-center justify-center gap-4 hover:shadow-md cursor-pointer group hover:bg-green-400 hover:text-gray-950 dark:hover:bg-[linear-gradient(33deg,#0D1521_15.92%,#224673_84.97%,#428558_95.71%)] dark:hover:text-white transition-all"
            >
              <svc.Icon className="w-[70px] h-[70px] text-brand dark:text-green-400 transition-colors group-hover:text-gray-950 dark:group-hover:text-green-400" />
              <span className="text-heading text-sm text-center whitespace-pre-line leading-tight">
                {svc.name}
              </span>
            </button>
          ))}
        </div>
        </div>
      </FadeUp>
    </section>
  );
}
