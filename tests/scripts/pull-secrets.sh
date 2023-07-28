#!/bin/bash
cd $(dirname ${0})

aws s3 cp s3://pizza-secrets/root.env ./../.env
echo "Complete: Secrets from S3 copied to local machine"
