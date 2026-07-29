#!/usr/bin/env bash

set -euo pipefail

ENVIRONMENT="${1:-staging}"

if [ "${ENVIRONMENT}" = "production" ]; then
    echo "Production environment selected"
else
    echo "Non-production environment selected"

echo "Script completed"
