# Swimming Pool Ticket Management System

Fundamentals of Programming Final Examination  
T1A — Group 01 | D3 Information Technology, Universitas Brawijaya

## Project Overview

Swimming Pool Ticket Management System is a TypeScript console application developed as a team project. It is intended to help swimming pool ticket officers calculate prices and, in later progress stages, organize ticket sales records using Create, Read, Update, Delete, and Search features.

## Problem Description

Manual swimming pool ticket sales can lead to mistakes in calculating prices and recording transactions. The planned system helps staff select the day, visitor category, and membership status, then calculate the correct payment. Future progress stages will add transaction storage and management.

## System Users

- **Administrator:** Manages ticket records and monitors sales data (planned).
- **Ticket Officer:** Calculates ticket prices and records customer purchases (record management planned).

## Project Objectives

1. Simplify swimming pool ticket price calculations.
2. Calculate ticket prices based on the selected day and visitor category.
3. Apply member discounts consistently.
4. Develop CRUD and Search functions for transaction records in the following progress stages.
5. Build a console application using the programming concepts required in the final examination.

## Planned System Features

| Feature | Intended behavior | Progress 2 status |
| --- | --- | --- |
| Create | Add a record with a unique ID | Placeholder; planned for Progress 3 |
| Read | Display all records and view details by ID | Placeholder; planned for Progress 4 |
| Update | Edit an existing record | Placeholder; planned for Progress 5 |
| Delete | Remove a record after confirmation | Placeholder; planned for Progress 5 |
| Search | Search records and apply an additional filter | Placeholder; planned for Progress 6 |
| Calculate Ticket Price | Calculate the amount due with category adjustments and discounts | **Implemented** |
| Exit | Stop the menu loop | **Implemented** |

## Data Entities

The current `src/index.ts` defines three arrays to hold future records. These arrays are empty at Progress 2; running the calculator does **not** save a transaction.

| Entity | Properties defined in code |
| --- | --- |
| `Ticket` | `ticketId`, `ticketType`, `price`, `isActive` |
| `Customer` | `customerId`, `customerName` |
| `Transaction` | `transactionId`, `ticketId`, `customerId`, `quantity`, `totalPrice` |

A separate `TicketCalculation` interface holds member status, day/category selections, price, discount, and total payment for one calculation. The entity and workflow design may be refined as CRUD is implemented; related documentation should be updated consistently.

## Pricing Rules (Current Calculator)

| Selection | Price or adjustment |
| --- | ---: |
| Weekday | Rp20,000 |
| Weekend | Rp30,000 |
| Holiday | Rp40,000 |
| Child | −Rp5,000 |
| Student | −Rp3,000 |
| Adult | No reduction |
| Member discount | 10% only if adjusted price is at least Rp30,000 |

Membership accepts `yes` or `no`. Day and category choices accept `1`, `2`, or `3`.

## Team Members and Progress 1 Contributions

| Name | Student ID (NIM) | GitHub | Verified Progress 1 contribution |
| --- | --- | --- | --- |
| M. Ridho Alfaridzi Nasution (Team Leader) | 263140700111027 | [@dhoengineer](https://github.com/dhoengineer) | Project proposal and team responsibilities — [PR #4](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/4) |
| Ossamah Ale Ibaraja | 263140707111047 | [@aleewv](https://github.com/aleewv) | Repository setup, initial TypeScript application, and report organization — [PR #1](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/1), [PR #2](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/2), [PR #6](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/6) |
| Melinda Sri Cahyani Situmorang | 263140700111004 | [@gargantua-rus](https://github.com/gargantua-rus) | Initial reports uploaded — [Project Report commit](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/commit/ac4aabe), [Progress Report commit](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/commit/6f18569) |

The Progress 1 milestone initially used a `Hello console` entry point. That entry point has since been replaced by the Progress 2 main menu.

## Progress 2 — Main Menu and Ticket Calculator

**Deadline:** Friday, 27 November 2026, 23:59 WIB.

The main application lives in [`src/index.ts`](src/index.ts). Progress 2 introduces:

- A repeating main menu using `while` and `switch`, with options 1–7 and Exit (`0`).
- A message for invalid menu choices and a pause before returning to the menu.
- Typed interfaces, arrays for planned data storage, and ten typed functions.
- A working ticket price calculator based on the existing UTS logic.
- Input validation for membership, day, and visitor category.
- Explanatory comments in Indonesian as required by the lecturer.

**Important:** CRUD and Search options currently display a placeholder message. They are not yet implemented, and no transaction records are saved.

### Progress 2 GitHub Evidence

- [PR #7 — Main menu and calculator](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/7)
- [PR #8 — Synchronize existing Progress 1 content into develop](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/8)
- [PR #9 — Integrate Progress 2 into main](https://github.com/aleewv/Swimming-Pool-Ticket-Management-System/pull/9)

The official report, flowchart, and test screenshot are maintained in the `docs/` folder. Their final contents should be checked by the team before submission.

## How to Install and Run

From the project root:

```bash
npm install
npx tsc
node dist/index.js
```

To compile and run the JavaScript output instead:

```bash
npx tsc
node dist/index.js
```

The application displays a menu headed:

```text
=== SWIMMING POOL TICKET MANAGEMENT ===
1. Create Ticket
2. View All Tickets
3. View Ticket by ID
4. Update Ticket
5. Delete Ticket
6. Search Ticket
7. Calculate Ticket Price
0. Exit
```

## Manual Testing — Progress 2

Enter each response separately at the corresponding terminal prompt.

| Test | Input sequence | Expected result |
| --- | --- | --- |
| Invalid menu input | `9` | Invalid menu message, then Enter prompt |
| Future feature placeholder | `1` | Create Ticket is planned for a later progress |
| Member calculator | `7`, `yes`, `3`, `3` | Price Rp40,000; discount Rp4,000; total Rp36,000 |
| Nonmember calculator | `7`, `no`, `1`, `1` | Price Rp15,000; discount Rp0; total Rp15,000 |
| Exit | `0` | Goodbye message and program ends |

The main menu returns after each action other than Exit.

## Next Steps

Progress 3: Create and input validation. Progress 4: Read all/by ID. Progress 5: Update and Delete. Progress 6: Search and completion of required loops and array operations. Progress 7: Final report, GitHub evidence, and demonstration readiness.
