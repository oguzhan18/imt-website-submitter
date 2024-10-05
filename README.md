# IMT Website Submitter
## Overview
IMT Website Submitter is a NestJS-based application that allows users to dynamically generate and submit URLs by replacing a predefined domain within a list of URLs. The service reads a list of URLs from a JSON file, replaces a specific domain with a user-provided domain, and returns the updated list. This project is useful for automated submission or SEO purposes where domain customization is required.
## Features
* **Dynamic URL Replacement:** Replace a specific domain in a list of URLs with any user-provided domain.
* **Simple JSON Input:** URL lists are read from a JSON file for easy configuration.
* **REST API:** A simple API to submit a URL and get a dynamically updated list.
* **NestJS Framework:** Built using the scalable and robust NestJS framework.
## Project Structure
```bash
src/
├── app.module.ts        # Main application module
├── url/
│   ├── url.controller.ts # URL controller for handling requests
│   ├── url.module.ts     # URL module definition
│   ├── url.service.ts    # URL service for business logic
│   └── url-list.json     # JSON file containing the list of URLs to be modified
└── main.ts              # Application entry point
```
## How It Works
1. URL List Management: The `url-list.json` file stores a list of URLs that include the domain oguzhancart.dev.
2. Dynamic URL Replacement: The service reads the `url-list.json` file, and when a request is made, it replaces all occurrences of oguzhancart.dev with the user-supplied URL.
3. API Endpoint: A POST request to `/url/submit` with the body containing the user-provided URL triggers the dynamic replacement of URLs.

## Example
If the `url-list.json` contains:
```json
[
    "http://www.symbols.com/search/oguzhancart.dev",
    "http://topdownloads.net/serp.php?ss=www.oguzhancart.dev"
]
```

## Installation
1. Clone the repository:
```bash 
git clone https://github.com/oguzhan18/imt-website-submitter.git
cd imt-website-submitter
```
2. Install dependencies:
```bash
npm instal
```
3. Run the application:
```bash
npm run start
```
By default, the application will be running at `http://localhost:3000`.

## API Endpoints
### Submit URL
**POST /url/submit**
Submits a user-provided URL to replace the default domain in the list.
* **Body Parameters:**
  * `url (string):` The URL to replace the default domain.
* **Response:** Returns a list of updated URLs as a string, separated by newlines.
### Example Request
```bash
curl -X POST http://localhost:3000/url/submit \
-H "Content-Type: application/json" \
-d '{"url": "google.com"}'
```
### Example Response
```text
http://www.symbols.com/search/google.com
http://topdownloads.net/serp.php?ss=www.google.com
```
## Configuration
* The list of URLs to be modified is located in the `src/url/url-list.json` file. You can add or remove URLs in this file as needed.
## Running Tests
To run the tests for this project, execute the following command:

```bash
npm run test
````

## Technologies
* **NestJS:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
* **TypeScript:** Typed superset of JavaScript that compiles to plain JavaScript.
* **JSON:** Simple format for URL lists.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


