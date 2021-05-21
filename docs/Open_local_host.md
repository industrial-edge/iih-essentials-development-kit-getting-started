# Open local host (port)

- [Open local host (port)](#open-local-host-port)
  - [Requirement](#requirement)
  - [Procedure](#procedure)
    - [Note - Container IP](#note---container-ip)
  - [Limitations](#limitations)
    - [Note - Data retention](#note---data-retention)
    - [Note - Adapter](#note---adapter)
  
## Requirement

The Docker containers have been started.

## Procedure

To open the local host, follow these steps:

1. Open a browser.
2. To start the simulation UI for the Data Service, enter the following address: `http://localhost:34519` or use the container IP 4519
   Using the Simulation UI, you can create tags and transfer them to the Data Service via a simulation.
3. To start the Data Service, enter the following address: `http://localhost:34203` or use the container IP 4203
   In the Data Service, you can select the adapter "Simulation Connector" and the corresponding simulated tags.
   The connection of the Simulation Connector is preconfigured (active and online).
4. To start Node-RED, enter the following address: `http://localhost:1880` or use the container IP 1880
   In Node-RED, you can create a Flow to access the Data Service.

### Note - Container IP

Access via the container IP is obtained by entering `docker inspect` in the command line.

## Limitations

### Note - Data retention

By default, the data is kept for one week. This cannot be changed.

### Note - Adapter

The adapter cannot be created, modified or deleted.
