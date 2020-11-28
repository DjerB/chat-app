import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import { Icon, Root, View, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chats from './views/chats';
import Calls from './views/calls';
import Camera from './views/camera';
import Contacts from './views/contacts';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const Tab = createBottomTabNavigator();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
		}
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		});
		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return (
				<Root>
					<AppLoading />
				</Root>
			);
		}
		return (
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;
							let type;

							if (route.name === 'Chats') {
								iconName = "chat";
								type = "Entypo";
							} else if (route.name === 'Calls') {
								iconName = 'phone';
								type = "FontAwesome";
							} else if (route.name === 'Contacts') {
								iconName = "people";
								type = "Ionicons";
							} else if (route.name === 'Settings') {
								iconName = "cog";
								type = "FontAwesome";
							} else if (route.name === 'Camera') {
								iconName = "camera";
								type = "Entypo";
							}
							return <Icon type={type} name={iconName} style={{ color }} />;
						},
					})}
					tabBarOptions={{
						keyboardHidesTabBar: true,
						activeTintColor: '#15a1fc',
						inactiveTintColor: '#87909a',
						labelStyle: {
							fontWeight: "bold"
						},
						tabStyle: {
							paddingTop: 10,
						},
						style: {
							marginTop: 2,
							height: 60,
							paddingBottom: 5,
						},
					}}
					sceneContainerStyle= {{ backgroundColor: "white" }}
					initialRouteName="Chats"
				>
					<Tab.Screen name="Chats" component={Layout(Chats)} />
					<Tab.Screen name="Calls" component={Layout(Calls)} />
					<Tab.Screen name="Camera" component={Camera} />
					<Tab.Screen name="Contacts" component={Layout(Contacts)} />
					<Tab.Screen name="Settings" component={Layout(SettingsScreen)} />
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}

function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
		</View>
	);
  }

const Layout = (View) => {
	return (props) => (
		<Root>
			<SafeAreaView style={{ flex: 1 }}>
				<View {...props} />
			</SafeAreaView>
		</Root>
	);
}

export default App;
