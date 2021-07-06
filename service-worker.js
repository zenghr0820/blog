/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f9036dccbc56939b57381ff9dbe9936"
  },
  {
    "url": "assets/css/0.styles.69fa2012.css",
    "revision": "083aa5e0f9205c0b31a7c515c154accb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4555b382.js",
    "revision": "88b8dc4ae90c76535d813eefb974c529"
  },
  {
    "url": "assets/js/11.6f614397.js",
    "revision": "4319bfcd53906958c04fb4a84e5d0a6d"
  },
  {
    "url": "assets/js/12.b1a9e309.js",
    "revision": "902425b9b5630abd027ac4c2801e0ed1"
  },
  {
    "url": "assets/js/13.4eac7d3e.js",
    "revision": "2d04d8b155f623470fd9b1d6de9711eb"
  },
  {
    "url": "assets/js/14.96d1426f.js",
    "revision": "fd9ece4c618feaf094d2bb1b7b8e8a92"
  },
  {
    "url": "assets/js/15.10e77c0a.js",
    "revision": "cd9e5f1a33268ec702bf182a078b6d2a"
  },
  {
    "url": "assets/js/16.172956eb.js",
    "revision": "cc22682c72f6fbc023fa00b2db24dd50"
  },
  {
    "url": "assets/js/17.feaa2d92.js",
    "revision": "38d058e48e8823c95222eb2a6fea7fa4"
  },
  {
    "url": "assets/js/18.bf00fdd2.js",
    "revision": "50334d5f6b384cd67527a70e6e8f9c02"
  },
  {
    "url": "assets/js/19.a15904c7.js",
    "revision": "1773aafa8101d0473a4127975327c645"
  },
  {
    "url": "assets/js/2.51a84784.js",
    "revision": "9d14fca6477be770513d05bc80f6bdd0"
  },
  {
    "url": "assets/js/20.cfcc1460.js",
    "revision": "4765013d39acda3da4d03d82fb796b58"
  },
  {
    "url": "assets/js/21.55cb0930.js",
    "revision": "a2f91141c5c0f87a3c316556c99b5e3d"
  },
  {
    "url": "assets/js/22.5292a74f.js",
    "revision": "daf89c7dca40592b729c306763eb2768"
  },
  {
    "url": "assets/js/23.ac9ca6dc.js",
    "revision": "22a1014618778753af144e4c62db6d00"
  },
  {
    "url": "assets/js/24.5f7073c2.js",
    "revision": "e4a6807316e27f4dbf821d08d0570482"
  },
  {
    "url": "assets/js/25.066182a4.js",
    "revision": "0b53d018db5c59498da9b2c5b00248d5"
  },
  {
    "url": "assets/js/26.b45da98e.js",
    "revision": "4e71e5415f3ebd247d5f1992129d939e"
  },
  {
    "url": "assets/js/27.95122562.js",
    "revision": "b401212e4db5d899ac3e46bfb3f7bc5b"
  },
  {
    "url": "assets/js/28.6f7dc373.js",
    "revision": "d248fe999787820e6b2b008f9d89b565"
  },
  {
    "url": "assets/js/29.a66cb8a4.js",
    "revision": "27da671f9f404617e0901258d78303de"
  },
  {
    "url": "assets/js/3.99b7bef0.js",
    "revision": "b18db3db56e963f6323bdb4bf09a9353"
  },
  {
    "url": "assets/js/30.733aa2c8.js",
    "revision": "c36c54b41db161886d16a44d0ef7773e"
  },
  {
    "url": "assets/js/31.b8f77516.js",
    "revision": "2b21c4400130b8b466eb17e46e0677af"
  },
  {
    "url": "assets/js/32.7ca44703.js",
    "revision": "75b4b6d25e6c95413417957016c7a597"
  },
  {
    "url": "assets/js/33.eeb601cc.js",
    "revision": "4d23003150cc3240b6756205ccacea97"
  },
  {
    "url": "assets/js/34.bda26b4c.js",
    "revision": "f5eeb9a171cb0956445947d80ea22cbb"
  },
  {
    "url": "assets/js/35.44d09698.js",
    "revision": "b7478e9bd2232209b050ce0573f685d3"
  },
  {
    "url": "assets/js/36.1cd59c97.js",
    "revision": "1cec319e92fe21976c24afef3ff54d1e"
  },
  {
    "url": "assets/js/37.aa0a783e.js",
    "revision": "0263db448df2a128733a2b7406a08f39"
  },
  {
    "url": "assets/js/38.50668e81.js",
    "revision": "08ad8628deda1861d71dc56eff595eb5"
  },
  {
    "url": "assets/js/39.208c10c8.js",
    "revision": "ca89041ba637ade832d748e61c9c6467"
  },
  {
    "url": "assets/js/4.f5f94464.js",
    "revision": "64f8595c419a5f3e765f960d5a969bfd"
  },
  {
    "url": "assets/js/40.8ed2fe0c.js",
    "revision": "e01f87529408d41002f298484e5adb21"
  },
  {
    "url": "assets/js/41.a291caf3.js",
    "revision": "9bf5d713a90957806977b56a30ad1fe0"
  },
  {
    "url": "assets/js/42.48c5c2e7.js",
    "revision": "2b9034332de85e5575c7eac8da38b5f2"
  },
  {
    "url": "assets/js/43.b63dece9.js",
    "revision": "8d9fe3f7f21238bfae26ef4e701b75c3"
  },
  {
    "url": "assets/js/44.cc5ef247.js",
    "revision": "80a29a378c72b4c9106c75d19c9f37e9"
  },
  {
    "url": "assets/js/45.9f530c4b.js",
    "revision": "47412a1ff9ed67221e2594a2fe7ed7be"
  },
  {
    "url": "assets/js/46.7247063d.js",
    "revision": "f7ff71dd85a32b518174e664d87551de"
  },
  {
    "url": "assets/js/47.06b5f978.js",
    "revision": "2edd87c5282d50e5ddfda197d0ff0961"
  },
  {
    "url": "assets/js/48.fb9a1ff6.js",
    "revision": "7bb7dcdf5c23e98ba12bc66b954b8b48"
  },
  {
    "url": "assets/js/49.54c84c02.js",
    "revision": "b7ddb8c40c073cbc049ee5e96e9c5878"
  },
  {
    "url": "assets/js/5.933d6898.js",
    "revision": "b3ab9f10f37b66eeb185ef0714737ba2"
  },
  {
    "url": "assets/js/6.bfdc5a35.js",
    "revision": "2b77e957380de303cebb34421425697d"
  },
  {
    "url": "assets/js/7.26562587.js",
    "revision": "4368ae2e21689dce9f4ba45c78670707"
  },
  {
    "url": "assets/js/8.be779564.js",
    "revision": "823f86e9167eea1bf0a53ae2c6df660f"
  },
  {
    "url": "assets/js/9.95b312d7.js",
    "revision": "c2bc5e4fb28b3c7e61158483e663468d"
  },
  {
    "url": "assets/js/app.bbe0b2f2.js",
    "revision": "5371a782662165a11ae8a67ca6b56dc9"
  },
  {
    "url": "friends/index.html",
    "revision": "223847e9c08852ab68ed8bb093108c6e"
  },
  {
    "url": "full.png",
    "revision": "db91198383e03e43d2008b7bc3e91416"
  },
  {
    "url": "guide/index.html",
    "revision": "c45e51eb1a126dee2422898f24960ef5"
  },
  {
    "url": "index.html",
    "revision": "b76273d0920128091f33043f3a8a820d"
  },
  {
    "url": "iphone.png",
    "revision": "3fdf8fd276acb09ac5c8c9b405276ac5"
  },
  {
    "url": "next.png",
    "revision": "fda77edf3b127187d394873cb05b3b9e"
  },
  {
    "url": "passages/2020-01-18-first-blog.html",
    "revision": "167cbd4ebfc53a3b6559376a87373176"
  },
  {
    "url": "passages/2020-02-24-docker-install.html",
    "revision": "7e535338cba48b09e1ecfcee158c07c5"
  },
  {
    "url": "passages/2020-02-25-docker-command.html",
    "revision": "e64b9e86a07bf7389800259a225b4450"
  },
  {
    "url": "passages/2020-02-25-nginx-command.html",
    "revision": "ccc20821a8dcf5ae205079e4327114db"
  },
  {
    "url": "passages/2020-02-25-nginx-install.html",
    "revision": "1df27fd1cd91931f5f3ab2fedd64900b"
  },
  {
    "url": "passages/2020-02-28-golang-slice-analysis.html",
    "revision": "47d8acf817f9db09008875c1b71d64ae"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-etcd.html",
    "revision": "e6ccb21d5c7ab402bed698b328641c3a"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-master.html",
    "revision": "e6a7a7f0195b3fc317e3ed190d03ad1a"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-ready.html",
    "revision": "1c2968cf2c5fc11ea54bd6df9cdf620c"
  },
  {
    "url": "passages/2020-08-12-kubernetes-generate-tls.html",
    "revision": "f5a326d2108fd2acc47543e3ac0fc60e"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-cni.html",
    "revision": "acff90d9492cc6d44877befcccc7dbe2"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-dns.html",
    "revision": "c21671433f30d3151da8c236aee150ca"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-worker.html",
    "revision": "fc63554311993904613927fa2729276b"
  },
  {
    "url": "passages/2021-04-01-idea-crack-2018.html",
    "revision": "d066f0011be77ba89b70c4f548362b5e"
  },
  {
    "url": "passages/2021-04-09-java-basic-oop.html",
    "revision": "1b927406f2d0c7ed5326f61fbc9e5af8"
  },
  {
    "url": "passages/2021-04-09-java-lan-basic.html",
    "revision": "82aa94a081836980d93fa250b5331c64"
  },
  {
    "url": "passages/2021-04-18-java-string-intern.html",
    "revision": "c3541546ab70e42d09f42556b40ab931"
  },
  {
    "url": "passages/2021-04-19-java-basic-date.html",
    "revision": "f43a589bbf8fbc6ff39db66c586c69e0"
  },
  {
    "url": "passages/2021-04-25-java-collection-frame.html",
    "revision": "e5f52e35bb977a9cb618fc18b7a7f891"
  },
  {
    "url": "passages/2021-04-28-java-thread-theory.html",
    "revision": "04f607898a3593e56a0d3b2792b84cc9"
  },
  {
    "url": "passages/2021-05-04-java-thread-basic.html",
    "revision": "154f089ac53a8d80c3778bc3f65a8fc1"
  },
  {
    "url": "passages/2021-05-05-java-io-basic.html",
    "revision": "59590354e171fcdb39836f501e2991ce"
  },
  {
    "url": "passages/2021-05-06-java-io-decorator-pattern.html",
    "revision": "4042e50fc775ad2274c190b20a7fb083"
  },
  {
    "url": "passages/2021-05-08-java-basic-reflect.html",
    "revision": "90acb5c2811e5e89f2eb4f03c67565c0"
  },
  {
    "url": "passages/2021-06-26-golang-reflect.html",
    "revision": "3bf38ebb0f8e88eebb1f4ac985256ed9"
  },
  {
    "url": "passages/2021-06-28-docker-mysql-env.html",
    "revision": "bca6eb6dd7ba7df2224c0e798bf65a37"
  },
  {
    "url": "passages/2021-06-28-git-common-cmd.html",
    "revision": "a83e568817f72fb20e0054925d081c2c"
  },
  {
    "url": "passages/2021-06-29-mysql-manage-auth.html",
    "revision": "dc0c5439375b3306c5833557f8464a2d"
  },
  {
    "url": "passages/2021-06-30-git-branch-manage.html",
    "revision": "b90a23983a4f000bbba1ba7fcc7389b9"
  },
  {
    "url": "passages/2021-06-30-idea-jrebel-config.html",
    "revision": "329b6cc3a7c62c2096e3e705609be398"
  },
  {
    "url": "passages/20221-07-06-group-by-error.html",
    "revision": "e43d4f71f56a20fe6824e9a6f63bb7d9"
  },
  {
    "url": "passages/code-spec-alibaba.html",
    "revision": "dd2bfbec7d2cecf64785d75bd4de68cf"
  },
  {
    "url": "passages/dev-decorator-pattern.html",
    "revision": "6c78d60d2a92a93e662b26f67371055b"
  },
  {
    "url": "passages/dev-pattern-overview.html",
    "revision": "6e2b0679e92f1376f1ea2ac57074bbcd"
  },
  {
    "url": "passages/go-catalog.html",
    "revision": "37ff2d4fcce240cf81ba5bd3d25cd9c8"
  },
  {
    "url": "passages/tool-list-overview.html",
    "revision": "8d4eedb7d5f55bf9ddebe7c350ad9e73"
  },
  {
    "url": "prev.png",
    "revision": "46e803293fa3fdb0919fd1ab29322363"
  },
  {
    "url": "reward.png",
    "revision": "e378f320c906e224c71ed3ca958351b4"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "4ad9290cb7a8be47a8d616be5ecf8bd3"
  },
  {
    "url": "toc.png",
    "revision": "ddca22eef8bfdf98e2b5c67e500f2162"
  },
  {
    "url": "toggle.png",
    "revision": "65d84cea16ed7599ffb3b7295a0b013f"
  },
  {
    "url": "wechat.jpg",
    "revision": "19d443061ef5dcc72ae23e9749d24e48"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
