# contact-book-api
A simple searchable contact-book API based on Sails.

## Prerequisites

1. Sails (`sudo npm install -g sails`)

## Installation

1. Clone the app and navigate to the directory.
2. Run `npm install` to install dependencies.
3. Run `sails lift --prod` to start the server.

## Features

Use any REST client to CRUD `/contacts`. This app uses Sails Disk as the database. Configuration can be added to use any other database server like MySQL or MongoDB. CORS rules have been purposely relaxed, not suited for production. `/contacts/count` returns count. `/contacts/search` returns search results.

## Tests

None.