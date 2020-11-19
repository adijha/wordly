import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { SocialIcon } from 'react-native-elements'
import { Button } from 'native-base'
import AuthApi from '../../api/Auth'

import { User } from '../../navigation/mainNavigator'

const { height } = Dimensions.get('screen')
const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 9
  },
  greeting: {
    marginTop: height / 30,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  errorMessage: {
    height: height / 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red'
    // marginHorizontal: 30,
  },
  error: {
    color: '#6CBAD9',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginBottom: 48
    // marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D'
  },
  button: {
    // marginHorizontal: 30,
    backgroundColor: '#6CBAD9',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: { width: height / 15, height: height / 15 }
})

export default function SignInScreen(props) {
  // console.log(height/20)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [space, setSpace] = useState(false)
  const { setIsLogged } = useContext(User)

  const onSubmit = async (event) => {
    event.preventDefault()
    setSpace(false)
    setLoading(true)
    if (email.length < 6 || password.length < 6) {
      setErrorMessage('Fill out the form')
      setLoading(false)
    } else {
      try {
        const response = await AuthApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        setLoading(false)
        setIsLogged(true)
      } catch (err) {
        setErrorMessage('Something went wrong')
        setLoading(false)
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      {!space ? <View style={{ height: height / 15 }} /> : null}
      <Text style={styles.greeting}> {'Hello again.\nWelcome back.'} </Text>
      <View style={styles.errorMessage}>
        {errorMessage ? <Text style={styles.error}> {errorMessage} </Text> : null}
      </View>
      <View>
        <Text style={styles.inputTitle}> Email Address </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(newEmail) => setEmail(newEmail)}
          onFocus={() => setSpace(true)}
          onSubmitEditing={() => setSpace(false)}
        />
      </View>
      <View
        style={{
          marginVertical: height / 20
        }}
      >
        <Text style={styles.inputTitle}> Password </Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(passwd) => setPassword(passwd)}
          onFocus={() => setSpace(true)}
          onSubmitEditing={() => setSpace(false)}
        />
      </View>

      {!loading ? (
        <Button
          full
          rounded
          info
          style={{
            backgroundColor: '#3E69B9',
            height: height / 16
          }}
          onPress={onSubmit}
        >
          <Text
            style={{
              color: '#FFF',
              fontWeight: '500'
            }}
          >
            Sign in
          </Text>
        </Button>
      ) : (
        <Button
          rounded
          info
          style={{
            width: height / 19,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#3E69B9',
            height: height / 19
          }}
        >
          <ActivityIndicator size="large" color="white" />
        </Button>
      )}
      {loading ? null : (
        <TouchableOpacity
          style={{
            // marginHorizontal: 30,
            marginTop: 12
          }}
          onPress={() => {
            // props.navigation.navigate('ResetPassword');
            Keyboard.dismiss()
          }}
        >
          <Text
            style={{
              color: '#414959',
              fontSize: 13,
              marginBottom: 10
            }}
          >
            Forgot your password ?
          </Text>
        </TouchableOpacity>
      )}

      <Text style={{ fontSize: 14, marginVertical: 10, alignSelf: 'center' }}>Or Login with</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <SocialIcon type="facebook" style={styles.icon} />
        <SocialIcon type="google" style={styles.icon} />
        <SocialIcon type="linkedin" style={styles.icon} />
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: height / 24
        }}
        onPress={() => {
          props.navigation.navigate('SignUp')
          Keyboard.dismiss()
        }}
      >
        <Text
          style={{
            color: '#414959',
            fontSize: 13
          }}
        >
          New to Wordly ?{' '}
          <Text
            style={{
              fontWeight: '500',
              color: '#6CBAD9'
            }}
          >
            {' '}
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
