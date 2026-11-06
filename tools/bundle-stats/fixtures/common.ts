/**
 * What every fixture, including the baseline, bootstraps with.
 *
 * The measured number for a library is "fixture total JS minus baseline total
 * JS", so whatever sits in here is free for all six libraries. The router and
 * an HttpClient are in practically every Angular application, and they pull in
 * rxjs and @angular/common, so leaving them out would bill each library for
 * machinery its host app already ships. Keep this list boring: anything added
 * here shrinks every number in content/data/bundle-stats.json.
 */
import { Provider, EnvironmentProviders } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

export const COMMON_PROVIDERS: (Provider | EnvironmentProviders)[] = [
  provideRouter([]),
  provideHttpClient(),
];
