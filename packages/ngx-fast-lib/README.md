# ngx-fast-lib

---

#### Fast icons powered by browser native features with performance in mind

# Why another icon lib?

svg icons are bad for perf

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
import { FAST_ICON_PROVIDERS } from './ngx-fast-icon-ssr/movie.icon.provider';
import { FastIconModule } from '@ngx-fast-icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FastIconModule.forRoot({

    })
  ]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

```
