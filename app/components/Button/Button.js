import React  from 'react'
import { StyleSheet, View ,Button } from 'react-native'
// import MaterialButtonPurple from './components/MaterialButtonPurple'

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 36
  },
  materialButtonPurple: {
    width: 100,
    height: 36
  }
})
function Index() {
  return (
    <View style={styles.container}>
      <Button style={styles.materialButtonPurple} />
      {/* <MaterialButtonPurple style={styles.materialButtonPurple} /> */}
    </View>
  )
}

export default Index
