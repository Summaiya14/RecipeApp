import React from 'react';
import { Text, View, TextInput } from 'react-native';

const SearchBar = (props) => {

return <View style={styles.backgroundStyle}>
<TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
		value={props.value}
        onChangeText={props.onChangeText}

      />
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
  }
};

export default SearchBar;
