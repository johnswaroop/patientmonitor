import React from 'react';
import Home from './components/home';
import Login from './components/Login';
import DocScreen from './components/DocScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch >
                <Route exact path={'/patient'}>
                    <Home />
                </Route>
                <Route exact path={'/'}>
                    <Login />
                </Route>
                <Route exact path={'/doctor'}>
                    <DocScreen />
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default App
