const users = [
    {
        name: "Ján",
        age: 35,
        address: {
            street: "Hlavná",
            number: 12,
            city: "Bratislava",
            postalCode: "811 01",
        },
    },
    {
        name: "Mária",
        age: 28,
        address: {
            street: "Kvetná",
            number: 3,
            city: "Košice",
            postalCode: "040 01",
        },
    },
    {
        name: "Peter",
        age: 42,
        address: {
            street: "Záhradná",
            number: 10,
            city: "Nitra",
            postalCode: "949 01",
        },
    },
    {
        name: "Lucia",
        age: 19,
        address: {
            street: "Hviezdoslavova",
            number: 7,
            city: "Prešov",
            postalCode: "080 01",
        },
    },
    {
        name: "Marek",
        age: 31,
        address: {
            street: "Partizánska",
            number: 23,
            city: "Žilina",
            postalCode: "010 01",
        },
    },
    {
        name: "Martina",
        age: 26,
        address: {
            street: "Slnečná",
            number: 15,
            city: "Trnava",
            postalCode: "917 01",
        },
    },
    {
        name: "Tomáš",
        age: 45,
        address: {
            street: "Nová",
            number: 4,
            city: "Zvolen",
            postalCode: "960 01",
        },
    },
    {
        name: "Viera",
        age: 33,
        address: {
            street: "Štefánikova",
            number: 2,
            city: "Banská Bystrica",
            postalCode: "974 01",
        },
    },
    {
        name: "Adam",
        age: 38,
        address: {
            street: "Kukučínova",
            number: 21,
            city: "Poprad",
            postalCode: "058 01",
        },
    },
    {
        name: "Eva",
        age: 22,
        address: {
            street: "Mierová",
            number: 9,
            city: "Martin",
            postalCode: "036 01",
        },
    },
];

const usersOver30 = users.filter((user) => user.age > 30);

const userStrings = usersOver30.map(
    (user) => `${user.name} býva v ${user.address.city}.`
);

userStrings.forEach(userString => console.log(userString));

