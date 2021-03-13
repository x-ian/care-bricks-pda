import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { allStartNodes, nodeById, isFlow, nextNode } from '../node-red-flow-parser.js';

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text>{item.text}</Text>
  </TouchableOpacity>
);

const FlowStartNodesFlat = ({ flowDefinition, currentNode, setNextNode, updateFlowData }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return <Item item={item} onPress={() => { setSelectedId(item.id); setNextNode(nextNode(flowDefinition, nodeById(flowDefinition, item.id))[0]);}} style={{ backgroundColor }} />;
  };

	const getAllStartNodes = () => {
		const nodes = [];
		for (const node of allStartNodes(flowDefinition, currentNode)) {
			nodes.push({id: node.id, text: node.name + " (" + node.type + ")"});
		}
		return nodes;
	};

  return (
    <SafeAreaView style={styles.container}>
		<Text style={styles.title}>{currentNode.label}</Text>
      <FlatList
        data={getAllStartNodes()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
   padding: 20,
   marginVertical: 8,
   marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlowStartNodesFlat;