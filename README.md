# Budget App Frontend

Frontend for the budget tracking app.

The [Budget App](https://mdesanker.github.io/budget-frontend)

## Table of Contents

- [Description](#Description)
- [Motivation](#Motivation)
- [How to use](#How-to-use)
- [Built with](#Built-with)
  - [Frontend](#Frontend)
  - [Backend](#Backend)
- [Lessons learned](#Lessons-learned)
- [Challenges](#Challenges)
- [Links](#Links)

## Description

This expense tracking app allows users to track expenses with amount, who money was sent to or received from, a description of what the transaction was for, a transaction category, and date of the transaction. The dashboard displays total expenses, and a list of individual transactions over a 7 or 30 day period.

The activity tracker tab shows a break down of transactions day-by-day over the last week, and month-by-month over the last year. Users can also look at their spending in each category over time periods of a week, month, or year.

## Motivation

This app was created as a practice exercise to use TypeScript with React and Express, and use Tailwind CSS.

## How to use

1. Log in or register for an account

   - Email will NOT be used to contact you

2. Dashboard view - view transactions over last 7 or 30 days. Add transactions. Select individual transactions to edit or delete.

3. Activity view - view spending trends displayed with three different charts.

4. Account view - view user name, email, and account creation date. Edit user name and email. Delete account.

## Built with

This app was built with the MERN stack in TypeScript.

### Frontend

- React
- React Router
- Redux
- Axios
- ChartJS
- Tailwind CSS

### Backend

- NodeJS
- ExpressJS
- JWT Authentication
- MongoDB/Mongoose
- supertest

## Lessons learned

- TypeScript took some getting used to (ongoing), but the ability to type check inputs is very useful

- Tailwind CSS is a lot of fun to use. Took a lot of referencing the documentation to learn the class names initially.

- ChartJS was a very convenient package for creating charts in React

## Challenges

- React testing library - this will take more practice from me. Will implement in smaller projects to increase familiarity

- Transaction dates - transactions are saved as the day before the selected date and I have not figured out how to fix yet. I believe this is because the date is saved without the timezone, so when the date is displayed its read as if the time zone is UTC, which means it shows as the day before for ET.

## Links

- [API Repository](https://github.com/mdesanker/budget-api)
