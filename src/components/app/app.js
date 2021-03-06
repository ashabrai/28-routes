import "@babel/polyfill";
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';

class App extends React.Component {
    constructor(props) {
        super(props); // Initialize everything on React's side of the component
    }

    render() {
        return (
            <main>
            <BrowserRouter>
            <div>
            <Header/>
            <nav>
            <ul>
            <li><Link to="/"> Landing Page </Link></li>
        <li><Link to="/dashboard"> Dashboard </Link></li>
        </ul>
        </nav>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        </div>
        </BrowserRouter>
        </main>
        );
    }
}

export default App;
