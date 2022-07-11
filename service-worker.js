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
    "revision": "e0ead3589f6ff6b1c994bc3298e2f784"
  },
  {
    "url": "assets/css/0.styles.40e6d409.css",
    "revision": "d5fb0fc4a68e96c876873b0423f5663c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.04153bc9.js",
    "revision": "6f5653b9d0774e4b0719fd76aa1c49c0"
  },
  {
    "url": "assets/js/11.2608d821.js",
    "revision": "e471def2e35cc62cb01e79e8b9431e48"
  },
  {
    "url": "assets/js/12.0daeaa9b.js",
    "revision": "199d65aa75fc331ee1a737d4327cc0fc"
  },
  {
    "url": "assets/js/13.d4603cae.js",
    "revision": "05fa955a87400407f4824404c23ecf32"
  },
  {
    "url": "assets/js/14.30263e34.js",
    "revision": "9f20da9db2fdc890e7e7e7b09d6c5abe"
  },
  {
    "url": "assets/js/15.f9ad01e5.js",
    "revision": "bc919416b6fc391f6c5845a9cf590aa0"
  },
  {
    "url": "assets/js/16.373121db.js",
    "revision": "d7199dbb4c425fe556f1d1dccf0067f6"
  },
  {
    "url": "assets/js/17.002f322b.js",
    "revision": "08c68dc208417375a9829e0fc7dc6af5"
  },
  {
    "url": "assets/js/18.cbced4fe.js",
    "revision": "9c1fba56b9aff0833b2a202bf7b0bc69"
  },
  {
    "url": "assets/js/19.db5ad804.js",
    "revision": "eef7fc8f12353d61238f1c290aaf0781"
  },
  {
    "url": "assets/js/2.3bcbf9c7.js",
    "revision": "95037f305c795ed48180de7cf50521cd"
  },
  {
    "url": "assets/js/20.9c9513c7.js",
    "revision": "92f3215360bcaae708c53506d6ffe0ff"
  },
  {
    "url": "assets/js/21.ac7e1cf3.js",
    "revision": "c0359ba8cae1edec21f4045fea188673"
  },
  {
    "url": "assets/js/22.98d19f1a.js",
    "revision": "c920a79225bb32adea003ded83a2e414"
  },
  {
    "url": "assets/js/23.81f244b7.js",
    "revision": "97a0d35ac1eb52fc473fcb221431f8b1"
  },
  {
    "url": "assets/js/24.1750ff92.js",
    "revision": "ef5811d0e79e56e421a9ea1983d97fed"
  },
  {
    "url": "assets/js/25.3c622977.js",
    "revision": "0d1b6556cc5eea52584d9268a28b2e04"
  },
  {
    "url": "assets/js/26.96fc3699.js",
    "revision": "ffb29fff1ccd2d97d2e11bf9abfe8a83"
  },
  {
    "url": "assets/js/27.7c9e5429.js",
    "revision": "048dda89ec5637bec45d92677678d47c"
  },
  {
    "url": "assets/js/28.d7c941a5.js",
    "revision": "4c3d414fd4de51ea98cbe6de3072dc1f"
  },
  {
    "url": "assets/js/29.52dbf6fa.js",
    "revision": "5e112d6c527aafbbf98916e1f448d898"
  },
  {
    "url": "assets/js/3.5ded679c.js",
    "revision": "d513f695d4f479b9537f5c8106008021"
  },
  {
    "url": "assets/js/30.46dc896c.js",
    "revision": "57b532dd8629c41abcc0c65a2936137a"
  },
  {
    "url": "assets/js/31.001750af.js",
    "revision": "e341e0224bf4ddbf73ea42969f64d494"
  },
  {
    "url": "assets/js/32.63a5326c.js",
    "revision": "2e797eed52861b15e4059f2c8d96cf5a"
  },
  {
    "url": "assets/js/33.71a3cc0a.js",
    "revision": "21edc86ab198cbacd822387ca52337eb"
  },
  {
    "url": "assets/js/34.56944fe3.js",
    "revision": "bcc61380c88cef0f339e94a5f0504a3d"
  },
  {
    "url": "assets/js/35.efb1f471.js",
    "revision": "04161d9f5f8706babcf4be9cd30c843a"
  },
  {
    "url": "assets/js/36.ccec69fe.js",
    "revision": "ded9d5810ebce31e41b09e60e48d693e"
  },
  {
    "url": "assets/js/37.2926ec61.js",
    "revision": "5c7ff4a36b111446bb7f581a92943a84"
  },
  {
    "url": "assets/js/38.660b4175.js",
    "revision": "515eead8679091824e1f16ac99dc987e"
  },
  {
    "url": "assets/js/39.8e208f76.js",
    "revision": "0e574873deb552b0ca862eeab960e98e"
  },
  {
    "url": "assets/js/4.6ca913cf.js",
    "revision": "57deed6db7de01bd89582b702ec8e240"
  },
  {
    "url": "assets/js/40.61b8034e.js",
    "revision": "a448ebc2956cdbb6a6307ed3eb17d9e3"
  },
  {
    "url": "assets/js/41.beac8270.js",
    "revision": "0117cb07b8655c99f1b84e063f5aea6d"
  },
  {
    "url": "assets/js/42.fd79480a.js",
    "revision": "a1a6ed33ddfa63970c5d840206d77062"
  },
  {
    "url": "assets/js/43.070ef247.js",
    "revision": "09a406b264a99d5940da97d10735efa4"
  },
  {
    "url": "assets/js/44.90098dd8.js",
    "revision": "7e21201810e7da87cc08a210045fae35"
  },
  {
    "url": "assets/js/45.fb7f04d9.js",
    "revision": "8df62a5e1a275d518583f49fb79a6626"
  },
  {
    "url": "assets/js/46.9f5c61eb.js",
    "revision": "144d455122b15941e129f8c6bb4107ad"
  },
  {
    "url": "assets/js/47.5150f37e.js",
    "revision": "59845693c65e4c145e91e0656cb8337b"
  },
  {
    "url": "assets/js/48.e4b6da20.js",
    "revision": "1b81699ed3740d56760a933ba616e393"
  },
  {
    "url": "assets/js/49.4f1ba364.js",
    "revision": "f7dfda8e47855b634da0157ad7adc85d"
  },
  {
    "url": "assets/js/5.df73da89.js",
    "revision": "47ff0ff2d14e02de1c38643fab81b002"
  },
  {
    "url": "assets/js/50.3b48478e.js",
    "revision": "3dfd61d7cfb4e77b2b75a1101433ad17"
  },
  {
    "url": "assets/js/51.61dd55c8.js",
    "revision": "5d8722bbb73d17b0fbdbb300a6cc481e"
  },
  {
    "url": "assets/js/52.5feca2c2.js",
    "revision": "c21a7165cfabdf505cbe4a921bb88edc"
  },
  {
    "url": "assets/js/53.5ae3f14e.js",
    "revision": "bc6e17b1bfbe09076bdb89b085ced6d1"
  },
  {
    "url": "assets/js/54.1f5e32a5.js",
    "revision": "1f2b4e185b1e82216b0fbc597d38a916"
  },
  {
    "url": "assets/js/55.6fb4760b.js",
    "revision": "652d2acc2b8fcb4b46f29d88ca0fb2d1"
  },
  {
    "url": "assets/js/56.50b28b75.js",
    "revision": "97aa22d8157864580c290b08a6c1de26"
  },
  {
    "url": "assets/js/57.67574ed0.js",
    "revision": "0be99ef5183b8c468815e19ca56762f1"
  },
  {
    "url": "assets/js/58.4fbf7cf1.js",
    "revision": "22328db377b33c95a5feb497dbd2dd99"
  },
  {
    "url": "assets/js/59.ff6daca7.js",
    "revision": "0fc2445f6b26f9a7453e39cd12a70b2b"
  },
  {
    "url": "assets/js/6.eaefe7ba.js",
    "revision": "d9adb74b6d8c707b28df747ec2cc528b"
  },
  {
    "url": "assets/js/60.902afb3d.js",
    "revision": "7f988d4ccabd5292f12ba7fcdb0291a1"
  },
  {
    "url": "assets/js/61.89357986.js",
    "revision": "ce8eb78bb443643354c3317429e68e61"
  },
  {
    "url": "assets/js/62.e4d4b952.js",
    "revision": "c6f588630a45754da4670724e72a22fa"
  },
  {
    "url": "assets/js/63.5909108c.js",
    "revision": "2dda9011ccc21ff2e149584e1f1c0c35"
  },
  {
    "url": "assets/js/64.0a252c1f.js",
    "revision": "91d003135bc166e7bbc01dac4d4257e6"
  },
  {
    "url": "assets/js/65.f24ea9a7.js",
    "revision": "4fc22b3cd89a107fdb211dc2d5742d01"
  },
  {
    "url": "assets/js/66.8291859c.js",
    "revision": "ec7a2c28ad3ffd753d504b04028bae42"
  },
  {
    "url": "assets/js/67.7403743f.js",
    "revision": "456c50d9360baf8dd452804c202981b2"
  },
  {
    "url": "assets/js/68.bee74822.js",
    "revision": "7c705ab7222e694ab3069615636c985f"
  },
  {
    "url": "assets/js/69.87dda0ad.js",
    "revision": "a226be43477436fac03dcb862f49d268"
  },
  {
    "url": "assets/js/7.944d5a58.js",
    "revision": "0355946c9eb57d523207ac18d9f264de"
  },
  {
    "url": "assets/js/70.d0c54e2e.js",
    "revision": "b3ba279b94ebc45a728a8ec941874e8f"
  },
  {
    "url": "assets/js/71.6eaec73e.js",
    "revision": "e5e44e2057e18e41bf8d7346a7ae0d46"
  },
  {
    "url": "assets/js/72.31c0d947.js",
    "revision": "05c92d989b2cfb59529aee563ad1b2ae"
  },
  {
    "url": "assets/js/73.c19147ed.js",
    "revision": "8e0780301d4d6ffda17e73346f5cddf1"
  },
  {
    "url": "assets/js/74.1e8dc310.js",
    "revision": "83aa19df35d9a7537c44edc1c7dc3564"
  },
  {
    "url": "assets/js/75.05f42dff.js",
    "revision": "554e1100f3bae9bf32b724c9b6da6177"
  },
  {
    "url": "assets/js/76.4ccb0e6f.js",
    "revision": "98b6a8fbbf58f533938ffef92047c3da"
  },
  {
    "url": "assets/js/77.12d8c7e4.js",
    "revision": "a2d6fcbf2af1d652d39a239752039e9c"
  },
  {
    "url": "assets/js/78.826a2622.js",
    "revision": "9a3c18beafd3a47e2fbbe2501a266968"
  },
  {
    "url": "assets/js/79.26a4eed7.js",
    "revision": "fd1615e4bb5af69a56d8f83eb1c7530c"
  },
  {
    "url": "assets/js/8.5d7c5743.js",
    "revision": "d74fb628eea9ba16f53c240fe184baa4"
  },
  {
    "url": "assets/js/80.f9e49a14.js",
    "revision": "86f019b236c17c335f23cc54e3f644db"
  },
  {
    "url": "assets/js/81.4b6741de.js",
    "revision": "b8eaf933a2ebb0d35ab0aa9d810f3ce8"
  },
  {
    "url": "assets/js/82.718be8a0.js",
    "revision": "8af44f61f5856596a88e98a54c9813d8"
  },
  {
    "url": "assets/js/83.fd6a7f32.js",
    "revision": "4da7c5cf928a152d5e258ea97b6980b8"
  },
  {
    "url": "assets/js/84.001574eb.js",
    "revision": "5c741c25c4d342da0c7c4af593ee6d27"
  },
  {
    "url": "assets/js/85.d1bdde68.js",
    "revision": "4cfbb669c20031f90530f7fb188803d9"
  },
  {
    "url": "assets/js/9.fc00dd7a.js",
    "revision": "4cfb53c93bb3aa21a5dd1507251c49c3"
  },
  {
    "url": "assets/js/app.61497e9b.js",
    "revision": "525931ada7f1779d25da393fcc3a2e67"
  },
  {
    "url": "friends/index.html",
    "revision": "e37bec34ba72dce53113e85dd13b114d"
  },
  {
    "url": "full.png",
    "revision": "db91198383e03e43d2008b7bc3e91416"
  },
  {
    "url": "guide/index.html",
    "revision": "27f1fc83f586dde84ef0c04903720580"
  },
  {
    "url": "index.html",
    "revision": "22ee08c54e5426cecf1daa4f5b75b6eb"
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
    "revision": "fa2d4a0ce65edac4db31aecc44335041"
  },
  {
    "url": "passages/2020-02-24-docker-install.html",
    "revision": "ea677a3641f6fb82222258b45500c076"
  },
  {
    "url": "passages/2020-02-25-docker-command.html",
    "revision": "7ea6ee93b8b673000722ac5c9ce22b40"
  },
  {
    "url": "passages/2020-02-25-nginx-command.html",
    "revision": "751792125dde5d19fd70d6f788b4a382"
  },
  {
    "url": "passages/2020-02-25-nginx-install.html",
    "revision": "f800c77c28125f5dfa8f48151f9127c9"
  },
  {
    "url": "passages/2020-02-28-golang-slice-analysis.html",
    "revision": "8e10309d5f92f13b28d55b389aac8cc7"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-etcd.html",
    "revision": "f8547889b3443e38a941f9504fcde1c4"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-master.html",
    "revision": "b3219c62df25049154cc1cf32993bccd"
  },
  {
    "url": "passages/2020-08-12-kubernetes-deploy-ready.html",
    "revision": "490bde494282981df2c87d819946a28b"
  },
  {
    "url": "passages/2020-08-12-kubernetes-generate-tls.html",
    "revision": "5466f18c07883bdc056f7e41f8ec5595"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-cni.html",
    "revision": "5e0d847a2ae26815888f6094c817638c"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-dns.html",
    "revision": "fa21c64419d0395cc54c431e41c9440c"
  },
  {
    "url": "passages/2020-08-13-kubernetes-deploy-worker.html",
    "revision": "ef94cb8ca268dbd434c7f82280b83bee"
  },
  {
    "url": "passages/2021-04-01-idea-crack-2018.html",
    "revision": "6db3bb7fc20cb1b8edc88665c495de19"
  },
  {
    "url": "passages/2021-04-09-java-basic-oop.html",
    "revision": "d4fc358a08d6cb264b4452f2bd273cb0"
  },
  {
    "url": "passages/2021-04-09-java-lan-basic.html",
    "revision": "edb2e48a859864f33031b6268df9182d"
  },
  {
    "url": "passages/2021-04-18-java-string-intern.html",
    "revision": "cde4fcfb90cec6e3892192d2b89111ed"
  },
  {
    "url": "passages/2021-04-19-java-basic-date.html",
    "revision": "13b74dc42f6ba732786157ab06135844"
  },
  {
    "url": "passages/2021-04-25-java-collection-frame.html",
    "revision": "d7a253875bd56b37ba9ff75943bb32c3"
  },
  {
    "url": "passages/2021-04-28-java-thread-theory.html",
    "revision": "5ec8e8e104c5754cd5a7f2175f3966d8"
  },
  {
    "url": "passages/2021-05-04-java-thread-basic.html",
    "revision": "9ee83563a9a36a89cb51aa174da823f8"
  },
  {
    "url": "passages/2021-05-05-java-io-basic.html",
    "revision": "5afe0318192f7eb072df9c7a301ff5ff"
  },
  {
    "url": "passages/2021-05-06-java-io-decorator-pattern.html",
    "revision": "91287803a5c2706a72367835da46b89c"
  },
  {
    "url": "passages/2021-05-08-java-basic-reflect.html",
    "revision": "b59dab8cc18f6a097048616d86cd904b"
  },
  {
    "url": "passages/2021-06-26-golang-reflect.html",
    "revision": "1bd19679098ec2ae5c56d5ce1bd456f7"
  },
  {
    "url": "passages/2021-06-28-docker-mysql-env.html",
    "revision": "6ae605186cf5c8cda03ac033c0013659"
  },
  {
    "url": "passages/2021-06-28-git-common-cmd.html",
    "revision": "2ff969925402ddde12c052fb03f52138"
  },
  {
    "url": "passages/2021-06-29-mysql-manage-auth.html",
    "revision": "fddb42a1dd1b8e012a61dde74151c077"
  },
  {
    "url": "passages/2021-06-30-git-branch-manage.html",
    "revision": "c6a7777d84b422d9e5333658d40e3caf"
  },
  {
    "url": "passages/2021-06-30-idea-jrebel-config.html",
    "revision": "927aca1494ac5422ad30c48d14f0395f"
  },
  {
    "url": "passages/2021-07-06-group-by-error.html",
    "revision": "50a0b69c6c93a5ec4b99132d150aa1d4"
  },
  {
    "url": "passages/2021-07-21-activiti7-note.html",
    "revision": "f2c5d4cffe467d8a6d8fe113628d3b1f"
  },
  {
    "url": "passages/2021-07-22-activiti7-common-api.html",
    "revision": "83db20b7fe0be5bb8b7a8eadb4542173"
  },
  {
    "url": "passages/2021-07-22-activiti7-error-note.html",
    "revision": "fa92baec20d46725587f77aabc264812"
  },
  {
    "url": "passages/2021-07-22-activiti7-note-advanced.html",
    "revision": "e9ff6438d6ab31e40701ec3c29633421"
  },
  {
    "url": "passages/2021-07-22-activiti7-table-struct.html",
    "revision": "d0db5f97ee966bbb7ac39ec09be6fba3"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba-nacos.html",
    "revision": "a79ff88c99ec75aaa94857e3ca5f025f"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-alibaba.html",
    "revision": "6c2834c3d6f5feb7ceeb8cec70c236d2"
  },
  {
    "url": "passages/2021-07-27-spring-cloud-error.html",
    "revision": "28a53fa9d841317e3672e09a52822a02"
  },
  {
    "url": "passages/2021-07-29-spring-cloud-gateway.html",
    "revision": "5c65e6a36aa3c85c69e547523eb47159"
  },
  {
    "url": "passages/2021-08-02-redis-base-desc.html",
    "revision": "b412213cbcba176ccb8a409109c456aa"
  },
  {
    "url": "passages/2021-08-02-redis-base-struct.html",
    "revision": "9d4371d361efb69d54233088a52677ce"
  },
  {
    "url": "passages/2021-08-02-redis-memory.html",
    "revision": "33998982f8c6796a91f9be0cf5ca20c6"
  },
  {
    "url": "passages/2021-08-02-redis-overview.html",
    "revision": "5d6a53de9dcf15e2d01d7e4227f5b0d6"
  },
  {
    "url": "passages/2021-08-02-redis-rdb-aof.html",
    "revision": "c60523969e67c1ba864406e463f65237"
  },
  {
    "url": "passages/2021-08-05-java-basic-enum.html",
    "revision": "6c81207d54e6854a44ee1c65e6236b9f"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-env.html",
    "revision": "306a679d14c7926deda316a1ee4a52f5"
  },
  {
    "url": "passages/2021-08-06-elasticsearch-introduce.html",
    "revision": "b615f57c686f61a8a2e46e7beabf25a3"
  },
  {
    "url": "passages/2021-08-06-elasticsearch.html",
    "revision": "f711145167cf7ee4bf34013ffa56b515"
  },
  {
    "url": "passages/2021-08-07-elasticsearch-basic-course.html",
    "revision": "0d83e6edd00a6cf8dc13b75b2ae2e948"
  },
  {
    "url": "passages/2021-08-15-mongo-introduce.html",
    "revision": "1e840361ddedfc9c2e6124052d0ef4b4"
  },
  {
    "url": "passages/2021-08-15-mongo-overview.html",
    "revision": "d287f796e78a05a24b68eccbc475e088"
  },
  {
    "url": "passages/2021-08-16-elasticsearch-ik.html",
    "revision": "23ffea1217803ab087faba330e191551"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-highlight.html",
    "revision": "19b7a97ba611fc301b5a216ddb8cfc13"
  },
  {
    "url": "passages/2021-08-18-elasticsearch-integrate-springboot.html",
    "revision": "e01dcbf9ad75a10a4bc830da052aa39c"
  },
  {
    "url": "passages/2021-08-18-git-ignore-file.html",
    "revision": "9121cbeeb0cbe91f666c3888c175c841"
  },
  {
    "url": "passages/2021-08-18-springboot-argument-resolver.html",
    "revision": "db0d8d2705e7f7e36d8c0524bf074b99"
  },
  {
    "url": "passages/2021-08-19-elasticsearch-complex-query.html",
    "revision": "3c9b17203ecafb26d2834ab7fc778fa7"
  },
  {
    "url": "passages/2021-08-19-mongo-install.html",
    "revision": "2d5cfb94462435c4276834137d2cf02b"
  },
  {
    "url": "passages/2021-08-27-mongo-geospatial.html",
    "revision": "f2ce2daeb994cff082382d2982db116a"
  },
  {
    "url": "passages/2021-08-27-mongo-springboot.html",
    "revision": "e5fa2cae8074d97a1723be9186b1f130"
  },
  {
    "url": "passages/2021-09-02-spring-cloud-openfeign.html",
    "revision": "ff63f56e9611f02325c608ed9df1045c"
  },
  {
    "url": "passages/2022-01-11-mac-jdk8-slow-solution.html",
    "revision": "ca7bcddf780734c31b0c1b025fcc0a1d"
  },
  {
    "url": "passages/2022-02-23-git-stash-note.html",
    "revision": "6b55538e30f8d470d7bf7dfbbbfd14f0"
  },
  {
    "url": "passages/2022-03-10-golang-reflect-deepEqual.html",
    "revision": "3b5b1fece0a91017c7568a9cd73fd6fe"
  },
  {
    "url": "passages/2022-03-19-seata-transaction-error.html",
    "revision": "110a848d43c612f115360ca5ac0e7b6c"
  },
  {
    "url": "passages/chain-of-responsibility.html",
    "revision": "79c23fcb36bea8ab2b0f3ed97dd9307c"
  },
  {
    "url": "passages/code-spec-alibaba.html",
    "revision": "877a8b333e0889caa1698217219b5da2"
  },
  {
    "url": "passages/dev-decorator-pattern.html",
    "revision": "7a6c4bb4906b38f88aeee067e22709ad"
  },
  {
    "url": "passages/dev-pattern-overview.html",
    "revision": "24509b8b88129222f6f6c709646b65c3"
  },
  {
    "url": "passages/go-catalog.html",
    "revision": "ac3e0acbb577f2ea5e52badc70a4068c"
  },
  {
    "url": "passages/tool-list-overview.html",
    "revision": "1c2c8abebe6a8ef2fd02994537ceca2e"
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
