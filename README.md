# Swimming Pool Ticket Management System

Fundamentals of Programming Final Exam  
T1A Group 01 · Universitas Brawijaya

## Project Proposal

Swimming pool ticket counter staff need to calculate the correct price and keep track of each sale. This project extends our midterm ticket calculator into a TypeScript console app that calculates prices based on the day type, visitor category, and membership status. Staff will be able to manage ticket transactions while the program is running.

### Planned Features

- **Create:** Calculate the ticket price and save the transaction with a unique ID.
- **Read:** View all transactions or look up one by ID.
- **Update:** Edit a transaction and recalculate the price when needed.
- **Delete:** Remove a transaction by ID after confirmation.
- **Search:** Find transactions by buyer name and filter them by day type.

### Initial Data Entity

| Entity             | Properties                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| Ticket Transaction | `id`, `buyerName`, `dayType`, `visitorCategory`, `isMember`, `ticketPrice`, `memberDiscount`, `totalPayment` |

## Progress 1

We set up the public repository, documented the project proposal and team responsibilities, and added a basic TypeScript program that prints `Hello console`.

## Team Members and Task Division

| Name                                      | Student ID      | GitHub                                             | Progress 1 Contribution                                                                                                       | Evidence                                                                                                                                                                                                                                             |
| ----------------------------------------- | --------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M. Ridho Alfaridzi Nasution (Team Leader) | 263140700111027 | [@dhoengineer](https://github.com/dhoengineer)     | Wrote the project proposal and documented team responsibilities in the README.                                                | [PR #4](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/4)                                                                                                                                                                     |
| Ossamah Ale Ibaraja                       | 263140707111047 | [@aleewv](https://github.com/aleewv)               | Created the public repository, added `Hello console` in `src/index.ts`, set up TypeScript, and moved both reports to `docs/`. | [PR #1](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/1), [PR #2](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/2), [PR #6](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/6) |
| Melinda Sri Cahyani Situmorang            | 263140700111004 | [@gargantua-rus](https://github.com/gargantua-rus) | Uploaded the Project Report and Progress 1 Report.                                                                            | [Project Report commit](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/commit/ac4aabe), [Progress Report commit](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/commit/6f18569)                                  |

## How to Run

Open a terminal in the project folder and run:

```bash
npm install
npx ts-node src/index.ts
```

Expected output:

```text
Hello console
```
