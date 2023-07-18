#!/usr/bin/env bash

# clone the main planx repo
git clone -b ben/add-payment-id-computed-field https://github.com/theopensystemslab/planx-new planx

# setup credentials
./planx/scripts/pull-secrets.sh

# run containers
./planx/scripts/start-containers-for-tests.sh
