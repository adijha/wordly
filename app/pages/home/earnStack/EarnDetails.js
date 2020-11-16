import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import IoniconsI from 'react-native-vector-icons/Ionicons'
import { EarnCard } from '../../../components/Card'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
const EarnDetails = (props) => {
  props.navigation.setOptions({
    headerStyle: {
      backgroundColor: '#22273A'
    },
    headerTintColor: 'white',
    title: `${props.route.params.tournament  } Tournament`,
    headerLeft: () => (
      <IoniconsI
        onPress={() => props.navigation.goBack()}
        name="md-arrow-round-back"
        size={30}
        color="#FABE0F"
        style={{ marginLeft: 22 }}
      />
    )
  })
  return (
    <Container style={styles.container}>
      <Content>
        <EarnCard
          imageSource={props.route.params.imageSource}
          likes="250"
          Tournament="Gold"
          People="40"
        />
      </Content>
    </Container>
  )
}

export default EarnDetails
