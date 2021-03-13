import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const FlatListSimple2 = () => {

		const items = [{id: 1, color: '#00ff00'}, {id: 2, color: '#0000ff'}]

	
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>


	<FlatList
		style={{
			flex: 1,
			width: '100%',
			height: '100%',
			backgroundColor: '#ff0000'
		}}
		data={items}
		keyExtractor={item => item.id.toString()}
		renderItem={({item, index}) => (
			<View style={{top: 0, left: 0, width: 100, height: 100, backgroundColor: item.color}}/>
		)}
		showsHorizontalScrollIndicator={false}
		scrollEnabled={false}
	/>
      </ScrollView>
    </SafeAreaView>
				
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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


export default FlatListSimple2;