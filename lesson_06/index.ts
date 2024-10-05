/*
Vytvořte funkci getFullName, která jako parametr přijme objekt s povinnými
vlastnostmi firstName (řetězec) a lastName (řetězec). Funkce vrátí řetězec s celým
jménem. Použijte typování pro definování tvaru objektu v parametrech a návratové
hodnoty funkce.
*/

type Person = {
    firstName: string;
    lastName: string;
}

const getFullName = (person: Person): string => {
    return `${person.firstName} ${person.lastName}`
}

const person1 = {
    firstName: "Matus",
    lastName: "Kocik",
};

console.log(getFullName(person1));

/*
Vytvořte rozhraní User s povinnými vlastnostmi id (číslo), name (řetězec), email
(řetězec). Vytvořte funkci createUser, která přijme povinné parametry pro vytvoření
uživatele a vrátí instanci rozhraní User.
*/


interface User {
    id: number;
    name: string;
    email: string;
}

const createUser = (user: User): User => {
    return user;
}

console.log(createUser({
    id: 1,
    name: "Matus",
    email: "Kocik",
}))

/*
Vytvořte třídu UserAccount s vlastnostmi username (řetězec) a isPremiumAccount
(logická hodnota). Od třídy vytvořte rozhraní UserAccountInterface a exportujte ho.
*/

class UserAccount {
    username: string;
    isPremiumAccount: boolean;

    constructor(username: string, isPremiumAccount: boolean) {
        this.username = username;
        this.isPremiumAccount = isPremiumAccount;
    }
}

// export to main.ts
export interface UserAccountInterface {
    username: string;
    isPremiumAccount: boolean;
}


/*
Vytvořte funkci getAdminUser, která nebude mít parametry a vrátí uživatele s
povinnou rolí admin (řetězec). Použijte unii typů pro povolení vracení User nebo
AdminUser.
*/

interface User {
    id: number;
    name: string;
    email: string;
}

interface AdminUser extends User {
    role: "admin";
}

function getAdminUser(): User | AdminUser {
    return {
        id: 1,
        name: "Admin",
        email: "email",
        role: "admin"
    };
}

const admin = getAdminUser();
console.log(admin);

/*
Vytvořte typ Book pro popis knihy, který bude obsahovat vlastnosti title (řetězec),
pageCount(číslo) a author(řetězec).Vytvořte pole knih s alespoň 5 prvky.
*/

type Book = {
    title: string;
    pageCount: number;
    author: string;
};

const books: Book[] = [
    { title: "The Road", pageCount: 287, author: "Cormac McCarthy" },
    { title: "Brave New World", pageCount: 268, author: "Aldous Huxley" },
    { title: "Sapiens: A Brief History of Humankind", pageCount: 498, author: "Yuval Noah Harari" },
    { title: "The Name of the Wind", pageCount: 662, author: "Patrick Rothfuss" },
    { title: "The Catch-22", pageCount: 453, author: "Joseph Heller" },
];

console.log(books)

/*
Vytvořte soubor books.ts, kde vyexportujete typ Book.V souboru main.ts importujte
tento typ a použijte jej pro vytvoření pole knih.
*/

    // VID. Ostatne subory...