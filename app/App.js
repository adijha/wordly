import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin'
import MainNavigator from './navigation/mainNavigator'

GoogleSignin.configure({
  webClientId: '31436254380-oj24qhensgm3pu6ghjt5v2ffh4lub0un.apps.googleusercontent.com',
  offlineAccess:true
})
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
