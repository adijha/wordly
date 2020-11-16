import React, { useState } from 'react'
import { StyleSheet, View, Image, ActivityIndicator, ScrollView } from 'react-native'
import { Text, Button } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Img from '../../../assets/profile.jpg'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#22273A',
    height: 100
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 40
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    // flex: 1,
    // alignItems: 'center',
    padding: 30
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
    alignSelf: 'center'
  },
  info: {
    fontSize: 16,
    color: '#3E69B9',
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF'
  },
  tag: {
    padding: 5,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 15,
    margin: 5
  }
})
export default function Profile(props) {
  const [loading, setLoading] = useState(false)
  return (
    <ScrollView>
      <View style={styles.header} />
      <Image style={styles.avatar} source={Img} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Aditya Kumar Jha</Text>
          <Text style={styles.description}>
            I am a farmer turned into software developer, I use his axe to type on keyboard, I have a golden tractor,
            with it&apos;s battery I run my mac.
          </Text>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center'
            }}
          >
            <Text style={styles.info}>Occupation :</Text>
            <Text style={{ width: 10 }}> </Text>
            <Text style={styles.info}>Fisherman</Text>
          </View> */}
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginVertical: 15
            }}
          />
          <Text
            style={
              {
                // fontWeight: '700'
              }
            }
          >
            Jaipur National University . Mojitolabs
          </Text>
          <Text
            style={
              {
                // fontWeight: '700'
              }
            }
          >
            Gurgaun, Haryana, India
          </Text>

          <Text style={{ fontSize: 17, marginTop: 10 }}>About :</Text>
          <Text style={{ color: '#999' }}>
            I am a farmer turned into software developer, I use his axe to type on keyboard, I have a golden tractor,
            with it&apos;s battery I run my mac.
          </Text>

          <Text style={{ fontSize: 17, marginTop: 10 }}>Skills :</Text>
          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            <View style={styles.tag}>
              <Text style={{ color: '#555' }}>React.js</Text>
            </View>
            <View style={styles.tag}>
              <Text style={{ color: '#555' }}>Redux.js</Text>
            </View>
            <View style={styles.tag}>
              <Text style={{ color: '#555' }}>Node.js</Text>
            </View>
            <View style={styles.tag}>
              <Text style={{ color: '#555' }}>Mongoose.js</Text>
            </View>
            <View style={styles.tag}>
              <Text style={{ color: '#555' }}>Express.js</Text>
            </View>
          </View>
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 5, fontWeight: '700' }}>Experience :</Text>

          <Text style={{ fontSize: 18 }}>All Asia conc Developer</Text>
          <Text>Mojitolabs</Text>
          <Text style={{ color: '#222' }}>January 2020 - Present</Text>
          <Text style={{ fontSize: 14, color: '#555' }}>Remote</Text>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginVertical: 5
            }}
          />
          <Text style={{ fontSize: 18 }}>Magic Developer</Text>
          <Text>Mojitolabs</Text>
          <Text style={{ color: '#222' }}>January 2020 - Present</Text>
          <Text style={{ fontSize: 14, color: '#555' }}>Remote</Text>
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 5, fontWeight: '700' }}>Education :</Text>

          <Text style={{ fontSize: 18 }}>Bachelor of Engineering</Text>
          <Text>Wanaarasiasassad</Text>
          <Text style={{ color: '#222' }}>January 2020 - january 2020</Text>

          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginVertical: 5
            }}
          />
          <Text style={{ fontSize: 18 }}>Magic Developer</Text>
          <Text>Mojitolabs</Text>
          <Text style={{ color: '#222' }}>January 2020 - Present</Text>

          <View style={{ marginVertical: 20 }} />

          <Button
            full
            rounded
            info
            style={{
              backgroundColor: '#3E69B9',
              marginVertical: 30
            }}
          >
            <Text style={{ color: 'white' }}>Reset Password</Text>
          </Button>
          {!loading ? (
            <Button
              full
              rounded
              info
              style={{
                backgroundColor: '#3E69B9'
              }}
              onPress={async () => {
                setLoading(true)
                await AsyncStorage.removeItem('token')
                props.navigation.navigate('SignIn')
                setLoading(false)
              }}
            >
              <Text style={{ color: 'white' }}>Log Out</Text>
            </Button>
          ) : (
            <Button
              rounded
              info
              style={{
                width: 46,
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#3E69B9'
              }}
            >
              <ActivityIndicator size="large" color="white" />
            </Button>
          )}
        </View>
      </View>
    </ScrollView>
  )
}
