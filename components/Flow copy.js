import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { List, ListItem, Left, Right, Text, Radio, Icon } from 'native-base';
import RadioButtonGroup from "./RadioButtonGroup";
import CBQuestionSelectSingle from "./CBQuestionSelectSingle";
import { allStartNodes, nodeById, isFlow, nextNode } from '../node-red-flow-parser.js';

const Flow = (props) => {
	
	const [nextNode, setNextNode] = useState(null);
	const [currentNode, setCurrentNode] = useState(null);
	
	const setNextNodeInFlowState = (nodeId) => {
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

 	const updateFlowData = (nodeId) => {
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
	
	// all supported node types
	const renderNodes = () => {
		console.log("11111a");
		console.log(props.currentNode);

		if (isFlow(props.currentNode)) {
		// tabs (aka one flow)
			const nodes = [];
			for (const node of allStartNodes(props.jsonFlow, props.currentNode)) {
				nodes.push({id: node.id, text: node.name + " (" + node.type + ")"});
			}
			return <CBQuestionSelectSingle entries={nodes} nextNodeCallback={props.nextNodeCallback} />

		} else if (props.currentNode.type === 'switch-manual'){
			// switch-manual
			return <QuestionSelectSingle flowDefinition={props.jsonFlow} currentNode={props.currentNode} setNextNode={setNextNodeInFlowState} updateFlowData={updateFlowData}/>

		} else if (props.currentNode.type === 'question-select' && props.currentNode.behavior === 'single'){
			// single select question
			const nodes = [];
			var nn = nextNode(props.jsonFlow, nodeById(props.jsonFlow``, props.currentNode))[0];
			for (const node of props.currentNode.devices) {
				nodes.push({id: node.sid, text: node.sid + " (" + node.sid + ")"});
			}

			return <QuestionSelectSingle flowDefinition={props.jsonFlow} currentNode={props.currentNode} setNextNode={setNextNodeInFlowState} updateFlowData={updateFlowData}/>

		} else if (props.currentNode.type === 'case-start'){
			// case-start shouldn't happen as it doesn't have a dedicated UI
			
			// multi select question
			
			// primitive question
			
			// switch
			
			// manual switch
			
			// function
		}

	};
	
	const renderSelectSingle = () => {
		return <CBQuestionSelectSingle/>
	}
	
  return (
	<View style={{ flex: 3, justifyContent: 'center',}}>
	  { renderNodes() }
	</View>
  );
}

export default Flow;