import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };

  return (
    <View>
      <View style={styles.childcontainer}>
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
          <Image
            source={require('../image/plus.png')}
            style={{ width: 30, height: 30, marginBottom: -30, marginTop: 20, marginLeft: 300 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Button pressed')}>
          <Image
            source={require('../image/plus.png')}
            style={{ width: 30, height: 30, marginBottom: -30, marginTop: 20, marginLeft: 320 }}
          />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search by contact, account, deal"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
          <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        </View>
        <View style={styles.cctoner}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  cctoner: {
    backgroundColor: '#ccc',
    width: 100,
  },
  childcontainer: {
    width: 390,
    height: 140,
    marginRight: 50,
    marginRight: -30,
    marginLeft: -20,
    marginRight: -10,
    backgroundColor: '#ccc',
    marginTop: -50,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 70,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Home;
