import React, { Component } from "react";
import {
  Grid,
  Header,
  Form,
  TextArea,
  Button,
  Input,
  Message
} from "semantic-ui-react";
import productService from "../../app/productService";
import { withRouter} from "react-router-dom";

const inicialState = {
  nomeProduto: "",
  SKU: "",
  valorProduto: 0,
  fornecedorProduto: "",
  descricaoProduto: "",
  sucessSave: false,
  errors: [],
  atualizando: false
};

class Cadastro extends Component {
  state = inicialState;

  constructor() {
    super();
    this.service = new productService();
  }

  componentDidMount(){
      const SKU = this.props.match.params.sku; /*essas props pertencem ao withRouter*/
      if(SKU){
        const result = this
        .service.getProducts()
        .filter(product => product.SKU === SKU)
        if(result.length === 1){
            const selectedProduct = result[0];
            //console.log(selectedProduct);
            this.setState({
              ...selectedProduct,
              atualizando: true
            });
        }
      }
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
    event.preventDefault();
    const product = {
      nomeProduto: this.state.nomeProduto,
      SKU: this.state.SKU,
      valorProduto: this.state.valorProduto,
      fornecedorProduto: this.state.fornecedorProduto,
      descricaoProduto: this.state.descricaoProduto
    };
    try {
      this.service.save(product);
      this.handleCleanInput();
      this.setState({
        sucessSave: true
      });
    } catch (error) {
      const errors = error.errors;
      this.setState({
        errors: errors
      });
    }
  };

  render() {
    return (
      <>
        <Header size="large">
            {this.state.atualizando ? 'Atualização ' : 'Cadastro '}
            de produto
        </Header>
        {this.state.errors && this.state.errors.length > 0 && (
          <Message>
            <Message.Header> Ocorreu um erro </Message.Header>
            <Message.List>
              {this.state.errors.map(msg => {
                return (
                  <Message.Item>
                    {msg}
                  </Message.Item>
                );
              })}
            </Message.List>
          </Message>
        )}
        <Form id="frmProduto" className="mt-5" autoComplete="off" onSubmit={this.onSubmit}>
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
                    disabled={this.state.atualizando}
                    onChange={this.handleOnChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <Header as="h4">Valor</Header>
                  <Input
                    value={this.state.valorProduto}
                    name="valorProduto"
                    onChange={this.handleOnChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <Header as="h4">Fornecedor</Header>
                  <Input
                    value={this.state.fornecedorProduto}
                    name="fornecedorProduto"
                    onChange={this.handleOnChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <Header as="h4">Descrição do produto</Header>
                  <TextArea
                    value={this.state.descricaoProduto}
                    name="descricaoProduto"
                    onChange={this.handleOnChange}
                  />
                </Form.Field>
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
              {this.state.atualizando ? 'Atualizar' : 'Cadastrar'}
            </Button>
          </div>
        </Form>
      </>
    );
  }
}

export default withRouter(Cadastro);
