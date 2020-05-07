import React from 'react';
import { Text, View, Image } from 'react-native';

const Recipe = (props) => {
return <View>
<Text style={styles.fontStyle}>{props.title}</Text>
<Text style={styles.calStyle}>Calories: {props.calories}</Text>
{props.ingredients.map(ingredient => (
	<Text style={styles.ingStyle}>{ingredient.text}</Text>
))}
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
		alignSelf: 'center',
		fontSize: 15,
		color: '#800000',
		marginBottom: 10
	},
	imageStyle: {
		height: 250,
		width: 250,
		alignSelf: 'center',
		marginTop: 15,
		marginBottom: 15,
		borderRadius: 150
	},
	ingStyle: {
		alignSelf: 'center',
		marginLeft: 20,
		marginRight: 20
	}
};

export default Recipe;