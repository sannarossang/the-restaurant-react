# Booker

## _By Felicia and Sanna_

## Intro ❗❗

---

This is a React Application build with TypeScript (front end) and JavaScript, MongoDB, ExpressJS (and Mongoose), NodeJS (back end). Book a table and enjoy!

## Tekniker :bulb:

---

- React
- Typescript
- JavaScript
- MongoDB
- ExpressJS
- NodeJS
- Styled Component

## Installation 🖥️

---

1. Open your terminal and navigate to the directory where you want to clone the repository.
   ```bash
   cd /path/to/your/directory
   ```
2. Clone the repository by running the following command:
   ```bash
   git clone https://github.com/Medieinstitutet/the-restaurant-grupp2.git
   ```
3. Once the repository is cloned, navigate to the project directory by running the following command:
   ```bash
   cd the-restaurant-grupp2
   ```
4. Open the project in your code editor that has a terminal feature.
5. In the terminal, run the following command to install all the necessary packages listed in the package.json file:
   ```bash
   npm i
   ```
6. Wait for the packages to be installed, and once it is done, you can proceed to run the project.

That's it! Now you have successfully cloned the repository and installed all the necessary packages for the project.

## Routes

---

### Admin

---

#### GET

- http://localhost:4000/api/v1/admin
- http://localhost:4000/api/v1/admin?seatingDate=2023-06-1
- http://localhost:4000/api/v1/admin/:bookingId

#### POST

- http://localhost:4000/api/v1/admin

#### PUT

- http://localhost:4000/api/v1/admin/:bookingId

#### DELETE

- http://localhost:4000/api/v1/admin/:bookingId

### Booker

---

#### GET

- http://localhost:4000/api/v1/booker
- http://localhost:4000/api/v1/booker/6488637682ce5203a6fd32ac

#### POST

- http://localhost:4000/api/v1/booker

#### DELETE

- http://localhost:4000/api/v1/booker/:bookingId

## Conventional commits

- FIX: All minor code changes.
- REFACTOR: Alla funktionsförändringar/förbättringar
- FEATURE: Ny funktionalitet och kod
- DOCS: Alla uppdateringar i .README BUILD: Allt för uppbyggnad av projektet STYLE: Alla visuella förändringar kopplat till styling
