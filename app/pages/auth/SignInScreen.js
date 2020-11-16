import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  ScrollView
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Button } from 'native-base'
import AuthApi from '../../api/Auth'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 39
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  errorMessage: {
    height: 72,
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
  }
})

export default function SignInScreen(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [space, setSpace] = useState(false)
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
        props.navigation.navigate('Earn')
      } catch (err) {
        setErrorMessage('Something went wrong')
        setLoading(false)
        // console.log('Error', err)
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      {!space ? <View style={{ height: 65 }} /> : null}
      <Text style={styles.greeting}> {'Hello again.\nWelcome back.'} </Text>
      <View style={styles.errorMessage}>
        {errorMessage ? <Text style={styles.error}> {errorMessage} </Text> : null}
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}> Email Address </Text>
          <TextInput style={styles.input} autoCapitalize="none" onChangeText={(newEmail) => setEmail(newEmail)} />
        </View>
        <View
          style={{
            marginTop: 32
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
      </View>

      {!loading ? (
        <Button
          full
          rounded
          info
          style={{
            backgroundColor: '#3E69B9'
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
            width: 46,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#3E69B9'
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
              fontSize: 13
            }}
          >
            Forgot your password ?
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 42
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
          New to Pubg App?
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
