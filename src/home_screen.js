import React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')


export default () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 40, width: 100, backgroundColor: '#E4E6EB', borderRadius: 8, marginLeft: 16, marginVertical: 20 }}>

                </View>
                <View style={{ height: 50, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', borderRadius: 8 }}>

                </View>

                <View style={{ height: 20, width: 100, backgroundColor: '#E4E6EB', borderRadius: 8, marginLeft: 16, marginVertical: 20, marginTop: 30 }}>

                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ height: 176, width: width / 2.7, backgroundColor: '#E4E6EB', marginLeft: 16, borderRadius: 8 }}>

                    </View>
                    <View style={{ height: 176, width: width / 2.7, backgroundColor: '#E4E6EB', marginLeft: 10, borderRadius: 8 }}>

                    </View>
                    <View style={{ height: 176, width: width / 2.7, backgroundColor: '#E4E6EB', marginLeft: 10, borderRadius: 8, marginRight: 16 }}>

                    </View>


                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
                    <View style={{ height: 20, width: 100, backgroundColor: '#E4E6EB', borderRadius: 8, marginVertical: 20, marginTop: 30 }}>

                    </View>
                    <View style={{ height: 20, width: 100, backgroundColor: '#E4E6EB', borderRadius: 8, marginVertical: 20, marginTop: 30 }}>

                    </View>
                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
                <View style={{ height: 60, width: width - 32, backgroundColor: '#E4E6EB', alignSelf: 'center', marginBottom: 10, borderRadius: 8 }}>

                </View>
            </ScrollView>
        </View>
    )
}