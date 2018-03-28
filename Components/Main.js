import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Body from './Body';
import Header from './Header';
import Form from './Form';
import TabBar from './TabBar';
import { connect } from 'react-redux';

class Main extends Component<{}> {
  getWordList(){
    const {fillterStatus, arrWords} = this.props;
    if(fillterStatus ==='MEMORIZED') return arrWords.filter(e => e.memorized);
    if(fillterStatus ==='NEED_PRACTICE') return arrWords.filter(e => !e.memorized);
    return arrWords;
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        <View style ={{flex: 1, backgroundColor:'#d5d5d5'}}>
          {this.props.myIsAdding ? <Form /> : null}
          <FlatList
            data={this.getWordList()}
            renderItem={ ({item})=> <Body myWords={item} /> }
            keyExtractor={item => item.id}
          />
        </View>
        <TabBar />
      </View>
    );
  }
}
//function khai bao sử dụng những state nào
function mapStateToProps(state){
  return {
    fillterStatus: state.fillterStatus,
    arrWords:state.arrWords,
    myIsAdding: state.isAdding
  };
}

export default connect(mapStateToProps)(Main);
