# Úkol na načítání dat pomocí useEffect

Cíl: Vytvořit React komponentu, která načítá a zobrazuje seznam uživatelů z API
pomocí hooku useEffect.

● Nastavení projektu:
    ○ Vytvořte nový React projekt pomocí Create React App:

    npx create-react-app data-fetching-hw --template typescript

    ○ Přejděte do nově vytvořené složky:
    cd data-fetching-hw

● Vytvoření komponenty:
    ○ V src/components složce vytvořte nový soubor s názvem UserList.tsx
    ○ V tomto souboru vytvořte funkční komponentu UserList
    ○ Nezapomeňte vytvořit barrel file index.ts, abychom neměli nehezké importy
● Pomocí useEffect a useState načtěte seznam uživatelů z mockAPI
    ○ https://jsonplaceholder.typicode.com/users
● Renderování komponenty:
    ○ Zobrazte zprávu &quot;Načítání...&quot; když se data načítají (použijte state)
    ○ Po načtení dat zobrazte seznam jmen uživatelů
    ○ Pro každého uživatele zobrazte jméno, email a název společnosti
● Nezapomeňte komponentu vyrenderovat v App
● Implementujte zachycení a zobrazení chyb:
    ○ Přidejte nový state pro ukládání chybových zpráv
    ○ Zobrazte chybovou zprávu uživateli, pokud načtení dat selže

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
