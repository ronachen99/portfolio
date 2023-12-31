// create the project class to dynamically render the array of project objects in the portfolio component
class Project {
  constructor(title, website, repo, imageSrc, altText, description, usedTech) {
    this.title = title;
    this.website = website;
    this.repo = `https://www.github.com/${repo}`;
    this.imageSrc = `./images/${imageSrc}`;
    this.altText = altText;
    this.description = description;
    this.usedTech = usedTech;
  }
}

// hardcoded project data
export const projects = [
  new Project(
    "Petopia: Pawesome Companions",
    "https://intense-sierra-89896-223bb459cf81.herokuapp.com/",
    "ronachen99/petopia-pawesome-companions",
    "6.jpg",
    "A Canadian astronaut cat.",
    "A virtual pet app is designed to bring the joy of pet ownership to users through an interactive experience.",
    "JavaScript, React, Tailwind CSS, Formik, Node.js, GraphQL, MongoDB, JWT"
  ),
  new Project(
    "Cash Cow Finance",
    "https://cash-cow-finance-8e34336f910f.herokuapp.com/",
    "ronachen99/personal-finance-tracker",
    "2.png",
    "Screenshot of the cash cow finance tracker web application.",
    "A web-based platform enbaling users to monitor their income, expenses, and budget.",
    "JavaScript, Handlebars.js, CSS, Node.js, Bulma, MySQL, Bcrypt"
  ),

  new Project(
    "Anime Watchlist",
    "https://ronachen99.github.io/anime-watchlist/",
    "ronachen99/anime-watchlist",
    "1.jpg",
    "Screenshot of the anime watchlist web application.",
    "A convenient platform for accessing, monitoring, and searching for anime that they may want to add to their personal list.",
    "JavaScript, HTML, CSS, Bulma, Bootstrap"
  ),
  new Project(
    "Weather Forecast Dashboard",
    "https://ronachen99.github.io/weather-forecast-dashboard/",
    "ronachen99/weather-forecast-dashboard",
    "3.png",
    "Screenshot of the weather forecash dashboard website.",
    "A website that enables users to view the weather forecast for their respective cities and any other cities they may search for.",
    "JavaScript, HTML, CSS, Bootstrap"
  ),
  new Project(
    "Multiple Choice Code Quiz",
    "https://ronachen99.github.io/mc-code-quiz/",
    "ronachen99/mc-code-quiz",
    "4.png",
    "Screenshot of the mc code quiz website.",
    "A website that enables people to enhance their understanding of JavaScript basics by taking a timed quiz.",
    "JavaScript, HTML, CSS"
  ),
  new Project(
    "Tech Blog",
    "https://techy-bloggy-d7f528e7d6af.herokuapp.com/",
    "ronachen99/tech-blog",
    "5.png",
    "Screenshot of the tech blog website.",
    "A website where users can connect, interact, and exchange information on various tech-related topics, fostering a sense of community among like-minded individuals.",
    "JavaScript, Handlebars.js, Bulma, Node.js, MySQL, Bcrypt"
  ),
];
