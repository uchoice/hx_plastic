export function dynamicImportJs(url) {
  return new Promise((resolve,rejec) => {
    var script=document.createElement("script");
    script.type="text/javascript";
    function loadError (oError) {
      throw new URIError("The script " + oError.target.src + " is not accessible.");
    }
    script.onerror = loadError;
    script.onload = script.onreadystatechange = function () {
        /* if (this.readyState === "loaded" || this.readyState === "complete"){ */
          script.onload = script.onreadystatechange = null;
          resolve();
        /* } */
    };
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  })
}
