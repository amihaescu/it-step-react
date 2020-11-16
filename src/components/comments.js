import { BrowserRouter as Switch, Link, Route } from 'react-router-dom';
import CommentList from './class';

export default function Comments() {
    return (
        <Switch>
            <Route exact path="/comments" component={TopicSelector} />
            <Route path="/comments/:topic" component={CommentList} />
        </Switch>
    )
}

function TopicSelector() {
    return (
        <div>
            <h2>Topic selector</h2>
            <Link to="/comments/houses">Houses</Link>
        </div>

    )
}
