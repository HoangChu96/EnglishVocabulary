import React, {Component} from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';

import {connect } from 'react-redux';

class ChangerColor extends Component{
  changerColor(){
    this.props.dispatch({
      type:'CHANGE_COLOR'
    });
  }
  render(){
    const color = this.props.highlight ? 'cyan':'pink';
    return(
      <View>
        <TouchableOpacity onPress = {this.changerColor.bind(this)}>
          <Text style={{color}}>ChangerColor</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default connect (function(state){
  return {highlight: state.highlight};
})(ChangerColor);
