#!/bin/bash

# Change to the desired directory
cd /var/www/html/pwa/

# Run npm install
npm install

# Run npm run build
npm run build

# Output success message
echo "npm install and npm run build completed successfully."
