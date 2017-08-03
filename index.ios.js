/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Cmd+R
// Cmd+D

'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PropertyFinder extends Component {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
