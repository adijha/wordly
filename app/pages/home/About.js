import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center',paddingHorizontal:25 }}>
      <Image source={require('../../assets/logo.jpeg')} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 18, marginVertical: 20 }}>Wordly, Private Limited</Text>
      <Text style={{ textAlign: 'center' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </Text>
    </View>
  )
}
