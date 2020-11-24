import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native'
import axios from 'axios'
import { SearchBar } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  itemStyle: {
    padding: 10
  }
})

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
          inputContainerStyle={{ backgroundColor: 'white' }}
        />
        {filteredDataSource.length > 0 && (
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default App
