# E-Commerce React Project

![Depfu](https://img.shields.io/depfu/litvinova08/e-commerce-react)
![GitHub issues](https://img.shields.io/github/issues/username/repo)

![project screenshot](./e-store/src/assets/screenshot.png)

## Link to Deployed Version

TBC

## Setup

- Steps required to run the app locally
  - npm install
  - Install SASS: npm install --save-dev sass
  - Install a Router: npm i react-router-dom
  - npm run dev
  - Node version: 18.12.1

## Description of project (spec / MVP)

This project was designed to reinforce my React learnings and make sure that I am comfortable with most aspect of the framework. With this project I practiced how to:

- Fetch Data within a React App
- Use react-router-dom
- Use Firebase/Firestore

All products are stored in Firestore and fetched by the frontend. There are two databases: store for all product items and Cart for products chosen by the user.
Home Page has a Carousel of favourite products. The following library was used: pure-react-carousel
Product Page has a list of products. The user can open the Product Page for each product and add a Product into Cart.
Cart stores all products chosed by the User and shows the total amount to be paid. The user can remove all items from Cart

## Reflection

- I linked Firestore to my project and splitted the project into containters and components. The most enjoyable part was writing the logic that allows the frontend to communicate with Firestore.
- My main challenge was implementing the global context allowing to update the number of each product when a user adds products in the Cart.

## Future Goals

- Add dark mode
- Add an opportunity to choose different variants of the same product and add it into the Cart

### Stay in touch

- Email: ma.litvinova08@gmail.com
- Portfolio: https://litvinova08.github.io/portfolio-project/
- Linkedin: https://www.linkedin.com/in/margarita-l-44860b15b/

### Licence

- the MIT open source licence
