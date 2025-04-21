import {App} from 'vuepress/core'
import {fs} from 'vuepress/utils'
import {logger} from './utils/logger'
import robotstxt from 'generate-robotstxt'
import {RobotsPluginOptions} from "./type";

export const generateRobotsTxt = async (
  app: App,
  options: RobotsPluginOptions,
): Promise<void> => {

  const {succeed, fail} = logger.load('Generating robots.txt')

  const {
    allowAll,
    disallowAll,
    host,
    sitemap = '//sitemap.xml',
    robotsPath = 'robots.txt',
    policies
  } = options;

  // Get all policies togeter; If none provided, it will allow all except path: /admin
  let policyArray = [];

  const disallowAllPolicy = {
    userAgent: "*",
    disallow: "/"
  }
  const allowAllPolicy = {
    userAgent: "*",
    allow: "/"
  }

  if (disallowAll) {
    policyArray.push(disallowAllPolicy)
  } else {
    if (allowAll) {
      policyArray.push(allowAllPolicy);
    } else {
      // allowAll and disallowAll not provided, then use policies
      if (typeof policies !== 'undefined' && policies.length > 0) {
        policies.forEach(policy => {
          policyArray.push(policy);
        });
      } else {
        policyArray.push(allowAllPolicy)
      }
    }
  }

  robotstxt({
    policy: policyArray, sitemap: host + sitemap.replace(/\/\//g, "/"), host: host
  }).then(content => {
    // All good, save the file
    fs.writeFileSync(app.dir.dest(robotsPath), content)
    return content;
  }).catch(error => {
    // Something wrong
    throw error;
  });

  succeed()
}