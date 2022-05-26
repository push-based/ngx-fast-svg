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

| Library          | SSR        | Lazy loading     | Hydration | Reusability of SVG DOM | Optimized render performance | Size     |
| ---------------- | ---------- | ---------------- | --------- | ---------------------- | ---------------------------- | -------- |
| ngx-fast-svg     | `easy`     | browser natively | ✔️        | ✔️                     | ✔️                           | 1.52 KB  |
| font-awesome     | `hard`     | ❌               | ✔️        | ✔️                     | ❌                           | 64.75 KB |
| ant              | `moderate` | ❌               | ✔️        | ✔️                     | ❌                           | 24.38 KB |
| material         | `easy`     | ❌               | ✔️        | ✔️                     | ❌                           | 16.92 KB |
| angular-svg-icon | `moderate` | ❌               | ✔️        | ✔️                     | ❌                           | 1.54 KB  |
| ionic            | `moderate` | ❌               | ✔️        | ✔️                     | ✔️                           | 1.44 KB  |

**SSR**
Server Side Rendering is working. The depending on how easy it is to set it up we distinguish between `easy`, `moderate`, `hard`.

**Lazy loading**
We refer to lazy loading as on demand loading of SVG files based on their visibility in the viewport.

**Hydration**
Is the process of taking over the SSR HTML and state of the app on the client side.
This can happen in a destructive way (deleting all present HTML and regenerate it from JS) on in a non-destructive way (reusing the existing DOM).

**Reusability of SVG DOM**
Reusability means that we maintain the content of an SVG, meaning its inner DOM structure `g`, `path` or other tags in one place and reuse them in many different places.

**Optimized render performance**
To display (render) SVGs the browser takes time. We can reduce that time by adding a couple of improvements.

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
