### Explain using code examples what is meant by props and state in React JS?

##### Answer:
Props are used to pass information from one React component to another. Props are similar to function parameters or HTML attributes or JS functions arguments. State is used by components in React JS to manage their data. 

##### Code Example:

`
function Person(props) {

    return <h2> My name is {props.name}.</h2>
}

function Staff() {

    return (

        <>
            <p>Staff List:</p>
            <Person name="Wedaad Haruna"/>
        </>

    );
}

ReactDOM.render(<Staff/>, document.getElementById('root'));
`