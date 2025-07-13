
# ON CHAIN HEALTH

This repository contains the source code for an ON CHAIN HEALTH canister on the Internet Computer Protocol (ICP). The canister allows users to manage and query patient details, providing functionality such as adding, updating, deleting, and querying patient records based on various criteria.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The hospital management canister is designed to be a decentralized solution for managing patient information. Each patient is represented by the `PatientDetails` struct, which includes fields such as `id`, `patient_name`, `patient_history`, `doctor_name`, `created_at`, `updated_at`, `next_appointment`, and `in_clinic`. The canister uses a `BTreeMap` for efficient storage and retrieval.

**Key Features:**

- **Querying**: Retrieve information about specific patients, all patients, patients in the clinic, or perform a search based on a query string.

## Prerequisites

Before you begin, ensure that you have the following installed:

- [Rust](https://www.rust-lang.org/tools/install)
- [Internet Computer SDK (DFINITY)](https://sdk.dfinity.org/docs/quickstart/local-quickstart.html)

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/RealYash27/ONCHAIN_HealthREC.git
cd ONCHAIN_HealthREC
````

## ✅ Automated Setup

To automatically set up the project (including canister creation and environment configuration):

```bash
chmod +x setup.sh
./setup.sh
```

This script will handle:

* Installing frontend dependencies
* Creating and deploying the backend canister
* Syncing the environment variables
* Starting the local replica
* Launching the frontend development server

## Usage

To use the hospital management canister, you can explore the provided query and update functions via the frontend or `dfx` commands.

## Testing

To run backend tests, use the following command:

```bash
cargo test
```

## Deployment

To deploy the canister locally manually:

1. Start the local Internet Computer replica:

   ```bash
   dfx start --clean --background
   ```

2. Deploy the backend canister:

   ```bash
   dfx deploy
   ```

3. Use the generated canister ID to interact with the deployed backend.

For advanced deployment (e.g., production or remote), see the [DFINITY SDK Documentation](https://sdk.dfinity.org/docs/quickstart/local-quickstart.html).

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Follow the standard GitHub flow for contributing.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

