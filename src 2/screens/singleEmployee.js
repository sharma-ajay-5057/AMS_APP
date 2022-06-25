import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { hp, wp } from '../utils/ResponsiveLayout';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { Constant } from '../utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleEmployeeData, } from '../redux/actions/singleEmployeeAction'
import moment from 'moment';

const singleEmployee = ({ route }) => {
    const [singleData, setSingleData] = useState([]);
    const id = route.params
    const dispatch = useDispatch()
    const single_data = useSelector(state => state.singleEmployeeReducer.single_data)


    useEffect(() => {
        dispatch(fetchSingleEmployeeData(id))
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
            {single_data && <View>
            <Image source={{
                uri:
                    'https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg'
            }}
                style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            />
            <View style={{ marginVertical: 10, }}>
                <Text style={{ fontSize: 16, color: 'black' }}>{single_data.data.data.first_name} {single_data.data.data.last_name}</Text>
                <Text style={{ fontSize: 16, color: 'black' }}>{single_data.data.data.email}</Text>
                <Text style={{ fontSize: 16, color: 'black' }}>{single_data.data.data.phone}</Text>
                <Text style={{ fontSize: 16, color: 'black' }}>{moment(single_data.data.data.dob, 'DD-MM-YYYY').format('DD MMM YYYY')}</Text>
            </View>
            </View>}
        </View>
    )
}

export default singleEmployee