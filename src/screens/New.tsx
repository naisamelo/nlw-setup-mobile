import { ScrollView, View } from "react-native";
import { BackButton } from "../components/BackButton";

export function New(){
  return (
    <view className="flex-1 bg-backgrond px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>

        <BackButton/>

      </ScrollView>
    </view>
  )
}