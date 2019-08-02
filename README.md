# GET Endpoints Functionality Study

<br>

## What is GET Endpoints Functionality Study?
The "GET Endpoints Functionality Study" demonstrates the basic functionalities of GET requests, in which the client sends a request for data (in this case, a list of shopping items), and in repsonse will get those items back in the browser.  

<br>

In an express application, to handle a GET request to an endpoint, you would simply call the app object (note the use of cond app = require('express') ) with the GET method.  You would then specfiy a path and then the route handler (i.e. req, res).  Inside the code block would be the response.

```JavaScript

                    app.get('/route', function(req, res) {                                         
                        res.send(items);                                                               
                    });

```

<br>

## Does GET Endpoints Functionality Study commentary?
Yes! The GET Endpoints Functionality Study features commentary in the server.js file to show the structural context and implementation of GET endpoint functionality.  In addition, I also provide a Process text file that gives a good outline of the implementation process. 

<br>

## What are the key features of GET Endpoints Functionality Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future.  I divided this particular study into different branches covering different aspects of basic node servers, which i list below:


| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
| localhost:8080/shopping-list                           | This GET request will return a list of items         |



<br>

## Screenshots
![postmanGET](https://user-images.githubusercontent.com/37447586/62336155-df34b680-b483-11e9-8dc8-219c614cf9ad.png)
