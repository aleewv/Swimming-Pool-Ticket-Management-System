import * as readline from "readline-sync";

// Konstanta diskon member untuk perhitungan harga tiket
const MEMBER_DISCOUNT: number = 0.1;

// Entitas utama tiket untuk fitur CRUD pada progress berikutnya
interface Ticket {
  ticketId: string;
  ticketType: string;
  price: number;
  isActive: boolean;
}

// Entitas pelanggan berdasarkan rancangan awal kelompok
interface Customer {
  customerId: string;
  customerName: string;
}

// Entitas transaksi berdasarkan rancangan awal kelompok
interface Transaction {
  transactionId: string;
  ticketId: string;
  customerId: string;
  quantity: number;
  totalPrice: number;
}

// Data sementara untuk satu kali perhitungan harga tiket
interface TicketCalculation {
  memberStatus: string;
  isMember: boolean;
  dayChoice: number;
  categoryChoice: number;
  price: number;
  discount: number;
  totalPayment: number;
}

// Array untuk menyimpan data pada fitur CRUD dan Search di progress berikutnya
const tickets: Ticket[] = [];
const customers: Customer[] = [];
const transactions: Transaction[] = [];

// Fungsi 1: Membuat data perhitungan kosong untuk transaksi baru
function createEmptyCalculation(): TicketCalculation {
  return {
    memberStatus: "",
    isMember: false,
    dayChoice: 0,
    categoryChoice: 0,
    price: 0,
    discount: 0,
    totalPayment: 0,
  };
}

// Fungsi 2: Menentukan harga dasar tiket berdasarkan pilihan hari
function getDayPrice(dayChoice: number): number {
  switch (dayChoice) {
    case 1:
      return 20000;

    case 2:
      return 30000;

    case 3:
      return 40000;

    default:
      return 0;
  }
}

// Fungsi 3: Menyesuaikan harga tiket berdasarkan kategori pengunjung
function applyCategoryAdjustment(
  currentPrice: number,
  categoryChoice: number,
): number {
  let adjustedPrice: number = currentPrice;

  switch (categoryChoice) {
    case 1:
      adjustedPrice -= 5000;
      break;

    case 2:
      adjustedPrice -= 3000;
      break;

    case 3:
      break;

    default:
      break;
  }

  return adjustedPrice;
}

// Fungsi 4: Menghitung diskon member jika memenuhi syarat
function calculateMemberDiscount(price: number, isMember: boolean): number {
  if (isMember && price >= 30000) {
    return price * MEMBER_DISCOUNT;
  }

  return 0;
}

// Fungsi 5: Menghitung total pembayaran akhir
function calculateTotalPayment(price: number, discount: number): number {
  return price - discount;
}

// Fungsi 6: Menampilkan hasil perhitungan tiket di terminal
function printTicketReceipt(ticket: TicketCalculation): void {
  console.log("\n=== SWIMMING POOL TICKET ===");
  console.log("Price: Rp" + ticket.price);
  console.log("Member Discount: Rp" + ticket.discount);
  console.log("Total Payment: Rp" + ticket.totalPayment);
}

