import React from 'react'
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base'
import IoniconsI from 'react-native-vector-icons/Ionicons'
import { PlayTabThree, PlayTabTwo, PlayTabOne } from '../../../components/Tab'

const PlayDetails = ({ navigation, route }) => {
  navigation.setOptions({
    headerStyle: {
      backgroundColor: '#22273A'
    },
    headerTintColor: 'white',
    title: route.params.game,
    headerLeft: () => (
      <IoniconsI
        onPress={() => navigation.goBack()}
        name="md-arrow-round-back"
        size={30}
        color="#FABE0F"
        style={{ marginLeft: 22 }}
      />
    )
  })

  return (
    <Container>
      <Tabs>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: '#22273A' }}>
              <Icon name="ios-clock" />
              <Text>ONGOING</Text>
            </TabHeading>
          }
        >
          <PlayTabOne />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: '#22273A' }}>
              <Icon name="logo-game-controller-b" />
              <Text>UPCOMING</Text>
            </TabHeading>
          }
        >
          <PlayTabTwo />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: '#22273A' }}>
              <Icon name="apps" />
              <Text>RESULT</Text>
            </TabHeading>
          }
        >
          <PlayTabThree />
        </Tab>
      </Tabs>
    </Container>
  )
}
export default PlayDetails
