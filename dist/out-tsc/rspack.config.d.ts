import { NxAppRspackPlugin } from '@nx/rspack/app-plugin.js';
import { VueLoaderPlugin } from 'vue-loader';
import { NxModuleFederationPlugin, NxModuleFederationDevServerPlugin } from '@nx/module-federation/rspack.js';
declare const _default: {
    entry: {
        main: string;
    };
    output: {
        path: string;
        publicPath: string;
    };
    devServer: {
        port: number;
        headers: {
            'Access-Control-Allow-Origin': string;
        };
        historyApiFallback: {
            index: string;
            disableDotRule: boolean;
            htmlAcceptHeaders: string[];
        };
    };
    resolve: {
        extensions: string[];
    };
    module: {
        rules: ({
            test: RegExp;
            loader: string;
            options: {
                compilerOptions: {
                    isCustomElement: (tag: string) => boolean;
                };
            };
            use?: undefined;
            exclude?: undefined;
        } | {
            test: RegExp;
            use: string[];
            loader?: undefined;
            options?: undefined;
            exclude?: undefined;
        } | {
            test: RegExp;
            exclude: RegExp;
            use: {
                loader: string;
                options: {
                    jsc: {
                        parser: {
                            syntax: string;
                        };
                    };
                };
            };
            loader?: undefined;
            options?: undefined;
        })[];
    };
    plugins: (VueLoaderPlugin | NxAppRspackPlugin | NxModuleFederationPlugin | NxModuleFederationDevServerPlugin)[];
};
export default _default;
//# sourceMappingURL=rspack.config.d.ts.map