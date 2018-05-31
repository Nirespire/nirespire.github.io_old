module.exports = {
    generate: {
      fallback: true,
      fallback: '404.html'
    },
    head: {
        title: "Sanjay Nair - Personal Website",
        link: [
          {
            rel: "stylesheet",
            href:
              "//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
          },
          {
            rel: "stylesheet",
            href: "//cdn.rawgit.com/necolas/normalize.css/master/normalize.css"
          },
          {
            rel: "stylesheet",
            href:
              "//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"
          },
          {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          },
          {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
            integrity:
              "sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg",
            crossorigin: "anonymous"
          }
        ]
      }
}