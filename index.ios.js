/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Cmd+R
// Cmd+D

'use strict';

import React, {Component} from 'react';
import SearchPage from './SearchPage';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';


class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    )
  }
}


const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
