import { join } from "path";

const HomePage = (req, res) => {
  res.render("../views/index.ejs");
};

const AboutPage = (req, res) => {
  res.render("../views/about.ejs");
};

export { HomePage, AboutPage };
