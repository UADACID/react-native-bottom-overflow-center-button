import React from 'react'
import { Text, View } from 'react-native'

export default () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ height: 200, width: 200, borderWidth: 0, borderColor: '#E4E6EB', backgroundColor: '#F0F2F5' }}>

        <View style={{ height: 30, width: 30, borderTopWidth: 5, borderLeftWidth: 3, borderColor: '#E4E6EB', borderRadius: 4, position: 'absolute', left: 0, top: 0 }}>
        </View>

        <View style={{ height: 30, width: 30, borderTopWidth: 5, borderRightWidth: 3, borderColor: '#E4E6EB', borderRadius: 4, position: 'absolute', right: 0, top: 0 }}>
        </View>

        <View style={{ height: 30, width: 30, borderBottomWidth: 5, borderRightWidth: 3, borderColor: '#E4E6EB', borderRadius: 4, position: 'absolute', right: 0, bottom: 0 }}>
        </View>

        <View style={{ height: 30, width: 30, borderBottomWidth: 5, borderLeftWidth: 3, borderColor: '#E4E6EB', borderRadius: 4, position: 'absolute', left: 0, bottom: 0 }}>
        </View>

      </View>

    </View>
    )
}