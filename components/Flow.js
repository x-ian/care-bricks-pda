import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { List, ListItem, Left, Right, Text, Radio, Icon } from 'native-base';
import RadioButtonGroup from "./RadioButtonGroup";
import CBQuestionSelectSingle from "./CBQuestionSelectSingle";
import { allStartNodes, nodeById, isFlow } from '../node-red-flow-parser.js';

const Flow = (props) => {
    const [currentNode, setCurrentNode] = useState(nodeById(props.jsonFlow, props.startNodeId));
    const [nextNode, setNextNode] = useState(null);


    const nextNodeCallback = (nodeId) => {
			setNextNode(nodeById(props.jsonFlow, props.startNodeId));
    };
	
	const renderNodes = () => {
		if (isFlow(currentNode)) {
			const nodes = [];
			for (const node of allStartNodes(props.jsonFlow, currentNode)) {
				nodes.push({id: node.id, text: node.name + " (" + node.type + ")"});
			}
			return <CBQuestionSelectSingle entries={nodes} nextNodeCallback={nextNodeCallback} />
		} else {
			
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