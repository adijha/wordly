/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { TouchableOpacity, Image, View, StyleSheet, ActivityIndicator } from 'react-native'

import { Text, Button } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
//navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  // DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
//bottom tab bar icons
import IoniconsI from 'react-native-vector-icons/Ionicons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'

//Home
import HomeScreen from '../pages/home/homeStack/Home'
import UserDetails from '../pages/home/homeStack/UserDetails'
import SearchResults from '../pages/home/homeStack/SearchResults'
import Contact from '../pages/home/homeStack/Contact'
import Notifications from '../pages/home/homeStack/Notifications'
import Privacy from '../pages/home/homeStack/Privacy'
import About from '../pages/home/homeStack/About'
//Profile
import ProfileScreen from '../pages/home/profileStack/ProfileScreen'
//auth
import LoadingScreen from '../pages/auth/LoadingScreen'
import SignInScreen from '../pages/auth/SignInScreen'
import SignUpScreen from '../pages/auth/SignUpScreen'

// initialize navigator
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const ProfileStack = createStackNavigator()
const HomeStack = createStackNavigator()
const Drawer = createDrawerNavigator()
export const User = React.createContext([])
export const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
)
export const HomeStackNavigator = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerStyle: {
            // backgroundColor: '#22273A'
          },
          // headerTintColor: "#3E69B9",
          title: 'Wordly',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <IoniconsI
                name="menu"
                size={30}
                // color="#3E69B9"
                style={{ marginLeft: 22 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <FontAwesomeI
                name="bell"
                size={25}
                // color="#154fbd"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          )
        }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen name="UserDetails" component={UserDetails} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="SearchResults" component={SearchResults} />
      <HomeStack.Screen name="About" component={About} />
      <HomeStack.Screen name="Privacy" component={Privacy} />
      <HomeStack.Screen name="Contact" component={Contact} />
    </HomeStack.Navigator>
  )
}
export const ProfileStackNavigator = (props) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      options={{
        headerStyle: {
          // backgroundColor: "#3E69B9"
        },
        // headerTintColor: 'white',
        title: 'My Profile',
        headerLeft: () => (
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <IoniconsI
              name="menu"
              size={30}
              // color="#FABE0F"
              style={{ marginLeft: 22 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => <FontAwesomeI name="pencil" size={25} style={{ marginRight: 20 }} />
      }}
      name="Profile"
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>
)

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }
          return <IoniconsI name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: '#3E69B9',
        // inactiveBackgroundColor: '#23283B',
        // activeBackgroundColor: '#23283B',
        style: { height: 60 },
        labelStyle: { fontSize: 16, marginTop: -8 }
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  )
}
function CustomDrawerContent(props) {
  const [loading, setLoading] = useState(false)
  const { setIsLogged } = useContext(User)
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, marginBottom: 10, paddingBottom: 16 }}>
        <Image
          source={require('../assets/profile.jpg')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 63,
            borderWidth: 4,
            borderColor: 'white',
            marginBottom: 10,
            // alignSelf: 'center',
            margin: 20
          }}
        />
        <Text style={{ fontSize: 18, marginLeft: 20, marginVertical: 7 }}>Abhay Dubey</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Profile')
            props.navigation.closeDrawer()
          }}
        >
          <Text style={{ fontSize: 16, marginLeft: 20, color: 'blue' }}>View Profile</Text>
        </TouchableOpacity>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => {
          props.navigation.navigate('Home')
          props.navigation.closeDrawer()
        }}
      />
      <DrawerItem
        label="Notifications"
        onPress={() => {
          props.navigation.navigate('Notifications')
          props.navigation.closeDrawer()
        }}
      />
      <DrawerItem
        label="About Us"
        onPress={() => {
          props.navigation.navigate('About')
          props.navigation.closeDrawer()
        }}
      />
      <DrawerItem
        label="Contact"
        onPress={() => {
          props.navigation.navigate('Contact')
          props.navigation.closeDrawer()
        }}
      />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => {
          props.navigation.navigate('Privacy')
          props.navigation.closeDrawer()
        }}
      />
      {!loading ? (
        <Button
          full
          rounded
          info
          style={{
            backgroundColor: '#3E69B9',
            width: 200,
            marginLeft: 15,
            marginTop: 30
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

      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  )
}
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // openByDefault
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      overlayColor="transparent"
    >
      <Drawer.Screen name="Home" component={MainTabNavigator} />
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
                  name="Home"
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
