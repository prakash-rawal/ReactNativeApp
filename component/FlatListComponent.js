import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function FlatListComponent() {

    const users = [
        { id:1, name:'john' },
        { id:2, name:'nik' },
        { id:3, name:'raw' },
        { id:4, name:'smith' },
    ]
  return (
    <View>
      <FlatList data={users} renderItem={({item}) => <Text style={{color:'white'}}>{item.name}</Text>}>
      </FlatList>
    </View>
  )
}