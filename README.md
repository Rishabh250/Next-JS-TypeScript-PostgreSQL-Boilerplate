# AutoBlogGen: Advanced Blog Automation System

## Description
AutoBlogGen is a cutting-edge blog automation system designed to streamline the process of blog creation, management, and deployment. Built with TypeScript and Express, this backend application offers a robust solution for handling HTTP requests with efficiency and ease. The system is architected to ensure a clear separation of concerns, employing controllers, services, routes, models, and middleware for organized and maintainable code.

## Application Configuration

### General Configuration
- **Version**: Controlled by the `VERSION` environment variable or falls back to the version specified in `package.json`.
- **Name**: Set via the `NAME` environment variable or defaults to the name in `package.json`.
- **Domain**: Defined by the `DOMAIN` environment variable or defaults to `http://localhost:3000`.
- **Host**: Configured through the `HOST` environment variable or defaults to `0.0.0.0`.
- **Port**: Determined by the `PORT` environment variable or defaults to `3000`.

### Database Configuration
Database settings are specified under `src/database/config/config.js`, catering to development, test, and production environments through environment variables.
- **Database Name**: `DB_NAME` environment variable or `blogs_local` by default.
- **User**: `DB_USER` environment variable or `postgres` as the default.
- **Password**: Set via `DB_PASSWORD` environment variable or `1234` by default.
- **Host**: `DB_HOST` environment variable or defaults to `localhost`.
- **Port**: Defined by `DB_PORT` environment variable or `5432` by default.

## Project Documentation
This TypeScript-based project utilizes Express for managing HTTP requests and follows a structured architecture to maintain a clean separation of concerns. The key components include:

- **Controllers**
- **Services**
- **Routes**
- **Models**
- **Middleware**

### Folder Structure
```bash
 src/
  |- controllers/
  |- database/
  |- interfaces/
  |- middleware/
  |- routes/
  |- services/
  |- utils/
  |- validation/
  |- config/
  |- tests/
```


### Code Review Highlights
- Removed unnecessary `try-catch` blocks and `else` conditions for clarity.
- Employed mappers for better code organization.
- Adhered to coding standards and best practices consistently.

## Installation and Server Start Commands

To install dependencies:
```bash
npm i
```

To start the server:
```bash
npm run start
```

## Migrations
Migrations are handled by Sequelize. To create a new migration, run:
```bash
npx sequelize-cli migration:generate --name <migration-name>
```

To run migrations
```bash
npm run migrate
```

## Test Cases

To run rest case
```bash
npm test
```


