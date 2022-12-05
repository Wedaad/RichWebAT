### Explain using code examples what is meant by props and state in React JS?

##### Answer:
Props are used to pass information from one React component to another. Props are similar to function parameters or HTML attributes or JS functions arguments. State is used by components in React JS to manage their data. State is very similar to variables declared within a function. Components in React JS are stateless by default. The state of a component is changeable.

##### Code example for props:

`function Person(props) {`

    return <h2> My name is {props.name}.</h2>
`}`

`function Staff() {`

    return (

        <>
            <p>Staff List:</p>
            <Person name="Wedaad Haruna"/>
        </>

    );
`}`

`ReactDOM.render(<Staff/>, document.getElementById('root'));`

##### Code example for state:

`class Person extends React.Component {`

    constructor(props) {

        super(props)
        this.state = {name: "Wedaad Haruna"};
    }

    render() {

        return (

            <div>
                <h1>My name is {this.state.name}</h1>
            </div>


        );
    }

`}`