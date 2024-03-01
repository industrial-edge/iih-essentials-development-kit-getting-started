# IIH Essentials Development Kit Getting Started

Using the IIH Essentials Development Kit you can develop apps based on the IIH Essentials and integrate them into Siemens Industrial Edge.

- [IIH Essentials Development Kit Getting Started](#iih-essentials-development-kit-getting-started)
  - [Description](#description)
    - [Overview](#overview)
    - [General task](#general-task)
  - [Content](#content)
  - [Installation](#installation)
    - [Start Docker Container](#start-docker-container)
  - [Documentation](#documentation)
  - [Contribution](#contribution)
  - [Licence and Legal Information](#licence-and-legal-information)

To learn more about IIH Essentials and the Development Kit refer to the following links:
- [What is IIH Essentials?](https://industrial-edge.github.io/iih-essentials-development-kit/iih-essentials/introduction-to-iih-essentials/what-is-iih-essentials/)
- [IIH Essentials Development Kit](https://github.com/industrial-edge/iih-essentials-development-kit.git)

## Description

### Overview

This application example introduces the IIH Essentials Development Kit and how to extract data from IIH Essentials using its REST API.
The free Development Kit provides you with a Docker Image that launches the IIH Essentials API on the developer's computer and makes it callable. With this tool, you can develop your own app entirely without Industrial Edge access on your development computer. Nor do you need to own a real device that provides you with data. With our simulation service, plant data can be simulated without further ado.

Complete instructions for setting up the application example can be found in the [Installation](#installation)
- Starting the docker containers
- After the docker containers are started you can configure the parts of the application example using a web-browser:
  - Simulation UI
  - IIH Essentials (formerly called Data Service)
  - Node-RED



### General task

The simulation tool - provided by the Development Kit - generates a **Sinus Signal** and stores the data in the **IIH Essentials** container. The Flow of the Node-Red application accesses the **IIH Essentials** via REST-API calls and displays the data in a dashboard.

![deploy VFC](docs/graphics/overview.png)  

## Content

To run the application example you have to download the IIH Essentials Development Kit Getting Started

This GitHub-Repository contains:
- [Docs](./docs): Here you will find the [user documentation](./docs/Visualization_example_value.md) of the application example and more [implementation details](./docs/Implementation.md) to understand the way it works
- [Node-RED flow](./src/flows.json) for the visualization of the data
- [docker-compose.example.yml](./docker-compose.example.yml): An example docker compose file that can be used to run this application example which specifies the services, addresses, communication, etc.

> **_NOTE:_** If you use the example docker compose file the Docker images are automatically downloaded directly from Docker Hub. (as specified in the [docker-compose.example.yml](./docker-compose.example.yml))

That file defines the use of the following images:

- IIH Essentials Development Kit for Industrial Edge V.1.8.0
- Data Simulator (dataservicesimulation:1.5.2)
- MQTT Broker (eclipse-mosquitto:1.6.10)
- IIH Essentials (with external interface (REST API) for non-Siemens applications) (postgres:9.6.16-alpine)
- Node-RED (node-red:3.1.5)

## Installation

The following service must be installed:

- Docker for Linux
  
 > **_NOTE:_**  Linux is used for this application example

### Start Docker Container

To start the Docker container, follow these steps:

1. Go to your Linux system.
2. Open the console in the directory in which the application should be stored
3. Clone the application example using the following command and then change the working directory:

  ```bash
  git clone https://github.com/industrial-edge/iih-essentials-development-kit-getting-started.git
   
  cd ./iih-essentials-development-kit-getting-started
  ```

4. In the root directory of this repository you find the file named `docker-compose.example.yml`. The `docker-compose.example.yml` is an example docker compose file that can be used to run this application example. If you choose to use these, rename the file to `docker-compose.yaml` before proceeding.
5. Start the containers by executing: 
  
  ```bash
  docker-compose up
  ```
  All service images are downloaded from Docker Hub and launched as defined in the `docker-compose.yml` file. 

  > **_Important:_**  The complete instructions for setting up the application example can be found in the [user documentation](./docs/Visualization_example_value.md#description)

## Documentation

You can find the further information about the following steps in the [docs](./docs)

The contained two files help you to get the application example up and running and to understand the way it works:

- [Visualization of an example sinus in Node-RED (user documentation)](./docs/Visualization_example_value.md#description)

- [Production data extraction and visualization in Node-RED](./docs/Implementation.md#description)

## Contribution

Thank you for your interest in contributing. Anybody is free to report bugs, unclear documentation, and other problems regarding this repository in the Issues section.
Additionally everybody is free to propose any changes to this repository using Pull Requests.

If you haven't previously signed the [Siemens Contributor License Agreement](https://cla-assistant.io/industrial-edge/) (CLA), the system will automatically prompt you to do so when you submit your Pull Request. This can be conveniently done through the CLA Assistant's online platform. Once the CLA is signed, your Pull Request will automatically be cleared and made ready for merging if all other test stages succeed.

## Licence and Legal Information

Please read the [Legal information](LICENSE.md).
