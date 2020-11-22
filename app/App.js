import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin'
import MainNavigator from './navigation/mainNavigator'

GoogleSignin.configure({
  webClientId: '1010756078507-u3ve75c8pmk6rlbfj4lk5l02p8dhnacn.apps.googleusercontent.com',
  forceCodeForRefreshToken: true
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
