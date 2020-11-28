import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Title, Segment, Button, Text } from 'native-base';

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        paddingBottom: 0
    },
    title: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold"
    },
    segment: {
        height: 30,
        paddingVertical: 1,
        paddingHorizontal: 1,
        backgroundColor: "#e7e8ec",
        borderRadius: 8,
    },
    button: {
        borderWidth: 0, 
        borderRadius: 8,
        height: "100%",
    },
    text: {
        textTransform: "capitalize",
        color: "#223545",
        borderWidth: 0
    }
});

const Header = ({ title, filter, filterActive, onFilter }) => {
    const toggle = () => {
        onFilter(!filterActive);
    }

    return (
        <View style={styles.header}>
            <Title style={styles.title}>{title}</Title>
            <Segment style={styles.segment}>
                <Button onPress={toggle} transparent first active={!filterActive} style={{ borderColor: "#e7e8ec", backgroundColor: !filterActive ? "#f7f8fa" : "rgba(0, 0, 0, 0)", ...styles.button }}>
                    <Text style={{ fontWeight: !filterActive ? "bold" : "100", ...styles.text }}>All</Text>
                </Button>
                <Button onPress={toggle} transparent last active={filterActive} style={{ borderColor: "#e7e8ec", backgroundColor: filterActive ? "#f7f8fa" : "rgba(0, 0, 0, 0)", ...styles.button }}>
                    <Text style={{ fontWeight: filterActive ? "bold" : "100", ...styles.text }}>{filter}</Text>
                </Button>
            </Segment>
        </View>
    );
}

export default Header;