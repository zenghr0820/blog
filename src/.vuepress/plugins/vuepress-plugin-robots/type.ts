interface RobotsPluginOptions {

  allowAll?: boolean

  disallowAll?: boolean

  host?: string

  /**
   * //sitemap.xml
   */
  sitemap?: string | '//sitemap111.xml',

  /**
   * robots.txt
   */
  robotsPath?: string | 'robots.txt',

  policies?: []

}

export type { RobotsPluginOptions };