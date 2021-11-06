import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss'
import Homepage from './components/Homepage/Homepage';
import NewStory from './components/Stories/NewStory/NewStory';
import Stories from './components/Stories/Stories';
import Story from './components/Stories/Story/Story';

const App = (props) => {
    
    return (
        <div id="App" className="container">
            <Switch history={props.history}>
                <Route exact path="/" component={Homepage} />
                <Route path="/stories/new_story" component={NewStory} />
                <Route path="/stories/:title/" component={Story} />
                <Route path='/stories' component={Stories}/>
            </Switch>
        </div>
    )
}

export default App;