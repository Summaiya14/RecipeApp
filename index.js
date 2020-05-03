import React, { useState } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';

const App = () => {

const [text, setText] = useState('');

	return <View>
	<Header headerText="Recipe App"/>
	<SearchBar 
    value={text}
	onChangeText={(newValue) => setText(newValue)}
	/>

	</View>


};

AppRegistry.registerComponent('recipe', () => App);
