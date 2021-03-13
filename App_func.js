import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Footer, Content, Text, Left, Right, Body, Icon, Title, Button, Tabs, Tab, TabHeading } from 'native-base';
import MenuHeader from './components/MenuHeader';
import FlowScreen from './screens/FlowScreen';

// todo?
import * as flowJson from './resources/node-red-flows.json';
import { allStartNodes, nodeById, isFlow, nextNode } from './node-red-flow-parser.js';

const App = () => {
	const [flowDefinition, setFlowDefinition] = useState(flowJson.default);
	const [isReady, setReady] = useState(false);

	useEffect(() => {
		(async() => {
			await Font.loadAsync({
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				...Ionicons.font,
			});
			setReady(true);
		})();
		// let response = await fetch('http://localhost:3001/assets/resources/node-red-flows.json');
		//     let json = await response.json();
		// setData(data2.default);
		// setCurrentNodeId('926db3bd.4273a');
	});

	return (
		isReady === false ? ( <AppLoading/> ) : ( 
			<Container>
				<View style = {{flex: 1}}>
					<MenuHeader/>
					<FlowScreen flowDefinition={flowDefinition} flowTab={nodeById(flowDefinition,'926db3bd.4273a')}/>
				</View> 
			</Container>)
	);

}

export default App;
