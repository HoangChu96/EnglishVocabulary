import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import { tabShowAll, tabMemorized, tabNeedPractice } from './redux/actionCreator';

class TabBar extends Component{
  getTextStyle(statusName){
    const { fillterStatus } = this.props;
    if(statusName === fillterStatus ) return { color: '#04aad6', fontWeight:'bold'};

  }

  render(){
    return(
      <View style={{flexDirection: 'row',justifyContent:'space-between', padding: 10}}>
        <TouchableOpacity onPress={()=> this.props.tabShowAll()}>
          <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.tabMemorized()}>
          <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.tabNeedPractice()}>
          <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTICE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
function mapStateToProps(state){
  return {
    fillterStatus: state.fillterStatus
  };
}
export default connect(mapStateToProps, {tabShowAll, tabMemorized, tabNeedPractice})(TabBar);
