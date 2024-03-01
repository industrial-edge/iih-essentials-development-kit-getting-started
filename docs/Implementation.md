# Production data extraction and visualization in Node-RED

- [Production data extraction and visualization in Node-RED](#production-data-extraction-and-visualization-in-node-red)
  - [Description](#description)
  - [Usage](#usage)
    - [Create Tags in IIH Essentials](#create-tags-in-iih-essentials)
    - [Access Data via Node-RED](#access-data-via-node-red)
      - [Selection of time interval for data extraction](#selection-of-time-interval-for-data-extraction)
      - [Data retrieval from IIH Essentials application database through APIs calls](#data-retrieval-from-iih-essentials-application-database-through-apis-calls)
      - [Data visualization through Node-RED dashboard](#data-visualization-through-node-red-dashboard)
      - [Data saving into a CSV file](#data-saving-into-a-csv-file)
    - [*IIH Essentials Read Variables* node](#iih-essentials-read-variables-node)
  
## Description

This documentation is intended to show you how the provided application example was implemented.

## Usage

You must carry out the following steps:

### Create Tags in IIH Essentials

For the aim of this explanation, the three tags below will be considered, representing variables associated to a production line:

| Data point id         | Description                     | Type |
| :-------------------- | :------------------------------ | :--- |
| Production_GoodPieces | Number of good pieces produced  | Int  |
| Production_BadPieces  | Number of bad pieces produced   | Int  |
| Production_MachSpeed  | Production speed in pieces/min. | Real |

To create these tags inside IIH Essentials application, simply use *Add variable* functionality in tab *Assets & Connectivity*.

![deploy VFC](./graphics/production_tags_data_service.PNG)

### Access Data via Node-RED

Using the APIs exposed by IIH Essentials, this paragraph shows how to use a subflow in Node-RED to read data from IIH Essentials application based on their tags names.

In the flow presented, the following functionalities are available:
- Selection of time interval for data extraction.
- Data retrieval from IIH Essentials application database through API calls.
- Data visualization through Node-RED dashboard.
- Data saving into a CSV file.

![deploy VFC](./graphics/flow-node-red.PNG)

#### Selection of time interval for data extraction

The first flow in the application example allows to set a datetime interval, that will be taken as reference for the further data extractions. 
Depending on the time ranges define in *function (2)* node below, the flow will set two global variables, `global.from` and `global.to`.

![deploy VFC](./graphics/set-datetime-flow.PNG)

From the *inject (1)* node, *function (2)* node takes the current datetime as the end time, setting it as `global.to` variabile. As regards instead variable `global.from`, this is set subtracting 1 hour from the current datetime.

In this way, data extraction will consider only data of the last hour.

![deploy VFC](./graphics/set-datetime-flow-range-spec.PNG)

If needed, datetime interval can be changed in order to extract a higher volume of data from IIH Essentials database.

#### Data retrieval from IIH Essentials application database through APIs calls

In the main flow, the `IIH Essentials Read Variables` node takes as input the time range set in the previous paragraph, together with the list of variables explicited in the configuration of the node.

![deploy VFC](./graphics/data-extraction-from-data-service-flow.PNG)

In fact, in `Variables Names` field of `IIH Essentials Read Variables` node, the variables of interest to be extracted from IIH Essentials application need to be written, separated by comma and without any spaces in between.

As can be seen in the following figure, in this application example three variables of interest were configured: `Production_GoodPieces`, `Production_BadPieces`, `Production_MachSpeed`.

![deploy VFC](./graphics/data-service-read-variables-names.PNG)

After having explicited the tags of interest, trigger the data extraction through the inject node.

You will see status of `IIH Essentials Read Variables` node changing from "Querying data in progress" to "Query completed", receving then an output message containing all the data points of the variables of interest.

![deploy VFC](./graphics/data-service-read-variables-node-output.PNG)

In the output message, for each variable name, an array of objects is given. 

Each object is a data point of the tag extracted from IIH Essentials database, with a certain timestamp, value and quality code, as can be seen from the image below.

![deploy VFC](./graphics/data-service-read-variables-node-output-details.PNG)

#### Data visualization through Node-RED dashboard

In order to visualize data obtained from the previously described flow, it is possible to use the Web Dashboard functionality of Node-RED together with the nodes of the `node-red-dashboard` library, dedicated to the representation of different graphical objects such as gauges, text fields and graphs.

The hereby used `charts-ui` node (`Production Trend`) allows to visualize different types of charts (lines, bars, pie) on the Web Dashboard of Node-RED, either by sending new data in real-time or by sending the whole data structure.

![deploy VFC](./graphics/data-visualization-flow.PNG)

In the flow highlighted above, starting from the data received from `IIH Essentials Read Variables` node, the function `Create chart msg` formats all data received into the standard of `charts-ui` node, with the aim of creating a data structure for a line graph containing three time series (`Production_GoodPieces`, `Production_BadPieces`, `Production_MachSpeed`) in the selected time interval. 

Each time series formatted by the function `Create chart msg` node will contain several samples and their relative timestamps. 

Below an example of the output message received from the function node `Create chart msg`:

![deploy VFC](./graphics/time-series-payload-flow.PNG)

Data of the three variables of interest can be viewed directly as three series on a line graph by connecting to the Node-RED web dashboard, as shown in the following image:

![deploy VFC](./graphics/node-red-dashboard.PNG)

#### Data saving into a CSV file

To allow local data storage, this application example exploits `csv` node of `node-red` library to save and export a file in CSV format containing all time series of variables `Production_GoodPieces`, `Production_BadPieces`, `Production_MachSpeed` in the selected time interval.

![deploy VFC](./graphics/data-export-csv-flow.PNG)

To do this, function node `CSV data arrangement` is used to format the data received from `IIH Essentials Read Variables` node into the standard of `csv` node.

The function node, in fact, goes through all data elements, organizing them as follows: 
  
![deploy VFC](./graphics/csv-data-arrangement-flow.PNG)

Once the data are formatted in the correct way and sent to `csv` node, the CSV file is saved by the flow in the Application Volumes of the edge device on which the Node-RED application is installed. This operation is performed by the `file` node of `node-red` library.

To download the CSV file created, simply go to your edge device, select Node-RED application inside the *Management* menu and click on *Download* action. The file will be locally saved on your PC.

Below an example of CSV file saved by the flow.

![deploy VFC](./graphics/csv-data-extraction.PNG)

### *IIH Essentials Read Variables* node

Let's now dive into the subflow `IIH Essentials Read Variables` node, representing the core of this application example.

![deploy VFC](./graphics/data-service-read-variables-subflow.PNG)

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
In response to the login and token request of the previous node, the server  will generate a bearer token, which is a criptic string used in the subsequent requests in response to the login request. This string will be used in the Authorization header when making requests to protected resources, such as data in IIH Essentials database.
7. Set the access token as a flow variable (`accessToken`).
8. Verify if flow variable `accessToken` is null.
9. Create variables request in order to extract all variables from IIH Essentials database.
10. **HTTP request** node used to **GET variables data** on the following URL: http://edgeappdataservice:4203/DataService/Variables by the mean of the API call shown below.

  ![deploy VFC](./graphics/get-variables-api.PNG)

11. Get the names of variables to be extracted from IIH Essentials application, iterate through readed tags and get the ids of the variables of interest. Below an example of data properties and id.

![deploy VFC](./graphics/get-variables-api-example.PNG)

12. Verify if token, variables ids and datetime ranges data are not null before requesting all the data points associated to the variables of interest.
13. Format a data request specifying an array with all the variables ids required, the start datetime, the end datetime and the variables sorting in the output data. This information will be used to compose the URL of the HTTP request of the next node. An example is: 

![deploy VFC](./graphics/get-data-variables-id-api-example.PNG)

14. **HTTP request** node used to **GET data of a specific variable id** on the following URL http://edgeappdataservice:4203/DataService/Data/{variableId} by the mean of the API call shown below.

![deploy VFC](./graphics/get-data-variable-id-api.PNG)

This operation will be repeated for all the variables ids explicited. The output of the HTTP request will be the following:

![deploy VFC](./graphics/has-more-data-property.PNG)

15. As marked in the figure above, the API `/DataService/Data/{variableId}` allows data reading with a maximum limit of 2000 points. To extract more datapoints it is possible to exploit the property `hasMoreData`, in which is contained the period of time with datapoints not included in the response. The aim of node (15) is to make recursive calls to the same API until the complete resolution of all the datapoints in the requested time range.
When all data points have been retrieved, data will be presented with the format shown below:

![deploy VFC](./graphics/output-data-msg.PNG)

Where, for each variable extracted, the datapoints are characterized by the timestamp, value and quality code.

![deploy VFC](./graphics/output-data-msg-details.PNG)



