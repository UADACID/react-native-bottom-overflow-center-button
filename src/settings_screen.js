import React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')


export default () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 20, width: 0, backgroundColor: '#E4E6EB', alignSelf: 'center', borderRadius: 8 }}>

                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                    <View style={{ height: 150, width: 150, backgroundColor: '#E4E6EB', borderRadius: 8, marginVertical: 20, marginTop: 30 }}>

                    </View>
                    <View style={{ marginHorizontal: 16}}>
                        <View style={{ height: 20, width: 100, backgroundColor: '#E4E6EB', borderRadius: 8,  marginTop: 30 }}>

                        </View>
                        <View style={{ height: 20, width: 150, backgroundColor: '#E4E6EB', borderRadius: 8,  marginTop: 8 }}>

                        </View>
                    </View>

                </View>
                <View style={{ height: 2, width: width - 40, backgroundColor: '#F0F2F5', alignSelf: 'center', marginVertical: 20, borderRadius: 8 }}>

                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>

                <View style={{ height: 2, width: width - 40, backgroundColor: '#F0F2F5', alignSelf: 'center', marginVertical: 20, borderRadius: 8 }}>

                </View>

                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
            </ScrollView>
        </View>
    )
}