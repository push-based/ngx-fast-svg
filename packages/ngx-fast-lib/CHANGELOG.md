# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.5.1](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.5.0...ngx-fast-lib-0.5.1) (2023-11-21)


### Bug Fixes

* update configs for v17 ([9254064](https://github.com/push-based/ngx-fast-svg/commit/9254064470daff5b93dbd829f126013b8ec370cd))
* upgrade dependencies for angular v17 compatibility ([2668d5a](https://github.com/push-based/ngx-fast-svg/commit/2668d5aaf742a53e4f6ced9ae1ce0f6f2ca4b505))



# [0.5.0](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.4.1...ngx-fast-lib-0.5.0) (2023-09-20)


### Features

* deprecate FastSvgModule in favor of provideFastSVG provider function ([fe7cf06](https://github.com/push-based/ngx-fast-svg/commit/fe7cf06fac771a3a723a912f86c90359eed33a92))
* make SvgLoadStrategyImpl a simple class and extend from SvgLoadStrategy for better typechecking ([73a1b89](https://github.com/push-based/ngx-fast-svg/commit/73a1b891adda9b4435aa1e3f2c3054d0c6580985))
* make SvgOptionsToken provided in root with default value ([db1474a](https://github.com/push-based/ngx-fast-svg/commit/db1474addc557b4fc78f598beeb9455b9d6d36b5))
* make SvgRegistry provided in root, use inject function instead of @Inject and @Optional decorators, initialize SvgLoadStrategyImpl as the default strategy, update old subscribe pattern ([7421906](https://github.com/push-based/ngx-fast-svg/commit/7421906ffbe838de0f187b6922fe1676a0faa457))
* simplify provideFastSVG by removing classes that are provided in root by default ([0f88208](https://github.com/push-based/ngx-fast-svg/commit/0f882084a0d8a674f825836b9766144eb6e288ba))



## [0.4.1](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.4.0...ngx-fast-lib-0.4.1) (2023-08-30)


### Bug Fixes

* convert provider function to not use makeEnvironmentProviders ([656eac3](https://github.com/push-based/ngx-fast-svg/commit/656eac3ffab669d479f47b21e2a7138a1bd7df15))



# [0.4.0](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.3.1...ngx-fast-lib-0.4.0) (2023-07-18)


### Features

* update versions ([a6d4f3e](https://github.com/push-based/ngx-fast-svg/commit/a6d4f3e179f8e211fbaebd7e3efee18aa59b048e))



## [0.3.1](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.3.0...ngx-fast-lib-0.3.1) (2023-05-27)



# [0.3.0](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.2.5...ngx-fast-lib-0.3.0) (2023-04-29)


### Features

* modernise fast svg library by using inject, standalone and provide function ([319f45d](https://github.com/push-based/ngx-fast-svg/commit/319f45dd8a5dac255e4825b62b2b5a1f6b5e22d1))



## [0.2.5](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.2.4...ngx-fast-lib-0.2.5) (2023-04-17)



## [0.2.4](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.2.3...ngx-fast-lib-0.2.4) (2023-04-17)



## [0.2.3](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.2.2...ngx-fast-lib-0.2.3) (2023-01-09)



## [0.2.3](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.2.2...ngx-fast-lib-0.2.3) (2023-01-09)



## [0.2.3](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.2.2...ngx-fast-lib-0.2.3) (2023-01-09)



## [0.2.1](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.2.0...ngx-fast-lib-0.2.1) (2022-12-02)


### Bug Fixes

* restore package json (nx issue [#10626](https://github.com/push-based/ngx-fast-svg/issues/10626)) ([de8299a](https://github.com/push-based/ngx-fast-svg/commit/de8299a8beccf167fc33c23b2c653f62fc48ea39))



# [0.2.0](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.1.4...ngx-fast-lib-0.2.0) (2022-06-17)


### Features

* inherit viewBox from original svg ([65cd781](https://github.com/push-based/ngx-fast-svg/commit/65cd78117b456c0e95c31d620ce1c1c1b09b8eca))



## [0.1.4](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.1.3...ngx-fast-lib-0.1.4) (2022-05-26)


### Bug Fixes

* fix comments ([3e7b1ee](https://github.com/push-based/ngx-fast-svg/commit/3e7b1ee8c26f0026e7e6ddb2f71be60e9f45888e))



## [0.1.3](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.1.2...ngx-fast-lib-0.1.3) (2022-05-26)


### Bug Fixes

* use proper readme ([252312d](https://github.com/push-based/ngx-fast-svg/commit/252312d7e0d75741fa65454cbf890cfd771d5470))



## [0.1.2](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.1.1...ngx-fast-lib-0.1.2) (2022-05-26)


### Bug Fixes

* fix comments ([17c0973](https://github.com/push-based/ngx-fast-svg/commit/17c09732bae85a734842456a118eb034829e1f46))



## [0.1.1](https://github.com/push-based/ngx-fast-svg/compare/ngx-fast-lib-0.1.0...ngx-fast-lib-0.1.1) (2022-05-26)


### Bug Fixes

* use proper project in postTargets ([50e73d1](https://github.com/push-based/ngx-fast-svg/commit/50e73d15a2ddf13cbfa21b1c43fac19be52b1917))



# 0.1.0 (2022-05-26)


### Bug Fixes

* fix ssr strategy and cache ([e64503d](https://github.com/push-based/ngx-fast-svg/commit/e64503d2906b798a9003e1394ce2da72996eaf15))
* improve typings ([c95f2e3](https://github.com/push-based/ngx-fast-svg/commit/c95f2e37f296d20e213a9c7b56a641d90c2fb457))
* improve typings ([35c2298](https://github.com/push-based/ngx-fast-svg/commit/35c2298c7f844f4d4f5a13d6d8a432987e123014))
* make ssr serving work ([7f6b0ee](https://github.com/push-based/ngx-fast-svg/commit/7f6b0ee4d2653ff83fbb54893341ee6466c464cf))
* remove template tag ([c395a3b](https://github.com/push-based/ngx-fast-svg/commit/c395a3b44bb5779a8473ce774e8d6c759b6d21ea))
* update readme comparison tables ([27de4f9](https://github.com/push-based/ngx-fast-svg/commit/27de4f9e010c11c01fcf628a57b8704394c48fad))


### Features

* setup release ([22bfafe](https://github.com/push-based/ngx-fast-svg/commit/22bfafe15850c8d1f0f932b60a33d4390dc60a9d))
* setup release ([4573a34](https://github.com/push-based/ngx-fast-svg/commit/4573a3440a9aa2ee0392be94409738ccb5db863b))
* use template tag to store cache ([78d1834](https://github.com/push-based/ngx-fast-svg/commit/78d1834d3932ec20fb92f0de9e4e59ffaf63d2b2))
