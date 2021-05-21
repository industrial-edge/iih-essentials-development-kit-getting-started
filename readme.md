# App Data Service Development Kit for Industrial Edge

Using the Data Service Development Kit app you can develop your own apps based on the Data Service and integrate them into the Siemens Industrial Edge Management System.

- [App Data Service Development Kit for Industrial Edge](#app-data-service-development-kit-for-industrial-edge)
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

Thanks to the perfect cooperation of the Siemens apps, you have, with Data Service Development Kit, access to all data sources that are compatible with Data Service and can use them with your app. The calculation of aggregations within Data Service even enables you to provide sum, maximum and minimum values to your customer without the need for another app.

The free Development Kit provides you with a Docker Image that launches the Data Service API on the developer's computer and makes it callable. With this tool, you can develop your customer's app entirely without Industrial Edge access on your development computer. Nor do you need to own a real device that provides you with data. With our simulation service, plant data can be simulated without further ado.

### General task

Fast implementation of your own app

- Simple - the Development Kit can be started with a few clicks on the computer
- Direct - immediately testable even without access to a real PLC
- Comprehensive - provides the complete data service, including documentation and application examples

## Requirements

### Prerequisites

You can download the Data Service Development Kit Bundle to your computer from [Siemens Industry Online Support (SIOS ID 109792717)]((<https://support.industry.siemens.com/cs/ww/de/view/109792717>). The bundle includes the following components:

- Docker file: docker-compose.yml
- User documentation
- [OpenAPI specification](docs/OpenAPI_specification.md)
- [Application example](docs/Application_example.md)
  
The image is loaded from the Docker Hub:

- Docker image
- Data simulator
- MQTT Broker
- Data Service (with external interface (REST API) for non-Siemens applications)

## Installation

The following services must be installed:

- Docker
- Node js

## Usage

The Data Service Development Kit offers you the possibility to make your app quickly and easily fit for Industrial Edge. Using the integrated API interface, you save your app's data to the Data Service database structure and retrieve it when needed. This means that other apps, such as Performance Insight or Notifier, can easily access the data and use it for themselves.

After the development phase, your app can be handed over to your customer together with the Data Service. In a few simple steps, the customer connects the Data Service with the already available connectors and thus creates a quick link to his plant.

## Documentation

You can find the further information about the following steps in the [docs](./docs)

- [Introduction](./docs/Introduction.md#security-information)
- [Start Docker Container](./docs/Start_docker_container.md#requirement)
- [Open local host (port)](./docs/Open_local_host.md#requirement)
- [Application example](./docs/Application_example.md#description)
- [OpenAPI specification](./docs/OpenAPI_specification.md#description)
- [Publishing user-developed app in the IEM](./docs/Publishing_user-developed-app.md#description)
- [Visualization of an example sinus in NodeRED](./docs/Visualization_example_value.md#description)
  
## Contribution

Thanks for your interest in contributing. Anybody is free to report bugs, unclear documentation, and other problems regarding this repository in the Issues section or, even better, is free to propose any changes to this repository using Merge Requests.

## Licence and Legal Information

Please read the [Legal information](LICENSE.md).