// Fungsi 7: Menjalankan proses perhitungan harga tiket
function startTicketOrder(): void {
  const ticket: TicketCalculation = createEmptyCalculation();

  // Meminta dan memvalidasi status member
  ticket.memberStatus = readline
    .question("\nAre you a member? (yes/no): ")
    .trim()
    .toLowerCase();

  if (ticket.memberStatus !== "yes" && ticket.memberStatus !== "no") {
    console.log("Invalid input! Please answer yes or no.");
    return;
  }

  ticket.isMember = ticket.memberStatus === "yes";

  // Menampilkan pilihan hari yang tersedia
  console.log("\n=== SELECT DAY ===");
  console.log("1. Weekday - Rp20000");
  console.log("2. Weekend - Rp30000");
  console.log("3. Holiday - Rp40000");

  // Meminta pengguna memilih hari
  ticket.dayChoice = Number(readline.question("Choose a day (1-3): ").trim());

  // Memvalidasi pilihan hari
  if (
    Number.isInteger(ticket.dayChoice) &&
    ticket.dayChoice >= 1 &&
    ticket.dayChoice <= 3
  ) {
    ticket.price = getDayPrice(ticket.dayChoice);

    // Menampilkan pilihan kategori pengunjung
    console.log("\n=== VISITOR CATEGORY ===");
    console.log("1. Child");
    console.log("2. Student");
    console.log("3. Adult");

    // Meminta pengguna memilih kategori pengunjung
    ticket.categoryChoice = Number(
      readline.question("Choose a category (1-3): ").trim(),
    );

    // Memvalidasi pilihan kategori pengunjung
    if (
      Number.isInteger(ticket.categoryChoice) &&
      ticket.categoryChoice >= 1 &&
      ticket.categoryChoice <= 3
    ) {
      // Menyesuaikan harga berdasarkan kategori yang dipilih
      ticket.price = applyCategoryAdjustment(
        ticket.price,
        ticket.categoryChoice,
      );

      // Memastikan harga tiket lebih dari nol
      if (ticket.price > 0) {
        // Menghitung diskon member jika memenuhi syarat
        ticket.discount = calculateMemberDiscount(
          ticket.price,
          ticket.isMember,
        );

        // Menghitung total pembayaran setelah diskon
        ticket.totalPayment = calculateTotalPayment(
          ticket.price,
          ticket.discount,
        );

        // Menampilkan hasil akhir perhitungan tiket
        printTicketReceipt(ticket);
      } else {
        console.log("Invalid ticket price.");
      }
    } else {
      console.log("Invalid visitor category! Please choose between 1 and 3.");
    }
  } else {
    console.log("Invalid day choice! Please choose between 1 and 3.");
  }
}

// Fungsi 8: Menampilkan pesan untuk fitur yang belum dibuat
function showPendingFeature(featureName: string): void {
  console.log("\n" + featureName + " is planned for a later progress.");
}

// Fungsi 9: Menampilkan menu utama dan jumlah data yang tersimpan
function showMainMenu(): void {
  console.log("\n=== SWIMMING POOL TICKET MANAGEMENT ===");
  console.log("1. Create Ticket");
  console.log("2. View All Tickets");
  console.log("3. View Ticket by ID");
  console.log("4. Update Ticket");
  console.log("5. Delete Ticket");
  console.log("6. Search Ticket");
  console.log("7. Calculate Ticket Price");
  console.log("0. Exit");

  console.log(
    "Saved records: " +
      tickets.length +
      " tickets, " +
      customers.length +
      " customers, " +
      transactions.length +
      " transactions",
  );
}

// Fungsi 10: Mengulang menu utama sampai pengguna memilih Exit
function main(): void {
  let menuChoice: string = "";

  while (menuChoice !== "0") {
    // Menampilkan menu utama
    showMainMenu();

    // Meminta pengguna memasukkan pilihan menu
    menuChoice = readline.question("Select menu: ").trim();

    // Menjalankan fitur sesuai pilihan pengguna
    switch (menuChoice) {
      case "1":
        showPendingFeature("Create Ticket");
        break;

      case "2":
        showPendingFeature("View All Tickets");
        break;

      case "3":
        showPendingFeature("View Ticket by ID");
        break;

      case "4":
        showPendingFeature("Update Ticket");
        break;

      case "5":
        showPendingFeature("Delete Ticket");
        break;

      case "6":
        showPendingFeature("Search Ticket");
        break;

      case "7":
        startTicketOrder();
        break;

      case "0":
        console.log("Thank you for visiting! Goodbye.");
        break;

      default:
        console.log("Invalid menu choice! Please select a valid menu.");
        break;
    }

    // Memberikan jeda sebelum kembali ke menu utama, kecuali saat keluar
    if (menuChoice !== "0") {
      readline.question("\nPress Enter to return to the main menu...");
    }
  }
}

// Memulai program dengan menjalankan fungsi utama
main();
