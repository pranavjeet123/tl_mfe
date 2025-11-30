import { NxAppRspackPlugin } from '@nx/rspack/app-plugin.js';
import { VueLoaderPlugin } from 'vue-loader';
import {
  NxModuleFederationPlugin,
  NxModuleFederationDevServerPlugin,
} from '@nx/module-federation/rspack.js';
import { join } from 'path';

import config from './module-federation.config';

export default {
  entry: {
    main: join(__dirname, './src/main.ts'),
  },
  output: {
    path: join(__dirname, '../../dist/apps/vue-app'),
    publicPath: 'auto',
  },
  devServer: {
    port: 4203,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            isCustomElement: (tag: string) => tag.startsWith('custom-'),
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new NxAppRspackPlugin({
      tsConfig: './tsconfig.app.json',
      main: './src/main.ts',
      index: './src/index.html',
      baseHref: '/',
      assets: [],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxModuleFederationPlugin({ config }, { dts: false }),
    new NxModuleFederationDevServerPlugin({ config }),
  ],
};
