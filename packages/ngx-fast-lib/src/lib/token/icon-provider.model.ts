import { Observable } from 'rxjs';

export type IconProvider = {
  id: string;
  defaultSize: number;
  url: (name: string) => string;
  load: (url: string) => Observable<string>;
  sanatize?: (svgString: string) => string;
};
