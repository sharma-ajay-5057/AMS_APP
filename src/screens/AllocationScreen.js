import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import TextIn from "../components/TextIn";
import { wp, hp } from "../utils/ResponsiveLayout";
import { Constant } from "../utils/Constant";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addAllocationData } from "../redux/actions/allocationAddAction";
// import { fetchEmployeeStatus } from "../redux/actions/employeeStatusAction";
import { fetchRequestEmployeeData } from "../redux/actions/EmployeeListAction";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
const AllocationScreen = () => {
  const [empId, setEmpId] = useState();
  const [temp, setTemp] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allocation_add = useSelector(
    (state) => state.allocationAddReducer.allocation_add
  );
  const empdata = useSelector((state) => state.EmployeeListReducer.empdata);
 
  useEffect(() => {
    if (temp) {
      if (allocation_add != []) {
        if (allocation_add.success == true) {
          ToastAndroid.show(allocation_add.message, ToastAndroid.SHORT);
          navigation.goBack();
          setTemp(false);
        } else {
          alert(allocation_add.message);
        }
      }
    }
  }, [allocation_add]);

  const addAllocationFunction = () => {
    if (empId != "") {
      const data = {
        employee_id: empId,
      };
      dispatch(addAllocationData(data));
      //navigation.goBack();
      setTemp(true);
    }
  };
  useEffect(() => {
    dispatch(fetchRequestEmployeeData());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <View style={{backgroundColor:'white',margin:5,padding:10,borderRadius:10,borderColor:'black',borderWidth:1}} >

        <SectionedMultiSelect
              items={(empdata||[]).map((item) => {
                return {
                  name:item.first_name + " " + item.last_name,
                  id: item.id,
                };
              })}
              IconRenderer={MaterialIcons}
              uniqueKey="id"
              selectText="Select Category"
              displayKey={"name"}
              showDropDowns={true}
              onSelectedItemsChange={(selectedItems) => {
                setEmpId(selectedItems);
              }}
              showChips={false}
              selectedItems={empId}
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
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.EmpBtn}
        onPress={() => addAllocationFunction()}
      >
        <Text style={styles.SubmitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  containerView: {
    marginTop: hp(20),
    marginLeft: wp(10),
    marginRight: wp(10),
  },
  EmpBtn: {
    width: wp(60),
    borderRadius: 10,
    height: hp(9),
    alignSelf: "center",
    marginTop: hp(10),
    marginBottom: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
    backgroundColor: "#0d4563",
    borderRadius: 10,
    elevation: Platform == "android" ? 5 : 0,
  },
  SubmitText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: Constant.fontSize.large,
    fontFamily: Constant.fonts.Bold,
    fontWeight: "bold",
    color: "white",
    marginTop: hp(3),
  },
});
export default AllocationScreen;
