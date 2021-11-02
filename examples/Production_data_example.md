# Production data extraction and visualization in NodeRED

- [Production data extraction and visualization in NodeRED](#production-data-extraction-and-visualization-in-nodered)
  - [Description](#description)
  - [Usage](#usage)
    - [Create Tags in Data Service](#create-tags-in-data-service)
    - [Access Data via NodeRED](#access-data-via-node-red)
      - [Selection of time interval for data extraction](#selection-of-time-interval-for-data-extraction)
      - [Data retrieval from Data Service application database through APIs calls](#data-retrieval-from-data-service-application-database-through-apis-calls)
      - [Data visualization through NodeRED dashboard](#data-visualization-through-nodered-dashboard)
      - [Data saving into a CSV file](#data-saving-into-a-csv-file)
  - [*Data Service Read Variables* node](#data-service-read-variables-node)
  
## Description

This example is intended to show you how to extract data from Data Service database, how to save the extracted data into a CSV file and how to visualize them through a dedicated dashboard using NodeRED.

To do this, you will create some tags in the Data Service application and then exploit API calls to visualize the tags via NodeRED application.
For more information regarding Data Service APIs, please check [Access Data via Browser](#access-data-via-browser) documentation in [docs](./docs).

The tags used in this application example were integrated into Data Service application as tags configured within S7 Connector from a PLC data source.
If a PLC data source is not available, the tags can be as well created through the Simulation UI, as explained in paragraph [Create Tag in Simulation UI](#create-tag-in-simulation-ui) for the Sinus example.

## Usage

You must carry out the following steps:
### Create Tags in Data Service

For the aim of this application example, the three tags below will be considered, representing variables associated to a production line:


| Data point id         | Description     | Type    | 
|:----------------------|:--------------|:-------------| 
| Production_GoodPieces |Number of good pieces produced|Int|
| Production_BadPieces  |Number of bad pieces produced|Int|
| Production_MachSpeed  |Production speed in pieces/min.|Real|

To create these tags inside Data Service application, simply use *Add variable* functionality in tab *Connectivity*.

![deploy VFC](../examples/graphics/production_tags_data_service.PNG)

### Access Data via Node-RED

Using the APIs exposed by Data Service, this paragraph shows how to exploit a subflow node in NodeRED to read data from Data Service application based on their tags names.
In the flow presented, the following functionalities are available:
- Selection of time interval for data extraction.
- Data retrieval from Data Service application database through APIs calls.
- Data visualization through NodeRED dashboard.
- Data saving into a CSV file.

![deploy VFC](../examples/graphics/flow-node-red.PNG)

#### Selection of time interval for data extraction

The first flow in the application example allows to set a datetime interval, that will be taken as reference for the further data extractions. 
Depending on the time ranges define in *function (2)* node below, the flow will set two global variables, `global.from` and `global.to`.

![deploy VFC](../examples/graphics/set-datetime-flow.PNG)

From the *inject (1)* node, *function (2)* node takes the current datetime as the end time, setting it as `global.to` variabile. As regards instead variable `global.from`, this is set subtracting 1 hour from the current datetime.
In this way, data extraction will consider only data of the last hour.

![deploy VFC](../examples/graphics/set-datetime-flow-range-spec.PNG)

If needed, datetime interval can be changed in order to extract a higher volume of data from Data Service database.

#### Data retrieval from Data Service application database through APIs calls

In the main flow, the `DataService Read Variables` node takes as input the time range set in the previous paragraph, together with the list of variables explicited in the configuration of the node.

![deploy VFC](../examples/graphics/data-extraction-from-data-service-flow.PNG)

In fact, in `Variables Names` field of `DataService Read Variables` node, the variables of interest to be extracted from Data Service application need to be written, separated by comma and without any spaces in between.
As can be seen in the following figure, in this application example three variables of interest were configured: `Production_GoodPieces`, `Production_BadPieces`, `Production_MachSpeed`.

![deploy VFC](../examples/graphics/data-service-read-variables-names.PNG)

After having explicited the tags of interest, trigger the data extraction through the inject node.
You will see status of `DataService Read Variables` node changing from "Querying data in progress" to "Query completed", receving then an output message containing all the data points of the variables of interest.

![deploy VFC](../examples/graphics/data-service-read-variables-node-output.PNG)

In the output message, for each variable name, an array of objects is given. 
Each object is a data point of the tag extracted from Data Service database, with a certain timestamp, value and quality code, as can be seen from the image below.

![deploy VFC](../examples/graphics/data-service-read-variables-node-output-details.PNG)

#### Data visualization through NodeRED dashboard

In order to visualize data obtained from the previously described flow, it is possible to use the Web Dashboard functionality of NodeRED together with the nodes of the `node-red-dashboard` library, dedicated to the representation of different graphical objects such as gauges, text fields and graphs.
The hereby used `charts-ui` node (`Production Trend`) allows to visualize different types of charts (lines, bars, pie) on the Web Dashboard of NodeRED, either by sending new data in real-time or by sending the whole data structure.

![deploy VFC](../examples/graphics/data-visualization-flow.PNG)

In the flow highlighted above, starting from the data received from `Data Service Read Variables` node, the function `Create chart msg` formats all data received into the standard of `charts-ui` node, with the aim of creating a data structure for a line graph containing three time series (`Production_GoodPieces`, `Production_BadPieces`, `Production_MachSpeed`) in the selected time interval. 
Each time series formatted by the function `Create chart msg` node will contain several samples and their relative timestamps. 
Below an example of the output message received from the function node `Create chart msg`:

![deploy VFC](../examples/graphics/time-series-payload-flow.PNG)

Data of the three variables of interest can be viewed directly as three series on a line graph by connecting to the NodeRED web dashboard, as shown in the following image:

![deploy VFC](../examples/graphics/node-red-dashboard.PNG)

#### Data saving into a CSV file

To allow local data storage, this application example exploits `csv` node of `node-red` library to save and export a file in CSV format containing all time series of variables `Production_GoodPieces`, `Production_BadPieces`, `Production_MachSpeed` in the selected time interval.

![deploy VFC](../examples/graphics/data-export-csv-flow.PNG)

To do this, function node `CSV data arrangement` is used to format the data received from `Data Service Read Variables` node into the standard of `csv` node.
The function node, in fact, goes through all data elements, organizing them as follows: 
  
![deploy VFC](../examples/graphics/csv-data-arrangement-flow.PNG)

Once the data are formatted in the correct way and sent to `csv` node, the CSV file can be saved by the flow in the Application Volumes of the edge device on which the NodeRED application is installed. This operation is performed by the `file` node of `node-red` library.

![deploy VFC](../examples/graphics/download-csv-file.PNG)

Below an example of CSV file saved by the flow.

![deploy VFC](../examples/graphics/csv-data-extraction.PNG)

### *Data Service Read Variables* node

Let's now dive into the subflow `DataService Read Variables` node, representing the core of this application example.

![deploy VFC](../examples/graphics/data-service-read-variables-subflow.PNG)

Below, for each enumerated node of the figure, a brief explanation is given.
1. **Inject node** to trigger the subsequent operations.
2. Set the value of the flow variables listed below:
    - **dataserviceUrl**:  "http://edgeappdataservice:4203"
    - dataserviceUser: "nodeUser"
    - dataservicePass: "nodePass"
3. Use the flow variables above to **create a user** and define its properties:
    - userName: "nodeUser",
    -  passWord: "nodePass",
    -  familyName: "myFamily nodeUser",
    -  givenName: "nodeUser",
    -  email: "nodeUser@myemail.com",
    -  roles: [{application: "edgeappdataservice", role: "admin"}]}
4. **HTTP request** node used to **POST data of the created user** to the following URL: http://edgeappdataservice:4203/TokenManagerService/users.
5. Exploit bearer authentication with base64 encoding to **generate a token request for the created user**. 
6. **HTTP request** node used to **POST data of the token** to the following URL: http://edgeappdataservice:4203/TokenManagerService/oauth/token. 
In response to the login and token request of the previous node, the server  will generate a bearer token, which is a criptic string used in the subsequent requests in response to the login request. This string will be used in the Authorization header when making requests to protected resources, such as data in Data Service database.
7. Set the access token as a flow variable (`accessToken`).
8. Verify if flow variable `accessToken` is null.
9. Create variables request in order to extract all variables from Data Service database.
10. **HTTP request** node used to **GET variables data** on the following URL: http://edgeappdataservice:4203/DataService/Variables by the mean of the API call shown below.

  ![deploy VFC](../examples/graphics/get-variables-api.PNG)

11. Get the names of variables to be extracted from Data Service application, iterate through readed tags and get the ids of the variables of interest. Below an example of data properties and id.

![deploy VFC](../examples/graphics/get-variables-api-example.PNG)

12. Verify if token, variables ids and datetime ranges data are not null before requesting all the data points associated to the variables of interest.
13. Format a data request specifying an array with all the variables ids required, the start datetime, the end datetime and the variables sorting in the output data. This information will be used to compose the URL of the HTTP request of the next node. An example is: 

![deploy VFC](../examples/graphics/get-data-variables-id-api-example.PNG)

14. **HTTP request** node used to **GET data of a specific variable id** on the following URL http://edgeappdataservice:4203/DataService/Data/{variableId} by the mean of the API call shown below.

![deploy VFC](../examples/graphics/get-data-variable-id-api.PNG)

This operation will be repeated for all the variables ids explicited. The output of the HTTP request will be the following:

![deploy VFC](../examples/graphics/has-more-data-property.PNG)

15. As marked in the figure above, the API `/DataService/Data/{variableId}` allows data reading with a maximum limit of 2000 points. To extract more datapoints it is possible to exploit the property `hasMoreData`, in which is contained the period of time with datapoints not included in the response. The aim of node (15) is to make recursive calls to the same API until the complete resolution of all the datapoints in the requested time range.
When all data points have been retrieved, data will be presented with the format shown below:

![deploy VFC](../examples/graphics/output-data-msg.PNG)

Where, for each variable extracted, the datapoints are characterized by the timestamp, value and quality code.

![deploy VFC](../examples/graphics/output-data-msg-details.PNG)



