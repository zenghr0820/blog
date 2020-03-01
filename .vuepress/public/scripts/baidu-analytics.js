(() => {
  var _hmt = _hmt || [];

  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5536f192e753df9937cd35dcb4c22510";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);

  _hmt.push("_requirePlugin", "UrlChangeTracker", {
    shouldTrackUrlChange: function(newPath, oldPath) {
      return newPath && oldPath;
    }
  });
})();
