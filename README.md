# Swimming Pool Ticket Management System

Fundamentals of Programming Final Exam  
T1A Group 01 · Universitas Brawijaya

## Project Proposal

## Project Proposal

### 1. Project Overview

Swimming Pool Ticket Management System is a TypeScript-based console application designed to manage swimming pool ticket sales and calculate ticket prices. This application is developed as a team project for the Fundamentals of Programming Final Examination at Universitas Brawijaya.

### 2. Problem Description

Swimming pool ticket sales require accurate transaction recording and ticket price calculations. Manual recording can cause errors in calculating prices and managing customer transactions. Therefore, this project aims to develop a simple console-based application to make ticket sales management more organized, accurate, and efficient.

### 3. System Users

The system is designed for the following users:

- **Administrator:** Manages ticket transaction records and monitors sales data.
- **Ticket Officer:** Records customer ticket purchases and checks transaction information.

### 4. Project Objectives

The objectives of this project are:

1. To simplify swimming pool ticket sales management.
2. To calculate ticket prices based on ticket type and quantity.
3. To store and manage transaction records.
4. To provide CRUD (Create, Read, Update, Delete) and Search operations.
5. To improve the accuracy and efficiency of ticket transaction management.

### 5. Planned System Features

The application will provide the following features:

1. **Create:** Add new swimming pool ticket transaction records.
2. **Read:** Display all transaction records and view transaction details by ID.
3. **Update:** Modify existing transaction information.
4. **Delete:** Remove transaction records with confirmation.
5. **Search:** Search transaction records using keywords and additional filters.

### 6. Initial Data Entities

| Entity      | Properties                                                |
| ----------- | --------------------------------------------------------- |
| Ticket      | ticketId, ticketType, price                               |
| Customer    | customerId, customerName                                  |
| Transaction | transactionId, ticketId, customerId, quantity, totalPrice |

### 7. Expected Output

The application is expected to provide organized swimming pool ticket transaction records, accurate ticket price calculations, and easy access to transaction information through a console-based interface.

## Planned Features

- _Create_ — Calculate the ticket price and save the sale with a unique ID.
- _Read_ — Show all sales or find one by transaction ID.
- _Update_ — Edit a sale and recalculate the price when needed.
- _Delete_ — Remove a sale after confirmation.
- _Search_ — Find sales by buyer name and filter by day type.

## Progress 1

The goal of Progress 1 is to set up the public repository, document the project proposal and team responsibilities, and run a basic TypeScript program that prints Hello console.

## Team Members and Task Division

| Name                                      | Student ID      | GitHub                                             | Progress 1 Task                                                                                                                                                                    | Main Pull Request                                                                                |
| ----------------------------------------- | --------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| M. Ridho Alfaridzi Nasution (Team Leader) | 263140700111027 | [@dhoengineer](https://github.com/dhoengineer)     | Write the README with the project proposal, team details, and task division.                                                                                                       | [PR #4](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/4)                 |
| Ossamah Ale Ibaraja                       | 263140707111047 | [@aleewv](https://github.com/aleewv)               | Create the public repository and add the Hello console program in src/index.ts. Proposed: set up package.json and tsconfig.json, and check that .gitignore excludes node_modules/. | [PR #1](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/1)                 |
| Melinda Sri Cahyani Situmorang            | 263140700111004 | [@gargantua-rus](https://github.com/gargantua-rus) | Add the initial Project Report to the docs/ folder.                                                                                                                                | [Direct commit](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/commit/ac4aabe) |

## How to Run

After the TypeScript setup is in place, open a terminal in the project folder and run:

Open a terminal in the project folder and run:

```bash
npm install
npx ts-node src/index.ts
```

Expected output:

```text
Hello console
```
