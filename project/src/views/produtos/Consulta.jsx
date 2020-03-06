import React, { Component } from "react";
import { Header, Table } from "semantic-ui-react";
import productService from "../../app/productService";
import { Button, Icon } from 'semantic-ui-react';
import { withRouter} from "react-router-dom";

class Consulta extends Component {
  state = {
    products: []
  };

  constructor() {
    super();
    this.service = new productService(); /* método para recuperar array de produtos */
  }

  componentDidMount() {
    const products = this.service.getProducts();
    this.setState({
      products
    });
  }

  handleEdit = (sku) => {
     this.props.history.push(`/cadastro-produtos/${sku}`);
     //console.log('sku para editar', sku);
  }

  handleDelete = (sku) => {
      const products = this.service.delete(sku);
      this.setState({
        products
      })
  }

  render() {
    return (
      <>
        <Header size="large">Consulta de produtos</Header>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nome produto</Table.HeaderCell>
              <Table.HeaderCell>SKU</Table.HeaderCell>
              <Table.HeaderCell>Valor</Table.HeaderCell>
              <Table.HeaderCell>Fornecedor</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.products.map((product, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{product.nomeProduto}</Table.Cell>
                  <Table.Cell>{product.SKU}</Table.Cell>
                  <Table.Cell>{product.valorProduto}</Table.Cell>
                  <Table.Cell>{product.fornecedorProduto}</Table.Cell>
                  <Table.Cell>{product.descricaoProduto}</Table.Cell>
                  <Table.Cell>
                    <Button basic color="blue" onClick={() => this.handleEdit(product.SKU)}>
                      Editar
                    </Button>
                    <Button basic color="red" onClick={() => this.handleDelete(product.SKU)}>
                      Excluir
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default withRouter(Consulta);