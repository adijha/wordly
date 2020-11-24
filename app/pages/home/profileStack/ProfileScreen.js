import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native'
import { Text } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import IoniconsI from 'react-native-vector-icons/Ionicons'
// import AuthApi from '../../../api/Auth'

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
    marginTop: 8,
    paddingVertical: 18
  },
  cardTitle: { fontSize: 16, marginBottom: 8 }
})
export default function Profile() {
  const [photo, setPhoto] = useState(null)
  const getPhoto = async () => {
    const asyncPhoto = await AsyncStorage.getItem('photo')
    asyncPhoto !== null || asyncPhoto !== undefined ? setPhoto({ uri: asyncPhoto }) : setPhoto(null)
  }
  const getUser = async () => {
    // const token = await AsyncStorage.getItem('token')
    // const user = await AuthApi.get('/getprofile.php',{
    //   Userid:token
    // })
    // console.log(user.data)
  }

  useEffect(() => {
    getPhoto()
    getUser()
  }, [])
  return (
    <ScrollView style={{ backgroundColor: '#ededed' }}>
      {photo ? (
        <View style={[styles.avatar, { backgroundColor: '#ededed', alignItems: 'center', justifyContent: 'center' }]}>
          <IoniconsI size={40} name="person-outline" color="gray" />
        </View>
      ) : (
        <Image style={styles.avatar} source={photo} />
      )}
      <View style={styles.header} />
      <View style={[styles.card, { paddingTop: 48, marginTop: 0 }]}>
        <Text style={styles.name}>Abhay Dubey</Text>
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

      {/* <View style={styles.card}>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <SocialIcon type="facebook" style={styles.icon} />
          <SocialIcon type="twitter" style={styles.icon} />
          <SocialIcon type="linkedin" style={styles.icon} />
        </View>
      </View> */}
      {/* <View style={styles.card}>
       
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
      </View> */}
    </ScrollView>
  )
}
