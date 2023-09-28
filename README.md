# Data Service Development Kit Getting Started

Using the Data Service Development Kit app you can develop your own apps based on the Data Service, test your app locally with simulated data to make sure your it behaves the same once you deploy your app to Industrial Edge. - [Data Service Development Kit Getting Started](#data-service-development-kit-getting-started)

- [Data Service Development Kit Getting Started](#data-service-development-kit-getting-started)
  - [Description](#description)
    - [Overview](#overview)
    - [General task](#general-task)
  - [Requirements](#requirements)
    - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Documentation](#documentation)
  - [Contribution](#contribution)
  - [Licence and Legal Information](#licence-and-legal-information)

## Description

### Overview

This application example introduces the Data Service Device Kit and how to extract data from the Data Service using the available API calls.
The free Development Kit provides you with a Docker Image that launches the Data Service API on the developer's computer and makes it callable. With this tool, you can develop your customer's app entirely without Industrial Edge access on your development computer. Nor do you need to own a real device that provides you with data. With our simulation service, plant data can be simulated without further ado.

- The Development Kit can be started with a few clicks on the development environment
- Immediately testable of your API calls even without access to a real PLC

### General task

The simulation tool - provided by the Development Kit - generates a **Sinus Signal** and stores the data in the **Data Service** container. The Flow of the Node-Red applications accesses the **Data Service** via available API calls and displays the data in a dashboard.

![deploy VFC](docs/graphics/overview.png)  

## Requirements

### Prerequisites
To run the application example you have to download the Data Service Development Kit Getting Started on [Github](https://github.com/industrial-edge/data-service-development-kit-getting-started.git). 

This GitHub-Repository contains:
- docs: Here you will find the [user documentation](../docs/Visualization_example_value.md) of the applikation example and more [implementation details](../docs/Implementation.md) to understand the way it works
- [NodeRed flow](../src/flows.json) for the visualization of the data
- [graphics](../docs/graphics) used in the documentation
- [docker-compose.yml](../docker-compose.yml): This file specifies which of the services run together, address,communication, etc.

> **_NOTE:_** The Docker images used no longer have to be loaded manually, but are automatically downloaded directly from github. (as specified in the [docker-compose.yml](../docker-compose.yml))

That file defines the use of the following images:

- IIH Essentials Development Kit for Industrial Edge V.1.8.0
- Data Simulator (dataservicesimulation:1.5.2)
- MQTT Broker (eclipse-mosquitto:1.6.10)
- Data Service (with external interface (REST API) for non-Siemens applications) (postgres:9.6.16-alpine)
- nodeRED (node-red:1.3.4)

## Installation

The following services must be installed:

- Docker for Linux
  
 > **_NOTE:_**  Linux device is used for this application example

## Usage

The Data Service Development Kit offers you the possibility to make your app  fit for Industrial Edge. Using the integrated API interface, you save your app's data to the Data Service database structure and retrieve it when needed. This means that other apps, such as Performance Insight or Notifier, can easily access the data and use it for themselves.

After the development phase, your app can be handed over to your customer together with the Data Service. In a few steps, the customer connects the Data Service with the already available connectors and thus creates a quick link to his plant.

## Documentation

You can find the further information about the following steps in the [docs](./docs)

The contained two files may help to get the application example running and to understand the way it works:

- [Visualization of an example sinus in NodeRED](./docs/Visualization_example_value.md#description)

- [Production data extraction and visualization in NodeRED](./docs/Implementation.md#description)

## Contribution

Thank you for your interest in contributing. Anybody is free to report bugs, unclear documentation, and other problems regarding this repository in the Issues section.
Additionally everybody is free to propose any changes to this repository using Pull Requests.

If you haven't previously signed the [Siemens Contributor License Agreement](https://cla-assistant.io/industrial-edge/) (CLA), the system will automatically prompt you to do so when you submit your Pull Request. This can be conveniently done through the CLA Assistant's online platform. Once the CLA is signed, your Pull Request will automatically be cleared and made ready for merging if all other test stages succeed.

## Licence and Legal Information

Please read the [Legal information](LICENSE.md).
