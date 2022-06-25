import { Dimensions } from "react-native";

let windowWidth = Dimensions.get("window").width;
let windowHeight = Dimensions.get("window").height;

function wp(width) {
  return (windowWidth * width) / 100;
}


function hp(height) {
  return (windowHeight * height) / 100;
}
 

export { wp, hp };