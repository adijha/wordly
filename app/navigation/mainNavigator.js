import React from 'react'
//navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//bottom tab bar icons
import IoniconsI from 'react-native-vector-icons/Ionicons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
//Home
//Play
import PlayScreen from '../pages/home/playStack/PlayScreen'
import PlayDetails from '../pages/home/playStack/PlayDetails'
//Profile
import ProfileScreen from '../pages/home/profileStack/ProfileScreen'
//Earn
import EarnScreen from '../pages/home/earnStack/EarnScreen'
import EarnDetails from '../pages/home/earnStack/EarnDetails'
//auth
import LoadingScreen from '../pages/auth/LoadingScreen'
import SignInScreen from '../pages/auth/SignInScreen'
import SignUpScreen from '../pages/auth/SignUpScreen'

// initialize navigator
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const EarnStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const PlayStack = createStackNavigator()

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Sport'
  switch (routeName) {
    case 'Earn':
      return 'Earn'
    case 'Play':
      return 'Play'
    case 'Profile':
      return 'Profile'
    default:
      return 'Earn'
  }
}

export const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
)
export const PlayStackNavigator = () => {
  return (
    <PlayStack.Navigator>
      <PlayStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#22273A'
          },
          headerTintColor: 'white',
          title: 'Play Games and Earn',
          headerLeft: () => (
            <IoniconsI name="logo-game-controller-b" size={30} color="#FABE0F" style={{ marginLeft: 22 }} />
          )
        }}
        name="Play"
        component={PlayScreen}
      />
      <PlayStack.Screen name="PlayDetails" component={PlayDetails} />
    </PlayStack.Navigator>
  )
}

export const EarnStackNavigator = () => (
  <EarnStack.Navigator>
    <EarnStack.Screen
      options={{
        headerStyle: {
          backgroundColor: '#22273A'
        },
        headerTintColor: 'white',
        title: 'Play Games and Earn',
        headerLeft: () => (
          <MaterialCommunityIconsI name="currency-inr" size={30} color="#FABE0F" style={{ marginLeft: 22 }} />
        )
      }}
      name="Earn"
      component={EarnScreen}
    />
    <EarnStack.Screen name="EarnDetails" component={EarnDetails} />
  </EarnStack.Navigator>
)

export const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      options={{
        headerStyle: {
          backgroundColor: '#22273A'
        },
        headerTintColor: 'white',
        title: 'Your Profile',
        headerLeft: () => <FontAwesomeI name="user" size={30} color="#FABE0F" style={{ marginLeft: 22 }} />
      }}
      name="Profile"
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>
)

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
        const size = 30
          if (route.name === 'Earn') {
            return (
              <MaterialCommunityIconsI name="currency-inr" size={size} color={color} style={{ marginBottom: -5 }} />
            )
          } if (route.name === 'Profile') {
            return <FontAwesomeI name="user" size={size} color={color} style={{ marginBottom: -5 }} />
          } if (route.name === 'Play') {
            return <IoniconsI name="logo-game-controller-b" size={size} color={color} style={{ marginBottom: -5 }} />
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: '#FABE0F',
        inactiveBackgroundColor: '#23283B',
        activeBackgroundColor: '#23283B',
        style: { height: 57 }
      }}
    >
      <Tab.Screen name="Play" component={PlayStackNavigator} />
      <Tab.Screen name="Earn" component={EarnStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  )
}

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={() => ({
            headerShown: false
          })}
          name="Auth"
          component={AuthNavigator}
        />
        <Stack.Screen
          options={({ route }) => ({
            title: getHeaderTitle(route),
            headerShown: false
          })}
          name="Earn"
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer
