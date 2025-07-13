#!/bin/bash

set -e  # Exit on error

echo "📦 Setting up frontend..."
cd frontend
npm install

# Ensure assets directory exists
mkdir -p assets

cd ..

echo "🚀 Restarting dfx..."
dfx stop 2>/dev/null || true  # Stop any existing dfx processes
dfx start --clean --background

echo "📡 Creating backend canister..."
dfx canister create icp_rust_boilerplate_backend

echo "⚙️ Generating canister types..."
dfx generate icp_rust_boilerplate_backend

echo "🆔 Fetching canister ID..."
CANISTER_ID=$(dfx canister id icp_rust_boilerplate_backend)
echo "🔎 Got Canister ID: $CANISTER_ID"

echo "📄 Writing to .env..."
echo "VITE_CANISTER_ID_ICP_RUST_BOILERPLATE_BACKEND=$CANISTER_ID" > .env

echo "📁 Copying .env to frontend..."
cp .env frontend/.env

echo "📦 Deploying canisters..."
npm run build
npm run gen-deploy
