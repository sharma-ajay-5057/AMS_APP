import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchProductData } from "../redux/actions/getProductAction";
import { wp, hp } from "../utils/ResponsiveLayout";
import moment from "moment";

const productDetails = ({ navigation, route }) => {
  const navi = useNavigation();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.getProductReducer.productData);

  useEffect(() => {
    const { id } = route.params;
    console.log("productId", id);
    dispatch(fetchProductData(id));
    return () => {
      console.log("unmount");
    };
  }, []);
  useEffect(() => {
    if (product != null && product != []) {
      console.log("product kjkj", product);
    }
  }, [product]);

  return (
    <View style={{ flex: 1 }}>
      {product && (
        <View>
          <Image
            source={{
              uri: `https://picsum.photos/500/500?image=${product.productInfo?.id}`,
            }}
            resizeMode="cover"
            style={{ width: wp(100), height: hp(40) }}
          />
          <View
            style={{
              width: wp(100),
              height: hp(60),
              backgroundColor: "white",
              elevation: 3,
              borderWidth: 1,
              borderColor: "lightgrey",
            }}
          >
            <Text style={{ fontSize: 18, color: "black", fontWeight: "bold"}}>
              Product Name: {product.productInfo?.product_name}
            </Text>
            <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
              Product Cost: {product.productInfo?.product_cost}
            </Text>
            <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
              Product Description: {product.productInfo?.product_description}
            </Text>
            <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
              Purchase Date:{" "}
              {moment(product.productInfo?.purchase_date, "DD-MM-YYYY").format(
                "DD MMM YYYY"
              )}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default productDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp(5),
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: wp(30),
    height: hp(30),
    borderRadius: wp(15),
    marginRight: wp(5),
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    fontSize: wp(5),
    color: "black",
    fontWeight: "bold",
  },
});
