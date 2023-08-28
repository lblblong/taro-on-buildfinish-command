import type { IPluginContext } from '@tarojs/service';
interface IPluginOpts {
    onBuildStart?: string[];
    modifyWebpackChain?: string[];
    modifyBuildAssets?: string[];
    onBuildFinish?: string[];
    onBuildComplete?: string[];
}
/**
 * 编译过程扩展
 */
declare const _default: (ctx: IPluginContext, pluginOpts: IPluginOpts) => void;
export default _default;
