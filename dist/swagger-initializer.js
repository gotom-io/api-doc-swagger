window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "gotom-api-doc.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    supportedSubmitMethods: [],
    onComplete: () => {
        const titleNode = document.querySelector('.information-container .title');
        if (titleNode) {
            // remove the goTom prefix from the title, BECAUSE UX
            titleNode.textContent = titleNode.textContent.replace(/^goTom\s*/, '');
        }
    },
  });

  //</editor-fold>
};
