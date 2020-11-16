import React, { useState } from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import { Container,Text,  Button } from 'native-base'
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
    alignItems: 'center',
    padding: 30
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600'
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
  }
})
export default function Profile(props) {
  const [loading, setLoading] = useState(false)
  return (
    <Container>
      <View style={styles.header} />
      <Image style={styles.avatar} source={Img} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Aditya Kumar Jha</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.info}>Play Points: 30</Text>
            <Text style={{ width: 20 }}> </Text>

            <Text style={styles.info}>Username: adijha</Text>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse
            consequuntur ius an,
          </Text>
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
                alignSelf:'center',
                backgroundColor: '#3E69B9'
              }}
            >
              <ActivityIndicator size="large" color="white" />
            </Button>
          )}
        </View>
      </View>
    </Container>
  )
}
