export type SlideColors = {
  tagColor: string;
  tagBg: string;
  headingBoldColor: string;
  headingRegularColor: string;
  bodyColor: string;
  bg: string;
  gradientColor: string;
  primaryBtnBg: string;
  primaryBtnColor: string;
  secondaryBtnBg: string;
  secondaryBtnColor: string;
  dotActive: string;
  dotInactive: string;
};

export type Slide = {
  id: number;
  tag: string;
  headingRegular: string;
  headingBold: string;
  body: string;
  primaryBtn: string;
  secondaryBtn: string;
  image: string;
  /** Colors applied in light mode */
  lightColors: SlideColors;
  /** Colors applied in dark mode */
  darkColors: SlideColors;
};
