import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {connect} from 'react-redux';
import { addWord, toggleIsAdding } from './redux/actionCreator';

class Form extends Component{
  constructor (props){
    super(props);
    this.state ={
      en: '',
      vn: ''
    };
    this.onAdd = this.onAdd.bind(this);
  }
  onAdd(){
    const {en,vn} = this.state;
    this.props.addWord(en, vn);
    this.props.toggleIsAdding();
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style ={styles.inputText}
          placeholder = "English Word"
          value = {this.state.en}
          onChangeText = {text => this.setState({en: text})}

        />
        <TextInput
        style ={styles.inputText}
        placeholder = "Meaning"
        value = {this.state.vn}
        onChangeText = {text => this.setState({vn: text})}

        />
        <TouchableOpacity onPress={this.onAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container:{
    margin: 20,
    padding:10,
    alignSelf: 'stretch',
    justifyContent:'center',
    alignItems: 'center'
  },
  inputText:{
    height: 40,
    width: 300,
    backgroundColor: '#e4f6d4',
    margin: 10,
    paddingHorizontal: 10

  }
})

export default connect(null, {addWord, toggleIsAdding })(Form);
