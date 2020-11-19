import React, { useState } from 'react'
import { Dimensions, SafeAreaView, Text, StyleSheet, View, FlatList, Image, ScrollView } from 'react-native'
import axios from 'axios'
import { Card, SearchBar } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  itemStyle: {
    padding: 10
  }
})
const { height } = Dimensions.get('screen')

const App = () => {
  const [search, setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState([])

  const searchFilterFunction = async (text) => {
    if (text) {
      setSearch(text)
      const data = await axios.get(`https://api.domainsdb.info/v1/domains/search?domain=${text}`)
      setFilteredDataSource(data.data.domains)
    }
  }
  const getItem = (item) => {
    // Function for click on an item
    alert(`Id : ${item.domain}`)
  }

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.domain} {item.isDead}
      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8'
        }}
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 25 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={() => setFilteredDataSource([])}
          placeholder="Type Here..."
          value={search}
          lightTheme
          inputStyle={{ backgroundColor: 'white' }}
          // style={{backgroundColor:'red'}}
          inputContainerStyle={{ backgroundColor: 'white' }}
        />
        {filteredDataSource.length > 0 ? (
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        ) : (
          <ScrollView>
            <Card containerStyle={{ borderRadius: 10, padding: 0 }}>
              <Image
                source={require('../../../assets/sky.png')}
                style={{
                  height: height / 4,
                  resizeMode: 'cover',
                  width: '100%',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10
                }}
              />
              <Text style={{ margin: 10, fontSize: 15 }}>
                The idea with React is more about component structure than actual design.
              </Text>
            </Card>
            <Card containerStyle={{ borderRadius: 10, padding: 0 }}>
              <Image
                source={require('../../../assets/sky.png')}
                style={{
                  height: height / 4,
                  resizeMode: 'cover',
                  width: '100%',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10
                }}
              />
              <Text style={{ margin: 10, fontSize: 15 }}>
                The idea with React is more about component structure than actual design.
              </Text>
            </Card>
            <View style={{ height: 100 }} />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  )
}

export default App
