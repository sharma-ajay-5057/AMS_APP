import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { hp, wp } from "../utils/ResponsiveLayout";
import { Colors } from "../utils/Colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Switch } from "react-native-paper";
import { fetchGetProductData } from "../redux/actions/productListAction";
import { productStatusFunction } from "../redux/actions/productStatusAction";
import moment from "moment";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const productList = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [isSwitchOnData, setIsSwitchOnData] = useState(true);
  const dispatch = useDispatch();
  const navi = useNavigation();
  const pro_data = useSelector((state) => state.productListReducer.pro_data);
  const product_status = useSelector(
    (state) => state.productStatusReducer.product_status
  );

  useEffect(() => {
    if (pro_data != null && pro_data != []) {
      setData(pro_data.data.data.rows);
    }
  }, [pro_data]);

  useEffect(() => {
    navi.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("product")}>
          <Ionicons
            name="add-circle"
            size={30}
            color={"white"}
            style={{ marginHorizontal: wp(5) }}
          />
        </TouchableOpacity>
      ),
    });
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(fetchGetProductData());
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    dispatch(fetchGetProductData());
  }, []);

  useEffect(() => {
    if (product_status != null) {
      if (product_status.data.success == true) dispatch(fetchGetProductData());
      else {
        alert(product_status.data.message);
      }
    }
  }, [product_status]);

  const onProductStatus = (id) => {
    dispatch(productStatusFunction(id));
  };

  return (
    <View style={{ flex: 1 }}>
      {!!data && data == [] ? (
        <ActivityIndicator
          size={"large"}
          color={"red"}
          style={{
            justifyContent: "center",
            alignSelf: "center",
          }}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetail", { id: item.item.id })
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderBottomColor: "lightgrey",
                    borderBottomWidth: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", width: wp(70) }}>
                    <Image
                      source={{
                        uri: `https://picsum.photos/500/500?image=${item.item.id}`,
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: wp(15),
                        height: wp(15),
                        borderRadius: wp(15) / 2,
                        justifyContent: "flex-start",
                        alignSelf: "flex-start",
                        marginTop: hp(1),
                      }}
                    />
                    <View style={{ paddingHorizontal: 15, marginTop: hp(1) }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {item.item.product_name}
                      </Text>
                      <Text>
                        {moment(item.item.purchase_date, "DD-MM-YYYY").format(
                          "DD MMM YYYY"
                        )}
                      </Text>
                      <Text>{item.item.product_description}</Text>
                      <Text>{item.item.product_cost}</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        flexDirection: "row",
                      }}
                    >
                      <Switch
                        value={
                          item.item.status == 1
                            ? isSwitchOnData
                            : !isSwitchOnData
                        }
                        color={Colors.secondaryColor}
                        onValueChange={() => onProductStatus(item.item.id)}
                      />
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() =>
                          navigation.navigate("product", {
                            UpdateBtn: true,
                            Id: item.item.id,
                            Category_id: item.item.category_id,
                            Product_name: item.item.product_name,
                            Purchase_date: item.item.purchase_date,
                            Product_description: item.item.product_description,
                            Product_cost: item.item.product_cost,
                          })
                        }
                      >
                        <MaterialCommunityIcons
                          style={{ marginLeft: 10, color: Colors.dark1 }}
                          name="clipboard-edit"
                          size={25}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default productList;
