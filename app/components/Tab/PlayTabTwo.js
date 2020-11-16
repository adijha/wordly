import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import { PlayCard } from "../Card"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#ebf0f7'
  },
  contentList: {
    flex: 1
  }
})
const PlayTabTwo = () => {
  return (
    <Container style={styles.container}>
      <Content>
        <PlayCard />
        <PlayCard />
        <PlayCard />
      </Content>
    </Container>
  )
}

export default PlayTabTwo
