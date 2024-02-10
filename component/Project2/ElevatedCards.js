import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText} > ElevatedCards </Text>
            <ScrollView style={styles.container} horizontal={true}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
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
    container: { padding: 10 },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardElevated: {
        backgroundColor: 'pink',
        elevation:4,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowColor: '#333',
        shadowOpacity: 10
    }
})
export default ElevatedCards