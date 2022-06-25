import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import { hp, wp } from '../utils/ResponsiveLayout';
import { Colors } from '../utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchGetProductData } from '../redux/actions/productListAction';
import moment from 'moment';

const productList = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const pro_data = useSelector(state => state.productListReducer.pro_data);

    useEffect(() => {
        if (pro_data != null && pro_data != []) {
            setData(pro_data.data.data.rows)
        }
    }, [pro_data])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('product 1--------------');
            dispatch(fetchGetProductData());
        });
        return unsubscribe;
    }, [navigation])

    return (
        <View style={{ flex: 1 }}>
            {console.log('d', data)}
            {!!data && data == [] ? <ActivityIndicator
                size={'large'}
                color={'red'}
                style={{ backgroundColor:'blue', justifyContent: 'center', alignSelf: 'center', flex: 1 }}
            />
                :
                <FlatList
                    data={data}
                    renderItem={(item) => {
                        return (
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10, borderBottomColor: 'lightgrey', borderBottomWidth: 1 }}>
                                <Image source={{ uri: 'https://www.deskera.com/blog/content/images/2021/08/pexels-andrea-piacquadio-3760069.jpg' }} resizeMode={'stretch'}
                                    style={{ width: wp(15), height: wp(15), borderRadius: 20, justifyContent: 'flex-start', alignSelf: 'flex-start', marginTop: hp(1) }}
                                />
                                <View style={{ paddingHorizontal: 15, marginTop: hp(1) }}>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.item.product_name}</Text>
                                    <Text>{moment(item.item.purchase_date, 'DD-MM-YYYY').format('DD MMM YYYY')}</Text>
                                    <Text>{item.item.product_description}</Text>
                                    <Text>{item.item.product_cost}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            }
        </View>
    )
}

export default productList