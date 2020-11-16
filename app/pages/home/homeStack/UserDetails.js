import React from 'react'
import { Container, Text } from 'native-base'
// import IoniconsI from 'react-native-vector-icons/Ionicons'

const PlayDetails = ({ navigation }) => {
  navigation.setOptions({
    headerStyle: {
      backgroundColor: '#22273A'
    },
    headerTintColor: 'white',
    title: 'User Profile'
  })

  return (
    <Container>
      <Text>dsfsds</Text>
    </Container>
  )
}
export default PlayDetails
