import React from 'react';
import { View } from 'react-native';
import { Tabs, Tab, TabHeading, Text } from 'native-base';

const AdditionalTabs = () => {
  return (
			<View style={{ flex: 2 }}>
				<Tabs>
					<Tab heading={ <TabHeading style={{ backgroundColor: '#b7daf8'}}><Text>Trace</Text></TabHeading>}>
						<Text>Tab 1</Text>
					</Tab>
					<Tab heading={ <TabHeading style={{ backgroundColor: '#b7daf8'}}><Text>Conclusions</Text></TabHeading>}>
						<Text>Tab 2</Text>
					</Tab>
					<Tab heading={ <TabHeading style={{ backgroundColor: '#b7daf8'}}><Text>Related</Text></TabHeading>}>
						<Text>Tab 3</Text>
					</Tab>
				</Tabs>
			</View>
  );
}

export default AdditionalTabs;