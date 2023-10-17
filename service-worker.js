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
    "revision": "5e73798e791e31a05f02e7a1a96d406d"
  },
  {
    "url": "assets/css/0.styles.65ca67a0.css",
    "revision": "8d5b74bbc674f587fdc11a5719cb2aa4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.19d44306.jpg",
    "revision": "19d443061ef5dcc72ae23e9749d24e48"
  },
  {
    "url": "assets/js/1.60b780b9.js",
    "revision": "9833d10d8bf0a02edb226beba140e115"
  },
  {
    "url": "assets/js/100.27fd0710.js",
    "revision": "18a37341a03c890270144f4a7897353a"
  },
  {
    "url": "assets/js/101.7cee7fb4.js",
    "revision": "6942ff561df6384a47c458d8908ead2e"
  },
  {
    "url": "assets/js/102.445bab02.js",
    "revision": "fe0038265fc581cb79544d100c084b0b"
  },
  {
    "url": "assets/js/103.92058a0d.js",
    "revision": "6f9fea8a503c46650b350e38baa2c6a6"
  },
  {
    "url": "assets/js/104.f79fb32f.js",
    "revision": "ffb4ab16cfde559d9f6da8ac1dea36ec"
  },
  {
    "url": "assets/js/11.f291db2e.js",
    "revision": "3afb36fa2aec414d8c36c011f790017e"
  },
  {
    "url": "assets/js/12.dfb89d4a.js",
    "revision": "ddb4fe9877a753eb0627807933da232c"
  },
  {
    "url": "assets/js/13.3b0c33b9.js",
    "revision": "00fc576a41b13a1637e3f2d1ad31e7c9"
  },
  {
    "url": "assets/js/14.001f3b63.js",
    "revision": "89fb8bf22aed3ced5dafe6223ee17c17"
  },
  {
    "url": "assets/js/15.2c8543a3.js",
    "revision": "79e726818eacdcd69a70517666035135"
  },
  {
    "url": "assets/js/16.924f53e3.js",
    "revision": "a69fc5954bf26c2d32fa85066707c8b8"
  },
  {
    "url": "assets/js/17.5b9e33e4.js",
    "revision": "572e7593b0e3a561081363bff7964716"
  },
  {
    "url": "assets/js/18.a3e8df31.js",
    "revision": "c69ff25f70ce9af4607806b419ee07b1"
  },
  {
    "url": "assets/js/19.96edc929.js",
    "revision": "9d00ea0d9e22bb0a70a56267962e8065"
  },
  {
    "url": "assets/js/2.60b63780.js",
    "revision": "765799ab7b48686443b5b4c820703f2a"
  },
  {
    "url": "assets/js/20.65c8b301.js",
    "revision": "2875384e484312b87d013fc1d492d980"
  },
  {
    "url": "assets/js/21.fddb6954.js",
    "revision": "563a300750e4176256a02edbde95dda3"
  },
  {
    "url": "assets/js/22.0eec8bdc.js",
    "revision": "d09a6f6d7cbd44a1391ceac9d2fd5857"
  },
  {
    "url": "assets/js/23.d6c27937.js",
    "revision": "da39403230a161f2fb148a369eb67188"
  },
  {
    "url": "assets/js/24.40706275.js",
    "revision": "7f56cf5be37345c1dd1dc3527e71c792"
  },
  {
    "url": "assets/js/25.941e0d92.js",
    "revision": "159c22e34ccb7982a59de956ee00636a"
  },
  {
    "url": "assets/js/26.097efd17.js",
    "revision": "dc69715ab52d41a905676bb20fd51add"
  },
  {
    "url": "assets/js/27.ac140e43.js",
    "revision": "d0d056a5854a47bd5335b78c5e38b5d1"
  },
  {
    "url": "assets/js/28.c5a80cba.js",
    "revision": "06b25adf38ec5878acb7dfe12135dbfc"
  },
  {
    "url": "assets/js/29.2775ea20.js",
    "revision": "6b60d2fab24b8629bbd0527b74b594ab"
  },
  {
    "url": "assets/js/3.0af23bf3.js",
    "revision": "3d980f2e76818e8792311761510adeee"
  },
  {
    "url": "assets/js/30.d3c5ed83.js",
    "revision": "1aa19605caa0403089c2d6b0b3120b7c"
  },
  {
    "url": "assets/js/31.ff97b289.js",
    "revision": "cf70b25106fdd29e0b7ba8342d5023d6"
  },
  {
    "url": "assets/js/32.db0928c7.js",
    "revision": "b1f16c51d04de034f5625d31c17727a6"
  },
  {
    "url": "assets/js/33.5b15c0cf.js",
    "revision": "36788d37ec99a93f792db5adaed5eb0d"
  },
  {
    "url": "assets/js/34.d2aeb07b.js",
    "revision": "26e5397f0c2128a9fcac8e803249f635"
  },
  {
    "url": "assets/js/35.3d93b657.js",
    "revision": "8ba3af9a12b51abe1428471b70633829"
  },
  {
    "url": "assets/js/36.8efedfea.js",
    "revision": "8bef7694679c10d82cb7ccc0c2d77f29"
  },
  {
    "url": "assets/js/37.dcfa6d5b.js",
    "revision": "3338fa01afd2bcbf44b6bb9d7293d97e"
  },
  {
    "url": "assets/js/38.1278c188.js",
    "revision": "04cd371ec9a6fd9ab73883ec3c6b1d62"
  },
  {
    "url": "assets/js/39.1b478cc3.js",
    "revision": "010edb2bcef6cec6929899b24831e411"
  },
  {
    "url": "assets/js/4.ccf14627.js",
    "revision": "7903a7ca432761877f525f1eee86163d"
  },
  {
    "url": "assets/js/40.1c6e2de5.js",
    "revision": "8f02496a14e6bd11fcf2466f70b34c58"
  },
  {
    "url": "assets/js/41.af40a07e.js",
    "revision": "63eb112c421eaf2b47ab637c7e408194"
  },
  {
    "url": "assets/js/42.bd443516.js",
    "revision": "b4dbb99f8775dac7ab92ced8efe68e67"
  },
  {
    "url": "assets/js/43.19179eba.js",
    "revision": "961ecde7f243f5614bfa384d1cb343f3"
  },
  {
    "url": "assets/js/44.10d5c3ae.js",
    "revision": "19c0ba1fa2046676c53c83c7aa9c999e"
  },
  {
    "url": "assets/js/45.6d252d67.js",
    "revision": "7f4ff4fc3df16543bd506342d416c0f0"
  },
  {
    "url": "assets/js/46.c9ad3637.js",
    "revision": "454eab5bfeec9ce206185a098b37505a"
  },
  {
    "url": "assets/js/47.bded9724.js",
    "revision": "efe0cb9709677ad5138f62e6967e1c2a"
  },
  {
    "url": "assets/js/48.616fe6fa.js",
    "revision": "b9c6787ddd66717cc0c9598c0c3f465e"
  },
  {
    "url": "assets/js/49.eb1d52e3.js",
    "revision": "d334cd14ed4d322c2ac813b8168235d6"
  },
  {
    "url": "assets/js/5.40e75f15.js",
    "revision": "9fdf9f53cd061a97e5555990b74d642b"
  },
  {
    "url": "assets/js/50.ac97b80a.js",
    "revision": "9c248cf62e46e85350d82a59cf26cd8d"
  },
  {
    "url": "assets/js/51.0dc7a9e4.js",
    "revision": "9a04cdb53200bace8eea9cb2e9519d63"
  },
  {
    "url": "assets/js/52.984aba80.js",
    "revision": "b43e2a6b56453a5446b77f79d4d5957c"
  },
  {
    "url": "assets/js/53.91b16aa6.js",
    "revision": "c9a43fca48e69ce91cef271ec44e9c5b"
  },
  {
    "url": "assets/js/54.2a5b86b7.js",
    "revision": "906f87d23c4b745752748f6e3e0ddbb1"
  },
  {
    "url": "assets/js/55.78ca1cb8.js",
    "revision": "8477aa59896e859f79460c35ed8fc7fb"
  },
  {
    "url": "assets/js/56.cc812032.js",
    "revision": "a4e0baf4485d8a8e6efdbca292d82b6f"
  },
  {
    "url": "assets/js/57.1602798b.js",
    "revision": "db711564d2a3c35e1abc996adb0753c3"
  },
  {
    "url": "assets/js/58.f79e4e51.js",
    "revision": "a58d1b231051e585813308f9a8c8372f"
  },
  {
    "url": "assets/js/59.8eaf9642.js",
    "revision": "3f08b6a18104bf268dfd4691bfcc4875"
  },
  {
    "url": "assets/js/6.13997d50.js",
    "revision": "a28795fbd23a750fb448aeb84c830831"
  },
  {
    "url": "assets/js/60.9af83626.js",
    "revision": "8c8d21e34328e3f4614567f4c148a580"
  },
  {
    "url": "assets/js/61.89d361c4.js",
    "revision": "2640fe280af13c437aa47be0d463b595"
  },
  {
    "url": "assets/js/62.f69947d3.js",
    "revision": "5bc575f0a69970f72d80b20c71cbab7b"
  },
  {
    "url": "assets/js/63.91d77a14.js",
    "revision": "b6196a6280cab57ae5411e748eb818fd"
  },
  {
    "url": "assets/js/64.36d5220c.js",
    "revision": "476ab775049abef265570217ff7e8fcb"
  },
  {
    "url": "assets/js/65.b0aeba2a.js",
    "revision": "9111b9a702e303a678eb1a39e51f2b8d"
  },
  {
    "url": "assets/js/66.c251ab11.js",
    "revision": "da7f5dc3182b69f78f9ecb83e86735cb"
  },
  {
    "url": "assets/js/67.ac7d6d29.js",
    "revision": "5f57bde574e7629112e0ddfc6c6f1eb4"
  },
  {
    "url": "assets/js/68.8ed2a1c3.js",
    "revision": "b46ac83b6250367feef86e2b07af5250"
  },
  {
    "url": "assets/js/69.aee1d9e2.js",
    "revision": "696d36e9ac0e146309e62e2b9065309d"
  },
  {
    "url": "assets/js/7.f4a9084a.js",
    "revision": "e95a25daf42d33d7dcbb613925d8b03e"
  },
  {
    "url": "assets/js/70.73d33a7d.js",
    "revision": "600130b009f279da0bb9d80d97b5193e"
  },
  {
    "url": "assets/js/71.bc0a303b.js",
    "revision": "76305383db3ee10cfdb5ab053c8c22a5"
  },
  {
    "url": "assets/js/72.0ee398ed.js",
    "revision": "6da0f759e5eab0ea0b899b04d4ed5f79"
  },
  {
    "url": "assets/js/73.34424b61.js",
    "revision": "1b137967325059b6688f04bb806af53f"
  },
  {
    "url": "assets/js/74.df44d300.js",
    "revision": "f4910f691ed2cb0ecd0df0bee628e962"
  },
  {
    "url": "assets/js/75.7860c0a6.js",
    "revision": "2bf1b0a4b7a80fabe55951939677a6cb"
  },
  {
    "url": "assets/js/76.633624c0.js",
    "revision": "bb949e1f59eefa7d823c82e66b43b177"
  },
  {
    "url": "assets/js/77.4d3072db.js",
    "revision": "b77b15055f23b5fe3334eca7ed7a62ea"
  },
  {
    "url": "assets/js/78.065baa0d.js",
    "revision": "4d19db6b4f0c6895381db9cdd329a4b3"
  },
  {
    "url": "assets/js/79.3d7b5e16.js",
    "revision": "4450be6ccf46dd60b0d791a952d7904e"
  },
  {
    "url": "assets/js/8.c4da25e5.js",
    "revision": "5d6481a8b16990e0292cb6022508de8e"
  },
  {
    "url": "assets/js/80.f81a484a.js",
    "revision": "83a9cd213616faca2c1cbeb391c36833"
  },
  {
    "url": "assets/js/81.7a5ec7c6.js",
    "revision": "ce09d290edadc3e2204223213e373677"
  },
  {
    "url": "assets/js/82.f7d78f84.js",
    "revision": "a5a9dadd908f4d4ee5ba82db0f2e288e"
  },
  {
    "url": "assets/js/83.8a7b90a6.js",
    "revision": "cb864de36d4e824f00bfb595500363dc"
  },
  {
    "url": "assets/js/84.881252c8.js",
    "revision": "4ffbde2a835b99b34099e01b8c0dc8cc"
  },
  {
    "url": "assets/js/85.bcd54d0d.js",
    "revision": "1725aaece0d564878ea290fa4b0046f6"
  },
  {
    "url": "assets/js/86.91aac814.js",
    "revision": "d274085d664936d0dfb537209926c11c"
  },
  {
    "url": "assets/js/87.49b0ea88.js",
    "revision": "a4f1b5bd207c69d66528bf94a1d396df"
  },
  {
    "url": "assets/js/88.4b9be97e.js",
    "revision": "9590dc9d7c2c822bd9926cfab7be8662"
  },
  {
    "url": "assets/js/89.ac049c97.js",
    "revision": "af6a3ebcc9eea6e9a75b51231c256b41"
  },
  {
    "url": "assets/js/90.eeca43f2.js",
    "revision": "1735de68c938bcc330684792100f23bf"
  },
  {
    "url": "assets/js/91.d0165456.js",
    "revision": "2ec024cf1118b69d2b51448f96cb9698"
  },
  {
    "url": "assets/js/92.49f7e0b1.js",
    "revision": "ba484dcb5405747fd854ff0af04d5b34"
  },
  {
    "url": "assets/js/93.9f214d31.js",
    "revision": "63c399f38cc9a03df1aecf6022337912"
  },
  {
    "url": "assets/js/94.45919c44.js",
    "revision": "b451cdbc10c9c58181774db51865c9b2"
  },
  {
    "url": "assets/js/95.a02e2520.js",
    "revision": "7236b1f58df166bb9b05d1ab4ab0e0ab"
  },
  {
    "url": "assets/js/96.45c16ceb.js",
    "revision": "8db6094020978e0c198fe1a16424f638"
  },
  {
    "url": "assets/js/97.842b4fcd.js",
    "revision": "a61cb22c5bc518fd82322ada7584f279"
  },
  {
    "url": "assets/js/98.8219d440.js",
    "revision": "d98dc887f991bd7019f8be65e1bb9dfb"
  },
  {
    "url": "assets/js/99.111aa838.js",
    "revision": "04cf4b4186f5df5886a36f0693f12346"
  },
  {
    "url": "assets/js/app.5e7679fc.js",
    "revision": "211c93d9c6a138e459c684043b7cbe91"
  },
  {
    "url": "assets/js/vendors~docsearch.5e77459f.js",
    "revision": "6161ec1084efd4f00fa072a09a3acded"
  },
  {
    "url": "friends/index.html",
    "revision": "9fc3cdee7b02a67b21a5728a6fbf279d"
  },
  {
    "url": "full.png",
    "revision": "db91198383e03e43d2008b7bc3e91416"
  },
  {
    "url": "guide/index.html",
    "revision": "9f58ba8915e6a7dafed21d5242ecbbd5"
  },
  {
    "url": "index.html",
    "revision": "34714d23d8414bffe2dfc8037e17f9a8"
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
    "revision": "fe3c6cc3842aeb1bb82f463868247dd3"
  },
  {
    "url": "passages/2020-02-24-docker-install.html",
    "revision": "127caf804f6f9b0fe2f0163916d665ac"
  },
  {
    "url": "passages/2020-02-25-docker-command.html",
    "revision": "5c187ca09741cf268b11b20c5c6ddb37"
  },
  {
    "url": "passages/2020-02-25-nginx-command.html",
    "revision": "a3a7a498c7171f42ed25031e3c18490d"
  },
  {
    "url": "passages/2020-02-25-nginx-install.html",
    "revision": "74678444e41d0c7ed3e7e85ca73cd7fb"
  },
  {
    "url": "passages/2020-02-28-golang-slice-analysis.html",
    "revision": "c727c7a4089a9f7de2174da05a025c0d"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-etcd.html",
    "revision": "ed37e153aadf0a21f52fd6ef972d979b"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-master.html",
    "revision": "ea1d2e7ece09f7c7a1111a83d78ecba2"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-ready.html",
    "revision": "2dafdd223b73e08702543886d2ce219a"
  },
  {
    "url": "passages/2020-08-12-kubernetes-generate-tls.html",
    "revision": "317790a11bab5433e0a49b47c62cea4b"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-cni.html",
    "revision": "3a80d0da52562f9f1623d9c6b95ad53b"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-dns.html",
    "revision": "40e18df76901dade15a9d5c979aabcf7"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-worker.html",
    "revision": "97d1ed4b9f618e5aaa11ebb7adc1b647"
  },
  {
    "url": "passages/2021-04-01-idea-crack-2018.html",
    "revision": "cd0e2d1a05e83695cd88af7df3d7f5f8"
  },
  {
    "url": "passages/2021-04-09-java-basic-oop.html",
    "revision": "5745a25b94ad05ebd595981c51bff2a5"
  },
  {
    "url": "passages/2021-04-09-java-lan-basic.html",
    "revision": "74dc121e1b89fd1376b60210627e8b49"
  },
  {
    "url": "passages/2021-04-18-java-string-intern.html",
    "revision": "7b90d8cfb282e5eec8fc12205213390d"
  },
  {
    "url": "passages/2021-04-19-java-basic-date.html",
    "revision": "f517db791c206b24d84710dc24f609d1"
  },
  {
    "url": "passages/2021-04-25-java-collection-frame.html",
    "revision": "2188c14f7b2025db386ff29bda5f6f60"
  },
  {
    "url": "passages/2021-04-28-java-thread-theory.html",
    "revision": "b26bc8ac09df3b68b168a3e18626367b"
  },
  {
    "url": "passages/2021-05-04-java-thread-basic.html",
    "revision": "9bf885ad50e688e8fc7f1de148e8604f"
  },
  {
    "url": "passages/2021-05-05-java-io-basic.html",
    "revision": "32e43ee5d546d09f0baa85308427df43"
  },
  {
    "url": "passages/2021-05-06-java-io-decorator-pattern.html",
    "revision": "3bc41e531dc26b2c8018d12300b3415b"
  },
  {
    "url": "passages/2021-05-08-java-basic-reflect.html",
    "revision": "3363527957755a2a9a303e07cb67545d"
  },
  {
    "url": "passages/2021-06-26-golang-reflect.html",
    "revision": "792b94511478ffc9c3cdedb5d7b162e4"
  },
  {
    "url": "passages/2021-06-28-docker-mysql-env.html",
    "revision": "a13a7330ee2055bf1a81036e3da59b28"
  },
  {
    "url": "passages/2021-06-28-git-common-cmd.html",
    "revision": "0b439593358e46bba212817e8e7bcbe8"
  },
  {
    "url": "passages/2021-06-29-mysql-manage-auth.html",
    "revision": "4804dca11e23d1f39bcf99707351c27f"
  },
  {
    "url": "passages/2021-06-30-git-branch-manage.html",
    "revision": "6e82716733d706d7dfee53e514cdbc8e"
  },
  {
    "url": "passages/2021-06-30-idea-jrebel-config.html",
    "revision": "48b61714205b97085bbbffc25809a64a"
  },
  {
    "url": "passages/2021-07-06-group-by-error.html",
    "revision": "19048d3de7b10e3699412a8933041fcf"
  },
  {
    "url": "passages/2021-07-21-activiti7-note.html",
    "revision": "a202c714838e1584ff9b863ddc8e4e2f"
  },
  {
    "url": "passages/2021-07-22-activiti7-common-api.html",
    "revision": "8a032e4e63b5c07904d1ce1f9576d4fb"
  },
  {
    "url": "passages/2021-07-22-activiti7-error-note.html",
    "revision": "8dcdae10ed3cd701f866cc3615381c6d"
  },
  {
    "url": "passages/2021-07-22-activiti7-note-advanced.html",
    "revision": "8ed4f53afe123af2121d00803df6422a"
  },
  {
    "url": "passages/2021-07-22-activiti7-table-struct.html",
    "revision": "a1d8c30ee08d5c6986e01ebbf60cb00c"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba-nacos.html",
    "revision": "dcfd2f78d9aff836160b602211d7437a"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba.html",
    "revision": "ee92d464329a557ad3b990400bc93830"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-error.html",
    "revision": "9b0d5508d1ed1a04968770a34ce61c6e"
  },
  {
    "url": "passages/2021-07-29-spring-cloud-gateway.html",
    "revision": "93522a136fff28ff7a607724ccc528a7"
  },
  {
    "url": "passages/2021-08-02-redis-base-desc.html",
    "revision": "7473894a6326fb3f18a9b4b818d1cf7e"
  },
  {
    "url": "passages/2021-08-02-redis-base-struct.html",
    "revision": "affc5449c74b9a12e6ea846bc448614a"
  },
  {
    "url": "passages/2021-08-02-redis-memory.html",
    "revision": "f23a84e6d84725a6fa7484d1723d534e"
  },
  {
    "url": "passages/2021-08-02-redis-overview.html",
    "revision": "a027477bbad9f76abf75c80c9026b2d7"
  },
  {
    "url": "passages/2021-08-02-redis-rdb-aof.html",
    "revision": "b35512e9948df695af81dbe3dac5822f"
  },
  {
    "url": "passages/2021-08-05-java-basic-enum.html",
    "revision": "46a356ddc0eba2ce3de686ca3e0d1d56"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-env.html",
    "revision": "e6497d714dc78a18bd60a2e3a37933b3"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-introduce.html",
    "revision": "fbc0e598afba2fb471f94d3470d1609d"
  },
  {
    "url": "passages/2021-08-06-elasticsearch.html",
    "revision": "1001c50c0275cbfa89578124bcea8882"
  },
  {
    "url": "passages/2021-08-07-elasticsearch-basic-course.html",
    "revision": "0d60b9c16be01339ac54cd54d4dcd9e1"
  },
  {
    "url": "passages/2021-08-15-mongo-introduce.html",
    "revision": "e7a0065395de119f8a85ce3a033f0cea"
  },
  {
    "url": "passages/2021-08-15-mongo-overview.html",
    "revision": "6bae0147cfd6bbaad8e074df93909d32"
  },
  {
    "url": "passages/2021-08-16-elasticsearch-ik.html",
    "revision": "815e04557b0e77c455e0c754b86100a2"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-highlight.html",
    "revision": "5f215824d0536394f21ef70252417ee3"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-integrate-springboot.html",
    "revision": "a72f0c14d9c9e7c4e939962eee5b84d2"
  },
  {
    "url": "passages/2021-08-18-git-ignore-file.html",
    "revision": "21714bfa97a01c90a532e23095c030af"
  },
  {
    "url": "passages/2021-08-18-springboot-argument-resolver.html",
    "revision": "f55da7ef3f246715960ca85372e3a0e7"
  },
  {
    "url": "passages/2021-08-19-elasticsearch-complex-query.html",
    "revision": "90ea571d2f06c0395fc5233e4c0f273a"
  },
  {
    "url": "passages/2021-08-19-mongo-install.html",
    "revision": "d7a484dd2d93888be1041bf270247137"
  },
  {
    "url": "passages/2021-08-27-mongo-geospatial.html",
    "revision": "14a58ea544d249f49edc38fc3ff2e572"
  },
  {
    "url": "passages/2021-08-27-mongo-springboot.html",
    "revision": "df32e7c3af7b9842a04eda56681c8c0a"
  },
  {
    "url": "passages/2021-09-02-spring-cloud-openfeign.html",
    "revision": "c262cb8f340a2e5ef2011ad72fc5472d"
  },
  {
    "url": "passages/2022-01-11-mac-jdk8-slow-solution.html",
    "revision": "706ca12b7b4398efe682aae3a62df41e"
  },
  {
    "url": "passages/2022-02-23-git-stash-note.html",
    "revision": "c2011a0d80eae2a4767fb4822ead3625"
  },
  {
    "url": "passages/2022-03-10-golang-reflect-deepEqual.html",
    "revision": "ea114d5c2a0e37979084616f8a74d242"
  },
  {
    "url": "passages/2022-03-19-seata-transaction-error.html",
    "revision": "8be41686b932c4e7d34e13c38e46598a"
  },
  {
    "url": "passages/chain-of-responsibility.html",
    "revision": "63f62facd889839fe529a40d82f8f160"
  },
  {
    "url": "passages/code-spec-alibaba.html",
    "revision": "f5f53abecd1199a2927915f1b4900856"
  },
  {
    "url": "passages/dev-decorator-pattern.html",
    "revision": "aee59b60eb4d86ec70080ea96ecb4665"
  },
  {
    "url": "passages/dev-pattern-overview.html",
    "revision": "82a6acdfafec6377fdbe0097c09afec7"
  },
  {
    "url": "passages/go-catalog.html",
    "revision": "42d87ec7aa5eaa863d469b320f9634c9"
  },
  {
    "url": "passages/tool-list-overview.html",
    "revision": "f9cbc8af66a86f3063d04df2e91c6d5e"
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
