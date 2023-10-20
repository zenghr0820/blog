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
    "revision": "3f4616bb98f7d25001c6e0c39093ce55"
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
    "url": "assets/js/1.3405b27d.js",
    "revision": "9833d10d8bf0a02edb226beba140e115"
  },
  {
    "url": "assets/js/100.7ad44a8d.js",
    "revision": "18a37341a03c890270144f4a7897353a"
  },
  {
    "url": "assets/js/101.6941577a.js",
    "revision": "6942ff561df6384a47c458d8908ead2e"
  },
  {
    "url": "assets/js/102.481d41a3.js",
    "revision": "fe0038265fc581cb79544d100c084b0b"
  },
  {
    "url": "assets/js/103.864779b3.js",
    "revision": "6f9fea8a503c46650b350e38baa2c6a6"
  },
  {
    "url": "assets/js/104.f79fb32f.js",
    "revision": "ffb4ab16cfde559d9f6da8ac1dea36ec"
  },
  {
    "url": "assets/js/11.8f9794bd.js",
    "revision": "3afb36fa2aec414d8c36c011f790017e"
  },
  {
    "url": "assets/js/12.1c5ed29a.js",
    "revision": "ddb4fe9877a753eb0627807933da232c"
  },
  {
    "url": "assets/js/13.0ed82e2f.js",
    "revision": "00fc576a41b13a1637e3f2d1ad31e7c9"
  },
  {
    "url": "assets/js/14.4ea01dba.js",
    "revision": "89fb8bf22aed3ced5dafe6223ee17c17"
  },
  {
    "url": "assets/js/15.fbe0894d.js",
    "revision": "79e726818eacdcd69a70517666035135"
  },
  {
    "url": "assets/js/16.19a9d640.js",
    "revision": "a69fc5954bf26c2d32fa85066707c8b8"
  },
  {
    "url": "assets/js/17.e489f696.js",
    "revision": "572e7593b0e3a561081363bff7964716"
  },
  {
    "url": "assets/js/18.139cd765.js",
    "revision": "c69ff25f70ce9af4607806b419ee07b1"
  },
  {
    "url": "assets/js/19.11000689.js",
    "revision": "9d00ea0d9e22bb0a70a56267962e8065"
  },
  {
    "url": "assets/js/2.c07a442e.js",
    "revision": "765799ab7b48686443b5b4c820703f2a"
  },
  {
    "url": "assets/js/20.0318468f.js",
    "revision": "2875384e484312b87d013fc1d492d980"
  },
  {
    "url": "assets/js/21.517b7170.js",
    "revision": "563a300750e4176256a02edbde95dda3"
  },
  {
    "url": "assets/js/22.c4e44903.js",
    "revision": "d09a6f6d7cbd44a1391ceac9d2fd5857"
  },
  {
    "url": "assets/js/23.ac9d135d.js",
    "revision": "da39403230a161f2fb148a369eb67188"
  },
  {
    "url": "assets/js/24.20bd45a8.js",
    "revision": "7f56cf5be37345c1dd1dc3527e71c792"
  },
  {
    "url": "assets/js/25.3d1d1e08.js",
    "revision": "159c22e34ccb7982a59de956ee00636a"
  },
  {
    "url": "assets/js/26.deba980a.js",
    "revision": "dc69715ab52d41a905676bb20fd51add"
  },
  {
    "url": "assets/js/27.33b632b3.js",
    "revision": "d0d056a5854a47bd5335b78c5e38b5d1"
  },
  {
    "url": "assets/js/28.7d4d9bd5.js",
    "revision": "06b25adf38ec5878acb7dfe12135dbfc"
  },
  {
    "url": "assets/js/29.c5546eca.js",
    "revision": "6b60d2fab24b8629bbd0527b74b594ab"
  },
  {
    "url": "assets/js/3.a4f61934.js",
    "revision": "3d980f2e76818e8792311761510adeee"
  },
  {
    "url": "assets/js/30.9e0e8530.js",
    "revision": "5ac2c47f4762cf8ae4bfe6d5d1ca3f90"
  },
  {
    "url": "assets/js/31.46b19327.js",
    "revision": "fddbc17cf7c0a212109a790096382076"
  },
  {
    "url": "assets/js/32.e81f1958.js",
    "revision": "e0ac5e8cc9a8cde964268b6ee968fd79"
  },
  {
    "url": "assets/js/33.6a18e0a5.js",
    "revision": "36788d37ec99a93f792db5adaed5eb0d"
  },
  {
    "url": "assets/js/34.ddead825.js",
    "revision": "26e5397f0c2128a9fcac8e803249f635"
  },
  {
    "url": "assets/js/35.eae52630.js",
    "revision": "8ba3af9a12b51abe1428471b70633829"
  },
  {
    "url": "assets/js/36.098c3f0b.js",
    "revision": "8bef7694679c10d82cb7ccc0c2d77f29"
  },
  {
    "url": "assets/js/37.af7c5e68.js",
    "revision": "3338fa01afd2bcbf44b6bb9d7293d97e"
  },
  {
    "url": "assets/js/38.6254d9c8.js",
    "revision": "04cd371ec9a6fd9ab73883ec3c6b1d62"
  },
  {
    "url": "assets/js/39.ec233731.js",
    "revision": "010edb2bcef6cec6929899b24831e411"
  },
  {
    "url": "assets/js/4.532f63f7.js",
    "revision": "7903a7ca432761877f525f1eee86163d"
  },
  {
    "url": "assets/js/40.c96a39e5.js",
    "revision": "ec60390a7fbe448108c03c17b87ec98d"
  },
  {
    "url": "assets/js/41.a20b3d83.js",
    "revision": "21deef8ee159487eddafbc3d19080085"
  },
  {
    "url": "assets/js/42.3d99210d.js",
    "revision": "b4dbb99f8775dac7ab92ced8efe68e67"
  },
  {
    "url": "assets/js/43.cec0f162.js",
    "revision": "961ecde7f243f5614bfa384d1cb343f3"
  },
  {
    "url": "assets/js/44.964feb1f.js",
    "revision": "19c0ba1fa2046676c53c83c7aa9c999e"
  },
  {
    "url": "assets/js/45.789a8501.js",
    "revision": "7f4ff4fc3df16543bd506342d416c0f0"
  },
  {
    "url": "assets/js/46.ee01d34a.js",
    "revision": "454eab5bfeec9ce206185a098b37505a"
  },
  {
    "url": "assets/js/47.650a89b3.js",
    "revision": "efe0cb9709677ad5138f62e6967e1c2a"
  },
  {
    "url": "assets/js/48.375c6c74.js",
    "revision": "b9c6787ddd66717cc0c9598c0c3f465e"
  },
  {
    "url": "assets/js/49.9d19a778.js",
    "revision": "d334cd14ed4d322c2ac813b8168235d6"
  },
  {
    "url": "assets/js/5.db15706f.js",
    "revision": "9fdf9f53cd061a97e5555990b74d642b"
  },
  {
    "url": "assets/js/50.03d48ac4.js",
    "revision": "9c248cf62e46e85350d82a59cf26cd8d"
  },
  {
    "url": "assets/js/51.852f258f.js",
    "revision": "9a04cdb53200bace8eea9cb2e9519d63"
  },
  {
    "url": "assets/js/52.abd5846b.js",
    "revision": "b43e2a6b56453a5446b77f79d4d5957c"
  },
  {
    "url": "assets/js/53.6419ee4f.js",
    "revision": "c9a43fca48e69ce91cef271ec44e9c5b"
  },
  {
    "url": "assets/js/54.f764ba2d.js",
    "revision": "906f87d23c4b745752748f6e3e0ddbb1"
  },
  {
    "url": "assets/js/55.5e5e2a5f.js",
    "revision": "8477aa59896e859f79460c35ed8fc7fb"
  },
  {
    "url": "assets/js/56.3c165b36.js",
    "revision": "a4e0baf4485d8a8e6efdbca292d82b6f"
  },
  {
    "url": "assets/js/57.d495890f.js",
    "revision": "db711564d2a3c35e1abc996adb0753c3"
  },
  {
    "url": "assets/js/58.023b87bb.js",
    "revision": "a58d1b231051e585813308f9a8c8372f"
  },
  {
    "url": "assets/js/59.f70e5404.js",
    "revision": "3f08b6a18104bf268dfd4691bfcc4875"
  },
  {
    "url": "assets/js/6.78b0768f.js",
    "revision": "a28795fbd23a750fb448aeb84c830831"
  },
  {
    "url": "assets/js/60.35defa53.js",
    "revision": "8c8d21e34328e3f4614567f4c148a580"
  },
  {
    "url": "assets/js/61.abcbd9d8.js",
    "revision": "2640fe280af13c437aa47be0d463b595"
  },
  {
    "url": "assets/js/62.99e33701.js",
    "revision": "5bc575f0a69970f72d80b20c71cbab7b"
  },
  {
    "url": "assets/js/63.151779c7.js",
    "revision": "b6196a6280cab57ae5411e748eb818fd"
  },
  {
    "url": "assets/js/64.e4f55856.js",
    "revision": "476ab775049abef265570217ff7e8fcb"
  },
  {
    "url": "assets/js/65.bf241838.js",
    "revision": "9111b9a702e303a678eb1a39e51f2b8d"
  },
  {
    "url": "assets/js/66.ce48e90c.js",
    "revision": "da7f5dc3182b69f78f9ecb83e86735cb"
  },
  {
    "url": "assets/js/67.d7debb27.js",
    "revision": "5f57bde574e7629112e0ddfc6c6f1eb4"
  },
  {
    "url": "assets/js/68.589cb6bd.js",
    "revision": "b46ac83b6250367feef86e2b07af5250"
  },
  {
    "url": "assets/js/69.79f318b2.js",
    "revision": "696d36e9ac0e146309e62e2b9065309d"
  },
  {
    "url": "assets/js/7.e0df81bc.js",
    "revision": "e95a25daf42d33d7dcbb613925d8b03e"
  },
  {
    "url": "assets/js/70.e9503608.js",
    "revision": "600130b009f279da0bb9d80d97b5193e"
  },
  {
    "url": "assets/js/71.4a814ab7.js",
    "revision": "76305383db3ee10cfdb5ab053c8c22a5"
  },
  {
    "url": "assets/js/72.e15b5624.js",
    "revision": "6da0f759e5eab0ea0b899b04d4ed5f79"
  },
  {
    "url": "assets/js/73.acb970bb.js",
    "revision": "1b137967325059b6688f04bb806af53f"
  },
  {
    "url": "assets/js/74.c322b654.js",
    "revision": "f4910f691ed2cb0ecd0df0bee628e962"
  },
  {
    "url": "assets/js/75.d4767338.js",
    "revision": "f6d52c28dca777fc7db0cf201b70e0fd"
  },
  {
    "url": "assets/js/76.c48e610a.js",
    "revision": "0e905ad9028a932d36aaa5360bc4b522"
  },
  {
    "url": "assets/js/77.3fd4d641.js",
    "revision": "ae09a95341cd3025385ff292e21c3ebe"
  },
  {
    "url": "assets/js/78.29110b1f.js",
    "revision": "a63c39ee0990afba9f01b2b2a513cdd7"
  },
  {
    "url": "assets/js/79.fd1d8fb5.js",
    "revision": "4450be6ccf46dd60b0d791a952d7904e"
  },
  {
    "url": "assets/js/8.7d5c9344.js",
    "revision": "5d6481a8b16990e0292cb6022508de8e"
  },
  {
    "url": "assets/js/80.294c81e5.js",
    "revision": "081590c358f5fc1b3d1925f5f3bf275e"
  },
  {
    "url": "assets/js/81.203b2abd.js",
    "revision": "6c2056ffd8510229be9e305d4b585c36"
  },
  {
    "url": "assets/js/82.d1b3a5df.js",
    "revision": "a5a9dadd908f4d4ee5ba82db0f2e288e"
  },
  {
    "url": "assets/js/83.e8160191.js",
    "revision": "cb864de36d4e824f00bfb595500363dc"
  },
  {
    "url": "assets/js/84.f59a5f47.js",
    "revision": "4ffbde2a835b99b34099e01b8c0dc8cc"
  },
  {
    "url": "assets/js/85.2e64bc43.js",
    "revision": "1725aaece0d564878ea290fa4b0046f6"
  },
  {
    "url": "assets/js/86.e3bfaa31.js",
    "revision": "d274085d664936d0dfb537209926c11c"
  },
  {
    "url": "assets/js/87.0833dfd2.js",
    "revision": "a4f1b5bd207c69d66528bf94a1d396df"
  },
  {
    "url": "assets/js/88.5d7c3c35.js",
    "revision": "9590dc9d7c2c822bd9926cfab7be8662"
  },
  {
    "url": "assets/js/89.7d348c62.js",
    "revision": "af6a3ebcc9eea6e9a75b51231c256b41"
  },
  {
    "url": "assets/js/90.09cc0c91.js",
    "revision": "1735de68c938bcc330684792100f23bf"
  },
  {
    "url": "assets/js/91.81193723.js",
    "revision": "2ec024cf1118b69d2b51448f96cb9698"
  },
  {
    "url": "assets/js/92.a6f81ec4.js",
    "revision": "ba484dcb5405747fd854ff0af04d5b34"
  },
  {
    "url": "assets/js/93.0d40d55c.js",
    "revision": "63c399f38cc9a03df1aecf6022337912"
  },
  {
    "url": "assets/js/94.e668f740.js",
    "revision": "b451cdbc10c9c58181774db51865c9b2"
  },
  {
    "url": "assets/js/95.2e4d16a2.js",
    "revision": "7236b1f58df166bb9b05d1ab4ab0e0ab"
  },
  {
    "url": "assets/js/96.c0f3c282.js",
    "revision": "8db6094020978e0c198fe1a16424f638"
  },
  {
    "url": "assets/js/97.366f0e7b.js",
    "revision": "a61cb22c5bc518fd82322ada7584f279"
  },
  {
    "url": "assets/js/98.1582e7ac.js",
    "revision": "d98dc887f991bd7019f8be65e1bb9dfb"
  },
  {
    "url": "assets/js/99.4523d3fa.js",
    "revision": "04cf4b4186f5df5886a36f0693f12346"
  },
  {
    "url": "assets/js/app.1f0020d5.js",
    "revision": "9cecb47d7c32814bb909b50b7f06b603"
  },
  {
    "url": "assets/js/vendors~docsearch.5e77459f.js",
    "revision": "6161ec1084efd4f00fa072a09a3acded"
  },
  {
    "url": "friends/index.html",
    "revision": "79f7cf5a32e7e4ae25486ef3410058e1"
  },
  {
    "url": "full.png",
    "revision": "db91198383e03e43d2008b7bc3e91416"
  },
  {
    "url": "guide/index.html",
    "revision": "57f4b35909fe2db4c5eea77a969ff3b8"
  },
  {
    "url": "index.html",
    "revision": "956819d06fdfd8f9f64d91d34f7c7df3"
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
    "revision": "ac7d7d73d1a6e307d5507be533deb63c"
  },
  {
    "url": "passages/2020-02-24-docker-install.html",
    "revision": "77000ff3769bc81167a0c672e734fc2c"
  },
  {
    "url": "passages/2020-02-25-docker-command.html",
    "revision": "6e0adc31531567c59e6e65912625502f"
  },
  {
    "url": "passages/2020-02-25-nginx-command.html",
    "revision": "bd9e36ff59fe43d58d19486b06d28542"
  },
  {
    "url": "passages/2020-02-25-nginx-install.html",
    "revision": "decc467f96ce2e60b9120efe94cf606b"
  },
  {
    "url": "passages/2020-02-28-golang-slice-analysis.html",
    "revision": "d9eb85b9b40b116376a26906c494a2fe"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-etcd.html",
    "revision": "389ed8cd9cc85cc9ba5c7e7aaae7eb95"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-master.html",
    "revision": "28fcc7b2faf9df6190abfaf2132ccb96"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-ready.html",
    "revision": "40bfdde3b945ce5fae1f655700c78a94"
  },
  {
    "url": "passages/2020-08-12-kubernetes-generate-tls.html",
    "revision": "69e1c129fa8f5cc80559f28899590924"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-cni.html",
    "revision": "237186ec191eae6481d872fbce0898bb"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-dns.html",
    "revision": "3e4adecbe35007e2f906ef16a16d7a34"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-worker.html",
    "revision": "6c48e510de8becfafc1ce2abd36e89b1"
  },
  {
    "url": "passages/2021-04-01-idea-crack-2018.html",
    "revision": "060a65a9ec24c3138d0e584398cd9908"
  },
  {
    "url": "passages/2021-04-09-java-basic-oop.html",
    "revision": "68bcd05caf1dcd8b815a7da26fb8f1fe"
  },
  {
    "url": "passages/2021-04-09-java-lan-basic.html",
    "revision": "a431a8c6c225329904a3b55aac10d893"
  },
  {
    "url": "passages/2021-04-18-java-string-intern.html",
    "revision": "80d0bfcd834d0d8f4dd65f86c5b27158"
  },
  {
    "url": "passages/2021-04-19-java-basic-date.html",
    "revision": "19e93e45c46a548980e1fc716fb499f9"
  },
  {
    "url": "passages/2021-04-25-java-collection-frame.html",
    "revision": "469a346bdcff9edc18ada9fe7446b6a8"
  },
  {
    "url": "passages/2021-04-28-java-thread-theory.html",
    "revision": "f42b5f8fcc81476251160fff70b95d03"
  },
  {
    "url": "passages/2021-05-04-java-thread-basic.html",
    "revision": "4d6b3ec1563be90517adc5e239695645"
  },
  {
    "url": "passages/2021-05-05-java-io-basic.html",
    "revision": "7d5256a4c183fb5a5a66b8b8f9f39d0e"
  },
  {
    "url": "passages/2021-05-06-java-io-decorator-pattern.html",
    "revision": "e0c67e21e5276b9559c9e193aa58d3da"
  },
  {
    "url": "passages/2021-05-08-java-basic-reflect.html",
    "revision": "a19fbcbc5b465abb2d9f05b2f5e39b4e"
  },
  {
    "url": "passages/2021-06-26-golang-reflect.html",
    "revision": "ef9e89b8caa3d385341caebbd548ef9a"
  },
  {
    "url": "passages/2021-06-28-docker-mysql-env.html",
    "revision": "a7674fb82dfe8a2adb27024fd77fea7d"
  },
  {
    "url": "passages/2021-06-28-git-common-cmd.html",
    "revision": "3352cf8e507f6447655463c0cb105f83"
  },
  {
    "url": "passages/2021-06-29-mysql-manage-auth.html",
    "revision": "270efe7d7cb7638513e260019d02fcd8"
  },
  {
    "url": "passages/2021-06-30-git-branch-manage.html",
    "revision": "bf6fec1b22ec9ce62badf2475c53fcdd"
  },
  {
    "url": "passages/2021-06-30-idea-jrebel-config.html",
    "revision": "7fc00ddf63ae707ffaf12812a52e9ae0"
  },
  {
    "url": "passages/2021-07-06-group-by-error.html",
    "revision": "87f8fb06cda856d9e3bb16c70e454e1f"
  },
  {
    "url": "passages/2021-07-21-activiti7-note.html",
    "revision": "f88283262bff5abc50401523ca37d271"
  },
  {
    "url": "passages/2021-07-22-activiti7-common-api.html",
    "revision": "44a69a882e51f9dbe69f9fb13dcb10b1"
  },
  {
    "url": "passages/2021-07-22-activiti7-error-note.html",
    "revision": "e13bd4db6360764a595714edd266dcd5"
  },
  {
    "url": "passages/2021-07-22-activiti7-note-advanced.html",
    "revision": "60b481e355eea76408c395a59b2576ba"
  },
  {
    "url": "passages/2021-07-22-activiti7-table-struct.html",
    "revision": "af7cc69cc14a8b55c2f0b36c98be238e"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba-nacos.html",
    "revision": "9cadf54d3cab6264c2778516c5115fea"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba.html",
    "revision": "691b2c0868e737a92ad7c113d7b3b88f"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-error.html",
    "revision": "76cd6fbfec36fc603788f9397b72b29f"
  },
  {
    "url": "passages/2021-07-29-spring-cloud-gateway.html",
    "revision": "70326b038a774aea3929e685abc532db"
  },
  {
    "url": "passages/2021-08-02-redis-base-desc.html",
    "revision": "4abe05526e83cb85f72e74752b960b88"
  },
  {
    "url": "passages/2021-08-02-redis-base-struct.html",
    "revision": "f60c69657e7fe969d9c4e85b36e8cb5b"
  },
  {
    "url": "passages/2021-08-02-redis-memory.html",
    "revision": "ce6b2c597cc0d461ef51837bb0d2b45b"
  },
  {
    "url": "passages/2021-08-02-redis-overview.html",
    "revision": "3f592956d8624cda082c33c858ad2c72"
  },
  {
    "url": "passages/2021-08-02-redis-rdb-aof.html",
    "revision": "d814520cda63c02e40859d64bfd6b2f9"
  },
  {
    "url": "passages/2021-08-05-java-basic-enum.html",
    "revision": "daf1653b667efeb6703ccb12dd808c33"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-env.html",
    "revision": "139b720099e71900ac7ac99009e89ba4"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-introduce.html",
    "revision": "7052accb8702629071b4d2d5780ef0fb"
  },
  {
    "url": "passages/2021-08-06-elasticsearch.html",
    "revision": "73d7533ec39a77b984e35b28b5c736f3"
  },
  {
    "url": "passages/2021-08-07-elasticsearch-basic-course.html",
    "revision": "f23102098f647e15f6b1753287f9a550"
  },
  {
    "url": "passages/2021-08-15-mongo-introduce.html",
    "revision": "6fda6969a8d396927953345032b78512"
  },
  {
    "url": "passages/2021-08-15-mongo-overview.html",
    "revision": "9c7c391f12ac8a752d71c4b6d6467d4d"
  },
  {
    "url": "passages/2021-08-16-elasticsearch-ik.html",
    "revision": "fefc674a165165e8c165b34290f31ab3"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-highlight.html",
    "revision": "5cf47f787550c335c86ea39e4f05b3fc"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-integrate-springboot.html",
    "revision": "0ff60978c4cdc77f4111d9fa28d9b5ec"
  },
  {
    "url": "passages/2021-08-18-git-ignore-file.html",
    "revision": "5e1125a9f02459f2e52f9a1d039a62b4"
  },
  {
    "url": "passages/2021-08-18-springboot-argument-resolver.html",
    "revision": "f1fd03db3b4c600d95acd5cd93864e5b"
  },
  {
    "url": "passages/2021-08-19-elasticsearch-complex-query.html",
    "revision": "e3fe69f9ba8e41de831a5da9034f0a6e"
  },
  {
    "url": "passages/2021-08-19-mongo-install.html",
    "revision": "cdadfb77a74c3c5b21698baef272d9b5"
  },
  {
    "url": "passages/2021-08-27-mongo-geospatial.html",
    "revision": "c18358425bd3ff6239f54243dab9a1f9"
  },
  {
    "url": "passages/2021-08-27-mongo-springboot.html",
    "revision": "f2f582e32389e50acfb913570933a243"
  },
  {
    "url": "passages/2021-09-02-spring-cloud-openfeign.html",
    "revision": "5094a1068877e41c4f04f05122488fb3"
  },
  {
    "url": "passages/2022-01-11-mac-jdk8-slow-solution.html",
    "revision": "87f59e92ceceb62ceef2fe5891a5d741"
  },
  {
    "url": "passages/2022-02-23-git-stash-note.html",
    "revision": "f74417d94066bc9839003f3f9bcddca8"
  },
  {
    "url": "passages/2022-03-10-golang-reflect-deepEqual.html",
    "revision": "f5337bd7aadc36283bf66c8e69dbe430"
  },
  {
    "url": "passages/2022-03-19-seata-transaction-error.html",
    "revision": "25f46a592e174554e6cccc4620741fb3"
  },
  {
    "url": "passages/chain-of-responsibility.html",
    "revision": "49d63f27452169d03fe8e5a414e77a37"
  },
  {
    "url": "passages/code-spec-alibaba.html",
    "revision": "7e0fc971d59eb16e9423e9504394fa99"
  },
  {
    "url": "passages/dev-decorator-pattern.html",
    "revision": "abca87a5ec8fd85e7832b1182a046b47"
  },
  {
    "url": "passages/dev-pattern-overview.html",
    "revision": "f87bb42bb4295c5d044c172f5a7f241e"
  },
  {
    "url": "passages/go-catalog.html",
    "revision": "c9a060e7f9049c7283e87dfe39618d68"
  },
  {
    "url": "passages/tool-list-overview.html",
    "revision": "1c45b928040b122525cfb9f55249afa2"
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
