// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function getZoneUnPatchedApi<T = Function>(
  name: string,
  elem: HTMLElement
): T {
  return (elem as any)['__zone_symbol__' + name] !== undefined
    ? (elem as any)['__zone_symbol__' + name]
    : (elem as any)[name];
}
