import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import { toggleIsAdding } from './redux/actionCreator';

class Header extends Component{
  addingWord(){
    this.props.toggleIsAdding();
  }
  render(){
    return(
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.textStyle}>WORD BY WORD</Text>
        <TouchableOpacity onPress={()=> this.addingWord()}>
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:10,
    backgroundColor: '#cf09de'
  },
  textStyle:{
    color:'white',
    fontSize: 20,
    fontWeight:'bold'
  }
})

export default connect(null, {toggleIsAdding})(Header);
