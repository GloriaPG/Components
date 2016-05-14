/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Components extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.topBlock}>
          <View style={styles.leftCol}>
            <View style={styles.leftColChild1}>
              <Text>ccccc</Text>
            </View>
            <View style={styles.leftColChild2}>
              <Text>ccccc</Text>
            </View>
          </View>
          <View style={[styles.cellThree, styles.base]} />
        </View>
        <View style={styles.bottomBlock}>
          <View style={[styles.cellFour, styles.base]}/>
          <View style={[styles.cellFive, styles.base]}/>
          <View style={styles.bottomRight}>
          <View style={styles.bottonChild1}>
              <Text>ccccc</Text>
            </View>
            <View style={styles.bottonChild2}>
              <Text>ccccc</Text>
            </View>
          </View>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'column',
    position: 'absolute',
    top: 30,
    left: 0,
    bottom: 0,
    right: 0
  },
  base: {
    borderColor: '#000000',
    borderWidth: 5
  },
  topBlock: {
    flexDirection: 'row',
    flex: 5
  },
  leftCol: {
    flex: 2,
    borderWidth: 5
  },
  leftColChild1: {
    flex: 1,
    borderWidth: 3
  },
  leftColChild2: {
    flex: 2,
    borderWidth: 3
  },
  bottonChild1: {
    flex: 1,
    borderWidth: 3
  },
  bottonChild2: {
    flex: 1,
    borderWidth: 3,
    backgroundColor: 'yellow'
  },
  bottomBlock: {
    flex:2,
    flexDirection: 'row'
  },
  bottomRight: {
    flexDirection: 'column',
    flex: 2
  },
  cellOne: {
    flex: 1,
    borderBottomWidth: 15
  },
  cellTwo: {
    flex: 3
  },
  cellThree: {
    backgroundColor: '#FF0000',
    flex: 5
  },
  cellFour: {
    flex: 3,
    backgroundColor: '#0000FF'
  },
  cellFive: {
    flex: 6
  },
  cellSix: {
    flex: 1
  },
  cellSeven: {
    flex: 1,
    backgroundColor: '#FFFF00'
  }
});

AppRegistry.registerComponent('Components', () => Components);