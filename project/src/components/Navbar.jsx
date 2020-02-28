import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Router } from "react-router-dom";

class navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu>
             <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
              to="/"
            >
              Home
            </Menu.Item>

            <Menu.Item
              name="cadastro"
              active={activeItem === "cadastro"}
              onClick={this.handleItemClick}
              to="cadastro-produtos"
            >
              Cadastro
            </Menu.Item>

            <Menu.Item
              name="consulta"
              active={activeItem === "consulta"}
              onClick={this.handleItemClick}
            >
              Consulta
            </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default navbar;
