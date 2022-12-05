#### Mention one advantage and disadvantage of these asynchronous programming mechanisms: callbacks, promises and streams:

##### Answer:

### Callbacks
#### Advantage:
Callback functions in JavaScript provide a way of developing asyncgronous programs. They make sure that the function will stop execution until a task has finished executing. Once the task has finished executing the function will continue on. The main advantage of callback functions is that one function will wait for the results of a previous function call.

#### Disadvantage:
The problem with callback functions is that error handling isn't as efficient compared to Promises. Error handling with callback functions result in nested callbacks as the data from one callback method is needed for te next one. Resulting in code that is difficult to manage and the code isn't DRY. 

### Promises
#### Advantage:
Promises in JavaScript is another way of providing asynchronous operations. Promises are able to handle more that one asychronous functions with better error handling with the use of `.then() and .catch() methods`. 

## Disadvantage:
The main problem with promises is that they can't be used with older browsers. Promises are also slower that callback functions because of the way they work.

### Streams
#### Advantage:

#### Disadvantage