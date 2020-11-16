import React from 'react'
import { Card, CardItem, Text, Body } from 'native-base'

const PlayCard = () => {
  return (
    <Card>
      <CardItem header bordered>
        <Text>Pubg silver tier</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>Kill :</Text>
          <Text>Price :</Text>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Text>Total player :</Text>
      </CardItem>
    </Card>
  )
}

export default PlayCard
