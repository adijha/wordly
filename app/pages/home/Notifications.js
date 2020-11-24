import { ListItem } from 'react-native-elements'
import React from 'react'

export default function Notifications() {
  return (
    <>
      <ListItem style={{ marginTop: 1 }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>Bumper Sale</ListItem.Title>
          <ListItem.Subtitle style={{ color: 'black' }}>Hey you got a huge deal, get ready to amaze</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem style={{ marginTop: 1 }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>Bumper Sale</ListItem.Title>
          <ListItem.Subtitle style={{ color: 'black' }}>Hey you got a huge deal, get ready to amaze</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem style={{ marginTop: 1 }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>Bumper Sale</ListItem.Title>
          <ListItem.Subtitle style={{ color: 'black' }}>Hey you got a huge deal, get ready to amaze</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  )
}
