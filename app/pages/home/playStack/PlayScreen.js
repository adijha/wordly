import React from 'react'
import { FlatList, View } from 'react-native'
import Intro from '../../../assets/intro.jpg'
import Pc from '../../../assets/pc.png'
import Loot from '../../../assets/loot.png'
import { Card } from '../../../components/Card'

const PlayScreen = (props) => {
  const games = [
    { text: 'PUBG MOBILE', img: Intro },
    { text: 'PUBG PC', img: Pc },
    { text: 'PUBG LITE', img: Loot }
  ]
  return (
    <View style={{ backgroundColor: '#23283B', flex: 1, paddingTop: 10 }}>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <Card
            onPress={() => props.navigation.navigate('PlayDetails', { game: item.text })}
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
