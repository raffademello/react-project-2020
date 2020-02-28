import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Home from "./views/home/Home"
import CadastroProduto from "./views/produtos/Cadastro"


export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route> 
                <Route exact path="/cadastro-produtos" component={CadastroProduto}></Route>
            </Switch>
        </HashRouter>
    )
}
