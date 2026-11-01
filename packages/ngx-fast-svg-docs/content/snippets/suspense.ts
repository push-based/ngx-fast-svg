export const suspenseSvg = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" opacity="0.45">
    <circle cx="12" cy="12" r="9" stroke-dasharray="4 4" />
  </svg>`;

provideFastSVG({
  url: (name) => `assets/svg-icons/${name}.svg`,
  suspenseSvgString: suspenseSvg,
});
