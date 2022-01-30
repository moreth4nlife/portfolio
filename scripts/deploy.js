const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "https://github.com/moreth4nlife/portfolio",
    user: {
      name: "moreth4nlife",
      email: "marcosalves.work@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
