import {
  PARTNER_LOGO_1,
  PARTNER_LOGO_CSIRT,
  PARTNER_LOGO_FIRST,
  PARTNER_LOGO_TF_CSIRT,
  PARTNER_LOGO_5,
  PARTNER_LOGO_RED_SOC,
  PARTNER_LOGO_EGC,
} from "@/lib/assets";
import type { PartnerLogo } from "./types";

export const partnerLogos: PartnerLogo[] = [
  { src: PARTNER_LOGO_1,        alt: "Partner 1",           width: 82  },
  { src: PARTNER_LOGO_CSIRT,    alt: "CSIRT.es",            width: 82  },
  { src: PARTNER_LOGO_FIRST,    alt: "FIRST",               width: 82  },
  { src: PARTNER_LOGO_TF_CSIRT, alt: "TF-CSIRT",           width: 82  },
  { src: PARTNER_LOGO_5,        alt: "Partner 5",           width: 82  },
  { src: PARTNER_LOGO_RED_SOC,  alt: "Red Nacional de SOC", width: 82  },
  { src: PARTNER_LOGO_EGC,      alt: "EGC group",           width: 169 },
];
