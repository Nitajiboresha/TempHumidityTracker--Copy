#   Temperature and Humidity Tracker

##  Overview

-   This system tracks temperature and humidity in real time.

-   It updates every minute.

-   It consists of a server running on localhost:3036 and a client on localhost:3035.

##  Setup

### Client

-   Navigate to the client folder.

-   Run npm install to install dependencies.

-   Run npm start to start the client server.

### Server

-   Navigate to the server folder.

-   Run npm install to install dependencies.

-   Run npm start to start the server.

##  Features

-    Real-time data updates every minute.

-    Error handling.

-    Takes data from the client, converts it to JSON, and sends it to the server.

-   The server logs the JSON data and sends it back to the client, where it is converted back to JavaScript for display.

-  The system is dynamic to enable multiple packages.

-    Data is logged in a data.json file.

##  Usage

-   Open your browser and navigate to http://localhost:3035 to view the client.

-   The server will send mock data to the client every minute.