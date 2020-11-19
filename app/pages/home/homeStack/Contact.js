import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IoniconsI from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  },
  ListContainer: {
    padding: 10,
    flexDirection: 'row'
  },
  textGroup: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 10
  },
  listTitle: {
    fontSize: 17,
    fontWeight: '700'
  },
  listSubtext: {
    fontSize: 14,
    color: '#555',
    paddingBottom: 8
  }
})

export default function Contact() {
  return (
    <View style={styles.container}>
      <View style={styles.ListContainer}>
        <IoniconsI name="mail-outline" size={25} color="#3E69B9" style={{ marginLeft: 22 }} />
        <View style={styles.textGroup}>
          <Text style={styles.listTitle}>Email</Text>
          <Text style={styles.listSubtext}>contact@wordly.in</Text>
        </View>
      </View>
      <View style={styles.ListContainer}>
        <IoniconsI name="call-outline" size={25} color="#3E69B9" style={{ marginLeft: 22 }} />
        <View style={styles.textGroup}>
          <Text style={styles.listTitle}>Phone</Text>
          <Text style={styles.listSubtext}>+91 123232493</Text>
        </View>
      </View>
      <View style={styles.ListContainer}>
        <IoniconsI name="chatbox-outline" size={25} color="#3E69B9" style={{ marginLeft: 22 }} />
        <View style={styles.textGroup}>
          <Text style={styles.listTitle}>Message</Text>
          <Text style={styles.listSubtext}>is there something more to say?</Text>
        </View>
      </View>
    </View>
  )
}
