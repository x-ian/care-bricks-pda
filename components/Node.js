import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { List, ListItem, Left, Right, Text, Radio, Icon } from 'native-base';
import RadioButtonGroup from "./RadioButtonGroup";
import QuestionSelectSingle from "./QuestionSelectSingle";
import QuestionPrimitiveDate from "./QuestionPrimitiveDate";
import QuestionPrimitiveString from "./QuestionPrimitiveString";
import { allStartNodes, nodeById, isFlow, nextNode } from '../node-red-flow-parser.js';
import FlowStartNodes from "./FlowStartNodes";
import SwitchManual from "./SwitchManual";

const Node = ({ flowDefinition, currentNode, setNextNode, updateFlowData }) => {
	
	
	// all supported node types
	const renderNodes = () => {
		console.log("Node: currentNode");
		console.log(currentNode);
		if (currentNode) {
			console.log("Node: 1");
		if (isFlow(currentNode)) {
		// tabs (aka one flow)
			console.log("Node: 2");
			return <FlowStartNodes flowDefinition={flowDefinition} currentNode={currentNode} setNextNode={setNextNode} updateFlowData={updateFlowData}/>

		} else if (currentNode.type === 'switch-manual'){
			// switch-manual
			// console.log("Node: 3");
			// console.log(currentNode);
			return <SwitchManual flowDefinition={flowDefinition} currentNode={currentNode} setNextNode={setNextNode} updateFlowData={updateFlowData}/>

		} else if (currentNode.type === 'question-select' && currentNode.behavior === 'single'){
			// single select question
			// console.log("Node: 4");
			// console.log("Node: QuestionSelectSingle");
			return <QuestionSelectSingle flowDefinition={flowDefinition} currentNode={currentNode} setNextNode={setNextNode} updateFlowData={updateFlowData}/>

		} else if (currentNode.type === 'question-primitive' && currentNode.datatype === 'dateTime'){
			// single select question
			// console.log("Node: 4b");
			// console.log("Node: QuestionPrimitiveDate");
			return <QuestionPrimitiveDate flowDefinition={flowDefinition} currentNode={currentNode} setNextNode={setNextNode} updateFlowData={updateFlowData}/>

		} else if (currentNode.type === 'question-primitive' && currentNode.datatype === 'string'){
			// single select question
			// console.log("Node: 4c");
			// console.log("Node: QuestionPrimitiveString");
			return <QuestionPrimitiveString flowDefinition={flowDefinition} currentNode={currentNode} setNextNode={setNextNode} updateFlowData={updateFlowData}/>

		} else if (currentNode.type === 'case-start'){
			// case-start shouldn't happen as it doesn't have a dedicated UI
			// console.log("Node: 5");
			
			// multi select question
			
			// primitive question
			
			// switch
			
			// manual switch
			
			// function
		}
	}
	};
	
	//  style={{ flex: 3, justifyContent: 'center',}}>
  return (
	<View  style={{ flex: 3, justifyContent: 'center',}} >
	  { renderNodes() }
	</View>
  );
}

export default Node;