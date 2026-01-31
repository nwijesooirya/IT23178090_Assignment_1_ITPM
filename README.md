# English to Sinhala Translation Test Automation - playwrite-test

## Project Overview

This is a Playwright test automation project for validating English to Sinhala translation functionality. The repository contains automated tests that exercise translation scenarios, UI checks and negative cases.

*Registration Number:* IT23178090

## Project Structure


playwrite-test/
├── package.json                 # Project dependencies and metadata
├── playwright.config.ts         # Playwright configuration
├── README.md                    # This file
├── tests/
│   └── example.spec.ts          # Test specifications
└── playwright-report/           # HTML test reports (generated after test runs)


## Technology Stack

- *Test Framework:* Playwright
- *Programming Language:* TypeScript
- *Node.js Version:* 16.x or higher
- *Package Manager:* npm

## Prerequisites

Before running this project, ensure you have the following installed:

- *Node.js* (v16.x or higher) - https://nodejs.org/
- *npm* (comes with Node.js)
- *Git* (for version control) - https://git-scm.com/

Verify your installations by running:

```bash
node --version
npm --version
git --version
```


## Installation Instructions

### Step 1: Clone or Download the Repository

```bash
# Clone the repository (if using Git)
git clone <repository-url>
cd "Playwrite test"

# Or extract the downloaded files
cd "Playwrite test"
```


### Step 2: Install Dependencies

```bash
npm install
```

This will install the project devDependencies listed in `package.json` (notably `@playwright/test`).

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

This installs the browser binaries needed for testing (Chromium, Firefox, WebKit).

## Running the Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Specific Browser

```bash
# Run tests in Chromium only
npx playwright test --project=chromium

# Run tests in Firefox only
npx playwright test --project=firefox

# Run tests in WebKit only
npx playwright test --project=webkit
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### Run Tests in Headed Mode (see browser)

```bash
npx playwright test --headed
```

### Run Specific Test File

```bash
npx playwright test tests/example.spec.ts
```

### Run Tests Matching a Pattern

```bash
npx playwright test -g "Simple Present"
```

### View Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report will open in your default browser showing:
- Test results (passed/failed)
- Execution time
- Screenshots and videos (if configured)
- Detailed error messages

## Project Configuration

### playwright.config.ts

Key configuration settings (as present in `playwright.config.ts`):

- *testDir:* ./tests - Location of test files
- *fullyParallel:* true - Tests run in parallel
- *forbidOnly:* enabled when `process.env.CI` is set
- *retries:* 0 locally, 2 on CI (driven by `process.env.CI`)
- *workers:* single worker on CI, default locally
- *reporter:* html - Generates HTML report
- *use.trace:* 'on-first-retry' - Collect trace for first retry
- *projects:* configured for `chromium` (others commented out)

### package.json

Project metadata and devDependencies (current `package.json`):

```json
{
	"name": "playwrite-test",
	"version": "1.0.0",
	"main": "index.js",
	"scripts": {},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"description": "",
	"devDependencies": {
		"@playwright/test": "^1.58.0",
		"@types/node": "^25.0.10"
	}
}
```


## Test Coverage

The test suite in `tests/example.spec.ts` includes a broad set of cases:

- *Positive Functional Tests (Pos_Fun):* multiple tests validating translation of common tenses, questions, imperatives, compound and paragraph inputs
- *Positive UI Scenarios (Pos_UI):* basic UI output verification
- *Negative Functional Tests (Neg_Fun):* inputs containing English sentences, emails, passwords, numeric expressions, units and other edge cases
- *Performance:* basic timing expectations may be added if required

## Writing New Tests

To add new test cases, open `tests/example.spec.ts` and follow the existing patterns. Example:

```typescript
test('Pos_Fun_0010: New Test Case', async ({ page }) => {
	await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Test input');
	await expect(page.locator('div.bg-slate-50').first()).toHaveText('Expected output');
});
```

Then run:

```bash
npx playwright test
```

## Continuous Integration (CI)

The repository's configuration uses `process.env.CI` to detect CI environments. When `CI` is set:

- *retries:* 2
- *workers:* 1 (single worker)
- *forbidOnly:* enabled to prevent accidental `test.only`

## Troubleshooting

### Dependencies not installing

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Browser binaries not found

```bash
# Reinstall Playwright browsers
npx playwright install
# Or with additional dependencies
npx playwright install --with-deps
```

### Tests failing with timeout

- Increase timeout in `playwright.config.ts` or per-test
- Ensure the target application is reachable
- Verify CSS selectors used in tests

### Tests not finding elements

- Use Playwright Inspector: `npx playwright test --debug`
- Confirm selectors with browser devtools

## Additional Resources

- https://playwright.dev/docs/intro
- https://playwright.dev/docs/api/class-playwright
- https://playwright.dev/docs/debug
- https://www.typescriptlang.org/docs/
- https://nodejs.org/en/docs/

## Repository

If present, repository link can be provided in `REPOSITORY.txt`.

## Author

*Registration Number:* IT23178090

## License

ISC

## Support

For issues or questions:

1. Check the Playwright documentation
2. Review test output and error messages
3. Run in debug mode for detailed execution flow
4. Consult the troubleshooting section above
5. Verify all prerequisites are installed correctly

---

*Last Updated:* January 30, 2026
