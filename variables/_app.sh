#!/bin/bash
#
# Variables to be used for background styling.

# app variables

jwt_secret="${JWT_SECRET:-}"
jwt_refresh_secret="${JWT_REFRESH_SECRET:-}"

# Credentials are provided via environment variables or interactively
deploy_password="${DEPLOY_PASSWORD:-}"
mysql_root_password="${MYSQL_ROOT_PASSWORD:-}"
db_pass="${DB_PASS:-}"

db_user=root
db_name=whaticket

deploy_email=deploy@whaticket.com
