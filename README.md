# fantasy-wire
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Fantasy Wire** is a blog style website for fantasy football. Users can post relevant news and opinions for fantasy football. 
https://awesome-darwin-335df1.netlify.app/
<br>

## MVP

- users can create an account
- users can create/edit/delete articles
- user authentication so only users can edit or delete articles



<br>

### Goals

- Become more comfortable with Ruby on Rails
- Try to integrate a CSS package such as material UI or Tailwind CSS for smoother design
- Build a seamless full stack project to showcase


<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | front-end |
|   React Router   | front-end routing |
| Ruby on Rails | back-end |
|     Axios      | api requests |


<br>

### Client (Front End)

#### Wireframes

https://whimsical.com/fantasy-wireframe-A4SFk1bRjgZzyvAk2x37ZZ

![image](https://imgur.com/8xBpFio.png)

- Home Page

![image](https://imgur.com/s92GxJW.png)

- Home Page User

![image](https://imgur.com/lbCd5yJ.png)

- Log In

![image](https://imgur.com/F1JcbXt.png)

- Sign Up

![image](https://imgur.com/OgYF57s.png)

- Article Page

![image](https://imgur.com/6qrU0g3.png)

- Create Article Page

![image](https://imgur.com/4N7sdhO.png)

- Edit Article Page

![image](https://imgur.com/lB25EDf.png)

- Categories Page

#### Component Tree

![image](https://imgur.com/mrRmjhn.png)

#### Component Architecture


``` structure


src
|__ App.jsx
|__ index.js
|__ assets/
|__ components/
      |__ Layout/
          |__ Layout.jsx
      |__ Nav/
          |__ Nav.jsx
      |__ Footer/
          |__ Footer.jsx
      |__ Sort/
          |__ Sort.jsx
|__ screens/
      |__ Articles/
          |__ Articles.jsx
      |__ ArticleEdit/
          |__ ArticleEdit.jsx
      |__ ArticleCreate/
          |__ ArticleCreate.jsx
      |__ ArticleDetail/
          |__ ArticleDetail.jsx
      |__ SignIn/
          |__ SignIn.jsx
      |__ Register/
          |__ Register.jsx
      |__ Categories/
          |__ Categories.jsx    
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ articles.js
      |__ categories.js



```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested |
| ------------------- | :------: | :------------: | :-----------: | 
| Backend Authorization |    H     |     3 hrs      |    3 hrs       |
| Backend modeling |    H     |     1.5 hrs      |     1.5 hrs       |
| Seed Data |    H     |     2 hrs      |     2 hrs       |
| Backend CRUD |    H     |     3 hrs      |     3 hrs       |
| Frontend Component Hiearchy |    H     |     3 hrs      |     3 hrs       |
| Frontend Routing |    H     |     3 hrs      |     3 hrs     |
| State Relationship between pages |    H     |     3 hrs      |     6 hrs       | 
| Form creation for sign in/signup |    H     |     2 hrs      |    3 hrs       | 
| Form creation for article posts |    H     |     2 hrs      |     2 hrs       |
| Home page layout |    H     |     3 hrs      |     3 hrs       |
| Edit page layout |    H     |     3 hrs      |     3 hrs       |
| Basic CSS |    H     |     3 hrs      |    3 hrs       |
| Advanced CSS for home page |    H     |     3 hrs      |     3 hrs      |
| CSS for form pages |    H     |     3 hrs      |    3 hrs      |
| TOTAL               |          |     39.5 hrs     |    41.5      | 



<br>

### Server (Back End)

#### ERD Model

![image](https://imgur.com/mNOeAlx.png)

<br>

***

## Post-MVP

- Add a comments section for articles
- filter articles by category
- Let users save favorite articles
- streamline application for mobile users
- Add a searchbar to lookup specific players

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
