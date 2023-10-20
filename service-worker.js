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
    "revision": "289e45479a99ea06ea729c488478a344"
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
    "url": "assets/js/30.f9a5ef07.js",
    "revision": "57589fa07776c68d99e5ecc75bbab3f5"
  },
  {
    "url": "assets/js/31.84934529.js",
    "revision": "455f1f5e3dea358c5a62e265550d3cfe"
  },
  {
    "url": "assets/js/32.e81f1958.js",
    "revision": "e0ac5e8cc9a8cde964268b6ee968fd79"
  },
  {
    "url": "assets/js/33.4fcb6313.js",
    "revision": "aaaf5431c6dfd8ab8cdbfb8c355fbb01"
  },
  {
    "url": "assets/js/34.c2a35c5d.js",
    "revision": "869e81758af478362db8e79430aa1b07"
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
    "url": "assets/js/40.071f50e2.js",
    "revision": "8f02496a14e6bd11fcf2466f70b34c58"
  },
  {
    "url": "assets/js/41.d29001b9.js",
    "revision": "63eb112c421eaf2b47ab637c7e408194"
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
    "url": "assets/js/75.fbec8e80.js",
    "revision": "2bf1b0a4b7a80fabe55951939677a6cb"
  },
  {
    "url": "assets/js/76.316cd05b.js",
    "revision": "bb949e1f59eefa7d823c82e66b43b177"
  },
  {
    "url": "assets/js/77.84ade49e.js",
    "revision": "b77b15055f23b5fe3334eca7ed7a62ea"
  },
  {
    "url": "assets/js/78.420c8ea6.js",
    "revision": "7aff89695ee08059c5a9bee5efbbc65d"
  },
  {
    "url": "assets/js/79.831f2cfa.js",
    "revision": "c4d8656db04dbe601ea614398996a518"
  },
  {
    "url": "assets/js/8.7d5c9344.js",
    "revision": "5d6481a8b16990e0292cb6022508de8e"
  },
  {
    "url": "assets/js/80.0cd1a80d.js",
    "revision": "f34d5feb0823a70eb12cd3f86ca7f251"
  },
  {
    "url": "assets/js/81.621904a0.js",
    "revision": "0250607c42af354aa92e0b126055be81"
  },
  {
    "url": "assets/js/82.55c7cdd4.js",
    "revision": "210e170f6743b809cda2d14113e26ae0"
  },
  {
    "url": "assets/js/83.3969a698.js",
    "revision": "96105fa188b3bce1db7a4521bdb2482a"
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
    "url": "assets/js/93.8b167c96.js",
    "revision": "53b6860dc1d6bb38620fe0ba310c0b60"
  },
  {
    "url": "assets/js/94.1574109e.js",
    "revision": "94aa0df7855ac7da13a471110230afbd"
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
    "url": "assets/js/app.3af5dc10.js",
    "revision": "ac52f71c809dc78f4fa55ff872a3062b"
  },
  {
    "url": "assets/js/vendors~docsearch.5e77459f.js",
    "revision": "6161ec1084efd4f00fa072a09a3acded"
  },
  {
    "url": "friends/index.html",
    "revision": "c2a290b903dae819519c1baa1167deff"
  },
  {
    "url": "full.png",
    "revision": "db91198383e03e43d2008b7bc3e91416"
  },
  {
    "url": "guide/index.html",
    "revision": "1115b8e852a135d53b7ed9036f73fe0e"
  },
  {
    "url": "index.html",
    "revision": "48b1fb7c5fd08a9fd3f8c2683ca0936d"
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
    "revision": "ff8210bc29793ef94502131787fbd875"
  },
  {
    "url": "passages/2020-02-24-docker-install.html",
    "revision": "b62a26806fb1a164d00dc32fafa64abc"
  },
  {
    "url": "passages/2020-02-25-docker-command.html",
    "revision": "a134160bb9b3152e8f793f22f472b8e9"
  },
  {
    "url": "passages/2020-02-25-nginx-command.html",
    "revision": "8a21531a663bb31535e2f523c4f4995a"
  },
  {
    "url": "passages/2020-02-25-nginx-install.html",
    "revision": "f9a03623ff4b86f98a5693d56735d0c1"
  },
  {
    "url": "passages/2020-02-28-golang-slice-analysis.html",
    "revision": "f26bc6961f940cfd30965f8a79600955"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-etcd.html",
    "revision": "7c9b5b541bfce045bb50db6958537b85"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-master.html",
    "revision": "c79b4025ca5e44b3a7054e0cb60d5260"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-ready.html",
    "revision": "2e411cfbff2b36c3aa2e647980ec4285"
  },
  {
    "url": "passages/2020-08-12-kubernetes-generate-tls.html",
    "revision": "1fcebdb83353a538cc6d7421cf21d3bb"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-cni.html",
    "revision": "28144c54f4aa51d0ba709cf9d864d2e3"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-dns.html",
    "revision": "439528c8f9a1cae12078cc50533c8a16"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-worker.html",
    "revision": "32d773206bf725567146b136becaacba"
  },
  {
    "url": "passages/2021-04-01-idea-crack-2018.html",
    "revision": "0e48bfad24c4ae691f9edafee0479dad"
  },
  {
    "url": "passages/2021-04-09-java-basic-oop.html",
    "revision": "65fd08289dc4dd41637d3405a08abaa1"
  },
  {
    "url": "passages/2021-04-09-java-lan-basic.html",
    "revision": "fb1b8adc4d69473bec3cda62a20e5452"
  },
  {
    "url": "passages/2021-04-18-java-string-intern.html",
    "revision": "a94cd7d88c15be9b196f6945d777f8f4"
  },
  {
    "url": "passages/2021-04-19-java-basic-date.html",
    "revision": "fd651855382af4a7db2de1d507e4329f"
  },
  {
    "url": "passages/2021-04-25-java-collection-frame.html",
    "revision": "a4bb4063639a441fd837bdb114e214e7"
  },
  {
    "url": "passages/2021-04-28-java-thread-theory.html",
    "revision": "f3d33739adbd99fbe5dcac7ecfc56dae"
  },
  {
    "url": "passages/2021-05-04-java-thread-basic.html",
    "revision": "53317c8a8b69cf8327d764366941ec27"
  },
  {
    "url": "passages/2021-05-05-java-io-basic.html",
    "revision": "c542740813c6ac3e1e57f5d8ff5b5571"
  },
  {
    "url": "passages/2021-05-06-java-io-decorator-pattern.html",
    "revision": "604f1be824ba2b4b0ad0fa19e8c0a6e6"
  },
  {
    "url": "passages/2021-05-08-java-basic-reflect.html",
    "revision": "ce37456350ec04bfd739544c8ed3ecd2"
  },
  {
    "url": "passages/2021-06-26-golang-reflect.html",
    "revision": "106094e908d3276f52ea14e40bb6db7a"
  },
  {
    "url": "passages/2021-06-28-docker-mysql-env.html",
    "revision": "fb5903e58635bcaa01c2a6620f2e2e31"
  },
  {
    "url": "passages/2021-06-28-git-common-cmd.html",
    "revision": "1f4a5bae699ddf8a2ae0a5290c9e9205"
  },
  {
    "url": "passages/2021-06-29-mysql-manage-auth.html",
    "revision": "22a99d87a7d37958eb72c1a132cd985e"
  },
  {
    "url": "passages/2021-06-30-git-branch-manage.html",
    "revision": "409bc0988e253cb0deffa30fc8579ee9"
  },
  {
    "url": "passages/2021-06-30-idea-jrebel-config.html",
    "revision": "b4a81808bf042d68582eb21e82a9e0a2"
  },
  {
    "url": "passages/2021-07-06-group-by-error.html",
    "revision": "1732ccfe2724ad0c8cb896ed883c6736"
  },
  {
    "url": "passages/2021-07-21-activiti7-note.html",
    "revision": "5da35f7fcf0da59c9ab9da615bfab177"
  },
  {
    "url": "passages/2021-07-22-activiti7-common-api.html",
    "revision": "011a960c4375e4aca4568fc6efdd4e18"
  },
  {
    "url": "passages/2021-07-22-activiti7-error-note.html",
    "revision": "d63b1e8712d9324de962242192ccdd5c"
  },
  {
    "url": "passages/2021-07-22-activiti7-note-advanced.html",
    "revision": "75f8b70101a8680469d2f1b8212c900f"
  },
  {
    "url": "passages/2021-07-22-activiti7-table-struct.html",
    "revision": "7b0e556fcd756657d070851107b526d7"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba-nacos.html",
    "revision": "48c5758bda5fa92d42e1fe5e731555ae"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba.html",
    "revision": "d729605bb95065b6b9c6205d58ccfd4f"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-error.html",
    "revision": "9eabcdd05ebf41be0fe90b5e66982847"
  },
  {
    "url": "passages/2021-07-29-spring-cloud-gateway.html",
    "revision": "1b5a300f86ddc7fa999ae0a54896d14b"
  },
  {
    "url": "passages/2021-08-02-redis-base-desc.html",
    "revision": "368d9a817b6eb3ec3c56cac183261188"
  },
  {
    "url": "passages/2021-08-02-redis-base-struct.html",
    "revision": "90fe312a74730b80f938179e5f992504"
  },
  {
    "url": "passages/2021-08-02-redis-memory.html",
    "revision": "60eae274d58b27bbccc5e7f276a8d845"
  },
  {
    "url": "passages/2021-08-02-redis-overview.html",
    "revision": "5d2bc268ea4455901ed605070316dfd3"
  },
  {
    "url": "passages/2021-08-02-redis-rdb-aof.html",
    "revision": "d2936a71f12fef3791b5c413fb847f97"
  },
  {
    "url": "passages/2021-08-05-java-basic-enum.html",
    "revision": "36eb610d326e8a090bd0ed0bda83655c"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-env.html",
    "revision": "0ddffea1d18beac92084284f1a861960"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-introduce.html",
    "revision": "96fdb4b4d8f6b0a7cead5da4d42276d3"
  },
  {
    "url": "passages/2021-08-06-elasticsearch.html",
    "revision": "da24cda7c0f35007483956f81b4cbe3b"
  },
  {
    "url": "passages/2021-08-07-elasticsearch-basic-course.html",
    "revision": "1d6e231a93f8875db97370ac61d8071b"
  },
  {
    "url": "passages/2021-08-15-mongo-introduce.html",
    "revision": "00631ecb6b66d503ed2a0661e7103f5d"
  },
  {
    "url": "passages/2021-08-15-mongo-overview.html",
    "revision": "b4c03b5ebc05a98945b9cdc437e2c2c1"
  },
  {
    "url": "passages/2021-08-16-elasticsearch-ik.html",
    "revision": "c26b893e8c6f142e78cbc51a792a6e54"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-highlight.html",
    "revision": "5cb719a4d5fa73ab7c38ce4ffa85fac2"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-integrate-springboot.html",
    "revision": "11d58dcef4a6bc702a93cc7e61c6e660"
  },
  {
    "url": "passages/2021-08-18-git-ignore-file.html",
    "revision": "ea308205ee1da5ef91ed5d41217423a1"
  },
  {
    "url": "passages/2021-08-18-springboot-argument-resolver.html",
    "revision": "31717502a26372291164bd9199a41502"
  },
  {
    "url": "passages/2021-08-19-elasticsearch-complex-query.html",
    "revision": "efb0dc5f9b5e1d400977ee27fdcaaf36"
  },
  {
    "url": "passages/2021-08-19-mongo-install.html",
    "revision": "9abcce6896c87561e06596b3f5ab0e01"
  },
  {
    "url": "passages/2021-08-27-mongo-geospatial.html",
    "revision": "c3c500f22034c42a456dc62fcc966cef"
  },
  {
    "url": "passages/2021-08-27-mongo-springboot.html",
    "revision": "3ca5b4a7a7a99e9b088ab6d24579e63c"
  },
  {
    "url": "passages/2021-09-02-spring-cloud-openfeign.html",
    "revision": "4dc460fa37b6184ceaab22e53d23c728"
  },
  {
    "url": "passages/2022-01-11-mac-jdk8-slow-solution.html",
    "revision": "39dbd3c30e9bfaf503d2b2cabecb2c7c"
  },
  {
    "url": "passages/2022-02-23-git-stash-note.html",
    "revision": "0cac46cb20b61c93bd9134bd5b067df4"
  },
  {
    "url": "passages/2022-03-10-golang-reflect-deepEqual.html",
    "revision": "4baa8f34d54a0f8900ca372a4092b412"
  },
  {
    "url": "passages/2022-03-19-seata-transaction-error.html",
    "revision": "0e32772f9a5fbc5eea57b08ab13f329c"
  },
  {
    "url": "passages/chain-of-responsibility.html",
    "revision": "f57bf2f360692c774120522cc56bf92d"
  },
  {
    "url": "passages/code-spec-alibaba.html",
    "revision": "4a11ef24241080b6d9dfdb59a0ae911b"
  },
  {
    "url": "passages/dev-decorator-pattern.html",
    "revision": "4af1b90e4a1dd3e8c50e1b04773528a4"
  },
  {
    "url": "passages/dev-pattern-overview.html",
    "revision": "0d86a19b7b85cf7f03302852ad2966b6"
  },
  {
    "url": "passages/go-catalog.html",
    "revision": "4a072d524e2d7902bf1524aeeab003c7"
  },
  {
    "url": "passages/tool-list-overview.html",
    "revision": "e948192468eff8cbd3fb5a6d2547f08e"
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
