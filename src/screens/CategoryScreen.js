import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { hp, wp } from '../utils/ResponsiveLayout';
import { Colors } from '../utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestCategoryDetail } from '../redux/actions/CategoryDetailAction';
import { fetchCategoryStatus } from '../redux/actions/categoryStatusAction';
import { deleteCategoryData } from '../redux/actions/deleteCategoryAction';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Switch } from 'react-native-paper';

const ProductScreen = () => {
  const [data, setData] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const catlists = useSelector(state => state.CategoryDetailReducer.catlist);
  const loading = useSelector(state => state.CategoryDetailReducer.loading);
  const d_list = useSelector(state => state.deleteCategoryReducer.d_list);
  const cat_status = useSelector(state => state.categoryStatusReducer.cat_status)

  useEffect(() => {
    //console.log("catlists---", catlists);
    if (catlists) {
      setData(catlists);
      setisLoading(false);
    }
  }, [catlists]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('focus--------------');
      dispatch(fetchRequestCategoryDetail());
      if (catlists) {
        setData(catlists);
        setisLoading(false);
      }
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    dispatch(fetchRequestCategoryDetail());
  }, [d_list]);

  const deleteCategoryButton = id => {
    console.log('id::', id);
    dispatch(deleteCategoryData(id));
  };

  useEffect(() => {
    dispatch(fetchRequestCategoryDetail());
  }, [])

  useEffect(() => {
    if (cat_status != null) {
      if (cat_status.data.success == true)
        dispatch(fetchRequestCategoryDetail());
      else {
        alert(cat_status.data.message)
      }
    }
  }, [cat_status])

  const onCategoryStatus = (id) => {
    dispatch(fetchCategoryStatus(id))
  }

  return (
    <View>
      {loading ? (
        <ActivityIndicator
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: hp(40),
          }}
          size={'large'}
          color={'black'}
        />
      ) : (
        <FlatList
          data={data}
          ListHeaderComponent={() => {
            return (
              <View
                style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate('Add')}
                  style={{
                    width: wp(25),
                    height: hp(7),
                    backgroundColor: Colors.dark1,
                    margin: 10,
                    padding: 10,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'white',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          renderItem={item => {
            return (
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  margin: 10,
                  padding: 10,
                  borderRadius: 8,
                  elevation: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
                        marginTop: 5,
                        marginLeft: 10,
                      }}>
                      {item.item.category_name}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      flexDirection: 'row',
                      marginTop: hp(1),
                    }}>
                    <Switch value={item.item.status == 1 ? isSwitchOn : !isSwitchOn} color={Colors.secondaryColor}
                      onValueChange={() => onCategoryStatus(item.item.id)} />

                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        navigation.navigate('Add', {
                          UpdateBtn: true,
                          Id: item.item.id,
                          Category: item.item.category_name,
                        })
                      }>
                      <MaterialCommunityIcons
                        style={{ marginLeft: 10, color: Colors.dark1 }}
                        name="clipboard-edit"
                        size={25}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default ProductScreen;
