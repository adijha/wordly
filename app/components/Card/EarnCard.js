import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Accordion
} from 'native-base'
import Loot from '../../assets/loot.png'
import Intro from '../../assets/intro.jpg'
import Pc from '../../assets/pc.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#ebf0f7'
  },
  contentList: {
    flex: 1
  },
  img: { height: 200, width: null, flex: 1 }
})

const EarnCard = (props) => {
  const images = {
    '1': Loot,
    '2': Intro,
    '3': Pc
  }

  const dataArray = [
    {
      title: 'Date Schedule',
      content: 'Starting from 22/08/2020 and will be ended in 7 days'
    }
  ]

  return (
    <TouchableOpacity
      style={{ borderRadius: 20, marginHorizontal: 20, marginVertical: 10 }}
      onPress={props.onPress}
    >
      <Card style={{ borderRadius: 20 }}>
        <Accordion
          dataArray={dataArray}
          headerStyle={{ backgroundColor: '#b7daf8' }}
          contentStyle={{ backgroundColor: '#ddecf8' }}
        />
        <CardItem cardBody style={{ borderRadius: 20 }}>
          <Image source={images[props.imageSource]} style={styles.img} />
        </CardItem>
        <CardItem>
          <Left>
            <Button style={{ backgroundColor: '#22273A' }}>
              <Icon active name="wallet" />
              <Text>{props.likes}</Text>
            </Button>
          </Left>
          <Body
            style={{
              paddingLeft: 40
            }}
          >
            <Text>Pubg {props.Tournament} Tournament</Text>
          </Body>
          <Right>
            <Icon active name="ios-people" />
            <Text>{props.People}</Text>
          </Right>
        </CardItem>
        <Button block style={{ backgroundColor: '#22273A' }}>
          <Text>Enter</Text>
        </Button>
      </Card>
    </TouchableOpacity>
  )
}

export default EarnCard
