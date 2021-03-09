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

export default class App extends React.Component {
  constructor(props) {
    super(props);
	    this.state = {
			data: {},
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
	this.setState({isReady: true, data: data.default});
  }


// jf() {
// 	// return JSON.parse('[{"id": "1", "type":"tab"}]');
// return JSON.parse();
//
//
// }


  render() {
	  // var jf = JSON.parse('[{"id": "1", "type":"tab"}]');
	  
    if (!this.state.isReady) {
      return <AppLoading />;
    } 

    return (
	<Container>
		<View style={{ flex: 1 }}>
			<MenuHeader/>
		</View>
	</Container>
    );
  }
}
