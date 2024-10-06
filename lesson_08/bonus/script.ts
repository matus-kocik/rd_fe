import { UserPerson } from "./interfaces";

const apiUrl: string = "https://jsonplaceholder.typicode.com/users";

// Funkcia funguje na ziskanie dat z API, console.table okomentovane
const fetchDataUserPerson: () => Promise<UserPerson[]> = async () => {
    try {
        const response: Response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(
                `HTTP error! Status: ${response.status} - ${response.statusText}`
            );
        }
        const data: UserPerson[] = await response.json();
        //console.table(data);
        return data;
    } catch (error) {
        console.error("Failed to load user data. Please try again later.");
        return [];
    }
};

const displayUserCards = (users: UserPerson[]) => {
    const cardContainer = document.getElementById("user-cards");
    if (cardContainer) {
        users.forEach((user) => {
            const userCard = document.createElement("div");
            userCard.classList.add("card", "mb-4");
            userCard.style.width = "18rem";
            userCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">City: ${user.address.city}</p>
                    <a href="#" class="btn btn-primary">View Profile</a>
                </div>
            `;
            cardContainer.appendChild(userCard);
        });
    }
};

const fetchAndDisplayUserPersons = async () => {
    const users = await fetchDataUserPerson();
    displayUserCards(users);
};

fetchAndDisplayUserPersons();
