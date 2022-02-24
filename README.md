# REVIEW.IO
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

_**REVIEW.IO** A fun small social media website where you can review movies and tv shows leave star ratings and comments on others reviews.


<br>

## MVP

_**Review.io** The goal of this site is to be able to login and create reviews on the main review feed page. Click and see movies and their details as well as the overall rating for the movie in stars._ 
<br>

### Goals

- _Auth,_
- _Movies page that is clickable and shows details_
- _Review feed page that displays all movie and show reviews in a timeline._
- _Ability to create posts edit and delete them._
- _Profile page where you can edit your profile and see all of your reviews and their likes._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |     _UseState, useEffect, useNavigate_     |
|   React Router   |           _Routes, Route, Link_            |
|       Ruby       |             _Backend Development_          |
|       Rails      |        _Backend Development and API_       |
|       Axios      |         _Api Calls to the Frontend_        |
|       JWT        |       _Create JSON Web Tokens for Auth_    |
|      BCrypt      |        _Encrypts Passwords for Users_      |

<br>

### Client (Front End)

#### Wireframes



![Wireframes](https://raw.githubusercontent.com/Jacobdye99/P4-placeholder/main/Assets/P4.png)


![Wireframes Reviews](https://github.com/Jacobdye99/Review.io/blob/main/Assets/P4%20(1).png?raw=true)


![Wireframes Profile Page](https://github.com/Jacobdye99/Review.io/blob/main/Assets/P4%20(2).png?raw=true)


![Login Page](https://github.com/Jacobdye99/Review.io/blob/main/Assets/P4%20(3).png?raw=true)


![Registration](https://github.com/Jacobdye99/Review.io/blob/main/Assets/P4%20(4).png?raw=true)


![Movie Detail Page](https://github.com/Jacobdye99/Review.io/blob/main/Assets/P4%20(5).png?raw=true)



#### Component Tree

![Component Tree](https://github.com/Jacobdye99/P4-placeholder/blob/main/Assets/Heirarchy.png?raw=true)

#### Component Architecture



``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD Review.io](https://github.com/Jacobdye99/P4-placeholder/blob/main/Assets/Untitled%20Diagram.drawio.png?raw=true)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
