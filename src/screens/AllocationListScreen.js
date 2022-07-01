import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { wp, hp } from "../utils/ResponsiveLayout";
import { Colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { Constant } from "../utils/Constant";
import { Switch } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllocationData } from "../redux/actions/allocationListAction";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AllocationListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [allocation, setAllocation] = useState([]);
  const [isSwitchOnData, setIsSwitchOnData] = useState(true);
  const [loading, setLoading] = useState(true);

  const allocation_data = useSelector(
    (state) => state.allocationListReducer.allocation_data
  );

  useEffect(() => {
    if (allocation_data != []) {
      setAllocation(allocation_data);
    }
  }, [allocation_data]);

  useEffect(() => {
    dispatch(getAllocationData());
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Allocation Screen")}
        >
          <Ionicons
            name="add-circle"
            size={30}
            color={"white"}
            style={{ marginHorizontal: wp(5) }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const onAllocation=()=>{
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={allocation}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                padding: wp(3),
                marginHorizontal: wp(3),
                marginVertical: hp(1),
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <View style={styles.itemStyle}>
                <Text style={styles.textStyle}>
                  Employee Id: {item.employee_id}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>
                    Name: {item.UserDetail.first_name}{" "}
                  </Text>
                  <Text style={styles.textStyle}>
                    {item.UserDetail.last_name}
                  </Text>
                </View>
                <Text style={styles.textStyle}>Combo Id: {item.combo_id}</Text>
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
                      item.status == 1 ? isSwitchOnData : !isSwitchOnData
                    }
                    color={Colors.secondaryColor}
                    onValueChange={() =>
                    console.log("button press") //onProductStatus(item.item.id)
                    }
                  />
                  <TouchableOpacity
                    activeOpacity={1}
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
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    // backgroundColor: "#fff",
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    // elevation: 5,
  },
  textStyle: {
    fontSize: 16,
    color: "black",
  },
});

export default AllocationListScreen;
