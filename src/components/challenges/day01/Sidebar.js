import {Route, Link, Switch} from 'react-router-dom'
import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../../concepts/FunctionalComponentDemo'
import JSXRules from '../../concepts/JSXRules'
import State from '../../concepts/State'
import PropsDemo from '../../concepts/PropsDemo'
import Effects from '../../concepts/Effects'
import Hooks from '../../concepts/Hooks'
import TimePiecesApp from '../../apps/timer-apps/TimePiecesApp'
import NytApp from '../../apps/nyt-app/NytApp'

    const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="si debar-list-styling">
                <ul className="si debar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/functionalcomponent">Functional Component</Link></li>
                    <li><Link to="/jsxrules ">JSX Rules</Link></li>
                    <li><Link to="/state ">State</Link></li>
                    <li><Link to="/props ">Props</Link></li>
                    <li><Link to="/effects ">Effects</Link></li>
                    <li><Link to="/hooks ">Hooks</Link></li>
                    <li><Link to="/timer ">Timer</Link></li>
                    <li><Link to="/nyt ">New York Times</Link></li>
                    <li><Link to="/resources ">Resources</Link></li>
                    
                </ul>
            </div>

            <div className="sidebar-route">
    
    <Switch>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/resources"><Resources /></Route>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/state"><State /></Route>
        <Route exact path="/props"><PropsDemo /></Route>
        <Route exact path="/effects"><Effects /></Route>
        <Route exact path="/hooks"><Hooks /></Route>
        <Route exact path="/timer"><TimePiecesApp /></Route>
        <Route exact path="/nyt"><NytApp /></Route>
        <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
        <Route exact path="/jsxrules"><JSXRules /></Route>
    </Switch>
            </div>
        </div>
            );
}
export default Sidebar;