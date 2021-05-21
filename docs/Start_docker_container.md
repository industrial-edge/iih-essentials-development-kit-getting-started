# Start Docker Container

- [Start Docker Container](#start-docker-container)
  - [Requirement](#requirement)
  - [Procedure](#procedure)
  - [Result](#result)
  
## Requirement

You have downloaded the Data Service Development Kit Bundle from the Siemens Industry Online Support to your computer.

[Siemens Industry Online Support](https://support.industry.siemens.com/cs/ww/de/view/109792717)

## Procedure

To start the Docker container, follow these steps:

1. Open Docker (Docker Compose Solution).
2. Open the "development-kit" folder.
   The following components are contained in it:
   - documentation
     Here you will find, for example, the user documentation and the routes (OpenAPI) for the Data Service.
   - examples
     Here you will find, for example, application examples.
   - docker-compose.yml
   - ...
3. Replace the docker-compose.yml with the docker-compose.yml of this repository.
4. Right-click to call the Docker command line and the "Open in Terminal" menu command.
5. Start the containers by typing: `docker - compose up`
   All service images are downloaded from Docker Hub and launched as defined in the "docker-compose.yml" file. This file specifies which of the services run together, address,communication, etc.

## Result

The Docker containers for the Data Service Development Kit have been created.
