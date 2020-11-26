import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import IoniconsI from 'react-native-vector-icons/Ionicons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'
import Toast from 'react-native-simple-toast'
import AuthApi from '../../api/Auth'

const { height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3E69B9',
    height: 80
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    resizeMode: 'cover',
    zIndex: 11
  },
  body: {
    // marginTop: 25
  },
  bodyContent: {
    // flex: 1,
    // padding: 30
  },
  name: {
    fontSize: 19
    // color: '#696969',
    // fontWeight: '700'
  },
  info: {
    fontSize: 16,
    color: '#3E69B9',
    marginTop: 10
  },
  description: {
    fontSize: 14,
    color: '#696969',
    marginTop: 10
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF'
  },
  tag: {
    padding: 5,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 15,
    margin: 5
  },
  icon: { width: height / 18, height: height / 18 },

  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 8,
    paddingVertical: 18
  },
  cardTitle: { fontSize: 16, marginBottom: 8 },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: 1,
    // height: 40,
    fontSize: 15,
    color: '#161F3D'
  }
})
export default function Profile() {
  const [photo, setPhoto] = useState(null)
  const [userDetail, setUserDetail] = useState({})
  const [addAbout, setAddAbout] = useState(false)
  const [editAbout, setEditAbout] = useState(false)
  const [addSkills, setAddSkills] = useState(false)
  const [editSkills, setEditSkills] = useState(false)
  const [allSkills, setAllSkills] = useState([])
  const [skill, setSkill] = useState('')
  const [about, setAbout] = useState('')

  const getPhoto = async () => {
    const asyncPhoto = await AsyncStorage.getItem('photo')
    asyncPhoto !== null || asyncPhoto !== undefined ? setPhoto({ uri: asyncPhoto }) : setPhoto(null)
  }
  const getUser = async () => {
    const token = await AsyncStorage.getItem('token')
    const user = await AuthApi.post('/getprofile.php', {
      userid: token
    })
    // const skills = await AuthApi.post('/usertag.php', {
    //   userid: token,
    //   tagid: 1,
    //   editid: ''
    // })

    setUserDetail(user.data)
  }
  const newAboutAdd = async () => {
    try {
      await AuthApi.post('/profile.php', {
        userid: userDetail.userid,
        name: userDetail.name,
        about
      })
      setEditAbout(false)
      setAddAbout(false)
      getUser()
    } catch (error) {
      Toast.show('There is some problem, can you please try it agin.')
    }
  }
  const getAllSkills = async () => {
    try {
      const { data } = await AuthApi.get('/skill.php')
      console.log(data.skills)
      setAllSkills(data.skills)
    } catch (error) {
      Toast.show('There is some problem, can you please try it agin.')
    }
  }
  const deleteSkill = async (item) => {
    try {
      await AuthApi.post('/deleteusertag.php', {
        userid: userDetail.userid,
        editid: item
      })
      getUser()
      Toast.show('Removed')
    } catch (error) {
      Toast.show('There is some problem, can you please try it agin.')
    }
  }

  useEffect(() => {
    getPhoto()
    getUser()
    getAllSkills()
  }, [])
  return (
    <ScrollView style={{ backgroundColor: '#ededed' }}>
      {photo ? (
        <View style={[styles.avatar, { backgroundColor: '#ededed', alignItems: 'center', justifyContent: 'center' }]}>
          <IoniconsI size={40} name="person-outline" color="gray" />
        </View>
      ) : (
        <Image style={styles.avatar} source={photo} />
      )}
      <View style={styles.header} />
      <View style={[styles.card, { paddingTop: 48, marginTop: 0 }]}>
        <Text style={styles.name}>{userDetail.name}</Text>
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.cardTitle}>About</Text>
          {userDetail.about ? (
            <TouchableOpacity
              onPress={() => {
                setEditAbout(true)
              }}
            >
              <FontAwesomeI name="pencil" size={17} color="gray" />
            </TouchableOpacity>
          ) : null}
        </View>

        {userDetail.about ? (
          <>
            {editAbout ? (
              <>
                <Text style={{ fontSize: 14 }}>Edit here</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={(newAbout) => setAbout(newAbout)}
                  multiline
                  placeholder={userDetail.about}
                />

                <TouchableOpacity onPress={() => newAboutAdd()} style={{ alignItems: 'center', marginTop: 20 }}>
                  <Text style={{ fontSize: 18, color: '#3E69B9' }}>Save</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={{ fontSize: 14 }}>{userDetail.about}</Text>
            )}
          </>
        ) : (
          <>
            {addAbout ? (
              <View>
                <Text style={{ fontSize: 14 }}>Write about yourself</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={(newAbout) => setAbout(newAbout)}
                  multiline
                />

                <TouchableOpacity onPress={() => newAboutAdd()} style={{ alignItems: 'center', marginTop: 20 }}>
                  <Text style={{ fontSize: 18, color: '#3E69B9' }}>Save</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setAddAbout(true)}>
                <IoniconsI size={29} name="add-circle-outline" color="gray" />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.cardTitle}>Tags</Text>
          {userDetail.taglist ? (
            <TouchableOpacity
              onPress={() => {
                setEditSkills(true)
              }}
            >
              <FontAwesomeI name="pencil" size={17} color="gray" />
            </TouchableOpacity>
          ) : null}
        </View>

        {!editSkills ? (
          <View>
            <Text style={{ fontSize: 14 }}>Add Skills</Text>

            {userDetail && userDetail.taglist && (
              <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {userDetail &&
                  userDetail.taglist &&
                  userDetail.taglist.map((i) => (
                    <>
                      {i.tagname && (
                        <View
                          style={[
                            styles.tag,
                            {
                              flexDirection: 'row',
                              alignItems: 'center'
                            }
                          ]}
                        >
                          <Text
                            style={{
                              color: '#555',
                              fontSize: 14,
                              marginRight: 10
                            }}
                          >
                            {i.tagname}
                          </Text>

                          <TouchableOpacity
                            onPress={() => {
                              deleteSkill(i.editid)
                            }}
                          >
                            <Text
                              style={{
                                color: 'red',
                                fontSize: 16
                              }}
                            >
                              X
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </>
                  ))}
              </View>
            )}

            <TouchableOpacity onPress={() => setEditSkills(false)} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontSize: 18, color: '#3E69B9' }}>Done</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {userDetail && userDetail.taglist ? (
              <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {userDetail &&
                  userDetail.taglist &&
                  userDetail.taglist.map((i) => (
                    <>
                      {i.tagname && (
                        <View style={styles.tag}>
                          <Text
                            style={{
                              color: '#555',
                              fontSize: 14
                            }}
                          >
                            {i.tagname}
                          </Text>
                        </View>
                      )}
                    </>
                  ))}
              </View>
            ) : (
              <Text>Add Skills</Text>
            )}
          </>
        )}
      </View>
    </ScrollView>
  )
}
