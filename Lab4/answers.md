#### Question 1:
###### Explain what is meant by the stream abstraction. What is the relationship between streams and the observer pattern? What are streams useful for modeling and when might you use them in Rich Web development?

##### Answer:
A stream represents data that is created and processed in an incremental manner. Stream abstraction is where the data represented is an idea of what the data should be. The stream doesn't represent specific forms of data. The relationship between streams and the observer pattern is that the stream i the observable being observed. Streams implement the observable design pattern. Streams are useful in rich web development when modelling asynchronous tasks. Streams are also useful when processing changes due to changes in the DOM e.g. when a button is click, when a client is waiting for a response back from the network.

#### Question 2: 
###### Assume that you are building an interface to an API in your Rich Web App. Describe in detail how you could use the RxJS library to handle asynchronous network responses to API requests. In your opinion, what are the benefits to using a streams library for networking over, say, promises? And what do you think are the downsides?

##### Answer:
The RxJs library allows for programmes to use asynchronous data programming. RxJs is based on the implementation of Observables and observers. Observables will be used to do API calls. When making requests to an API the pipe and map operators are used by the Observable. Observable streams are created from HTTP requests e.g. GET/POST/PUT requests. API requests are usually handled with the use of promises. 

With RxJs asynchronous network responses can happen becuase RxJs allows it. There is no need to block other operations from running while waiting for a response because the observable creates an observer waiting on standby to act appropriately when needed. 


#### Question 3:
###### Consider three asynchronous tasks, A,B & C. What are the consequences of these functions sharing global state? What is a good practice to alleviate any problems associated with this?

##### Answer:
If the three tasks A, B & C were to share a global state it would be very difficult to keep track of what part of the code changes each of the tasks. This is a big problem as the number of potential bugs in each task increases. The sharing of global state between these tasks makes the program state very unstable and unpredictable. One  major consequence of sharing a global state between tasks is tight coupling. A way to avoid these problems and reduce the number of potential bugs is to limit each task to a local scope. Good practices include passing variables to each task as parameters through the use of functions. With these practices the code is loosley coupled. So changes made in one task won't have a huge impact on another task as changes made to one task only affects code in the task's local scope. 