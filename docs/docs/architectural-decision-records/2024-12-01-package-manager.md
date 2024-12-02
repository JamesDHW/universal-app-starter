# ADR(2024-12-01): Package Manager (pnpm)

## ⚠️ Problem

Managing a monorepo efficiently with NX requires a performant and reliable package manager. Currently, there are three primary options: `npm`, `yarn`, and `pnpm`. Each comes with trade-offs in terms of speed, disk space usage, and compatibility with NX.

## 💯 Critical Performances

- **Performance 1:** Speed of dependency installation.
- **Performance 2:** Disk space optimization (handling duplicate dependencies).
- **Performance 3:** Compatibility and features specific to monorepo workflows.

## ⚙️ Options

- **Option 1:** Use `npm`.
- **Option 2:** Use `yarn`.
- **Option 3:** Use `pnpm`.

## ✅ Evaluation

|                            | **Option 1: npm**                                               | **Option 2: yarn**                                          | **Option 3: pnpm**                                                                   |
| -------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Critical Performance 1** | ❌ Slower dependency installations due to lack of optimization. | ⚠️ Moderate performance with some optimizations.            | ✅ Fastest installation due to efficient symlinking and caching.                     |
| **Critical Performance 2** | ❌ Higher disk space usage due to duplication of dependencies.  | ⚠️ Better than npm but not as efficient as pnpm.            | ✅ Optimized disk space usage with content-addressable storage.                      |
| **Critical Performance 3** | ✅ Full compatibility with NX but lacks advanced features.      | ✅ Compatible with NX and provides some advanced workflows. | ✅ Best compatibility with NX and advanced features like workspace protocol support. |

## 🌳 Decision

Use [pnpm](https://pnpm.io/) as the package manager for the NX monorepo.

## 🚨 Consequences

- **Positive:**
  - Significant improvement in installation speed.
  - Reduced disk space usage across the monorepo.
  - Advanced monorepo-specific features, such as workspace protocol, enhance development workflows.
- **Negative:**
  - Team members must learn `pnpm` commands if unfamiliar.
  - Additional setup required to migrate from `npm` or `yarn` to `pnpm`.
  - Compatibility issues may arise with legacy tooling that assumes `npm` or `yarn`.
