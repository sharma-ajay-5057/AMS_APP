import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const menuList = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Change Password')}>
                <View style={{ flexDirection: 'row', borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginHorizontal: 10, marginVertical: 10, paddingVertical: 10, paddingHorizontal: 10 }}>
                    <MaterialCommunityIcons name='lock-off' size={25} />
                    <Text style={{ marginLeft: 10, fontSize: 16, color: 'black' }}>Change Password</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('stock')}>
                <View style={{ flexDirection: 'row', borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginHorizontal: 10, marginVertical: 10, paddingVertical: 10, paddingHorizontal: 10 }}>
                    <FontAwesome5 name='box' size={20} style={{ marginLeft: 4 }} />
                    <Text style={{ marginLeft: 10, fontSize: 16, color: 'black' }}>Stock</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('proList')}>
                <View style={{ flexDirection: 'row', borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginHorizontal: 10, marginVertical: 10, paddingVertical: 10, paddingHorizontal: 10 }}>
                    <SimpleLineIcons name='social-dropbox' size={20} style={{ marginLeft: 4 }} />
                    <Text style={{ marginLeft: 10, fontSize: 16, color: 'black' }}>Product</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default menuList