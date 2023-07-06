// create the project class to dynamically render the array of project objects in the portfolio component
class Project {
  constructor(title, website, repo, imageSrc, altText, description) {
    this.title = title;
    this.website = website;
    this.repo = `https://www.github.com/${repo}`;
    this.imageSrc = `./images/${imageSrc}`;
    this.altText = altText;
    this.description = description;
  }
}

// hardcoded project data
export const projects = [
  new Project(
    "Anime Watchlist",
    "https://ronachen99.github.io/anime-watchlist/",
    "ronachen99/anime-watchlist",
    "1.jpg",
    "Screenshot of the anime watchlist web application.",
    "A convenient platform for accessing, monitoring, and searching for anime that they may want to add to their personal list."
  ),
  new Project(
    "Cash Cow Finance",
    "https://cash-cow-finance-8e34336f910f.herokuapp.com/",
    "ronachen99/personal-finance-tracker",
    "2.png",
    "Screenshot of the cash cow finance tracker web application.",
    "A web-based platform enbaling users to monitor their income, expenses, and budget."
  ),
  new Project(
    "Weather Forecast Dashboard",
    "https://ronachen99.github.io/weather-forecast-dashboard/",
    "ronachen99/weather-forecast-dashboard",
    "3.png",
    "Screenshot of the weather forecash dashboard website.",
    "A website that enables users to view the weather forecast for their respective cities and any other cities they may search for."
  ),
  new Project(
    "Multiple Choice Code Quiz",
    "https://ronachen99.github.io/mc-code-quiz/",
    "ronachen99/mc-code-quiz",
    "4.png",
    "Screenshot of the mc code quiz website.",
    "A website that enables people to enhance their understanding of JavaScript basics by taking a timed quiz."
  ),
  new Project(
    "Tech Blog",
    "https://techy-bloggy-d7f528e7d6af.herokuapp.com/",
    "ronachen99/tech-blog",
    "5.png",
    "Screenshot of the tech blog website.",
    "A website where users can connect, interact, and exchange information on various tech-related topics, fostering a sense of community among like-minded individuals."
  ),
  new Project(
    "Placeholder Project",
    "https://www.youtube.com/watch?v=8Go6dHuylyM&ab_channel=Speeds30",
    "ronachen99",
    "6.jpg",
    "Anime girl digital art staring at the city landscape.",
    "This is a placeholder project."
  ),
];
