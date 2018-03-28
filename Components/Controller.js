import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ChangerColor from './ChangerColor';
import { connect } from 'react-redux';

class Controller extends Component<{}> {
  toUpp(){
    this.props.dispatch({
      type:'UP'
    });
  }
  toDown(){
    this.props.dispatch({
      type:'DOWN'
    });
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.toUpp.bind(this)}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.toDown.bind(this)}>
          <Text>Sub</Text>
        </TouchableOpacity>

        <ChangerColor />
      </View>
    );
  }
}

export default connect()(Controller);
