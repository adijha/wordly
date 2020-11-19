import React, { useState } from 'react'
import { StyleSheet, View, Image, ActivityIndicator, ScrollView } from 'react-native'
import { Text, Button } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Img from '../../../assets/profile.jpg'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#22273A',
    height: 80
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    // marginBottom: 10,
    // alignSelf: 'center',
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    resizeMode: 'cover',
    zIndex: 11
  },
  body: {
    // marginTop: 25
  },
  bodyContent: {
    // flex: 1,
    // padding: 30
  },
  name: {
    fontSize: 19
    // color: '#696969',
    // fontWeight: '700'
  },
  info: {
    fontSize: 16,
    color: '#3E69B9',
    marginTop: 10
  },
  description: {
    fontSize: 14,
    color: '#696969',
    marginTop: 10
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
    <ScrollView style={{ backgroundColor: '#ededed' }}>
      <Image style={styles.avatar} source={Img} />
      <View style={styles.header} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={{ alignSelf: 'center', backgroundColor: '#fff', width: '100%', padding: 30, paddingTop: 50 }}>
            <Text style={styles.name}>Bhaskar Diwakar Chaudhary</Text>
            <Text style={{ fontSize: 14, marginVertical: 5 }}>
              I am a farmer turned into software developer, I use his axe to type on keyboard, I have a golden tractor,
              with it&apos;s battery I run my mac.
            </Text>
            {/* <View
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginVertical: 15
              }}
            /> */}
            <Text style={{ fontSize: 14, marginVertical: 2 }}>Jaipur National University . Mojitolabs</Text>
            <Text style={{ fontSize: 14, marginVertical: 2 }}>Gurgaun, Haryana, India</Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#fff',
              width: '100%',
              paddingHorizontal: 30,
              marginTop: 10,
              paddingVertical: 18
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 8 }}>About</Text>
            <Text style={{ fontSize: 14 }}>
              I am a farmer turned into software developer, I use his axe to type on keyboard, I have a golden tractor,
              with it&apos;s battery I run my mac.
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#fff',
              width: '100%',
              paddingHorizontal: 30,
              marginTop: 10,
              paddingVertical: 18
            }}
          >
            <Text style={{ fontSize: 16, marginTop: 10 }}>Skills</Text>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
              <View style={styles.tag}>
                <Text
                  style={{
                    color: '#555',

                    fontSize: 14
                  }}
                >
                  React.js
                </Text>
              </View>
              <View style={styles.tag}>
                <Text
                  style={{
                    color: '#555',

                    fontSize: 14
                  }}
                >
                  Redux.js
                </Text>
              </View>
              <View style={styles.tag}>
                <Text
                  style={{
                    color: '#555',

                    fontSize: 14
                  }}
                >
                  Node.js
                </Text>
              </View>
              <View style={styles.tag}>
                <Text
                  style={{
                    color: '#555',

                    fontSize: 14
                  }}
                >
                  Mongoose.js
                </Text>
              </View>
              <View style={styles.tag}>
                <Text
                  style={{
                    color: '#555',

                    fontSize: 14
                  }}
                >
                  Express.js
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#fff',
              width: '100%',
              paddingHorizontal: 30,
              marginTop: 10,
              paddingVertical: 18
            }}
          >
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
          </View>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth
            }}
          />
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#fff',
              width: '100%',
              paddingHorizontal: 30,
              // marginTop: 10,
              paddingVertical: 18
            }}
          >
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
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#fff',
              width: '100%',
              paddingHorizontal: 30,
              marginTop: 10,
              paddingVertical: 18
            }}
          >
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
      </View>
    </ScrollView>
  )
}
