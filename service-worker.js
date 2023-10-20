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
    "revision": "c09fba5e84acedc4e203f57dd801eaef"
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
    "url": "assets/js/102.9c996d5b.js",
    "revision": "f2b83901bd2f5fa8b8e45430ca91ebce"
  },
  {
    "url": "assets/js/103.605b2d7e.js",
    "revision": "a56f7259f6956e79343f34c0b7721be8"
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
    "url": "assets/js/30.1e5c617d.js",
    "revision": "1aa19605caa0403089c2d6b0b3120b7c"
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
    "url": "assets/js/76.c48e610a.js",
    "revision": "0e905ad9028a932d36aaa5360bc4b522"
  },
  {
    "url": "assets/js/77.45bba02d.js",
    "revision": "0359a0d4d6feccf1f8a9b38337c54314"
  },
  {
    "url": "assets/js/78.932fd9f0.js",
    "revision": "1121aefcb2e67b4b4daeb366cce2fd76"
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
    "url": "assets/js/80.ca9465c3.js",
    "revision": "ad48d805404ddc4e48353f749ef34417"
  },
  {
    "url": "assets/js/81.138332ff.js",
    "revision": "fd61e28512b72396beef86174fd157c9"
  },
  {
    "url": "assets/js/82.00836c6a.js",
    "revision": "2af95a15c38a068fe69c38c4c228eeab"
  },
  {
    "url": "assets/js/83.eda83bc4.js",
    "revision": "a00cdd8c54f281338fc4e4a196e0a877"
  },
  {
    "url": "assets/js/84.2d368f4c.js",
    "revision": "8700b358f3050f61292e00f932241d64"
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
    "url": "assets/js/app.f3eb4fa8.js",
    "revision": "4acc7486ad1bc05e726fc3d4b091ce57"
  },
  {
    "url": "assets/js/vendors~docsearch.5e77459f.js",
    "revision": "6161ec1084efd4f00fa072a09a3acded"
  },
  {
    "url": "friends/index.html",
    "revision": "f9731c876a1d7576962f74656ef3215b"
  },
  {
    "url": "full.png",
    "revision": "db91198383e03e43d2008b7bc3e91416"
  },
  {
    "url": "guide/index.html",
    "revision": "beac5f48692874f0560f79e0656ed3d9"
  },
  {
    "url": "index.html",
    "revision": "3c17feef0bbffdf4645bb1122cb3a5a8"
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
    "revision": "250d3cad9146db68a6f7082eb652ae68"
  },
  {
    "url": "passages/2020-02-24-docker-install.html",
    "revision": "b0640da8e89a9eaa8aeaac18fd4c940e"
  },
  {
    "url": "passages/2020-02-25-docker-command.html",
    "revision": "269ab959b7d5836c4bb6a92acb76853e"
  },
  {
    "url": "passages/2020-02-25-nginx-command.html",
    "revision": "abab038ed57c92e5e5839ce418952b11"
  },
  {
    "url": "passages/2020-02-25-nginx-install.html",
    "revision": "30b1f153865bc2f523bd2c2702a97636"
  },
  {
    "url": "passages/2020-02-28-golang-slice-analysis.html",
    "revision": "2a0a456337736d8dda944db2efcf2fe6"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-etcd.html",
    "revision": "0803f9d325cc40a71125edd1a9de537c"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-master.html",
    "revision": "4b86c183cdcd9f5de79ef3374fb6812d"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-ready.html",
    "revision": "16676d2aaaea4792e9a832f254f3a951"
  },
  {
    "url": "passages/2020-08-12-kubernetes-generate-tls.html",
    "revision": "789cc189f9021891f6eb22c880b0d21c"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-cni.html",
    "revision": "9619cc93f8995473c66febbbd4c3d066"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-dns.html",
    "revision": "f91f56fbbde1316c724d0e389607b7cf"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-worker.html",
    "revision": "da35e1787ba4e21e752f839e2b506a56"
  },
  {
    "url": "passages/2021-04-01-idea-crack-2018.html",
    "revision": "a5fed1e932c7c5a0926b50378cf53d5e"
  },
  {
    "url": "passages/2021-04-09-java-basic-oop.html",
    "revision": "edb3537ba7c49fc100b98b8a093faa88"
  },
  {
    "url": "passages/2021-04-09-java-lan-basic.html",
    "revision": "c0067e96bf15ed133076a68e4a050a88"
  },
  {
    "url": "passages/2021-04-18-java-string-intern.html",
    "revision": "b4aca04ffc9a50df9bec0a32acd54281"
  },
  {
    "url": "passages/2021-04-19-java-basic-date.html",
    "revision": "1ddb9450071e59d7b91a0941c6dbec88"
  },
  {
    "url": "passages/2021-04-25-java-collection-frame.html",
    "revision": "bd0618f34ca7290d173188d1a4f9bdac"
  },
  {
    "url": "passages/2021-04-28-java-thread-theory.html",
    "revision": "7db9b01436eff41309f7fefa405759fd"
  },
  {
    "url": "passages/2021-05-04-java-thread-basic.html",
    "revision": "cb89f7336d15639f920848b155d69f2b"
  },
  {
    "url": "passages/2021-05-05-java-io-basic.html",
    "revision": "75b0df18d0b05cd0de2792f121c48747"
  },
  {
    "url": "passages/2021-05-06-java-io-decorator-pattern.html",
    "revision": "9f25793de0d61afa319ea02e175e00c1"
  },
  {
    "url": "passages/2021-05-08-java-basic-reflect.html",
    "revision": "61706332859c43899486f7dc04126ec3"
  },
  {
    "url": "passages/2021-06-26-golang-reflect.html",
    "revision": "f2766d089ac9869674c2f8c3171cc65a"
  },
  {
    "url": "passages/2021-06-28-docker-mysql-env.html",
    "revision": "caed6fdb53db36ac752d28a7e378fba3"
  },
  {
    "url": "passages/2021-06-28-git-common-cmd.html",
    "revision": "42e4d2bbbe7e6458e436ac8abe6db07e"
  },
  {
    "url": "passages/2021-06-29-mysql-manage-auth.html",
    "revision": "f77e6700b1d5f6a0ea3e16ce65277913"
  },
  {
    "url": "passages/2021-06-30-git-branch-manage.html",
    "revision": "a86cf34027243ccd353ca9fec8f0ea5b"
  },
  {
    "url": "passages/2021-06-30-idea-jrebel-config.html",
    "revision": "225fd4bf5d61425d863f66ece25c1379"
  },
  {
    "url": "passages/2021-07-06-group-by-error.html",
    "revision": "8dc8a2581959e2abcddcff9a592ef216"
  },
  {
    "url": "passages/2021-07-21-activiti7-note.html",
    "revision": "850383ae2365d114613e4874ae96127b"
  },
  {
    "url": "passages/2021-07-22-activiti7-common-api.html",
    "revision": "153455be933d3d149c4999fe269f9235"
  },
  {
    "url": "passages/2021-07-22-activiti7-error-note.html",
    "revision": "12dda9921a4740fa2f6d1cc4a51ed0cd"
  },
  {
    "url": "passages/2021-07-22-activiti7-note-advanced.html",
    "revision": "1fb8875bb8a5bcecf4c6528be683436c"
  },
  {
    "url": "passages/2021-07-22-activiti7-table-struct.html",
    "revision": "fb5e669c2546a517142a1dc1abb77be0"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba-nacos.html",
    "revision": "532fd6faece2be953cb5bfd347d3a22c"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba.html",
    "revision": "8484ec0c4df6de5412c87306615a4f25"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-error.html",
    "revision": "000d80a48b7347369fb372d9081edb98"
  },
  {
    "url": "passages/2021-07-29-spring-cloud-gateway.html",
    "revision": "8272d130b9d73573d6a4e3da9a70bd18"
  },
  {
    "url": "passages/2021-08-02-redis-base-desc.html",
    "revision": "7d7f20c8f30490de95a9a92b8ea1799c"
  },
  {
    "url": "passages/2021-08-02-redis-base-struct.html",
    "revision": "25e3bbd6495135950734c7e3fdcd7c13"
  },
  {
    "url": "passages/2021-08-02-redis-memory.html",
    "revision": "07b8f187ce038b1c30ed2ab308351efc"
  },
  {
    "url": "passages/2021-08-02-redis-overview.html",
    "revision": "9380e7b2dee7f583a400eaa6f1b60a3e"
  },
  {
    "url": "passages/2021-08-02-redis-rdb-aof.html",
    "revision": "3ceeefeec64251123ed335cdd08a4674"
  },
  {
    "url": "passages/2021-08-05-java-basic-enum.html",
    "revision": "0eeab6a6080fe0f6b82af949d5012374"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-env.html",
    "revision": "2d856c3ab6db7299ed1e3d593d7de11f"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-introduce.html",
    "revision": "0f5d9a506f56649dcb4d1d0a4c7e8049"
  },
  {
    "url": "passages/2021-08-06-elasticsearch.html",
    "revision": "02438d86d30a228cde5bfb7e9ea91114"
  },
  {
    "url": "passages/2021-08-07-elasticsearch-basic-course.html",
    "revision": "cec7e65abb5ac82569d10b23b7bb407c"
  },
  {
    "url": "passages/2021-08-15-mongo-introduce.html",
    "revision": "4bd531f6d6ebf89785c84eb33a131e0a"
  },
  {
    "url": "passages/2021-08-15-mongo-overview.html",
    "revision": "63dc01c255487c34a91ed734d05c364b"
  },
  {
    "url": "passages/2021-08-16-elasticsearch-ik.html",
    "revision": "7b7a25c57d0e6acf8b8fbd50ff6145df"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-highlight.html",
    "revision": "1c56416f75748f22d61bf471d1da86b8"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-integrate-springboot.html",
    "revision": "dcae836bc1bc82330ffc59b8a58207f2"
  },
  {
    "url": "passages/2021-08-18-git-ignore-file.html",
    "revision": "44c297f4d06ff9e1f2f4f71df2eec26d"
  },
  {
    "url": "passages/2021-08-18-springboot-argument-resolver.html",
    "revision": "173d6514d9b33fc3d9d2035fbc820643"
  },
  {
    "url": "passages/2021-08-19-elasticsearch-complex-query.html",
    "revision": "0b72d45dc70c013b09c69bfb156df929"
  },
  {
    "url": "passages/2021-08-19-mongo-install.html",
    "revision": "ed9a0e07d5d863245fe9de07c5e86979"
  },
  {
    "url": "passages/2021-08-27-mongo-geospatial.html",
    "revision": "abf92efbe339c8ce4bca89e989094589"
  },
  {
    "url": "passages/2021-08-27-mongo-springboot.html",
    "revision": "163a927cc3bea53f05bc8205a10fa64a"
  },
  {
    "url": "passages/2021-09-02-spring-cloud-openfeign.html",
    "revision": "03781abc8c27d4e0ea495aadd834f35f"
  },
  {
    "url": "passages/2022-01-11-mac-jdk8-slow-solution.html",
    "revision": "27fedd7a68e8710f102ee7b57aca13cf"
  },
  {
    "url": "passages/2022-02-23-git-stash-note.html",
    "revision": "3eb0053c5b3fe0e3c75089bd317fb74e"
  },
  {
    "url": "passages/2022-03-10-golang-reflect-deepEqual.html",
    "revision": "d2d2fb6ac44c8edde62ac359507250e5"
  },
  {
    "url": "passages/2022-03-19-seata-transaction-error.html",
    "revision": "2c707d567b27bff0a306379e94327498"
  },
  {
    "url": "passages/chain-of-responsibility.html",
    "revision": "6cc897a4552969c7283d7265c9ed8f65"
  },
  {
    "url": "passages/code-spec-alibaba.html",
    "revision": "c250247ce10735f202872982805eeb2a"
  },
  {
    "url": "passages/dev-decorator-pattern.html",
    "revision": "6e9706a811660787d83c270e655acb14"
  },
  {
    "url": "passages/dev-pattern-overview.html",
    "revision": "d375b059f7b88b3e765b06dcd319b24f"
  },
  {
    "url": "passages/go-catalog.html",
    "revision": "0758f79c765c8bdf45b9c6451cc3b381"
  },
  {
    "url": "passages/tool-list-overview.html",
    "revision": "8304cf84a28913bf97224fd1dc512fc0"
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
