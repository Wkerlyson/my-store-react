import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class MeuComponente extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            titulo: '',
            items: []
        }
    }

    componentDidMount(){
        alert('antes');
    }

  render() {
    return (
        <View style={styles.meustilo}>
        <Text>{this.props.msg}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  meustilo: {
      backgroundColor: '#f4f4f4',
      flex: 0.5,
  },
});
