import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.text}</Text>
  </TouchableOpacity>
);

const QuestionSelectSingle = ({ flowDefinition, currentNode, setNextNode, updateFlowData }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => { setSelectedId(item.id); nextNodeCallback(item.id);} }
        style={{ backgroundColor }}
      />
    );
  };

  return (
		const nodes = [];
		for (const node of currentNode.devices) {
			nodes.push({id: node.sid, text: node.sid + " (" + node.sid + ")"});
		}

    <SafeAreaView style={styles.container}>
		  <Text style={styles.titleText}>{title}</Text>
      <FlatList
        data={nodes}
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

export default QuestionSelectSingle;