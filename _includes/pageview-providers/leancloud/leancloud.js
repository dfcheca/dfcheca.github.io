(function() {
  function pageview(options) {
    var workerUrl = options.workerUrl;

    function get(key, callback) {
      fetch(workerUrl + '/pageview?key=' + encodeURIComponent(key))
        .then(function(r) { return r.json(); })
        .then(function(data) { callback && callback(data.view); })
        .catch(function(e) { console.error('[pageview] get error:', e); });
    }

    function increase(key, title, callback) {
      fetch(workerUrl + '/pageview?key=' + encodeURIComponent(key), { method: 'POST' })
        .then(function(r) { return r.json(); })
        .then(function(data) { callback && callback(data.view); })
        .catch(function(e) { console.error('[pageview] increase error:', e); });
    }

    return { get: get, increase: increase };
  }

  window.pageview = pageview;
})();