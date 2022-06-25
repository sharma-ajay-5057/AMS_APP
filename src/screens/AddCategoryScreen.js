import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
  ToastAndroid
} from 'react-native';
import { Constant } from '../utils/Constant';
import TextIn from '../components/TextIn';
import { hp, wp } from '../utils/ResponsiveLayout';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryData } from '../redux/actions/addCategoryAction';
import { updateCategoryData } from '../redux/actions/UpdateCategoryAction';
import _ from 'lodash'

const AddCategoryScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');
  const addDatas = useSelector(state => state.addCategoryReducer.addData);
  const updatData = useSelector(state => state.updateCategoryReducer.updatData);
  const [btnUpdate, setBtnUpdate] = useState('');
  const [temp, setTemp] = useState(false);

  useEffect(() => {
    // if (addDatas) {
    //   setCategory(addDatas);
    // }
    if (route.params != undefined) {
      const { Id, Category, UpdateBtn } = route.params;
      setBtnUpdate(UpdateBtn);
      setId(Id);
      setCategory(Category);
    }
  }, []);


  useEffect(() => {
    console.log("addDatas", addDatas);
    if (temp)
      if (addDatas != null) {
        console.log("addDatas.data.success ===>", addDatas.success);
        if (addDatas.success == true) {
          ToastAndroid.show('Category created successfully', ToastAndroid.SHORT)
          navigation.goBack();
          setTemp(false)
        } else {
          alert(addDatas.message)
        }
      }
  }, [addDatas])

  const add_category_submit = () => {
    if (!_.isEmpty(category)) {
      dispatch(addCategoryData({ category }));
      navigation.goBack();
      setTemp(true)
    } else {
      alert('Category field is empty');
    }
  };

  const update_category_submit = () => {
    dispatch(updateCategoryData({ id, category }));
    navigation.goBack();
    ToastAndroid.show('Category udated successfully', ToastAndroid.SHORT)
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <View style={{ height: 10 }} />
        <TextIn
          placeholder={'Category'}
          value={category}
          onChangeText={text => setCategory(text)}
        />
        {btnUpdate ? (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.CategoryBtn}
            onPress={() => update_category_submit()}>
            <Text style={styles.CategoryText}>Update</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.CategoryBtn}
            onPress={() => add_category_submit()}>
            <Text style={styles.CategoryText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    marginTop: hp(20),
    marginLeft: wp(10),
    marginRight: wp(10),
  },
  CategoryBtn: {
    width: wp(60),
    borderRadius: 10,
    height: hp(9),
    alignSelf: 'center',
    marginTop: hp(10),
    marginBottom: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
    backgroundColor: '#0d4563',
    borderRadius: 10,
    elevation: Platform == 'android' ? 5 : 0,
  },
  CategoryText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: Constant.fontSize.large,
    fontFamily: Constant.fonts.Bold,
    fontWeight: 'bold',
    color: 'white',
    marginTop: hp(3),
  },
});

export default AddCategoryScreen;
