# types-serviceworker
Type definitions for ServiceWorker(and optionally Workbox)

### Install

```sh
yarn add -D https://github.com/shqld/types-serviceworker
```

### Usage

Use [Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html):

```ts
/// <reference types="node_modules/types-serviceworker" />
/// <reference types="node_modules/types-serviceworker/lib/workbox" />
```

Or if you write Service Worker scripts with a dedicated `tsconfig.json` for that, you also can do by simply adding:

```json
{
  "compilerOptions": {
    "types": [/* ...others */, "node_modules/types-serviceworker"],
    /* ... */
  }
  /* ... */
}
```

*NOTE: There are some caveats using `types` field. See [this](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for detail.*

> If types is specified, only packages listed will be included

### Credits

`types-serviceworker` partially uses 2 files(`src/webworkers.d.ts`, `src/workbox.d.ts`) respectively copied from

- [TypeScript/lib/lib.webworker.d.ts](https://github.com/Microsoft/TypeScript/blob/b8def16e92f609327971f07232757fa6c7d29a56/lib/lib.webworker.d.ts)
- [DefinitelyTyped/types/workbox-sw/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a1b863c97265b1dfb72922bf58a1a95656c2c97d/types/workbox-sw/index.d.ts)

and modifies them under the lincenses.
