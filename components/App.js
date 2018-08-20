
var { Component } = React;
var { Route, Link, HashRouter, BrowserRouter, Switch, Redirect} = ReactRouterDOM;

// this is the "main" Component of the application and thus a bit special.
class App extends Component {

    render() {

        // javascript goes here
        // only javascript returning jsx is allowed in the return()

        return (
            
            <HashRouter> 

            <div> {/*just a wrapper div*/}
               
                {/*header*/}
                <div className="header">
                    <h1>Simple React Project</h1>
                    <p>Let's <b>code</b> </p>
                </div>

                {/* menu */}
                <div className="navbar">
                    <Link to="/">Hem</Link>
                    <Link to='/utmaningar'> Utmaningar </Link>
                    <Link to='/test1'> Övningskomponent #1 </Link>
                    <Link to='/test2'> Övningskomponent #2 </Link>
                </div>
                {/* If you want to add a link in the menu to a new page:
                    - Add a Link in the div above, with the desired url, eg:  <Link to="/myPage"> My testpage </Link>
                    - Add a Route component in the div with className="main" in this file, with same url as in the Link. 
                    For the component parameter, you need a React component. Tips: create a new js-file by copying
                    SimplePage.js to get a starting point. Just remember to change the 
                    name of the component and the filename. 
                    - In index.html, add your new js-file to be able to use your component. 

                    When the user press a Link, the url is changed. The Route assosiated with the current url will load 
                    the specified component ( in the div where the Route is placed ).
                   
                    It's also possible to send parameters with a Link.
                    If the Route is <Route path="/user/:username" component={User}/>
                    and the Link is e.g. <Link to="/user/Driventjej"> Min profil </Link>
                    Then in the User component, you can get the username parameter with this.props.match.params.username
                    which in this case is Driventjej.

                */}

                { /* side content depends on the current url */}
                <div> 

                        <Switch> {/* Switch returns a result corresponding to the first match */}
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/utmaningar" component={Missions}/>
                        <Route exact path="/test0" component={MyComponent}/>
                        <Route exact path="/test1" component={startComponent}/>
                        <Route exact path="/test2" component={SimplePage}/>
                        <Route component={NoMatch}/> {/* 404 content */}
                        </Switch>

                </div>
            
                {/*footer*/}
                <div className="footer">
                <p> Ett projekt från <a href="http://driventjej.se/"> Driventjej.se </a> </p>
                </div>

            </div>
            </HashRouter>

    );
    } // end of render
} // end of Component


/* ***************************************************************************** */

    // REACT NOTES:

    /* Be careful with the jsx syntax. 

    inline CSS: style={{height: '200px'}}
    Use className instead of class

    Common errors:
    "Adjacent JSX elements must be wrapped in an enclosing tag" 
    -> in the return( ... ); make sure that you wrap elements within a div or something if you have more than one element
    return(
        <h1> Header </h1>
        <p> Text </p> 
    );
    Will give an error while
    return(
        <div>
        <h1> Header </h1>
        <p> Text </p> 
        </div>
    );
    Will not

    "Unexpected token"
    - You might want to use javaScript within the return()
    Some js is allowed, e.g. printing the value of a variable:
    <p> My variable is { myVariable } </p>
    However, js is wrapped in {} in jsx.
    Something like this is not allwed in the return:
    {
    var test = 2;
    }
    Because all js in the return should return jsx. It would work fine _before_ the return.

    */
