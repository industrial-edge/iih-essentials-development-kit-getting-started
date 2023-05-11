# Visualization of an example sinus in NodeRED

- [Visualization of an example sinus in NodeRED](#visualization-of-an-example-sinus-in-nodered)
  - [Description](#description)
  - [Start Docker Container](#start-docker-container)
  - [Create Tag in Simulation UI](#create-tag-in-simulation-ui)
  - [Transfer Tag to Data Service](#transfer-tag-to-data-service)
  - [Use provided application example to access Data via Node-RED and save data in .csv file](#use-provided-application-example-to-access-data-via-node-red-and-save-data-in-csv-file)
  
## Description

This example is intended to show you how to use this application on a example sinus variable.

You will create a tag in the Simulation UI, connect the tag with the data service, display the tag via browser and finally visualize the tag via Node-RED.

If you are interested in how the application example works, [here](./Implementation.md) you can find more details.

To follow this application example, you must carry out the following steps:

## Start Docker Container

To start the Docker container, follow these steps:

 > **_NOTE:_**  Linux device is used for this application example

1. Clone the [data service development kit](https://github.com/industrial-edge/data-service-development-kit) repository. 
2. Replace the docker-compose.yml with the [docker-compose.yml](../docker-compose.yml) of this repository containing Node-Red service.
3. Start the containers by executing: `docker-compose up`

## Create Tag in Simulation UI

To create a tag, follow these steps:

1. Open a browser.
2. Access the Simulation UI
   To start the simulation UI for the Data Service, enter the following address: `http://localhost:4519`
3. Click "Create" on simulation goup. 
4. Adjust the the settings of the simulation group and press "Create". 
   - Cycle: 1 second
5. Create a Variable with following configuration and save it
   - Name: Sinus
   - Datatype: int

6. Click on "plus" sign to add a simulation with following information
   - Type: sinus
   - Period: 1 minute
   - Amplitude: 20

![deploy VFC](../docs/graphics/simulation.PNG)

## Transfer Tag to Data Service

To connect the tag to the Data Service, follow these steps:

1. Open a browser.
2. To start the Data Service, enter the following address: `http://localhost:4203`
3. Go to the "Connectors" section in the left navigation bar. 
4. Select the "Simulation Connector" and activate it under configuration. 

![deploy VFC](../docs/graphics/simulationconnector.PNG)

5. Go back to the "Assets & Connectivity" section in the naviogation bar. 
6. Select "Create first variable"
7. Select the Simulation connector and the created Sinus variable. After you are done, click on "Add variable". 

![deploy VFC](../docs/graphics/addvariable.PNG)

8. Thge connection status should show "Connected". 

![deploy VFC](../docs/graphics/variableconnected.PNG)

## Use provided application example to access Data via Node-RED and save data in .csv file

1. Open a browser.
2. Access Node-RED
   To start Node-RED, enter the following address: `http://localhost:1880`
3. Install the node-red-dashboard
   To install the node-red-dashboard, open "Manage palette" in the menu. In the tab "Install" search for "node-red-dashboard" and install it
    ![deploy VFC](../docs/graphics/nodeRED-install.png)
5. Import the [Flow](../src/flows.json)
   To import the flow, open "Import" in the menu. Select the file, that should be imported, and click on "Import"
   ![deploy VFC](../docs/graphics/nodeRED-import.png)
   The Flow contains following nodes:

   ![deploy VFC](../docs/graphics/flow_nodes.PNG)
6. Deploy the flow and access the dashboard by accessing `http://localhost:1880/ui`
7. Adjust the `From` and `To` variables based on your needs or leave it as it is for current date. 
8. Go back to your flow and double click on the `Data Service Read Variables` sub-flow. Make sure the "Variable names" match your variable inside of the Data Service. 
   ![deploy VFC](../docs/graphics/sub-flow-settings.PNG)
 > **_NOTE:_**  If you multiple variables, you can write them all in the "Variable names" setting sparated by commas without spaces.

9. Activate the inject buttons as described in the picture below.

   ![deploy VFC](../docs/graphics/activate-flow.PNG)
10. Go back to the dashboard. You shoul be able to see your data visualized.

   ![deploy VFC](../docs/graphics/data-visual.PNG)
11. The `.csv` file is stored inside `./export` folder.