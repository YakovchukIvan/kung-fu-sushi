const BREAKPOINTS = {
  MOBILE: 540,
  TABLET: 840,
};

export const getSlidesPerView = (): number => {
  const width = window.innerWidth;
  if (width < BREAKPOINTS.MOBILE) return 2;
  if (width < BREAKPOINTS.TABLET) return 3;
  return 4;
};
