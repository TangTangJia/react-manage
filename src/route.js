import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './views/index.js'
import Wallet from './views/wallet/table.js'
import Echarts from './views/echarts/echarts.js'
import EditHtml from './views/editor/editHtml.js'
import Card from './views/card/card.js'
import CardInfo from './views/card/cardInfo.js'
const route = (
    <Router>
        <Switch>
            <Route>
                <Index>
                    <Route path="/wallet" component={Wallet}></Route>
                    <Route path="/echarts" component={Echarts}></Route>
                    <Route path="/editor" component={EditHtml}></Route>
                    <Route path="/card" component={Card}></Route>
                    <Route path="/cardInfo/:id" component={CardInfo}></Route>
                </Index>
            </Route>
        </Switch>
    </Router>
)
export default route