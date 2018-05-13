import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './components/Header';
import LoginForm from './LoginForm';
import ProdutoForm from './ProdutoForm';
import Button from './components/Button';
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';
import Card from './components/Card';

class Main extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC1OzCgakvFYAkIjWLVkSvReRYoF3LPUGI",
      authDomain: "proweb-f76e8.firebaseapp.com",
      databaseURL: "https://proweb-f76e8.firebaseio.com",
      projectId: "proweb-f76e8",
      storageBucket: "proweb-f76e8.appspot.com",
      messagingSenderId: "454248019800"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  clickLogout() {
    firebase.auth().signOut();
  }

  chamarFormProd() {
    <ProdutoForm/>
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <ProdutoForm/>
                      <CardSection>

            <Button onPress={this.clickLogout.bind(this)}> LOGOUT </Button>
           
          </CardSection>
          </Card>
                  
        );
      case false:
        return (
            <LoginForm />
        );
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Login Screen" />
        {this.renderContent()}
      </View>
    );
  }
}

export default Main;
