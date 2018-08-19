
// EXAMPLE

// HEY change from "class startComponent" to "class XXX" where XXX is your component name
class startComponentBasic extends Component {
    render() {
        return (

            <div>
                <h1> Rubrik att ändra </h1>
                <p>
                    Vad ska du ha för skoj på den här sidan?
                </p>
            </div>
    
        );
    }
}

/* Or even more simple, a function component:

const startComponentBasic = () => (
   <h1> Välkommen! </h1>
)

*/