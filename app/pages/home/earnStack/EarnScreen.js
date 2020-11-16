import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { Container, Content } from 'native-base'
import { EarnCard } from '../../../components/Card'
import Sky from '../../../assets/sky.png'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

const EarnScreen = (props) => {
  return (
    <Container style={styles.container}>
      <ImageBackground source={Sky} style={styles.image}>
        <Content>
          <EarnCard
            onPress={() =>
              props.navigation.navigate('EarnDetails', {
                imageSource: '1',
                tournament: 'Gold'
              })}
            imageSource="1"
            likes="250"
            Tournament="Gold"
            People="40"
          />
          <EarnCard
            onPress={() =>
              props.navigation.navigate('EarnDetails', {
                imageSource: '2',
                tournament: 'Silver'
              })}
            imageSource="2"
            likes="200"
            Tournament="Silver"
            People="60"
          />
          <EarnCard
            onPress={() =>
              props.navigation.navigate('EarnDetails', {
                imageSource: '3',
                tournament: 'Bronze'
              })}
            imageSource="3"
            likes="20"
            Tournament="Bronze"
            People="80"
          />
        </Content>
      </ImageBackground>
    </Container>
  )
}

export default EarnScreen
