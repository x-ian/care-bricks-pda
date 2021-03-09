import React, { useState } from "react";
import { ListItem, Left, Right, Text, Radio, Button, Icon } from 'native-base';

export default function RadioButton({ isChecked, text, onRadioButtonPress }) {

  return (
    <ListItem
      selected={isChecked}
      onPress={onRadioButtonPress}
    >
      <Left>
        <Text>{text}</Text>
		<Button style={{height: 20}} transparent onPress={() => alert("Some additional info")}>
			<Icon name='information' />
		</Button>
      </Left>
      <Right>
        <Radio
          selected={isChecked}
          onPress={onRadioButtonPress}
        />
      </Right>
    </ListItem>
  );
}
	