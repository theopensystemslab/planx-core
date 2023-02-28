# PlanX Core

This package is a declarative boundary between the data access layer (GraphQL/Hasura/Postgres) and the PlanX domain.

## Running locally

- Install [pnpm](https://pnpm.io) globally if you don't have it already `npm i pnpm -g`
- Install dependencies `pnpm i`

Other useful package scripts:

  * `pnpm test`: run the test suite
  * `pnpm check`: check and fix type and linting errors
  * `pnpm build`: build the package

## Debugging

Setting the environment variable `DEBUG` to any truthy value turns on the console output for debugging (useful for setup and teardown issues).

## Publishing

This node package is published via Github and can be referenced in a `package.json`, like so:

    "dependencies": {
      "@opensystemslab/core": "git://github.com/theopensystemslab/planx-core.git#commit-ish",
      ...
    }

## License

This repository is licensed under the [Open Government License v3](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
