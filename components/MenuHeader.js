import React from 'react';
import { Header, Footer, Left, Right, Body, Title, Button, Icon } from 'native-base';

const MenuHeader = () => {
  return (
		<Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Diagnosing Childhood Malaria</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon type = 'MaterialCommunityIcons' name='pin' />
            </Button>
            <Button transparent>
              <Icon name='md-share-social' />
            </Button>
            <Button transparent>
              <Icon name='md-settings' />
            </Button>
          </Right>
		</Header>
  );
}

export default MenuHeader;