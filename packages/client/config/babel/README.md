# @client/config-babel

Shared Babel configuration for client projects.

## Philosophy

Babel is a _transpiler_–not a bundler–which means that the transitive consumers of this package (i.e. `/apps`) must configure their own bundler for features like tree-shaking to work.

`cjs` and `esm` are two different formats, and this package aims to support `esm` for consistency across packages in this monorepo.

## Installation

```bash
pnpm add --save-dev '@client/config-babel@workspace:*'
```

## Usage

### Using an object

```js
import { createBabelConfig } from '@client/config-babel';

const babelConfigOverrides = {
  // ...override config here
};

export default createBabelConfig(babelConfigOverrides);
```

### Using a function

```js
import { createBabelConfig } from '@client/config-babel';

function babelConfigOverrides(api) {
  return {
    // ...custom config here
  };
}

export default createBabelConfig(babelConfigOverrides);
```
