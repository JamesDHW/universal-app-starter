import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const babelMerge = require('babel-merge');

const plugins = [
  [
    // Resolves module aliases
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@ui': './src',
      },
    },
  ],
  [
    // Transforms async/await to ES5 and reduces duplicate code in output
    require.resolve('@babel/plugin-transform-runtime'),
    {
      useESModules: true,
    },
  ],
];

const baseConfig = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { modules: false }], // Modern ESM JavaScript
      [
        '@babel/preset-react', // JSX
        {
          runtime: 'automatic', // For React 17 JSX Transform
        },
      ],
      '@babel/preset-typescript', // TypeScript
    ],
    plugins,
    /* 
    // uncomment to have different presets for esm and cjs (by setting NODE_ENV=esm|cjs)
    env: {
      // Runs when NODE_ENV is 'esm'
      esm: {
        presets: [
          '@babel/preset-env', // Modern ESM JavaScript
          '@babel/preset-react', // JSX
          '@babel/preset-typescript', // TypeScript
        ],
        plugins,
      },
    },
    */
  };
};

/**
 * Babel API object provided to Babel configuration functions.
 * @typedef {Object} BabelAPI
 * @property {function(boolean): void} cache - Enables caching of the Babel config. Accepts a boolean or a function returning a boolean.
 * @property {function(string): boolean} env - Retrieves the current BABEL_ENV or NODE_ENV. Accepts an environment string and returns a boolean.
 */

/**
 * Merge a custom Babel configuration with the shared base configuration.
 *
 * @param {Object|function(BabelAPI): Object} configOverrides -
 *   Custom Babel configuration to merge with the base config.
 *   Can be a plain object or a function receiving the Babel API and returning an object.
 * @returns {function(BabelAPI): Object} A function that returns the merged Babel configuration.
 *
 * @example
 * // Using an object
 * const config = mergeBabelConfig({
 *   plugins: ['babel-plugin-module-resolver'],
 * });
 *
 * @example
 * // Using a function
 * const config = mergeBabelConfig((api) => ({
 *   plugins: [api.env('production') && 'babel-plugin-transform-remove-console'].filter(Boolean),
 * }));
 */
export function createBabelConfig(configOverrides) {
  // Return a function for Babel to invoke
  return function (api) {
    const resolvedBaseConfig = baseConfig(api);

    // Resolve the custom config if it's a function
    const resolvedCustomConfig =
      typeof configOverrides === 'function'
        ? configOverrides(api)
        : configOverrides;

    // Merge and return the final config
    return babelMerge(resolvedBaseConfig, resolvedCustomConfig || {});
  };
}
