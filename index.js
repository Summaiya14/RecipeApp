import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/Header';

const App = () => {
	return <View>
	<Header headerText="Recipe App"/>
	</View>
};

AppRegistry.registerComponent('recipe', () => App);
