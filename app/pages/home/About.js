import React, { useEffect, useState } from 'react'
import HTML from 'react-native-render-html'
import { View, Text, Image } from 'react-native'
import AuthApi from '../../api/Auth'

export default function About() {
  const [about, setAbout] = useState('')
  const getAbout = async () => {
    const res = await AuthApi.post('/about.php')
    setAbout(res.data.about)
  }
  useEffect(() => {
    getAbout()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingHorizontal: 25 }}>
      <Image source={require('../../assets/logo.jpeg')} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 18, marginVertical: 20 }}>Wordly, Private Limited</Text>
      <HTML html={about} contentWidth={100} />
    </View>
  )
}
