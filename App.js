import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Footer, Content, Text, Left, Right, Body, Icon, Title, Button, Tabs, Tab, TabHeading } from 'native-base';
import MenuHeader from './components/MenuHeader';
import AdditionalTabs from './components/AdditionalTabs';
import FlowScreen from './screens/FlowScreen';
import Flow from './components/Flow';

// todo?
import * as flowJson from './resources/node-red-flows.json';
import { allStartNodes, nodeById, isFlow, nextNode } from './node-red-flow-parser.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
	    this.state = {
				flowDefinition: flowJson.default,
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
	
	// let response = await fetch('http://localhost:3001/assets/resources/node-red-flows.json');
	//     let json = await response.json();
	// this.setState({isReady: true, data: json});
	this.setState({isReady: true, data: flowJson.default});
  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    } 


// style = {{flex: 1}}
    return (
			<Container>
				<View>
					<MenuHeader/>
					<FlowScreen flowDefinition={this.state.flowDefinition} flowTab={nodeById(this.state.flowDefinition,'926db3bd.4273a')}/>
				</View> 
			</Container>
    );
  }
}
