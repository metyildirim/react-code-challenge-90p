# [React Code Challenge](https://react-code-challenge-90p.vercel.app/)

[![Lint](https://github.com/metyildirim/react-code-challenge-90p/actions/workflows/lint.yml/badge.svg)](https://github.com/metyildirim/react-code-challenge-90p/actions/workflows/lint.yml) [![Cypress](https://github.com/metyildirim/react-code-challenge-90p/actions/workflows/cypress.yml/badge.svg)](https://github.com/metyildirim/react-code-challenge-90p/actions/workflows/cypress.yml)

## Development

### Installing Dependencies

```bash
$ yarn install
```

### Environments

- Copy `.env.local.template` to `.env.local` on same structure level.
- Fill required environment variables.

| Environment          | Type   | Description             |
| -------------------- | ------ | ----------------------- |
| GRAPHQL_ENDPOINT     | String | GraphQL Server Endpoint |
| GRAPHQL_ADMIN_SECRET | String | Header Admin Secret     |

### Running App

Running the development server:

```bash
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Building:

```bash
$ yarn build
```

Linting:

```bash
$ yarn lint
```
