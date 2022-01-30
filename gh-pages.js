const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "main",
    repo: "https://github.com/moreth4nlife/portfolio.git",
    user: {
      name: "moreth4nlife",
      email: "marcosalves.work@gmail.com",
    },
  },
  () => {
    console.log("Finished deployment.");
  }
);
