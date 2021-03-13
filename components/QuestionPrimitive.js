import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { allStartNodes, nodeById, isFlow, nextNode } from '../node-red-flow-parser.js';

const QuestionPrimitive = ({ flowDefinition, currentNode, setNextNode, updateFlowData }) => {
  const [value, setValue] = useState(null);
	
  return (
    <SafeAreaView style={styles.container}>
		  <Text style={styles.titleText}>{currentNode.name || currentNode.label || currentNode.type}</Text>
      <FlatList
        data={getAnswers()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  // title: {
  //   fontSize: 32,
  // },
	  titleText: {
	    fontSize: 20,
	    fontWeight: "bold",
			justifyContent: 'center'
	  },
	
});

export default QuestionPrimitive;