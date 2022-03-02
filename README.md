# Budget App Frontend

A tracking app for expenses.

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

This repository is the React frontend for the [Budget App](https://mdesanker.github.io/budget-frontend).

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
- MongoMemoryServer

## Frontend Challenges

- TypeScript took some getting used to (ongoing), but the ability to type check inputs is very useful

- React testing library - this will take more practice from me. Will implement in smaller projects to increase familiarity.

- Transaction dates - transactions are saved as the day before the selected date and I have not figured out how to fix yet. I believe this is because the date is saved without the timezone, so when the date is displayed its read as if the time zone is UTC, which means it shows as the day before for ET.

- Filtering transaction data - I used a single API call to fetch user transactions from the DB. Then I filtered the transactions into week, month, and year lists in redux extrareducer functions so that they could be used in the dashboard and activity views. ChartJS made it relatively simple to use a function to map the days of the week or months of the year to filter the selected transactions. This is approach would be a lot more resource intensive in a large app with a massive amount of transactions. In that case, it would be better to use API endpoints to query the database for specific transactions.

## Links

- [API Repository](https://github.com/mdesanker/budget-api)
