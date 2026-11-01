@Injectable()
export class DemoSvgLoadStrategy extends SvgLoadStrategyImpl {
  private readonly settings = inject(DemoSettings);
  private readonly basePath$ = toObservable(this.settings.basePath);

  // Resolve the final URL. Async, from a signal.
  override config(url: string): Observable<string> {
    return this.basePath$.pipe(
      take(1),
      map((base) => `${base}/${url}`)
    );
  }

  // Fetch the markup. The default fetch, plus a delay.
  override load(url$: Observable<string>): Observable<string> {
    return super.load(url$).pipe(delay(this.settings.latencyMs()));
  }
}

provideFastSVG({
  url: (name) => `${name}.svg`, // config() adds the folder
  svgLoadStrategy: DemoSvgLoadStrategy,
});
