import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './views/index.js'
import Table from './views/table/table.js'
import Echarts from './views/echarts/echarts.js'
import EditHtml from './views/editor/editHtml.js'
import Card from './views/card/card.js'
import CardInfo from './views/card/cardInfo.js'
import Status from './views/status/status.js'
const route = (
    <Router>
        <Switch>
            <Route>
                <Index>
                    <Route path="/table" component={Table}></Route>
                    <Route path="/echarts" component={Echarts}></Route>
                    <Route path="/editor" component={EditHtml}></Route>
                    <Route path="/card" component={Card}></Route>
                    <Route path="/cardInfo/:id" component={CardInfo}></Route>
                    <Route path="/redux" component={Status}></Route>
                </Index>
            </Route>
        </Switch>
    </Router>
)
export default route