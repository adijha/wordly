import React  from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 10,
    backgroundColor: 'white'
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
    marginTop: 20
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D'
  }
})
export default function EditProfile() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.inputTitle}> Name </Text>
      <TextInput style={styles.input} autoCapitalize="none" />
      <Text style={styles.inputTitle}> Designation </Text>
      <TextInput style={styles.input} autoCapitalize="none" />
      <Text style={styles.inputTitle}> Current Company </Text>
      <TextInput style={styles.input} autoCapitalize="none" />
      <Text style={styles.inputTitle}> About </Text>
      <TextInput style={styles.input} autoCapitalize="none" />
      <Text style={styles.inputTitle}> Tags </Text>
      <TextInput style={styles.input} autoCapitalize="none" placeholder="Seperate tags by comma" />
      <Text style={styles.inputTitle}> Experience </Text>
      <TextInput style={styles.input} autoCapitalize="none" />
      <Text style={styles.inputTitle}> Education </Text>
      <TextInput style={styles.input} autoCapitalize="none" />
      <View style={{ height: 15 }} />
    </ScrollView>
  )
}
