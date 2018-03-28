import React, { Component} from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import { memorizedWord, showWord } from './redux/actionCreator';

class Body extends Component{
  render(){
    const {en, vn, memorized, isShow, id } = this.props.myWords;
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const memorizedButtonText = memorized ? 'Forget' : 'Memorized';
    const showButtonText = isShow ? 'Hidden' : 'Show';
    const showMeaning = isShow ? vn : '--------';

    return(
      <View style={styles.container}>
        <Text style={{textDecorationLine}}>{en}</Text>
        <Text>{showMeaning}</Text>
        <View style={styles.controller}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.memorizedWord(id)}>
            <Text>{memorizedButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.showWord(id)}>
            <Text>{showButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    margin: 10,
    backgroundColor: '#7cf5bb',
    padding:10
  },
  controller:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  button:{
    padding:5,
    margin: 5,
    backgroundColor:'cyan'
  }
})

export default connect(null, { memorizedWord, showWord })(Body);
