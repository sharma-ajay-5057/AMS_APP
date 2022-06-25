import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryStocklist } from '../redux/actions/getCategoryStockListAction'
import { hp, wp } from '../utils/ResponsiveLayout';
import { Colors } from '../utils/Colors';


const categoryStock = () => {
    const [catstock, setCatStock] = useState('');
    const dispatch = useDispatch();
    const cat_stock = useSelector(state => state.getCategoryStockListReducer.cat_stock)

    useEffect(() => {
        dispatch(fetchCategoryStocklist())
    }, [])

    useEffect(() => {
        if (cat_stock != null && cat_stock != []) {
            setCatStock(cat_stock.data.data)
        }
    }, [cat_stock])

    return (
        <View>
            <FlatList
                data={catstock}
                ListHeaderComponent={() => {
                    return (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor:Colors.secondaryColor , paddingVertical:10, borderTopColor:'grey', borderTopWidth:1, borderBottomColor:'grey', borderBottomWidth:1}}>
                            <View>
                                <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>Category</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>Stock</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}> Assing Stock</Text>
                            </View>
                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical:15, borderBottomColor:'lightgrey', borderBottomWidth:1, }}>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{item.CategoryName}</Text>
                            </View>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{item.Stock}</Text>
                            </View>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{item.AssingStock == null ? 0 : item.AssingStock}</Text>
                            </View>
                        </View>


                    )
                }}
            //keyExtractor={item => item.id.toString()}
            />

        </View>
    )
}

export default categoryStock