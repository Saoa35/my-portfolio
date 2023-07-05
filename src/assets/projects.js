import burger from "./../img/projects/burger-lord.png";
import models from "./../img/projects/model-shop.png";
import gallery from "./../img/projects/foto-gallery.png";
import food from "./../img/projects/food-restaurant.png";
import notes from "./../img/projects/notes.png";
import travel from "./../img/projects/travel-blog.png";
import chat from "./../img/projects/chat1.png";

const projects = [
  {
    id: 0,
    title: "Simple Chat website",
    technologies: "HTML, CSS, JS, React, NodeJS, Express, Socket IO",
    img: chat,
    gitHubLink: "https://github.com/Saoa35/Simple_Chat",
  },
  {
    id: 1,
    title: "Travel website",
    technologies:
      "HTML, CSS, Tailwind, JS, React, ReactHooks, ReactRouterDom, ReduxToolkit, NodeJS, MongoDB.",
    img: travel,
    gitHubLink: "https://github.com/Saoa35/Travel-Blog",
  },
  {
    id: 2,
    title: "Burger restaurant website",
    technologies:
      "ReactJS, TypeScript, Redux Toolkit, React Router, Axios + Fetch, React Hooks, CSS-Modules / SCSS, React Content Loader, React Pagination, Lodash.Debounce, Code Splitting, React Loadable, useWhyDidYouUpdate",
    img: burger,
    gitHubLink: "https://github.com/Saoa35/burger_lord",
  },
  {
    id: 3,
    title: "Online shop website",
    technologies:
      "ReactJS + hooks, React Router, Axios, SCSS, React Context, React Skeleton",
    img: models,
    gitHubLink: "https://github.com/Saoa35/model_shop",
  },
  {
    id: 4,
    title: "Photo gallery website",
    technologies: "HTML, SCSS, ReactJS, React Hooks, Pagination",
    img: gallery,
    gitHubLink: "https://github.com/Saoa35/photo_gallery",
  },
  {
    id: 5,
    title: "Food ordering and delivery website",
    technologies: "HTML5, CSS3, SCSS, JavaScript, Gulp, Firebase",
    img: food,
    gitHubLink: "https://github.com/Saoa35/Food-Restaurants",
  },
  {
    id: 6,
    title: "Simple Notes app",
    technologies: "HTML5, CSS3, SCSS, ReactJS, React Hooks",
    img: notes,
    gitHubLink: "https://github.com/Saoa35/oblicksoft",
  },
];

export { projects };
