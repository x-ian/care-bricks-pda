import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { List, ListItem, Left, Right, Text, Radio, Icon } from 'native-base';
import RadioButtonGroup from "../components/RadioButtonGroup";
import CBQuestionSelectSingle from "../components/CBQuestionSelectSingle";
import FlowStartNodes from "../components/FlowStartNodes";
import Node from "../components/Node";
import FlowActions from "../components/FlowActions";
import AdditionalTabs from "../components/AdditionalTabs";

import { allStartNodes, nodeById, isFlow, nextNode } from '../node-red-flow-parser.js';

const FlowScreen = ({ flowDefinition, flowTab }) => {
	
	const [currentNode, setCurrentNode] = useState(flowTab);
	const [nextNode, setNextNode] = useState(null);
	const [previousNode, setPreviousNode] = useState(null);
	const [flowData, setFlowData] = useState({});
	
	const setNextNodeInFlowScreenState = (node) => {
		setNextNode(node);
	};

	const updateFlowData = (nodeId) => {};

	const cameraButton = (nodeId) => {};
	const reloadButton = (nodeId) => {};

	const cancelButton = (nodeId) => {
		setNextNode(currentNode);
		setPreviousNode(null);
		setCurrentNode(flowTab);
	};
			
	const previousButton = (nodeId) => {
		setNextNode(null);
		setPreviousNode(null);
		setCurrentNode(previousNode);
	};
			
	const nextButton = (nodeId) => {
		setNextNode(null);
		setPreviousNode(currentNode);
		setCurrentNode(nextNode);
	};
		
  return (
		<View>
			<Node flowDefinition={flowDefinition} currentNode={currentNode} setNextNode={setNextNodeInFlowScreenState} updateFlowData={updateFlowData}/>
		</View>
  );
}
			// <FlowActions cancelButton={cancelButton} cameraButton={cameraButton} previousButton={previousButton} reloadButton={reloadButton} nextButton={nextButton}/>

			// <AdditionalTabs />

export default FlowScreen;