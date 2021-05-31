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

![deploy VFC](docs/graphics/overview.png)  

### General task

Fast implementation of your own app

- Simple - the Development Kit can be started with a few clicks on the computer
- Direct - immediately testable even without access to a real PLC
- Comprehensive - provides the complete data service, including documentation and application examples

## Requirements

### Prerequisites

You can download the Data Service Development Kit Bundle to your computer from [Siemens Industry Online Support (SIOS ID 109792717)](https://support.industry.siemens.com/cs/ww/de/view/109792717). The bundle includes the following components:

- Docker file: docker-compose.yml
- User documentation
- OpenAPI specification
- Application example
- Docker image
- Data simulator
- MQTT Broker
- Data Service (with external interface (REST API) for non-Siemens applications)

This GitHub-Repository contains:

- adapted Docker file:  [docker-compose.yml](./docker-compose.yml)
- NodeRED flow: [flows.json](./src/NodeRED/flows.json)
- [User documentation](./docs/Visualization_example_value.md#description)

## Installation

The following services must be installed:

- Docker for Linux
  
 > **_NOTE:_**  Linux device is used for this application example

## Usage

The Data Service Development Kit offers you the possibility to make your app quickly and easily fit for Industrial Edge. Using the integrated API interface, you save your app's data to the Data Service database structure and retrieve it when needed. This means that other apps, such as Performance Insight or Notifier, can easily access the data and use it for themselves.

After the development phase, your app can be handed over to your customer together with the Data Service. In a few simple steps, the customer connects the Data Service with the already available connectors and thus creates a quick link to his plant.

## Documentation

You can find the further information about the following steps in the [docs](./docs)

- [Visualization of an example sinus in NodeRED](./docs/Visualization_example_value.md#description)

 > **_NOTE - additional Information:_**  If you need more information, you can find them in the user documentation of the [Data Service Development Kit Bundle](https://support.industry.siemens.com/cs/ww/de/view/109792717).

## Contribution

Thanks for your interest in contributing. Anybody is free to report bugs, unclear documentation, and other problems regarding this repository in the Issues section or, even better, is free to propose any changes to this repository using Merge Requests.

## Licence and Legal Information

Please read the [Legal information](LICENSE.md).
