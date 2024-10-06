/*
Vytvoření Funkce pro Načítání Dat:
    ● Napište async funkci v TypeScriptu, která načte uživatelská data z mock API
(např. JSONPlaceholder).
    ● Příklad API endpointu pro použití: https://jsonplaceholder.typicode.com/users
    Priklad usera z api:
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
*/


const apiUrl = "https://jsonplaceholder.typicode.com/users";
const apiURLError = "https://jsonplaceholder.typicode.com/userss";

const fetchDataUser = async (): Promise<User[]> => {
    try {
        const response = await fetch(apiUrl);
        const data: User[] = await response.json();
        //console.table(data); // Preco adress a company su obe object??? len miesto???
        //console.log(data); // Preco tu nesu uz adress a company object, ale geo je??? len miesto???
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

//fetchDataUser();



/*
Otypujte odpověď z API:
    ● Definujte interface nebo type TypeScriptu, které popisuje strukturu
očekávaných uživatelských dat z API.
    ● Příklad polí: id, name, username, email atd.
*/

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}



/*
Zobrazení Uživatelských Dat Pomocí Šablonových Literálů:
    ● Formátujte a zobrazte načtená uživatelská data pomocí šablonových literálů.
    ● Ujistěte se, že data jsou prezentována přívětivě a čitelně.
    ● Použijte například console.table
*/

const displayUser = (user: User) => {
    console.log(`----- User Details -----
    Name: ${user.name}
    Username: ${user.username}
    Email: ${user.email}
    Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}
    Company: ${user.company.name}`);
};

const fetchAndDisplayUser = async () => {
    const users = await fetchDataUser();
    users.forEach((user) => displayUser(user));
}

//fetchAndDisplayUser();



/*
Implementujte zpracování chyb pomocí try...catch.
    ● V případě selhání načítání dat z API zobrazte uživatelsky přívětivou chybovou
zprávu.
    ● Zamyslete se nad tím, jaká chybová zpráva by byla vhodná a informativní.
*/


async function fetchDataUserError(): Promise<User[]> {
    try {
        const response = await fetch(apiURLError);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - Unable to fetch users`);
        }
        const data: User[] = await response.json();
        //console.table(data);
        return data;
    } catch (error) {
        console.error("Failed to load user data. Please try again later.");
        return [];
    }
}

//fetchDataUserError();
