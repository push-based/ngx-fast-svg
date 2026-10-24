@Injectable()
export class HttpSvgLoadStrategy implements SvgLoadStrategy {
  private readonly http = inject(HttpClient);

  config(url: string) {
    return of(url);
  }

  load(url$: Observable<string>) {
    return url$.pipe(
      switchMap((url) => this.http.get(url, { responseType: 'text' }))
    );
  }
}

export const config = mergeApplicationConfig(appConfig, {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideFastSVG({
      url: (name) => `assets/svg-icons/${name}.svg`,
      svgLoadStrategy: HttpSvgLoadStrategy,
    }),
  ],
});
