# ngx-fast-svg

---

#### Fast SVG's for Angular powered by browser native features with best performance practices and DX in mind

<!-- toc -->

    - [Fast SVG's for Angular powered by browser native features with best performance practices and DX in mind](#fast-svgs-for-angular-powered-by-browser-native-features-with-best-performance-practices-and-dx-in-mind)

<!-- tocstop -->

# Why another SVG lib for Angular?

Current implementations of SVG handling in the Browser lacks of awareness of performance.

There are several things not considered in most of the existing projects:

- SSR
- bundle size
- DOM size
- Lazy loading
- SVG structure reusability
- Initial rendering performance
- Runtime performance of updates

We will walk through all the different scenarious in detail later.
To get a quick overview we will list a comparison table:

| Library          | SSR | lazy loading      | Hydration | Reusability of SVG DOM | Optimized render performance | Size     |
| ---------------- | --- | ----------------- | --------- | ---------------------- | ---------------------------- | -------- |
| fast-svg         | ✔   | browser natively  | ✔         | ✔                      | ✔                            | 1.52 KB  |
| font-awesome     | ❌  | browser natively  | ✔         | ✔                      | ✔                            | 64.75 KB |
| ant              | ✔   | browser natively  | ✔         | ✔                      | ✔                            | 24.38 KB |
| material         | ✔   | browser natively  | ✔         | ✔                      | ✔                            | 16.92 KB |
| angular-svg-icon | ✔   | ❌                | ✔         | ✔                      | ✔                            | 1.54 KB  |
| ionic            | ✔   | viewport observer | ✔         | ✔                      | ✔                            | 1.44 KB  |

# Install

```bash
npm install @push-based/ngx-fast-svg --save
# or
yarn add @push-based/ngx-fast-svg
```

# Setup

**app.module.ts**

```typescript
// ...
import { FAST_SVG_PROVIDERS } from './ngx-fast-svg-ssr/movie.icon.provider';
import { FastSvgModule } from '@ngx-fast-icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FastSvgModule.forRoot({

    })
  ]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

```
