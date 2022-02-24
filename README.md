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


![Phone Page](https://github.com/Jacobdye99/Review.io/blob/main/Assets/P4%20(6).png?raw=true)



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
| Create Backend framework   |    H     |     2 hrs      |     TBD     |    TBD    |
| Create CRUD Actions |    H     |     2 hrs      |     TBD     |     TBD     |
| Test Routes |    H     |     1.5 hrs      |     TBD     |     TBD     |
| Implement Auth |    H     |     2 hrs      |     TBD     |     TBD     |
| test backend and Deploy |    H     |     2.5 hrs      |     TBD     |     TBD     |
| Create Front End Framework |    H     |     3 hrs      |     TBD     |     TBD     |
| Implement Api Config for backend and External |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Components and test |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Screens |    H     |     3 hrs      |     TBD     |     TBD     |
| Implement Login & Register |    H     |     3 hrs      |     TBD     |     TBD     |
| Implement functionality for reviews and Comments |    H     |     4 hrs      |     TBD     |     TBD     |
| Style and test |    H     |     4 hrs      |     TBD     |     TBD     |
| Implement a css library |    H     |     3 hrs      |     TBD     |     TBD     |
| Debug |    H     |     4 hrs      |     TBD     |     TBD     |
| Post-MVP |    L     |     4 hrs      |     TBD     |     TBD     |
| TOTAL               |    H     |     44 hrs      |     TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD Review.io](https://github.com/Jacobdye99/P4-placeholder/blob/main/Assets/Untitled%20Diagram.drawio.png?raw=true)
<br>

***

## Post-MVP
-_Friends
-_Comments & likes on comments
-_dynamic hero banner
-_seeing other peoples profile pages maybe a follow system


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
