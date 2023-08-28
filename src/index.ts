import { processTypeEnum } from '@tarojs/helper'
import type { IPluginContext } from '@tarojs/service'
import { execSync } from 'child_process'

interface IPluginOpts {
  onBuildStart?: string[]
  modifyWebpackChain?: string[]
  modifyBuildAssets?: string[]
  onBuildFinish?: string[]
  onBuildComplete?: string[]
}

/**
 * 编译过程扩展
 */
export default (ctx: IPluginContext, pluginOpts: IPluginOpts) => {
  const keys = [
    'onBuildStart',
    'modifyWebpackChain',
    'modifyBuildAssets',
    'onBuildFinish',
    'onBuildComplete',
  ]

  for (const key of keys) {
    const commands = pluginOpts[key]
    if (commands && Array.isArray(commands) && commands.length > 0) {
      ctx[key](() => {
        for (const command of commands) {
          ctx.helper.printLog(processTypeEnum.START, command)
          execSync(command)
        }
      })
    }
  }
}

