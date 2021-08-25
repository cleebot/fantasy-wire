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

![image](https://imgur.com/IMGECF7.png)

- Article Page

![image](https://imgur.com/45zob2G.png)

- Create Article Page

![image](https://imgur.com/PhC8DJJ.png)

- Edit Article Page

#### Component Tree

![image](https://imgur.com/tAOKBty.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure


src
|__ App.jsx
|__ index.js
|__ assets/
|__ components/
      |__ Layout/
          |__ Layout.jsx
          |__ Layout.css
      |__ Nav/
          |__ Nav.jsx
          |__ Nav.css
      |__ Footer/
          |__ Footer.jsx
          |__ Footer.css
      |__ Sort/
          |__ Sort.jsx
          |__ Sort.css
|__ screens/
      |__ Home/
          |__ Home.jsx
          |__ Home.css
      |__ Articles/
          |__ Articles.jsx
          |__ Articles.css
      |__ ArticleEdit/
          |__ ArticleEdit.jsx
          |__ ArticleEdit.css
      |__ ArticleCreate/
          |__ ArticleCreate.jsx
          |__ ArticleCreate.css
      |__ SignIn/
          |__ SignIn.jsx
          |__ SignIn.css
      |__ Register/
          |__ Register.jsx
          |__ Register.css
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ articles.js
      |__ categories.js
|__ utilities/
      |__ utilities.js



```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend Authorization |    H     |     3 hrs      |     TBD       |     TBD     |
| Backend modeling |    H     |     1.5 hrs      |     TBD       |     TBD     |
| Seed Data |    H     |     2 hrs      |     TBD       |     TBD     |
| Backend CRUD |    H     |     3 hrs      |     TBD       |     TBD     |
| Frontend Component Hiearchy |    H     |     3 hrs      |     TBD       |     TBD     |
| Frontend Routing |    H     |     3 hrs      |     TBD       |     TBD     |
| State Relationship between pages |    H     |     3 hrs      |     TBD       |     TBD     |
| Form creation for sign in/signup |    H     |     2 hrs      |     TBD       |     TBD     |
| Form creation for article posts |    H     |     2 hrs      |     TBD       |     TBD     |
| Home page layout |    H     |     3 hrs      |     TBD       |     TBD     |
| Edit page layout |    H     |     3 hrs      |     TBD       |     TBD     |
| Basic CSS |    H     |     3 hrs      |     TBD       |     TBD     |
| Advanced CSS for home page |    H     |     3 hrs      |     TBD       |     TBD     |
| CSS for form pages |    H     |     3 hrs      |     TBD       |     TBD     |
| TOTAL               |          |     39.5 hrs     |     TBD       |     TBD     |



<br>

### Server (Back End)

#### ERD Model

![image](https://imgur.com/ZGJ6n6y.png)

<br>

***

## Post-MVP

- Add a comments section for articles
- Let users save favorite articles
- streamline application for mobile users
- Add a searchbar to lookup specific players

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.