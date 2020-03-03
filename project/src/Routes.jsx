import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/home/Home";
import CadastroProduto from "./views/produtos/Cadastro";
import ConsultaProdutos from "./views/produtos/Consulta";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route
        exact
        path="/cadastro-produtos/:sku?"
        component={CadastroProduto}
      ></Route>{/* o ponto de interrogação no final do parâmetro significa que o parametro é opcional no path da rota*/}
      <Route
        exact
        path="/consulta-produtos"
        component={ConsultaProdutos}
      ></Route>
    </Switch>
  );
};
