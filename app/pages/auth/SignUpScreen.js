import React, { useState } from 'react'
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
import { Button } from 'native-base'
import { SocialIcon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import AuthApi from '../../api/Auth'

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 10
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
    marginBottom: 20
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
    height: 35,
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

export default function SignUpScreen(props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [space, setSpace] = useState(false)
  const [moreSpace, setMoreSpace] = useState(false)
  const onSubmit = async (event) => {
    event.preventDefault()
    setSpace(false)
    setMoreSpace(false)
    setLoading(true)
    if ((email.length < 6 || password.length < 6, name.length < 4)) {
      setErrorMessage('Fill out the form')
      setLoading(false)
    } else {
      try {
        const response = await AuthApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        setLoading(false)
        props.navigation.navigate('Home')
      } catch (error) {
        setErrorMessage('Something went wrong')
        setLoading(false)
        // console.log({ error })
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      {!space ? <View style={{ height: height / 15 }} /> : null}
      {!moreSpace ? <Text style={styles.greeting}> {'Hello,\nWelcome'} </Text> : null}
      <View style={styles.errorMessage}>
        {errorMessage ? <Text style={styles.error}> {errorMessage} </Text> : null}
      </View>
      <View>
        <Text style={styles.inputTitle}> Full Name </Text>
        <TextInput style={styles.input} autoCapitalize="none" onChangeText={(newName) => setName(newName)} />
      </View>
      <View
        style={{
          marginTop: 32
        }}
      >
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
          marginTop: 32
        }}
      >
        <Text style={styles.inputTitle}> Password </Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(passwd) => setPassword(passwd)}
          onFocus={() => {
            setSpace(true)
            setMoreSpace(true)
          }}
          onSubmitEditing={() => {
            setSpace(false)
            setMoreSpace(false)
          }}
        />
      </View>

      {!loading ? (
        <Button
          full
          rounded
          info
          style={{
            backgroundColor: '#3E69B9',
            height: height / 16,
            marginTop: 10
          }}
          onPress={onSubmit}
        >
          <Text
            style={{
              color: '#FFF',
              fontWeight: '500'
            }}
          >
            Sign up
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
      <Text style={{ fontSize: 14, marginVertical: 10, alignSelf: 'center' }}>Or Login with</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <SocialIcon type="facebook" style={styles.icon} />
        <SocialIcon type="google" style={styles.icon} />
        <SocialIcon type="linkedin" style={styles.icon} />
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: height / 40
        }}
        onPress={() => {
          props.navigation.navigate('SignIn')
          Keyboard.dismiss()
        }}
      >
        <Text
          style={{
            color: '#414959',
            fontSize: 13
          }}
        >
          Already have an account ?
          <Text
            style={{
              fontWeight: '500',
              color: '#6CBAD9'
            }}
          >
            {' '}
            Sign In
          </Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
