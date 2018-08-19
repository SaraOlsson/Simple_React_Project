
// EXAMPLE

// HEY change from "class SimplePage" to "class XXX" where XXX is your component name
class SimplePage extends Component {

    // A constructor is needed to use states
    constructor() {
        super();

        /*
        this.state = {
            exampleStateString: "Hello World",
            exampleStateInt: 0
        }; */

        // if you need to bind a function, eg for using with an onClick 
        this.myFunction = this.myFunction.bind(this); 
    }
    
    myFunction() {

        console.log("In myFunction")
    } 

    render() {
        return (

            <div className="row">

                <SimpleSidebar/>  { /* Take away this row to remove sidebar  */ }
                
                <div className="main">

                    <h1> Sidrubrik </h1>
                    <p> En enkel sida att utgå ifrån. </p>
                      
                </div>

            </div>
    
        );
    }
}