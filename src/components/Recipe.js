import React from 'react';
import { Text, View, Image } from 'react-native';

const Recipe = (props) => {
return <View>
<Text style={styles.fontStyle}>{props.title}</Text>
<Text style={styles.calStyle}>{props.calories}</Text>
<Image style={styles.imageStyle} source={{ uri: props.image}} />
</View>

};

const styles = {
	fontStyle: {
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	calStyle: {
		alignSelf: 'center'
	},
	imageStyle: {
		height: 250,
		width: 250,
		alignSelf: 'center',
		marginTop: 15,
		marginBottom: 15
	}
};

export default Recipe;