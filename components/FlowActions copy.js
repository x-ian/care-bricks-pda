import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';

const FlowActions = ({}cancelButton, cameraButton, previousButton, reloadButton, nextButton) => {
  return (
			<View style={{  }}>
				<View style={{ flexDirection:'row', backgroundColor: '#4154b3', justifyContent: 'space-around' }}>
					<Button disabled>
						<Icon name='md-stop' />
					</Button>
					<Button disabled>
						<Icon name='md-camera' />
					</Button>
					<Button disabled>
						<Icon name='md-play-skip-back' />
					</Button>
					<Button disabled>
						<Icon name='md-refresh' />
					</Button>
					<Button >
						<Icon name='md-play-skip-forward' />
					</Button>
				</View>
			</View>
  );
}

export default FlowActions;