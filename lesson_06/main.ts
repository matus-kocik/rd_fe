import { UserAccountInterface } from "./index";
import { Book } from "./books";

const user: UserAccountInterface = {
    username: "Koco",
    isPremiumAccount: true,
};

console.log(user)

const books1: Book[] = [
    { title: "The Road", pageCount: 287, author: "Cormac McCarthy" },
    { title: "Brave New World", pageCount: 268, author: "Aldous Huxley" },
    { title: "Sapiens: A Brief History of Humankind", pageCount: 498, author: "Yuval Noah Harari" },
    { title: "The Name of the Wind", pageCount: 662, author: "Patrick Rothfuss" },
    { title: "The Catch-22", pageCount: 453, author: "Joseph Heller" },
];

console.log(books1)