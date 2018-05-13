import React, { Component } from 'react';
import { TextInput, Alert } from 'react-native';
import firebase from 'firebase';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';

class ProdutoForm extends Component {
  state = { titulo: '', descricao: '', preco: '' };

  cadastrarProduto() {
    const { titulo, descricao, preco } = this.state;

    firebase
    .database()
    .ref("produtos")
    .push(this.state);
    
  }
  renderButton() {
    if (!this.state.loading) {
      return <Button onPress={this.cadastrarProduto.bind(this)}> CADASTRAR </Button>;
    }
    return <Spinner size="small" />;
  }
  render() {
    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="Título"
            style={inputStyle}
            value={this.state.titulo}
            onChangeText={titulo => this.setState({ titulo })}
          />
        </CardSection>
        <CardSection>
          <TextInput
            placeholder="Descrição"
            style={inputStyle}
            value={this.state.descricao}
            onChangeText={descricao => this.setState({ descricao })}
          />
        </CardSection>
        <CardSection>
          <TextInput
            placeholder="Preço"
            style={inputStyle}
            value={this.state.preco}
            onChangeText={preco => this.setState({ preco })}
          />
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1,
    spellCheck: false
  },
};

export default ProdutoForm;
