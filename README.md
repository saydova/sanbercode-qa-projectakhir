# OrangeHRM - Cypress Automation Testing

## 📌 Project Overview
This project is an end-to-end automation testing suite for the **OrangeHRM Login feature & Dashboard Validation**, built using **Cypress** with **Page Object Model (POM)** architecture.  
The goal of this project is to ensure login functionality, validation behavior, and error handling work correctly under various scenarios using maintainable and scalable test automation practices.

---

## 🛠 Tech Stack
- **Cypress** – End-to-End Testing Framework
- **JavaScript**
- **Mocha** – Test runner (built-in with Cypress)
- **Page Object Model (POM)** design pattern

---

## 📂 Project Structure
```
cypress/
├── e2e/
│ └── login/
│     └── login.cy.js
│ └── dashboard/
│     └── dashboard.cy.js
│
├── pages/
│ ├── BasePage.js
│ ├── DashboardPage.js
│ └── LoginPage.js
│
├── fixtures/
│ └── loginData.json
│
├── support/
│ ├── commands.js
│ └── e2e.js
```

### Folder Description
- **e2e/**: Contains test specifications
- **pages/**: Page Object files (UI locator & action abstraction)
- **fixtures/**: Test data in JSON format
- **support/**: Custom Cypress commands and global configuration

---

## 🧱 Design Pattern
This project applies the **Page Object Model (POM)**:
- UI locators and actions are encapsulated in page classes
- Test cases focus only on test logic and assertions
- Improves readability, reusability, and maintenance

A **BasePage** is used to store common reusable methods such as:
- `click()`
- `type()`
- `visible()`

---

## 🧪 Test Scenarios Covered

### Login Functional Tests
| TC ID | Description |
|-----|-------------|
| TC001 | Login with valid credentials |
| TC002 | Login with invalid username |
| TC003 | Login with invalid password |
| TC004 | Login with empty username |
| TC005 | Login with empty password |
| TC006 | Login with both fields empty |
## Validation Tests
| TC ID | Description |
|-----|-------------|
| TC007 | Username should not accept symbol characters |
| TC008 | Username should not accept emoji / non-ascii characters |
| TC009 | Username should not allow spaces between characters |
| TC010 | Username should not exceed 200 characters |
## Forgot Password
| TC001 | Valid username |
| TC002 | Empty Username |

### Dashboard Functional Test
| TC ID | Description                                   |
| ----- | --------------------------------------------- |
| TC001 | Open Dashboard landing page from navigation   |
| TC002 | Open Admin landing page from navigation       |
| TC003 | Open PIM landing page from navigation         |
| TC004 | Open Leave landing page from navigation       |
| TC005 | Open Time landing page from navigation        |
| TC006 | Open Recruitment landing page from navigation |
| TC007 | Open My Info landing page from navigation     |
| TC008 | Open Directory landing page from navigation   |
| TC009 | Open Claim landing page from navigation       |
| TC010 | Open Buzz landing page from navigation        |


---

## 📁 Test Data (Fixture)
All test data is stored in:
cypress/fixtures/loginData.json
This approach allows:
- Easy test data maintenance
- Separation between test logic and test data

---

## ▶️ How to Run the Tests
### Install Dependencies
Clone Project
Install Npm
```
npm install
```
for running the test
```
npx cypress run --headed
```
for Developed Mode
```
npx cypress open
```
✅ Best Practices Implemented
Page Object Model (POM)
Centralized test data using fixtures
Reusable base page methods
Clean and readable test cases
Custom Cypress commands for common actions
CI/CD pipeline integration

👤 Author
Saydova AKP
Project created for Sanbercode QA Automation Program

📝 Notes
This project is intended for learning and demonstration purposes using the OrangeHRM demo website.
This project execute Test based on scenarios
you can check scenarios from this one
Link Scenario:https://docs.google.com/spreadsheets/d/1KhGvlVcHHkRSy-MwmQXgOauRQBbit2eA8OxoKmheI1Q/edit?usp=sharing
