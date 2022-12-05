### In functional programming, what does the term functor mean? Can you give an example in JavaScript?

#### Answer:
A functor in funcional programming is a function object used to pass function pointers with state information. In JavaScript a functor is a data type which can be mapped over. It acts as a container which the mapping operation can be applied to the values inside.

#### Example of Functor in JavaScript:
`this.map = (f) => Functor(f(value));`