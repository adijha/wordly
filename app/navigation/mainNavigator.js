import React from 'react'
//navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//bottom tab bar icons
import IoniconsI from 'react-native-vector-icons/Ionicons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'

//Home
//Play
import HomeScreen from '../pages/home/homeStack/Home'
import UserDetails from '../pages/home/homeStack/UserDetails'
import SearchResults from '../pages/home/homeStack/SearchResults'
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
          title: 'Wordly',
          headerLeft: () => <IoniconsI name="cube-outline" size={30} color="#FABE0F" style={{ marginLeft: 22 }} />
        }}
        name="Home"
        component={HomeScreen}
      />
      <PlayStack.Screen name="UserDetails" component={UserDetails} />
      <PlayStack.Screen name="SearchResults" component={SearchResults} />
    </PlayStack.Navigator>
  )
}

export const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      options={{
        headerStyle: {
          backgroundColor: '#22273A'
        },
        headerTintColor: 'white',
        title: 'My Profile',
        headerLeft: () => <FontAwesomeI name="user" size={30} color="#FABE0F" style={{ marginLeft: 22 }} />,
        headerRight: () => <FontAwesomeI name="pencil" size={25} color="#FABE0F" style={{ marginRight: 20 }} />
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
        activeTintColor: '#FABE0F',
        inactiveBackgroundColor: '#23283B',
        activeBackgroundColor: '#23283B',
        style: { height: 60 },
        labelStyle: { fontSize: 16, marginTop: -8 }
      }}
    >
      <Tab.Screen name="Home" component={PlayStackNavigator} />
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
          name="Home"
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer
