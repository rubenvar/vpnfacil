import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import glob from 'rollup-plugin-glob';
import config from 'sapper/config/rollup.js';
import markdown from './src/utils/markdown';
import pkg from './package.json';

require('dotenv').config();

// to make .env variables work, first get the here from the .env file
const mode = process.env.NODE_ENV;
const endpoint = JSON.stringify(process.env.ENDPOINT);
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => {
  // only for @sapper
  const isCircularWarning =
    warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message);
  // avoid a11y on:blur error messages
  const isOnBlurInsteadOfOnChangeWarning =
    warning.code === 'PLUGIN_WARNING' &&
    warning.pluginCode &&
    warning.pluginCode === 'a11y-no-onchange';

  return (
    isCircularWarning || isOnBlurInsteadOfOnChangeWarning || onwarn(warning)
  );
};

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      // use the replace plugin to find calls to process.env and replace them with the variable (both here and in server below)
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.ENDPOINT': endpoint,
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      glob(),
      markdown(),
      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.ENDPOINT': endpoint,
      }),
      svelte({
        generate: 'ssr',
        dev,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
      glob(),
      markdown(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives'))
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.ENDPOINT': endpoint,
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};
