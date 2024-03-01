# Visualization of an example sinus in Node-RED

- [Visualization of an example sinus in Node-RED](#visualization-of-an-example-sinus-in-node-red)
  - [Description](#description)
  - [Start Docker Container](#start-docker-container)
  - [Create new Tag in Simulation UI](#create-new-tag-in-simulation-ui)
  - [Transfer Tag to IIH Essentials](#transfer-tag-to-iih-essentials)
  - [Use Node-RED to access data and save it in .csv file](#use-node-red-to-access-data-and-save-it-in-csv-file)
  
## Description

This example is intended to show you how to use this application using a sinus variable.

You will create a tag in the Simulation UI, connect the tag with IIH Essentials, display the tag via browser and finally visualize the tag via Node-RED.

If you are interested in how the application example works in the [implementation guide](./Implementation.md) you can find more details.

To follow this application example, you must carry out the following steps:

## Start Docker Container

To start the Docker container, follow these steps:

 > **_NOTE:_**  Linux is used for this application example

1. Go to your Linux system.
2. Open the console in the directory in which the application should be stored
3. Clone the application example using the following command and then change the working directory:
  ```bash
  git clone https://github.com/industrial-edge/iih-essentials-development-kit-getting-started.git
   
  cd ./iih-essentials-development-kit-getting-started
  ```

  This downloaded GitHub-Repository contains:
  - [Docs](./docs): Here you will find the [user documentation](./docs/Visualization_example_value.md) of the application example and more [implementation details](./docs/Implementation.md) to understand the way it works
  - [Node-RED flow](./src/flows.json) for the visualization of the data
  - [docker-compose.example.yml](./docker-compose.example.yml): An example docker compose file that can be used to run this application example which specifies the services, addresses, communication, etc.

4. Start the containers by executing: 
  ```bash
  docker-compose up
  ```

  All service images are downloaded from Docker Hub and launched as defined in the `docker-compose.yml` file. 

## Create new Tag in Simulation UI

To create a tag, follow these steps:

1. Open a browser.
2. To access the Simulation UI, enter the following address: http://localhost:4519

3. Add a simulation group with following configuration and create it
   - Period: 1 minute
   - Cycle: 1 second

  ![deploy VFC](../docs/graphics/dev-kit/1_Add_Variable.png)

  ![deploy VFC](../docs/graphics/dev-kit/2_Create_Sim_Group.png)


4. Add a new simulation variable to the created group
   - set the name to "Sinus"
   - type should be "Int"
   - add a simulation with following configuration
     - choose "sinus"
     - Period: 1 minute
     - Amplitude: 20
     - Zeropoint: 0
     - click on "Save"
   - click on "Create"

  ![deploy VFC](../docs/graphics/dev-kit/3_Create_Sim_Var.png)

  ![deploy VFC](../docs/graphics/dev-kit/4_New_Variable.png)

  ![deploy VFC](../docs/graphics/dev-kit/5_Sinus_Var.png)

## Transfer Tag to IIH Essentials

To connect the tag to the IIH Essentials, follow these steps:

1. Open a browser.
2. To access the IIH Essentials UI, enter the following address: http://localhost:4203
3. Go to connectors and configure the connector to get the data from the simulation

  ![deploy VFC](../docs/graphics/dev-kit/6_Simulation_Connector.png)

  ![deploy VFC](../docs/graphics/dev-kit/7_Simulation_Connector_2.png)

If configured correctly, it should look like this:

  ![deploy VFC](../docs/graphics/dev-kit/8_Simulation_Connector_3.png)

4. Create a new asset with following configuration and add it
    - Name: Example Asset

  ![deploy VFC](../docs/graphics/dev-kit/9_Add_Asset.png)

5. Create a Variable with following configuration and add it
   - Connector: Simulation Connector
   - Choose the created Tag "New Simulation Group/Sinus"

  ![deploy VFC](../docs/graphics/dev-kit/10_Add_Var_Asset.png)

  ![deploy VFC](../docs/graphics/dev-kit/11_Add_Var_Asset.png)

If the simulation variable has been successfully connected to the IIH Essentials, you can see the current value of the variable.

  ![deploy VFC](../docs/graphics/dev-kit/12_Preview_data.png)

## Use Node-RED to access data and save it in .csv file

1. Create a folder in the same path where your docker compose file is located and run the following command to make sure you have the right permission.
   ```bash
   mkdir export
   sudo chown -R 1000:1000 ./export
   ```
2. Open a browser.
3. Access Node-RED
   To start Node-RED, enter the following address: http://localhost:1880
4. Install the `node-red-dashboard` if it's not installed yet
   
   To install the node-red-dashboard, open "Manage palette" in the menu. In the tab "Install" search for `node-red-dashboard` and install it
    ![deploy VFC](../docs/graphics/nodeRED-install.png)
5. If the flow is missing import the [Flow](../src/flows.json)

   To do so, open "Import" in the menu. Select the file, that should be imported, and click on "Import"
   ![deploy VFC](../docs/graphics/nodeRED-import.png)
   The Flow contains following nodes:

   ![deploy VFC](../docs/graphics/flow_nodes.PNG)
6. Deploy the flow and access the dashboard by accessing `http://localhost:1880/ui`
7. Adjust the `From` and `To` variables based on your needs or leave it as it is for current date. 
8. Go back to your flow and double click on the `IIH Essentials Read Variables` sub-flow. Make sure the "Variable names" match your variable inside of IIH Essentials. 
   ![deploy VFC](../docs/graphics/sub-flow-settings.PNG)
 > **_NOTE:_**  If you multiple variables, you can write them all in the "Variable names" setting sparated by commas without spaces.

9. Activate the inject buttons as described in the picture below.

   ![deploy VFC](../docs/graphics/activate-flow.PNG)
10. Go back to the dashboard. You shoul be able to see your data visualized.

   ![deploy VFC](../docs/graphics/data-visual.PNG)
11. The `.csv` file is stored inside `./export` folder.