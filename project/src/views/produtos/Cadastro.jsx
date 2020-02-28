import React, { Component } from "react";
import { Grid, Header, Form, TextArea, Button, Input } from "semantic-ui-react";
import productService from "../../app/productService";


const inicialState = {
    nomeProduto: "",
    SKU: "",
    valorProduto: 0,
    fornecedorProduto: "",
    descricaoProduto: ""
};

class Cadastro extends Component {
  state = inicialState;

  constructor(){
    super()
    this.service = new productService();
  }

  handleOnChange = event => {
    const valor = event.target.value;
    const nomeCampo = event.target.name;
    this.setState({
      [nomeCampo]: valor
    });
  };

  handleCleanInput = () => {
    this.setState(inicialState);
  };

  handleOnSubmit = event => {
      const product ={
        nomeProduto: this.state.nomeProduto,
        SKU: this.state.SKU,
        valorProduto: this.state.valorProduto,
        fornecedorProduto: this.state.fornecedorProduto,
        descricaoProduto: this.state.descricaoProduto      
      }
      this.service.save(product);
      console.log("Salvo com sucesso");
  };

  render() {
    return (
      <>
        <Header size="large">Cadastro de produtos</Header>
        <Form className="mt-5">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <Header as="h4">Nome do produto</Header>
                  <Input
                    value={this.state.nomeProduto}
                    name="nomeProduto"
                    onChange={this.handleOnChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <Header as="h4">SKU *</Header>
                  <Input
                    value={this.state.SKU}
                    name="SKU"
                    onChange={this.handleOnChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4">Valor</Header>
                <Input
                  value={this.state.valorProduto}
                  name="valorProduto"
                  onChange={this.handleOnChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Header as="h4">Fornecedor</Header>
                <Input
                  value={this.state.fornecedorProduto}
                  name="fornecedorProduto"
                  onChange={this.handleOnChange}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4">Descrição do produto</Header>
                <TextArea
                  value={this.state.descricaoProduto}
                  name="descricaoProduto"
                  onChange={this.handleOnChange}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="d-flex justify-content-end mt-3">
            <Button
              type="button"
              className="mr-3"
              onClick={this.handleCleanInput}
            >
              Limpar
            </Button>
            <Button type="submit" color="blue" onClick={this.handleOnSubmit}>
              Enviar
            </Button>
          </div>
        </Form>
      </>
    );
  }
}

export default Cadastro;
