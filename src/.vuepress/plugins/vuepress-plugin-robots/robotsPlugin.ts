// @ts-ignore
import type { Plugin, PluginFunction } from 'vuepress/core'
import { generateRobotsTxt } from './generateRobotsTxt.js'
import type { RobotsPluginOptions } from './type'
import { PLUGIN_NAME, logger } from './utils/logger'

export const robotsPlugin =
  (options?: RobotsPluginOptions): PluginFunction =>
    (app) => {
      if (app.env.isDebug) logger.info('Options:', options)

      const plugin: Plugin = { name: PLUGIN_NAME }

      return {
        ...plugin,

        onGenerated: (): Promise<void> => generateRobotsTxt(app, options),
      }
    }