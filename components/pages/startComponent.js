
// EXAMPLE

// HEY change from "class startComponent" to "class XXX" where XXX is your component name
class startComponent extends Component {

    // A constructor is not always needed
    constructor() {
        super();

        this.state = {
            exampleStateArray: [],
            exampleStateString: "kottar",
            exampleStateInt: 0
        };

        this.myF = this.myF.bind(this); // if you need to bind a function, eg for using with an onClick
    }

    myF() {

        var prevInt = this.state.exampleStateInt;
        this.setState({exampleStateInt: prevInt+1 }); // example!
    }

    render() {
        return (

            <div className="row">

                { /* <mySidebar/> */ }
                
                <div className="main">

                    <h1> Kotträknaren </h1>
                    <p>

                        Sara gillar {this.state.exampleStateString} och har {this.state.exampleStateInt} stycken.
                        
                    </p>
                    <input type="submit" value={"Klicka här så får Sara fler " + this.state.exampleStateString} onClick={this.myF} />
                
                </div>

            </div>
    
        );
    }
}