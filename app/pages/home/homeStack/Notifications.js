import { ListItem } from 'react-native-elements'
import React from 'react'

export default function Notifications() {
  return (
    <>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>Chris Jackson</ListItem.Title>
          <ListItem.Subtitle style={{ color: 'black' }}>Vice Chairman</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="black" size={25} />
      </ListItem>
      <ListItem style={{ marginTop: 1 }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>Chris Jackson</ListItem.Title>
          <ListItem.Subtitle style={{ color: 'black' }}>Vice Chairman</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="black" size={25} />
      </ListItem>
      <ListItem style={{ marginTop: 1 }}>
        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>Chris Jackson</ListItem.Title>
          <ListItem.Subtitle style={{ color: 'black' }}>Vice Chairman</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="black" size={25} />
      </ListItem>
    </>
  )
}
