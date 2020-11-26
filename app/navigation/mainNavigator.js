/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { TouchableOpacity, Image, View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'

import { Text, Button } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
//navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
//bottom tab bar icons
import IoniconsI from 'react-native-vector-icons/Ionicons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'

//Home
import HomeScreen from '../pages/home/Home'
import UserDetails from '../pages/home/UserDetails'
import SearchResults from '../pages/home/SearchResults'
import Contact from '../pages/home/Contact'
import Notifications from '../pages/home/Notifications'
import Privacy from '../pages/home/Privacy'
import About from '../pages/home/About'
//Profile
import ProfileScreen from '../pages/home/ProfileScreen'
import EditProfile from '../pages/home/EditProfile'
//auth
import LoadingScreen from '../pages/auth/LoadingScreen'
import SignInScreen from '../pages/auth/SignInScreen'
import SignUpScreen from '../pages/auth/SignUpScreen'

// initialize navigator
const Stack = createStackNavigator()
const HomeStack = createStackNavigator()
const Drawer = createDrawerNavigator()
export const User = React.createContext([])

const { height } = Dimensions.get('screen')
const { width } = Dimensions.get('screen')
export const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
)
export const HomeStackNavigator = ({ navigation }) => {
  return (
    <HomeStack.Navigator
    initialRouteName="Profile"
    >
      <HomeStack.Screen
        options={{
          title: 'Wordly',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <IoniconsI
                name="menu"
                size={30}
                style={{ marginLeft: 22 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <FontAwesomeI
                name="bell"
                size={25}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          )
        }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{
          title: 'My Profile',
          // headerRight: () => (
          //   <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')}>
          //     <FontAwesomeI name="pencil" size={25} style={{ marginRight: 20 }} />
          //   </TouchableOpacity>
          // )
        }}
        name="Profile"
        component={ProfileScreen}
      />
      {/* <HomeStack.Screen name="Edit Profile" component={EditProfile} /> */}
      <HomeStack.Screen name="UserDetails" component={UserDetails} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="SearchResults" component={SearchResults} />
      <HomeStack.Screen name="About Us" component={About} />
      <HomeStack.Screen name="Contact Us" component={Contact} />
      <HomeStack.Screen name="Privacy Policy" component={Privacy} />
    </HomeStack.Navigator>
  )
}
function CustomDrawerContent(props) {
  const [loading, setLoading] = useState(false)
  const { setIsLogged } = useContext(User)
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 10,
          paddingBottom: 16,
          marginTop: -10,
          backgroundColor: '#3E69B9'
        }}
      >
        <Image
          source={require('../assets/profile.jpg')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: '#073977',
            marginBottom: 10,
            margin: 20
          }}
        />
        <Text style={{ fontSize: 18, marginLeft: 20, marginVertical: 7, color: '#fff' }}>Abhay Dubey</Text>
        <Text style={{ fontSize: 14, marginLeft: 20, marginBottom: 7, color: '#d3d3d3' }}>abhay@wordly.in</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Profile')
            props.navigation.closeDrawer()
          }}
        >
          <Text style={{ fontSize: 15, marginLeft: 20, color: 'white' }}>View Profile</Text>
        </TouchableOpacity>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => {
          props.navigation.navigate('Home')
          props.navigation.closeDrawer()
        }}
        icon={({ color, size }) => <IoniconsI name="ios-home-outline" size={size} color={color} />}
      />
      <DrawerItem
        label="Notifications"
        onPress={() => {
          props.navigation.navigate('Notifications')
          props.navigation.closeDrawer()
        }}
        icon={({ color, size }) => <IoniconsI name="md-notifications-outline" size={size} color={color} />}
      />
      <DrawerItem
        label="About Us"
        onPress={() => {
          props.navigation.navigate('About Us')
          props.navigation.closeDrawer()
        }}
        icon={({ color, size }) => <IoniconsI name="md-people-outline" size={size} color={color} />}
      />
      <DrawerItem
        label="Contact Us"
        onPress={() => {
          props.navigation.navigate('Contact Us')
          props.navigation.closeDrawer()
        }}
        icon={({ color, size }) => <IoniconsI name="call-outline" size={size} color={color} />}
      />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => {
          props.navigation.navigate('Privacy Policy')
          props.navigation.closeDrawer()
        }}
        icon={({ color, size }) => <IoniconsI name="lock-closed-outline" size={size} color={color} />}
      />
      {!loading ? (
        <Button
          full
          rounded
          info
          style={{
            backgroundColor: '#3E69B9',
            width: width / 1.8,
            marginLeft: 15,
            marginTop: height / 25,
            height: height / 19
          }}
          onPress={async () => {
            setLoading(true)
            await AsyncStorage.removeItem('token')
            setIsLogged(false)
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

    </DrawerContentScrollView>
  )
}
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      overlayColor="transparent"
    >
      <Drawer.Screen name="Main" component={HomeStackNavigator} />
    </Drawer.Navigator>
  )
}

const MainContainer = (props) => {
  const [loading, setLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const tryLogin = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        setIsLogged(true)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    tryLogin()
  }, [tryLogin])
  return (
    <User.Provider value={{ isLogged, setIsLogged }}>
      <NavigationContainer {...props}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {loading ? (
            <Stack.Screen
              name="Loading"
              component={LoadingScreen}
              options={() => ({
                headerShown: false
              })}
            />
          ) : (
            <>
              {isLogged ? (
                <Stack.Screen
                  options={() => ({
                    headerShown: false
                  })}
                  name="Main"
                  component={DrawerNavigator}
                />
              ) : (
                <Stack.Screen name="Auth" component={AuthNavigator} />
              )}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </User.Provider>
  )
}

export default MainContainer
