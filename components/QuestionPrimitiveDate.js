import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { allStartNodes, nodeById, isFlow, nextNode } from '../node-red-flow-parser.js';

const QuestionPrimitiveDate = ({ flowDefinition, currentNode, setNextNode, updateFlowData }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
		setNextNode(nextNode(flowDefinition, currentNode)[0]);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
	
  return (

  <View>
		  <Text style={styles.titleText}>{currentNode.name || currentNode.label || currentNode.type}</Text>
    <View>
      <Button onPress={showDatepicker} title="Show date picker!" />
    </View>
    <View>
      <Button onPress={showTimepicker} title="Show time picker!" />
    </View>
    {show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
    )}
		</View>);
};

const styles = StyleSheet.create({
	  titleText: {
	    fontSize: 20,
	    fontWeight: "bold",
			justifyContent: 'center'
	  },
	
});

export default QuestionPrimitiveDate;