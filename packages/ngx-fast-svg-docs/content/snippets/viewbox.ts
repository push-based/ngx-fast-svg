// SvgRegistry: the viewBox is read from the raw file once...
const viewBox = svgString.match(/viewBox="([^"]*)"/);

// ...and applied to every <fast-svg> that references the icon,
// falling back to `0 0 ${defaultSize} ${defaultSize}`.
svg.setAttribute('viewBox', viewBox?.[1] || defaultViewBox);
