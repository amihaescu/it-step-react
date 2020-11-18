import { BrowserRouter as Switch, Link, Route } from 'react-router-dom';
import CommentList from './class';
import { getAllCategories } from '../services/http-service';
import { useState} from 'react';

export default function Comments() {
    
    return (
        <Switch>
            <Route exact path="/comments" component={TopicSelector} />
            <Route path="/comments/:topic" component={CommentList} />
        </Switch>
    )
}

function TopicSelector() {
    const [topics, setTopics] = useState([])
    getAllCategories()
        .then(response => setTopics(response.data));

    return (
        <div>
            <h2>Topic selector</h2>
            {topics.map(topic => (<Link key={topic.id} className="p-2" to={`/comments/${topic.name}`}>{topic.name}</Link>) )}
            
        </div>

    )
}
