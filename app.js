(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  var search = document.getElementById("search");
  var noResults = document.getElementById("no-results");
  var resultCount = document.getElementById("result-count");
  var topics = Array.prototype.slice.call(document.querySelectorAll("[data-topic]"));
  var articles = Array.prototype.slice.call(document.querySelectorAll("[data-article]"));
  var totalArticles = articles.length;

  function filter(query) {
    var q = query.trim().toLowerCase();
    var visible = 0;

    topics.forEach(function (topic) {
      var cards = topic.querySelectorAll("[data-article]");
      var topicVisible = 0;

      cards.forEach(function (card) {
        var text = card.textContent.toLowerCase();
        var match = q === "" || text.indexOf(q) !== -1;
        card.hidden = !match;
        if (match) {
          topicVisible++;
          visible++;
        }
      });

      topic.hidden = topicVisible === 0;
    });

    noResults.hidden = visible !== 0;

    if (q === "") {
      resultCount.textContent = totalArticles + " articles across " + topics.length + " topics";
    } else {
      resultCount.textContent = visible + (visible === 1 ? " result" : " results") + ' for "' + query.trim() + '"';
    }
  }

  var t;
  search.addEventListener("input", function (e) {
    clearTimeout(t);
    var value = e.target.value;
    t = setTimeout(function () {
      filter(value);
    }, 120);
  });
})();
