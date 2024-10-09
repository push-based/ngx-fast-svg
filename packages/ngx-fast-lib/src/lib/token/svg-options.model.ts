import { Observable } from 'rxjs';

export type SvgOptions = {
  url: (name: string) => string | Observable<string>;
  defaultSize?: string;
  suspenseSvgString?: string;
};
