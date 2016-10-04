(function() {
  "use strict";

  function addButtons(t, options) {
    var data = "Hello world!";
    var blob = new Blob([data]);
    var blobUrl = URL.createObjectURL(blob);

    var dataUrl = "data:text/plain," + data;

    return [{
      text: "Blob URL",
      url: blobUrl
    }, {
      text: "Data URL",
      url: dataUrl
    }];
  }

  TrelloPowerUp.initialize({
    "board-buttons": addButtons,
    "card-buttons": addButtons
  });
})();
