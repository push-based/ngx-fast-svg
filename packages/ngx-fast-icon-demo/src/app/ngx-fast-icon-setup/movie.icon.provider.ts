import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IconProvider, IconProviderToken} from '@ngx-fast-icon';

export const FAST_ICON_PROVIDERS = [
  {
    provide: IconProviderToken,
    useFactory: (http: HttpClient): IconProvider => ({
      id: '1',
      defaultSize: 24,
      url: (name: string): string => {
        return `assets/svg-icons/${name}.svg`;
      },
      sanatize: (svgString: string): string => {
        console.log('svgString1', svgString);
        svgString = svgString.replace(/<\?xml([^>]+)>/i, '');
        svgString = svgString.replace(/<!--([^>]+)-->/ig, '');
        svgString = svgString.replace(/inkscape:connector-curvature="0"/ig, '');
        svgString.trim();
        console.log('svgString1',svgString);

        return svgString;
      },
      load: (url: string): Observable<string> =>
        http.get(url, { responseType: 'text' }),
    }),
    deps: [HttpClient],
  },
];
