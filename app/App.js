import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import MainNavigator from './navigation/mainNavigator'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator />
    </SafeAreaView>
  )
}
