import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { hp, wp } from '../utils/ResponsiveLayout';
import { Colors } from '../utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import TextIn from '../components/TextIn';
import DatePick from '../components/DatePick';
import moment from 'moment';
import { Constant } from '../utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestCategoryDetail } from '../redux/actions/CategoryDetailAction';
import _ from 'lodash'


const productScreen = () => {
    const [items, setItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [productname, setProductName] = useState('');
    const [productdes, setProductDes] = useState('');
    const [productprice, setProductPrice] = useState('');
    const [date, setDate] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const catlists = useSelector(state => state.CategoryDetailReducer.catlist);

    useEffect(() => {
        return () => { };
    }, [open]);

    useEffect(() => {
        if (catlists) {
            setItems(catlists);
        }
    }, [catlists]);

    useEffect(() => {
        dispatch(fetchRequestCategoryDetail());
    }, [])

    return (
        <View>
            <ScrollView keyboardShouldPersistTaps={'handled'}>
                <Image source={{ uri: 'https://www.itservicesingapore.sg/wp-content/uploads/2018/06/ITassetmanagementillustration.jpg' }} style={{ width: wp(100), height: hp(30) }} resizeMode={'stretch'} />
                <View style={{ margin: 10, padding: 10 }}>
                    <View style={{
                        backgroundColor: 'white',
                        height: hp(9),
                        width: wp(90),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        elevation: 5,
                        borderRadius: 3
                    }}>
                    {console.log("asfdff",items)}
                        <SectionedMultiSelect
                        
                            items={items}
                            IconRenderer={MaterialIcons}
                            uniqueKey="id"
                            selectText="Select Category"
                            displayKey='category_name'
                            showDropDowns={true}
                            onSelectedItemsChange={(selectedItems) => {
                                setSelectedItems(selectedItems)
                                console.log(selectedItems);
                            }}
                            showChips={false}
                            selectedItems={selectedItems}
                            colors={{
                                selectToggleTextColor: 'black',
                            }}
                            styles={{
                                selectToggle: {
                                    color: 'blue',
                                    marginLeft: wp(3)
                                },
                                itemText: {
                                    marginLeft: wp(3),
                                    marginTop: hp(3),
                                },
                            }}
                            single={true}
                            hideSearch={true}
                            hideConfirm={true}
                        />
                    </View>
                    <View style={{ height: 10 }} />
                    <TextIn
                        placeholder={'Product Name'}
                        value={productname}
                        onChangeText={text => setProductName(text)}
                    />
                    <View style={{ height: 10 }} />

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setOpen(true)}
                        style={{
                            backgroundColor: 'white',
                            width: wp(90),
                            height: hp(9),
                            elevation: 5,
                        }}>
                        <Text
                            style={{
                                color: 'black',
                                margin: 10,
                                padding: 10,
                                fontSize: 15,
                                right: wp(2),
                            }}>
                            {date ? moment(date, 'DD-MM-YYYY').format('DD MMM YYYY') : 'Purchase Date'}
                        </Text>
                    </TouchableOpacity>
                    <DatePick
                        open={open}
                        date={new Date()}
                    
                        onConfirm={date => {
                            setOpen(false);
                            setDate(date);
                            console.log(date);
                        }}
                        onCancel={() => {
                            setOpen(false);
                        }}
                    />
                    <View style={{ height: 10 }} />
                    <TextIn
                        placeholder={'Product Description'}
                        value={productdes}
                        isMultiline={true}
                        onChangeText={text => setProductDes(text)}
                    />
                    <View style={{ height: 10 }} />
                    <TextIn
                        placeholder={'Product Price'}
                        value={productprice}
                        onChangeText={text => setProductPrice(text)}
                    />
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.productBtn}
                        onPress={() => console.log('')}>
                        <Text style={styles.productText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    productBtn: {
        width: wp(89),
        height: hp(9),
        alignSelf: 'center',
        marginTop: hp(6),
        marginBottom: hp(5),
        marginLeft: wp(5),
        marginRight: wp(5),
        backgroundColor: Colors.dark1,
        elevation: Platform == 'android' ? 5 : 0,
    },
    productText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: Constant.fontSize.large,
        fontFamily: Constant.fonts.Bold,
        fontWeight: 'bold',
        color: Colors.light,
        marginTop: hp(3),
    },
});
export default productScreen;