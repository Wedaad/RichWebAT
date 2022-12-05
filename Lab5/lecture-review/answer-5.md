###### Detail how the browser loads and bootstraps a rich web application from an initial URL

###### Answer
When a users makes a request to retrive a website, the browsers executes the following steps:
1. Browser goes to the domain name server (DNS) which acts as an address book that tells the browser where the website is 

2. The browser makes a TCP/IP connection to server IP address and designated port associated with that URL. These protovaols will tell where the files to load the website are located in the server

3. An application server listening to that IP address accepts the connection from the browser

4.The browser sends a HTTP request over the open TCP/IP connection

5. The application server parses the request and responds to the browser over the same TCP/IP connection, delivering the files needed