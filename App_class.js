import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Footer, Content, Text, Left, Right, Body, Icon, Title, Button, Tabs, Tab, TabHeading } from 'native-base';
import MenuHeader from './components/MenuHeader';
import AdditionalTabs from './components/AdditionalTabs';
import FlowActions from './components/FlowActions';
import Flow from './components/Flow';

// todo?
import * as data from './resources/node-red-flows.json';
import { allStartNodes, nodeById, isFlow, nextNode } from './node-red-flow-parser.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
	    this.state = {
			data: {},
      	  	isReady: false,
			currentNodeId: '926db3bd.4273a',
			nextNodeId: null,
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
	this.setState({isReady: true, data: data.default, currentNodeId: '926db3bd.4273a'});
  }

	nextNodeCallback = (nodeId) => {
	 this.setState({nextNodeId: nodeId});

	 console.log("2323");
	 console.log(nodeId);
	 if (nodeById(this.state.data, nodeId).type === 'case-start') {
		 var nn = nextNode(this.state.data, nodeById(this.state.data, nodeId))[0];
		 this.setState({currentNodeId: nn.id});
	 } else {
		 this.setState({currentNodeId: nodeId});
	 }
	 };

 	nextStepCallback = (nodeId) => {
 	 this.setState({nextNodeId: nodeId});

 	 if (nodeById(this.state.data, nodeId).type === 'case-start') {
 		 var nn = nextNode(this.state.data, nodeById(this.state.data, nodeId))[0];
 		 this.setState({currentNodeId: nn.id});
 	 } else {
 		 this.setState({currentNodeId: nodeId});
 	 }
 	 };


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    } 

    return (
	<Container>
		<View style={{ flex: 1 }}>
			<MenuHeader/>
			<Flow jsonFlow={this.state.data} currentNode={nodeById(this.state.data, this.state.currentNodeId)} nextNodeCallback={this.nextNodeCallback}/>
			<FlowActions/>
			<AdditionalTabs/>
		</View>
	</Container>
    );
  }
}
