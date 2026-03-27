import {
  IncidentsIcon,
  NoticesIcon,
  SolutionsIcon,
  ReportsIcon,
  GuidesIcon,
  NationalSocIcon,
  TrainingIcon,
} from "@/components/icons";
import type { ServiceItem } from "./types";

export const services: ServiceItem[] = [
  { name: "Incidents",             Icon: IncidentsIcon   },
  { name: "Notices\nand Alerts",   Icon: NoticesIcon     },
  { name: "Solutions",             Icon: SolutionsIcon   },
  { name: "Reports",               Icon: ReportsIcon     },
  { name: "Guides",                Icon: GuidesIcon      },
  { name: "National SOC\nNetwork", Icon: NationalSocIcon },
  { name: "Training",              Icon: TrainingIcon    },
];
