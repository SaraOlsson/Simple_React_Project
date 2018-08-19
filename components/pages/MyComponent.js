class MyComponent extends Component {

    // A constructor is not always needed
    constructor() {
        super();

        this.state = {
            exampleStateArray: [1, 2, 3, 4, 5],
        };
    }

    render() {
        return (

            <div className="row">

                { /* <mySidebar/> */ }
            
                    <div className="main">
                    <h1> Gula sidan </h1>

                    <div style={{display: 'flex'}}>
                    {
                        this.state.exampleStateArray.map( (value, index) => {
                            return (
                             <MyLittleBox key={index} testvalue={value} />
                            );
                        }) 
 
                    }
                    </div>
                    
                </div>
            </div>
    
        );
    }
}

class MyLittleBox extends Component {
    render() {
        return (

            <div className="myLittleBox">
                {this.props.testvalue}
            </div>
    
        );
    }
}