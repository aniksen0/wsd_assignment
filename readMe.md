
# Playwright automation
This is a web test automation framework, This automation script follows
- Page Object Model
- Reporting tools
- Retries
- structured code format
- clean and reusable code
- hassle free plug and run


# Reasoning behind this approach

**Description:**
- `tests/`: Contains all test case files.
- `pages/`: Page Object Model classes for each page.
- `utils/`: Utility functions and reporting tools.
- `fixtures/`: Test data and mock files.
- `.github/workflows/`: CI/CD pipeline configuration.
- `playwright.config.ts`: Playwright configuration.
- `package.json`: Project dependencies and scripts.
- `readMe.md`: Project documentation.

---

## Installation & Setup Guide

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### 1. Clone the Repository
```sh
git clone <your-repo-url>
cd playwright-POM
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Project Structure Overview
- All test cases are in the `tests/` folder.
- Page Object Models are in the `page/` or `pages/` folder.
- Test data is in `testData/`.
- Configuration is in `playwright.config.ts`.

### 4. Running Tests
To run all Playwright tests:
```sh
npm test
```
Or directly:
```sh
npx playwright test
```

#### Run Specific Test File
```sh
npx playwright test tests/regression.spec.ts
```

#### Run Tests in Headed Mode (see browser UI)
```sh
npx playwright test --headed
```

#### Generate HTML Report
After running tests, open the report:
```sh
npx playwright show-report
```

### 5. Using Scripts
- `npm test`: Runs all Playwright tests as defined in `package.json`.
- You can add more scripts in `package.json` as needed (e.g., for linting, cleaning reports, etc.).

### 7. Troubleshooting
- If you encounter issues, ensure all dependencies are installed and Node.js is up to date.
- For Playwright-specific errors, refer to the [Playwright documentation](https://playwright.dev/docs/intro).

--- 