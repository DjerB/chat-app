import React from 'react';
import { Header, Item, Icon, Input } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    searchBarContainer: {
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: "white",
    },
    searchBar: {
        backgroundColor: "#f7f8fa", //"#dedede", //"#f7f8fa",
        borderRadius: 10,
    }
});

const SearchBar = ({ placeholder, onChange }) => {
    return (
        <Header searchBar rounded style={styles.searchBarContainer}>
            <Item style={styles.searchBar}>
                <Icon style={{ fontSize: 20 }} type="AntDesign" name="search1" />
                <Input placeholder={placeholder} onChangeText={onChange} />
            </Item>
        </Header>
    );
}

export default SearchBar;