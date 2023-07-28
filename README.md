# PlanX Core

This package is a declarative wrapper for the core data structures and operations of [PlanX](https://github.com/theopensystemslab/planx-new).

It also includes data processing functions for the various export formats of PlanX application data.

## Structure

The package is structured by functional responsibility. Here is a summary of what each directory contains:

    ./src
    ├── requests  # a data access client exposing declarative interfaces for common database operations
    ├── models    # a set of functions and classes that encapsulate the functionality of domain objects
    ├── exports   # data processing functions to convert application data into third-party data formats
    ├── templates # data processing functions to convert application data into various document formats
    └── types     # a set of Typescript types for the exported functions and structures of this package

## Conventions

Requests:

- `DomainClient` sets up individual resource clients which each expose a declarative interface for operations on that resource.
- Functions or methods that begin with an underscore (e.g `$admin.session._destroy`) are intended as development/test utilities and do not represent actions that should be a part of application code.
- Instances of `DomainClient` should be named `$admin` for clients with admin credentials and `$public` for those without.

Models:

- Rich data structures which have implicit rules around how data should be read or manipulated are best represented as classes which encapsulate behaviours in methods.
- Simple data structures which have few or no rules around how data should be read or manipulated are best represented as simple objects/arrays with a clear type definition.

Exports / Templates:

- Prefer stream processing where possible.

Types:

- Following the [robustness principle](https://en.wikipedia.org/wiki/Robustness_principle), types should generally be represented as an `interface` for inputs and as a `type` for outputs with a known structure.

## Local Development

- Install [pnpm](https://pnpm.io) globally if you don't have it already `npm i pnpm -g`
- Install dependencies `pnpm i`

Other useful package scripts:

- `pnpm build`: generate package exports and examples

- `pnpm check`: scan for type and style errors
- `pnpm lint`: scan for style errors
- `pnpm lint:fix`: fix style errors

- `pnpm test`: run unit tests
- `pnpm test:coverage`: run unit tests with coverage report

### Debugging

Setting the environment variable `DEBUG` to any truthy value turns on the console output for debugging (useful for setup and teardown issues).

## Publishing

This node package is published via Github and can be referenced in a `pnpm` style `package.json` file, like so:

    "dependencies": {
      "@opensystemslab/planx-core": "github:theopensystemslab/planx-core#commit-ish",
      ...
    }

## License

This repository is licensed under the [The Mozilla Public License (MPL) Version 2](https://github.com/theopensystemslab/planx-core/blob/main/LICENSE).
