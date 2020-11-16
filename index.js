import { AppRegistry } from 'react-native'
import App from './app/App'
import { name as appName } from './app.json'
import 'react-native-gesture-handler'

// eslint-disable-next-line no-console
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App)
