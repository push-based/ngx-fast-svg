@Injectable()
export class LazyConfigSvgLoadStrategy extends SvgLoadStrategyImpl {
  private readonly runtimeConfig = inject(RuntimeConfigService);

  override config(url: string): Observable<string> {
    // Emits once the runtime config has loaded; icons show the
    // suspense placeholder until then.
    return this.runtimeConfig.assetBase$.pipe(
      take(1),
      map((base) => `${base}/${url}`)
    );
  }
}
