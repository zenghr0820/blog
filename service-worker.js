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
    "revision": "3aedaa0c845235200161284e6bc9baea"
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
    "url": "assets/js/100.912ce938.js",
    "revision": "9e2f173855bd2f2238377893d74880e1"
  },
  {
    "url": "assets/js/101.a7d160a3.js",
    "revision": "02b0a194ec94cadc8792fdd0441b763e"
  },
  {
    "url": "assets/js/102.caf17524.js",
    "revision": "b43d42360f1ae6102e3a10198b720059"
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
    "url": "assets/js/76.316cd05b.js",
    "revision": "bb949e1f59eefa7d823c82e66b43b177"
  },
  {
    "url": "assets/js/77.84ade49e.js",
    "revision": "b77b15055f23b5fe3334eca7ed7a62ea"
  },
  {
    "url": "assets/js/78.67384de6.js",
    "revision": "de7b068b5c5593d743068fc240f77bac"
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
    "url": "assets/js/82.d1b3a5df.js",
    "revision": "a5a9dadd908f4d4ee5ba82db0f2e288e"
  },
  {
    "url": "assets/js/83.3969a698.js",
    "revision": "96105fa188b3bce1db7a4521bdb2482a"
  },
  {
    "url": "assets/js/84.2d368f4c.js",
    "revision": "8700b358f3050f61292e00f932241d64"
  },
  {
    "url": "assets/js/85.5f233a6e.js",
    "revision": "1e81355511f568bf717ba4884085f9c4"
  },
  {
    "url": "assets/js/86.e08dfdb5.js",
    "revision": "8166cf2b45a72bdf4e2476caf5219249"
  },
  {
    "url": "assets/js/87.90b5e542.js",
    "revision": "a121016dc0488614172ff02556a3cac0"
  },
  {
    "url": "assets/js/88.62bf4a3d.js",
    "revision": "64a47a72bf2ba0077f257d788f64dc13"
  },
  {
    "url": "assets/js/89.55b908fe.js",
    "revision": "96a4513476f792873c02393b7bc50c32"
  },
  {
    "url": "assets/js/90.17c8dd81.js",
    "revision": "d26f4c239907ee08ebd8eb5fc48c3faa"
  },
  {
    "url": "assets/js/91.c004502f.js",
    "revision": "19325d898190e10a941978cefab79c2a"
  },
  {
    "url": "assets/js/92.25ab935a.js",
    "revision": "1086992839ae46cd29b3c3d57c0ac92b"
  },
  {
    "url": "assets/js/93.a0cdd52e.js",
    "revision": "521258ce97864d0b4b4821fbf27ab618"
  },
  {
    "url": "assets/js/94.1574109e.js",
    "revision": "94aa0df7855ac7da13a471110230afbd"
  },
  {
    "url": "assets/js/95.b73190ac.js",
    "revision": "e9e5d1aa9fdf74b21e364da60c8c23c7"
  },
  {
    "url": "assets/js/96.2bb09bf0.js",
    "revision": "f92ef295499c6eff89e8b6adc98ab1ea"
  },
  {
    "url": "assets/js/97.ed55a7d1.js",
    "revision": "24903bf905f342d0b968e088055b7ced"
  },
  {
    "url": "assets/js/98.4eb1c25a.js",
    "revision": "b3888e193c8bb4a59d1c16394f35b4d1"
  },
  {
    "url": "assets/js/99.ad223958.js",
    "revision": "ae072520464d2b4044fdfc4b8fa80129"
  },
  {
    "url": "assets/js/app.64d54db0.js",
    "revision": "647b259472ce8c864c4be09106b8e490"
  },
  {
    "url": "assets/js/vendors~docsearch.5e77459f.js",
    "revision": "6161ec1084efd4f00fa072a09a3acded"
  },
  {
    "url": "friends/index.html",
    "revision": "b02a043f18995d87c460201ce9c1c04a"
  },
  {
    "url": "full.png",
    "revision": "db91198383e03e43d2008b7bc3e91416"
  },
  {
    "url": "guide/index.html",
    "revision": "873de1831abf6b07f020f27ebf3bd321"
  },
  {
    "url": "index.html",
    "revision": "eee0614ea78989e4bf0c68b0c4ec6ed0"
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
    "revision": "8f4232b45275bf4bd8180120d9935280"
  },
  {
    "url": "passages/2020-02-24-docker-install.html",
    "revision": "480454997cd84ea2d30e9c3958a6de1f"
  },
  {
    "url": "passages/2020-02-25-docker-command.html",
    "revision": "a39a0585c3ab558f8e3b78c943dc14e5"
  },
  {
    "url": "passages/2020-02-25-nginx-command.html",
    "revision": "6158990679c5aa443edbef15522ef20e"
  },
  {
    "url": "passages/2020-02-25-nginx-install.html",
    "revision": "d6b97ef17cfd6638c5c736a38b05f657"
  },
  {
    "url": "passages/2020-02-28-golang-slice-analysis.html",
    "revision": "d6843c6330f0fea03f0d95d1ae21298e"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-etcd.html",
    "revision": "f20557b0a2a12cfaf10f35324db33be7"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-master.html",
    "revision": "c8966a66c6341dc28f617fc8b7198b6e"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-ready.html",
    "revision": "2c67674ee4cb3ed678a51d3c9bf772cd"
  },
  {
    "url": "passages/2020-08-12-kubernetes-generate-tls.html",
    "revision": "4a62bdce73ce04061d92f8e63e87fc88"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-cni.html",
    "revision": "193561d5a180c9290de224989e06dbe3"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-dns.html",
    "revision": "6a7887f077b19cfc5670a4f84772f1df"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-worker.html",
    "revision": "4e55108f465754211b081815d48035a3"
  },
  {
    "url": "passages/2021-04-01-idea-crack-2018.html",
    "revision": "3de22bf1e13ce8a27d457ac5fa628b07"
  },
  {
    "url": "passages/2021-04-09-java-basic-oop.html",
    "revision": "0f8dc3b9c1cadfdf422a5be4703a0af9"
  },
  {
    "url": "passages/2021-04-09-java-lan-basic.html",
    "revision": "e632a435e2b147222145e47ebb91e1fd"
  },
  {
    "url": "passages/2021-04-18-java-string-intern.html",
    "revision": "16aff9f327dd48d2699bd16abaeed050"
  },
  {
    "url": "passages/2021-04-19-java-basic-date.html",
    "revision": "1a26924234ffa8580b8f9055ea599ca6"
  },
  {
    "url": "passages/2021-04-25-java-collection-frame.html",
    "revision": "b462e1f41cd9ac81e30da37799b6b57c"
  },
  {
    "url": "passages/2021-04-28-java-thread-theory.html",
    "revision": "6c76e3dfee5150f9b3b2d3f5a0153207"
  },
  {
    "url": "passages/2021-05-04-java-thread-basic.html",
    "revision": "fd08695156be2b50c499fd39cb9ab125"
  },
  {
    "url": "passages/2021-05-05-java-io-basic.html",
    "revision": "6b97afe9d339595f38aa711ffc458360"
  },
  {
    "url": "passages/2021-05-06-java-io-decorator-pattern.html",
    "revision": "bace3e254affe132e1322b5a708fec3e"
  },
  {
    "url": "passages/2021-05-08-java-basic-reflect.html",
    "revision": "96eaeadedc5708c1615d4e4b476043c4"
  },
  {
    "url": "passages/2021-06-26-golang-reflect.html",
    "revision": "00d1f020aceab6f21ef223c1986c2b9f"
  },
  {
    "url": "passages/2021-06-28-docker-mysql-env.html",
    "revision": "0c56a25eea75059384d3a1cc7b10a451"
  },
  {
    "url": "passages/2021-06-28-git-common-cmd.html",
    "revision": "10c1d0482793551973aa35f175f83558"
  },
  {
    "url": "passages/2021-06-29-mysql-manage-auth.html",
    "revision": "aea302f67d185490621c62558ce32a35"
  },
  {
    "url": "passages/2021-06-30-git-branch-manage.html",
    "revision": "0acced318fa7c30a2e586dbabbb777e0"
  },
  {
    "url": "passages/2021-06-30-idea-jrebel-config.html",
    "revision": "53eb2689ca15e581c28edce7c1ddd227"
  },
  {
    "url": "passages/2021-07-06-group-by-error.html",
    "revision": "26a36c3afa4027e1ab6ba1c46aff4225"
  },
  {
    "url": "passages/2021-07-21-activiti7-note.html",
    "revision": "04c40588efe18c2aa7d099c74bb0d6ca"
  },
  {
    "url": "passages/2021-07-22-activiti7-common-api.html",
    "revision": "787a03182886c02aff222a11f9172c71"
  },
  {
    "url": "passages/2021-07-22-activiti7-error-note.html",
    "revision": "7b572614e95085823a5775a9773a4f4b"
  },
  {
    "url": "passages/2021-07-22-activiti7-note-advanced.html",
    "revision": "3760fde448ab7b167e7cbb9a1b9bb05f"
  },
  {
    "url": "passages/2021-07-22-activiti7-table-struct.html",
    "revision": "3ddde107a1b2565a6e6bec1ac21ade49"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba-nacos.html",
    "revision": "876e5bd9b49356522952a11d24c1024f"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba.html",
    "revision": "a1e1350fd21f5615f7eb14d5d12be222"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-error.html",
    "revision": "5b766be5b8f11372d3bac19cba59c839"
  },
  {
    "url": "passages/2021-07-29-spring-cloud-gateway.html",
    "revision": "188882c0ae8f2060dfaa41f9eb2bde1e"
  },
  {
    "url": "passages/2021-08-02-redis-base-desc.html",
    "revision": "7a4ea110a6ed94f0e8e9bb5c2e59bc3d"
  },
  {
    "url": "passages/2021-08-02-redis-base-struct.html",
    "revision": "e81da8ffee66fb9e5659941a104dcc82"
  },
  {
    "url": "passages/2021-08-02-redis-memory.html",
    "revision": "7ad3d4ff71bb28bf2c011bb22c0ab9a9"
  },
  {
    "url": "passages/2021-08-02-redis-overview.html",
    "revision": "020392301ff632565d6aa6538dd9c881"
  },
  {
    "url": "passages/2021-08-02-redis-rdb-aof.html",
    "revision": "fd8177d5568bcedf52adcae6bf993423"
  },
  {
    "url": "passages/2021-08-05-java-basic-enum.html",
    "revision": "63100fc0fdbd1a8a16975368779f68a8"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-env.html",
    "revision": "2febc785add646b310890b9fad5bba90"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-introduce.html",
    "revision": "16d3c74237e67a7cbc166b4d063c4413"
  },
  {
    "url": "passages/2021-08-06-elasticsearch.html",
    "revision": "0b500bc4dc8336584bbc1d6e9f10e56e"
  },
  {
    "url": "passages/2021-08-07-elasticsearch-basic-course.html",
    "revision": "667629be6a67d8e34aaeb97c8ee85974"
  },
  {
    "url": "passages/2021-08-15-mongo-introduce.html",
    "revision": "4685c277686935610d5ef59ca35fbd1b"
  },
  {
    "url": "passages/2021-08-15-mongo-overview.html",
    "revision": "7b4999652914ba32b2537b203605dade"
  },
  {
    "url": "passages/2021-08-16-elasticsearch-ik.html",
    "revision": "d46f8d69670c35914bcf654e171a1573"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-highlight.html",
    "revision": "bf37d2d7ace1cec17625eab2a34431bb"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-integrate-springboot.html",
    "revision": "7a38f8ac0808b16a22075abeb0d38654"
  },
  {
    "url": "passages/2021-08-18-git-ignore-file.html",
    "revision": "ea3ec172aea837a621ae3be791ac5510"
  },
  {
    "url": "passages/2021-08-18-springboot-argument-resolver.html",
    "revision": "1863c04d179f7b0e58e3079b5aa33bc5"
  },
  {
    "url": "passages/2021-08-19-elasticsearch-complex-query.html",
    "revision": "0309fab8e420612d007767b98ae39776"
  },
  {
    "url": "passages/2021-08-19-mongo-install.html",
    "revision": "06b56302f3b25898d3b2c690e743d45c"
  },
  {
    "url": "passages/2021-08-27-mongo-geospatial.html",
    "revision": "4bac84eab6e384d210869a0f54640f5a"
  },
  {
    "url": "passages/2021-08-27-mongo-springboot.html",
    "revision": "04dda378136329c7b371ebc6ec2d8689"
  },
  {
    "url": "passages/2021-09-02-spring-cloud-openfeign.html",
    "revision": "c50389416696e5aa0a594c3c24e30ea2"
  },
  {
    "url": "passages/2022-01-11-mac-jdk8-slow-solution.html",
    "revision": "10ea471c514fc0d5e32d6caeb86187bf"
  },
  {
    "url": "passages/2022-02-23-git-stash-note.html",
    "revision": "c74e2273ae70d8158cf8f5cb59b91bf3"
  },
  {
    "url": "passages/2022-03-10-golang-reflect-deepEqual.html",
    "revision": "dcafb0eeb21413048dc0d4ab55699117"
  },
  {
    "url": "passages/2022-03-19-seata-transaction-error.html",
    "revision": "a2bc0c60a38a3a0fea2b1262e7354fda"
  },
  {
    "url": "passages/chain-of-responsibility.html",
    "revision": "12ef58c623602ae1a4c547fea7527325"
  },
  {
    "url": "passages/code-spec-alibaba.html",
    "revision": "8229b6ea1efcf5017f55961f075954e3"
  },
  {
    "url": "passages/dev-decorator-pattern.html",
    "revision": "8b5db0d9c0b9c1c73d31bc699e5e0cf2"
  },
  {
    "url": "passages/dev-pattern-overview.html",
    "revision": "84a982d6b59f7d142c5e098c5ea820f8"
  },
  {
    "url": "passages/go-catalog.html",
    "revision": "2178e56d0abe6ea405135ee1e941af9b"
  },
  {
    "url": "passages/tool-list-overview.html",
    "revision": "3503bf38d48df77988b9fafe864c1399"
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
