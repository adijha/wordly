import React, { useState, useContext } from 'react'
import { StyleSheet, View, Image, ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import { Text, Button } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { SocialIcon } from 'react-native-elements'
//
import { User } from '../../../navigation/mainNavigator'

import Img from '../../../assets/profile.jpg'

const { height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3E69B9',
    height: 80
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
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
  },
  icon: { width: height / 18, height: height / 18 },
  loadingButton: {
    width: 46,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#3E69B9'
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 5,
    paddingVertical: 18
  },
  cardTitle: { fontSize: 16, marginBottom: 8 }
})
export default function Profile() {
  const [loading, setLoading] = useState(false)
  const { setIsLogged } = useContext(User)

  return (
    <ScrollView style={{ backgroundColor: '#ededed' }}>
      <Image style={styles.avatar} source={Img} />
      <View style={styles.header} />
      <View style={[styles.card, { paddingTop: 48, marginTop: 0 }]}>
        <Text style={styles.name}>Abhay Dubey</Text>
        <Text style={{ fontSize: 14, marginVertical: 5 }}>React developer at mojitilabs, Haryana India</Text>
        <Text style={{ fontSize: 14, marginVertical: 2 }}>Jaipur National University . Mojitolabs</Text>
        <Text style={{ fontSize: 14, marginVertical: 2 }}>Gurgaun, Haryana, India</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>About</Text>
        <Text style={{ fontSize: 14 }}>
          I am a farmer turned into software developer, I use his axe to type on keyboard, I have a golden tractor, with
          it&apos;s battery I run my mac.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tags</Text>
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

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Experience</Text>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10
          }}
        >
          <View>
            <Image
              style={{ width: 50, height: 50, resizeMode: 'contain', marginRight: 10 }}
              source={require('../../../assets/logo.jpeg')}
            />
          </View>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              flex: 1,
              paddingBottom: 10
            }}
          >
            <Text style={{ fontSize: 17 }}>All Asia conc Developer</Text>
            <Text style={{ fontSize: 15 }}>Mojitolabs</Text>
            <Text style={{ color: '#222', fontSize: 14 }}>January 2020 - Present</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View>
            <Image
              style={{ width: 50, height: 50, resizeMode: 'contain', marginRight: 10 }}
              source={require('../../../assets/logo.jpeg')}
            />
          </View>
          <View>
            <Text style={{ fontSize: 17 }}>All Asia conc Developer</Text>
            <Text style={{ fontSize: 15 }}>Mojitolabs</Text>
            <Text style={{ color: '#222', fontSize: 14 }}>January 2020 - Present</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Education</Text>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10
          }}
        >
          <View>
            <Image
              style={{ width: 50, height: 50, resizeMode: 'contain', marginRight: 10 }}
              source={require('../../../assets/logo.jpeg')}
            />
          </View>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              flex: 1,
              paddingBottom: 10
            }}
          >
            <Text style={{ fontSize: 17 }}>Bachelor of Engineering</Text>
            <Text style={{ fontSize: 15 }}>IIT, Nepal</Text>
            <Text style={{ color: '#222', fontSize: 14 }}>January 2020 - Present</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <SocialIcon type="facebook" style={styles.icon} />
          <SocialIcon type="twitter" style={styles.icon} />
          <SocialIcon type="linkedin" style={styles.icon} />
        </View>
      </View>
      <View style={styles.card}>
        <Button
          full
          rounded
          info
          style={{
            backgroundColor: '#3E69B9',
            marginVertical: 20
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

              setLoading(false)
              setIsLogged(false)
            }}
          >
            <Text style={{ color: 'white' }}>Log Out</Text>
          </Button>
        ) : (
          <Button rounded info style={styles.loadingButton}>
            <ActivityIndicator size="large" color="white" />
          </Button>
        )}
      </View>
    </ScrollView>
  )
}
