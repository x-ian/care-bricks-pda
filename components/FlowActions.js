import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';

const FlowActions = () => {
  return (
			<View style={{  }}>
				<View style={{ flexDirection:'row', backgroundColor: '#4154b3', justifyContent: 'space-around' }}>
					<Button >
						<Icon name='md-stop' />
					</Button>
					<Button >
						<Icon name='md-camera' />
					</Button>
					<Button >
						<Icon name='md-play-skip-back' />
					</Button>
					<Button >
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