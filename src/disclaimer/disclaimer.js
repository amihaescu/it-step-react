import { BrowserRouter as Route, Switch } from 'react-router-dom';
import En from "./en";
import Fr from './fr';


export default function Disclaimer() {
    return (
        <div>
            <h2>Discalimer</h2>
            <Switch>
                <Route path="/disclaimer/en" component={En} />
                <Route path="/disclaimer/fr" component={Fr} />
            </Switch>
        </div>

    )
}