class Home extends Component {
    render() {
        return (

            <div className="row">

                <HomeSidebar/>
                
                <div className="main">

                    <h1> Välkommen till din hemsida! </h1>
                    <p>
                        Här kan du testa att koda med <a href="https://reactjs.org/"> React.js </a>
                    </p>

                </div>

            </div>
    
        );
    }
}