import { processTypeEnum } from '@tarojs/helper'
import type { IPluginContext } from '@tarojs/service'
import { execSync } from 'child_process'

interface IPluginOpts {
  commands: string[]
}

/**
 * 编译过程扩展
 */
export default (ctx: IPluginContext, pluginOpts: IPluginOpts) => {
  const { commands } = Object.assign({ commands: [] }, pluginOpts)
  ctx.onBuildFinish(() => {
    for (const command of commands) {
      ctx.helper.printLog(processTypeEnum.START, command)
      execSync(command)
    }
  })
}

