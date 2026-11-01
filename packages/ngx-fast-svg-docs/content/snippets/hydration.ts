provideClientHydration(
  // The SVGs are already in <div id="svg-cache">; don't send them
  // a second time through the HTTP transfer cache.
  withHttpTransferCacheOptions({
    filter: (req) => !req.url.includes('svg-icons/'),
  })
);
