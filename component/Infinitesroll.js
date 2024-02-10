import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Dialpad from './Dialpad'
import Data from '../data/dummy'

const Infinitesroll = ({navigation}) => {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const value = 20 + (20 * index);
    //     const data = Data.slice(0, value);
    //     setData(data);
    // }, [index])
    useEffect(() => {
        const value = 400 + 400 * index;
        const data = Data.slice(0, value);
        setData(data);
    }, [index]);

    return (
        <View style={{ marginBottom: 30 }}>

            <Dialpad navigation={navigation}/>
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 20 }}>Infinite Scoll Demo List</Text>

            <FlatList data={data} renderItem={({ item }) => (
                <View style={{ marginVertical: 20 }} key={index}>
                    <Text style={{ fontSize: 25, color: 'black', textAlign: 'center' }}>
                        {item.index} {item.name} {item.value}
                    </Text>
                    {item.index === 1000 ? (
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 28,
                                textAlign: 'center',
                                marginVertical: 20,
                            }}>
                            List ended....
                        </Text>
                    ) : null}
                </View>
            )}
                onEndReached={() => setIndex(index + 1)}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

export default Infinitesroll