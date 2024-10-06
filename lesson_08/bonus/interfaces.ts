interface UserPerson {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressPerson;
    phone: string;
    website: string;
    company: CompanyPerson;
}

interface AddressPerson {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoPerson;
}

interface GeoPerson {
    lat: string;
    lng: string;
}

interface CompanyPerson {
    name: string;
    catchPhrase: string;
    bs: string;
}

export { UserPerson }