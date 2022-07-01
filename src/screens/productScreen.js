import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ToastAndroid,
} from "react-native";
import { hp, wp } from "../utils/ResponsiveLayout";
import { Colors } from "../utils/Colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import TextIn from "../components/TextIn";
import DatePick from "../components/DatePick";
import moment from "moment";
import { Constant } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequestCategoryDetail } from "../redux/actions/CategoryDetailAction";
import { addProduct } from "../redux/actions/addProductAction";
import { updateProductDataFunction } from "../redux/actions/updateProductAction";
import { useNavigation } from "@react-navigation/native";
import _ from "lodash";

const productScreen = ({ route }) => {
  const navigation = useNavigation();
  const [btnUpdate, setBtnUpdate] = useState("");
  const [id, setId] = useState("");
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [productname, setProductName] = useState("");
  const [productdes, setProductDes] = useState("");
  const [productprice, setProductPrice] = useState("");
  const [date, setDate] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const catlists = useSelector((state) => state.CategoryDetailReducer.catlist);
  const productlist = useSelector(
    (state) => state.addProductReducer.addProductData
  );

  useEffect(() => {
    if (route.params != undefined) {
      const {
        Id,
        Category_id,
        Product_name,
        Purchase_date,
        Product_description,
        Product_cost,
        UpdateBtn,
      } = route.params;
      setId(Id);
      setSelectedItems([Category_id]);
      setProductName(Product_name);
      setDate(Purchase_date);
      setProductDes(Product_description);
      setProductPrice(String(Product_cost));
      setBtnUpdate(UpdateBtn);
    }
  }, []);

  useEffect(() => {
    if (catlists) {
      setItems(catlists);
    }
  }, [catlists]);

  useEffect(() => {
    dispatch(fetchRequestCategoryDetail());
  }, []);

  useEffect(() => {
    if (productlist.success) {
      navigation.goBack();
      ToastAndroid.show("Product added successfully", ToastAndroid.SHORT);
    }
  }, [productlist]);

  const addProductdata = () => {
    if (productname && productdes && productprice) {
      const data = {
        product_name: productname,
        product_description: productdes,
        product_cost: productprice,
        category_id: selectedItems,
        purchase_date: date ? date.toLocaleDateString() : "",
      };
      dispatch(addProduct(data));
    }
  };

  const updateProduct = () => {
    if (productname && productdes && productprice) {
      const data = {
        product_name: productname,
        product_description: productdes,
        product_cost: productprice,
        category_id: selectedItems,
        purchase_date: date ? date.toLocaleDateString() : "",
        id: id,
      };
      navigation.goBack();
      dispatch(updateProductDataFunction(data));
    }
  };
  return (
    <View>
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        <Image
          source={{
            uri: "https://www.itservicesingapore.sg/wp-content/uploads/2018/06/ITassetmanagementillustration.jpg",
          }}
          style={{ width: wp(100), height: hp(30) }}
          resizeMode={"stretch"}
        />
        <View style={{ margin: 10, padding: 10 }}>
          <View
            style={{
              backgroundColor: "white",
              height: hp(9),
              width: wp(90),
              justifyContent: "center",
              alignSelf: "center",
              elevation: 5,
              borderRadius: 3,
            }}
          >
            <SectionedMultiSelect
              items={items}
              IconRenderer={MaterialIcons}
              uniqueKey="id"
              selectText="Select Category"
              displayKey="category_name"
              showDropDowns={true}
              onSelectedItemsChange={(selectedItems) => {
                setSelectedItems(selectedItems);
              }}
              showChips={false}
              selectedItems={selectedItems}
              colors={{
                selectToggleTextColor: "black",
              }}
              styles={{
                selectToggle: {
                  color: "blue",
                  marginLeft: wp(3),
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
            placeholder={"Product Name"}
            value={productname}
            onChangeText={(text) => setProductName(text)}
          />
          <View style={{ height: 10 }} />

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: "white",
              width: wp(90),
              height: hp(9),
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: "black",
                margin: 10,
                padding: 10,
                fontSize: 15,
                right: wp(2),
              }}
            >
              {date
                ? moment(date, "DD-MM-YYYY").format("DD MMM YYYY")
                : "Purchase Date"}
            </Text>
          </TouchableOpacity>
          <DatePick
            open={open}
            date={new Date()}
            onConfirm={(date) => {
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
            placeholder={"Product Description"}
            value={productdes}
            isMultiline={true}
            onChangeText={(text) => setProductDes(text)}
          />
          <View style={{ height: 10 }} />
          <TextIn
            placeholder={"Product Price"}
            value={productprice}
            onChangeText={(text) => setProductPrice(text)}
          />
          {btnUpdate ? (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.productBtn}
              onPress={() => updateProduct()}
            >
              <Text style={styles.productText}>Update</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.productBtn}
              onPress={() => addProductdata()}
            >
              <Text style={styles.productText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  productBtn: {
    width: wp(89),
    height: hp(9),
    alignSelf: "center",
    marginTop: hp(6),
    marginBottom: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
    backgroundColor: Colors.dark1,
    elevation: Platform == "android" ? 5 : 0,
  },
  productText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: Constant.fontSize.large,
    fontFamily: Constant.fonts.Bold,
    fontWeight: "bold",
    color: Colors.light,
    marginTop: hp(3),
  },
});
export default productScreen;
