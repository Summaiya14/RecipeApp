import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, FlatList, ScrollView } from 'react-native';
import Recipe from './Recipe';

const SearchBar = (props) => {

const APP_ID = "41f98a84";
const APP_KEY = "e62cbc437ac76a4c030391dcf8bc7b9f";

const [recipes, setRecipes] = useState([]);

useEffect ( () => {
getRecipes();
}, []);

const getRecipes = async () => {
	const response = await fetch(
	`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
);
    const data = await response.json();
	setRecipes(data.hits);
};

return <View style={{flex: 1, backgroundColor: '#ffb6c1'}}> 
<View style={styles.backgroundStyle}>
<TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
		value={props.value}
        onChangeText={props.onChangeText}
      />

	  </View>

     <ScrollView>
	 {recipes.map(recipe => (
	  	  <Recipe 
		  key={recipe.recipe.label}
		  title={recipe.recipe.label}
		  calories={recipe.recipe.calories}
		  image={recipe.recipe.image}
		  />
	  ))}
	  </ScrollView>



</View>

};

const styles = {
	backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  listStyle: {
  
  }
};

export default SearchBar;
