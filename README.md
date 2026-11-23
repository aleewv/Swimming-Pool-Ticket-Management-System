# Swimming Pool Ticket Management System

Fundamentals of Programming Final Exam  
T1A Group 01 · Universitas Brawijaya

## Project Proposal

This project extends our midterm ticket calculator into a TypeScript console app for swimming pool staff. The app will calculate ticket prices based on the day, visitor category, and membership status. It will also help staff record and look up ticket sales during a session.

## Planned Features

- *Create* — Calculate the ticket price and save the sale with a unique ID.
- *Read* — Show all sales or find one by transaction ID.
- *Update* — Edit a sale and recalculate the price when needed.
- *Delete* — Remove a sale after confirmation.
- *Search* — Find sales by buyer name and filter by day type.

## Progress 1

The goal of Progress 1 is to set up the public repository, document the project proposal and team responsibilities, and run a basic TypeScript program that prints Hello console.

## Team Members and Task Division

| Name | Student ID | GitHub | Progress 1 Task | Main Pull Request |
| --- | --- | --- | --- | --- |
| M. Ridho Alfaridzi Nasution (Team Leader) | 263140700111027 | @dhoengineer | Write the README with the project proposal, team details, and task division. | [PR link] |
| Ossamah Ale Ibaraja | 263140707111047 | [@aleewv](https://github.com/aleewv) | Create the public repository and add the Hello console program in src/index.ts. Proposed: set up package.json and tsconfig.json, and check that .gitignore excludes node_modules/. | [PR link] |
| Melinda Sri Cahyani Situmorang  |263140700111004 | @gargantua-rus | Add the initial Project Report to the docs/ folder. | [PR link] |

## How to Run

After the TypeScript setup is in place, open a terminal in the project folder and run:

bash
npm install
npx ts-node src/index.ts


Expected output:

text
Hello console
