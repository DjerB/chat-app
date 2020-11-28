import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Left, Body, Right, Icon, ListItem, Text } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f7f8fa",
        marginHorizontal: 10,
        borderRadius: 8,
    },
    left: {
        display: "flex",
        flexDirection: "row",
    },
    icon: {
        color: "white",
        paddingHorizontal: 10,
        paddingVertical: 7,
        fontSize: 26,
        backgroundColor: "#16a1fd",
        borderRadius: 8,
        marginRight: 10
    }
});

const DontDisturb = ({ isEnabled, onToggle }) => {

    return (
        <ListItem avatar noBorder noIndent style={styles.container}>
            <View style={styles.left}>
                <Icon type="Ionicons" name="moon" style={styles.icon} />
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold", marginLeft: -30 }}>Don't disturb me</Text>
                    <Text style={{ fontSize: 13, color: "#a1a8ae" }}>Snooze all incoming calls</Text>
                </View>
            </View>
            <ToggleSwitch
                size="large"
                onColor="#12a1ff"
                isOn={isEnabled}
                onToggle={onToggle}
                animationSpeed={100}
            />
        </ListItem>
    );
}

export default DontDisturb;