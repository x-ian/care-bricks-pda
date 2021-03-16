import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { allStartNodes, nodeById, isFlow, nextNode } from '../node-red-flow-parser.js';

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.text}</Text>
  </TouchableOpacity>
);

const SwitchManual = ({ flowDefinition, currentNode, setNextNode, updateFlowData }) => {
  const [selectedId, setSelectedId] = useState(null);
	
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => { setSelectedId(item.id); setNextNode(nodeById(flowDefinition, item.id));} }
        style={{ backgroundColor }}
      />
    );
  };

	const getAnswers = () => {
		const nodes = [];
		for (var i = 0; i < currentNode.rules.length; i++) {
			nodes.push({id: currentNode.wires[i][0], text: currentNode.rules[i].v});
		}
		return nodes;
	};
	
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
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
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

export default SwitchManual;