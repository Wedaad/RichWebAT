#### Question 1:
###### Explain what is meant by the stream abstraction. What is the relationship between streams and the observer pattern? What are streams useful for modeling and when might you use them in Rich Web development?

##### Answer:
A stream represents data that is created and processed in an incremental manner. Stream abstraction is where the data represented is an idea of what the data should be. The stream doesn't represent specific forms of data. The relationship between streams and the observer pattern is that the stream i the observable being observed. Streams implement the observable design pattern. Streams are useful in rich web development when modelling asynchronous tasks. Streams are also useful when processing changes due to changes in the DOM e.g. when a button is click, when a client is waiting for a response back from the network.

#### Question 2: 
###### Assume that you are building an interface to an API in your Rich Web App. Describe in detail how you could use the RxJS library to handle asynchronous network responses to API requests. In your opinion, what are the benefits to using a streams library for networking over, say, promises? And what do you think are the downsides?

#### Question 3:
###### Consider three asynchronous tasks, A,B & C. What are the consequences of these functions sharing global state? What is a good practice to alleviate any problems associated with this?