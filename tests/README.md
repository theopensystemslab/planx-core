### Integration Tests

To run these integration tests locally:

- configure your aws client with sso credentials as documented [here](https://github.com/theopensystemslab/planx-new/blob/main/doc/how-to/how-to-setup-aws-sso-credentials.md)
- ensure you are running the latest version of the docker containers defined in `planx-new` using the commands documented [here](https://github.com/theopensystemslab/planx-new/blob/main/README.md#docker)
- run `./scripts/pull-secrets.sh` to pull the latest `.env` file
- run `pnpm install` to install test dependencies
- run `pnpm test` to run all integration tests

The `@opensystemslab/planx-core` package is linked to the tests in this project. If you are making local change to the package, you can run `pnpm link ..` to re-link the project and pick up any changes.
