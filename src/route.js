import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './views/index.js'
import wallet from './views/wallet/table.js'
import content from './views/content.js'
const route = (
    <Router>
        <Switch>
            <Route>
                <Index>
                    <Route path="/wallet" component={wallet}></Route>
                </Index>
            </Route>
        </Switch>
    </Router>
)
export default route