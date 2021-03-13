import React, {useState} from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { allStartNodes, nodeById, isFlow, nextNode } from '../node-red-flow-parser.js';

const QuestionPrimitiveString = ({ flowDefinition, currentNode, setNextNode, updateFlowData }) => {
  const [value, setValue] = useState(null);

  const onChange = (text) => {
		setValue(text);
		setNextNode(nextNode(flowDefinition, currentNode)[0]);
  };

  return (
		<View>
		  <Text style={styles.titleText}>{currentNode.name || currentNode.label || currentNode.type}</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      value={value}
    />
			</View>
  );

};

const styles = StyleSheet.create({
	  titleText: {
	    fontSize: 20,
	    fontWeight: "bold",
			justifyContent: 'center'
	  },	
});


export default QuestionPrimitiveString;