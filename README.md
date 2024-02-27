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


