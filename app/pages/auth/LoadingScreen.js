import React, { useEffect, useCallback } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Pubg from '../../assets/logo.jpeg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  img: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  }
})
export default function LoadingScreen(props) {
  const tryLogin = useCallback(async () => {
    // setTimeout(async () => {
    const token = await AsyncStorage.getItem('token')
    props.navigation.navigate(token ? 'Home' : 'SignIn')
    // }, 1000)
  }, [props.navigation])
  useEffect(() => {
    tryLogin()
  }, [tryLogin])

  return (
    <View style={styles.container}>
      <Image source={Pubg} style={styles.img} />
    </View>
  )
}
