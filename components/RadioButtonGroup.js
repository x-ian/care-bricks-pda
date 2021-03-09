import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import RadioButtonNB from "./RadioButton";

export default function RadioButtonGroup({ values, onPress }) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState();

  const _onPress = (idx) => {
    onPress(idx);
    setCurrentSelectedItem(idx);
  };

  const _renderRadioButtons = () => {
    return (values || []).map((listItem, idx) => {
      let isChecked = currentSelectedItem === idx ? true : false;
      return (
        <RadioButtonNB
          key={idx}
          onRadioButtonPress={() => _onPress(idx)}
          isChecked={isChecked}
          text={listItem.text}
        />
      );
    });
  };
  return <View>{_renderRadioButtons()}</View>;
}