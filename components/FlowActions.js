import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button, Icon } from 'native-base';

const FlowActions = ({cancelButton, cameraButton, previousButton, reloadButton, nextButton}) => {
  return (
			<View style={{  }}>
				<View style={{ flexDirection:'row', backgroundColor: '#4154b3', justifyContent: 'space-around' }}>
					<FontAwesome.Button name="eject" onPress={cancelButton} backgroundColor="transparent"/>
					<FontAwesome.Button name="camera" backgroundColor="transparent"/>
					<FontAwesome.Button name="caret-left" onPress={previousButton} backgroundColor="transparent"/>
					<FontAwesome.Button name="reload"  backgroundColor="transparent"/>
					<FontAwesome.Button name="caret-right" onPress={nextButton} backgroundColor="transparent"/>
				</View>
			</View>
  );
}

export default FlowActions;