const fs = require('fs');
const path = require('path');

const dir = './packages/ngx-fast-icon-demo/src/assets/svg-icons';
const c = fs.readdirSync(dir);

c.forEach(name => {
  const d = path.join(dir, name);
  let svgString = fs.readFileSync(d).toString();
  svgString = svgString.replace(/<\?xml([^>]+)>/i, '');
  svgString = svgString.replace(/<!--([^>]+)-->/ig, '');
  svgString = svgString.replace(/inkscape:connector-curvature="0"/ig, '');
  svgString.trim();
  svgString.replace(/(\r\n|\n|\r)/gm, "");

  fs.writeFileSync(d, svgString)
});
