<h1 align="center">
  Soft "Hacker News" clone - <a href="https://sleepy-almeida-a073df.netlify.com/" target="_blank">Demo</a>
</h1>

<div align="center">
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"/>
  </a>
</div>

## 📝 Description
Add more general information about project. 

## 📺 Preview
| Light                                                                                                   | Dark |
|---------------------------------------------------------------------------------------------------------|------|
| <img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/posts-light.png"/> | <img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/posts-dark.png"/> |
| <img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/post-light.png"/> | <img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/post-dark.png"/> |
| <img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/user-light.png"/> | <img src="https://raw.githubusercontent.com/vetsnakara/hacker-news-clone/master/preview/user-dark.png"/> |

## ✨ Features
* Use [Hacker News API](https://github.com/HackerNews/API)
* Pages:
  * `/` - top stories
  * `/new` - new stories
  * `/user?id=username` - user metadata and his stories
  * `/post?id=123456` - post metadata and related comments
* Loading indicators
* Theme button

## 🛠️ Technologies
* __React__ for UI rendering
* __React Hooks__ for side effects
* __React Context__ for toggling light/dark theme
* __Redux__ for state management
* __Redux Thunk__ for API calls
* __React Router__ for routing
* __React JSS__ for styles and theming

## 🚀 Setup
``` sh
$ git clone https://github.com/vetsnakara/hacker-news-clone.git
$ cd hacker-news-clone
$ npm install
$ npm start
```

## 👷 Author
**Konstantin Arakantsev**
- Github: [@vetsnakara](https://github.com/vetsnakara)
