# Standings Component for ESPN.com NFL Team Page

> The Standings Component will display the divisional teams’ W-L-T record, percentage,  as well as the points scored and points given up.  Client will be able to click to full standings which will redirect to the full NFL team standings Component (stretch milestone).

## Related Projects

  - https://github.com/JKR-Hacks/joes-services-schedule
  - https://github.com/JKR-Hacks/randy-services-stats

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To understand how to create a sports team standings module for ESPN with over 10 million records. This repo will render a standings module to the DOM. When clicked the full standings for the entire NFL division can be seen.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Setup

- Start server: npm run server
- Start webpack: npm run react
- Seed database with sample data: npm run seed
  - NOTE: This will create 10,000,000 records in the database but only 100 will be rendered to the DOM.
- Start tests: npm run test

