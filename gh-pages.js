const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/build",
  {
    branch: "gh-pages",
    repo: "https://github.com/moreth4nlife/portfolio.git",
    user: {
      name: 'Marcos Alves", // update to use your name',
      email: "marcosalves.work@gmail.com",
    },
  },
  () => {
    console.log("Deploy finished.");
  }
);
