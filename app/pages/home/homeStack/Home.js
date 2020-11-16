import React from 'react'
import { FlatList, View } from 'react-native'
import {  Header, Item, Input, Icon } from 'native-base'
import Intro from '../../../assets/intro.jpg'
import { Card } from '../../../components/Card'

const PlayScreen = (props) => {
  const games = [
    { text: 'PUBG MOBILE', img: Intro }
  ]
  return (
    <View style={{ backgroundColor: '#23283B', flex: 1, paddingTop: 10 }}>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          {/* <Icon name="ios-people" /> */}
        </Item>
      </Header>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <Card
            onPress={() => props.navigation.navigate('UserDetails', { game: item.text })}
            img={item.img}
            text={item.text}
          />
        )}
        keyExtractor={(item) => item.text}
      />
    </View>
  )
}

export default PlayScreen
