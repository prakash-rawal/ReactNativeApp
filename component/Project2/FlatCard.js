import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyFetchGetRequest } from './MyFetchApiRequest'
import { MyFetchPostRequest } from './MyFetchApiRequest'
import ElevatedCards from './ElevatedCards'

const FlatCard = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    // postData();
  }, [])

  const getData = async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
     result = await result.json();
     setData(result)
     setLoading(false);
    //  console.warn(result)
  }

  // const getData = async () => {
  //   const res1 = await MyFetchGetRequest();
  //   setResult(res1);
  // }

  // const postData = async () => {
  //   const res = await MyFetchPostRequest({
  //     title: 'hello',
  //     body: 'Namaste',
  //     userId: 150
  //   });
  //   console.log('data', res)
  // }



  return (
    <View>
      <ScrollView>

        <Text style={styles.headingText}>FlatCard</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={{ color: 'white' }}>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={{ color: 'white' }}>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={{ color: 'white' }}>Green</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text style={{ color: 'white' }}>Orange</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text style={{ color: 'white' }}>Orange</Text>
          </View>
        </View>
        <ElevatedCards />
         {/* Render fetched data */}
          <View>
          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}}>Api Data </Text>
            {
              loading ? <Text style={{textAlign:'center', margin:10,}}>Loading....</Text>
              : (  data.map((item, index) => 
                <View key={index}>
                  <Text style={{ margin: 10 }}>{item.id}</Text>
                  <Text style={{ margin: 10 }}>{item.title}</Text>
                  {/* <Text key={index} style={{ margin: 10 }}>{JSON.stringify(item.title)}</Text> */}
                  {/* <Text key={index} style={{ margin: 10 }}>{JSON.stringify(item.body)}</Text> */}
                </View> 
             )
              )
            }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: { display: 'flex', flexDirection: 'row', padding: 8 },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 100,
    borderRadius: 4,
    margin: 8

  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  cardFour: {
    backgroundColor: 'orange',
  },
})

export default FlatCard