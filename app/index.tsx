import {FlatList, Pressable, Text, View, Image} from "react-native";
import {offers} from "@/constants"
import {SafeAreaView} from "react-native-safe-area-context";
import './global.css'
import { CATEGORIES } from "@/constants";
import pressable from "react-native-gesture-handler/src/components/Pressable";
import {Fragment} from "react";



export default function Index() {
    return (
        <SafeAreaView>
            <FlatList
                data = {offers}
                renderItem = {({item, index}) => {
                    return (
                        <Pressable className = "offer-card" style = {{ backgroundColor : item.color }}>
                            {({ pressed }) => (
                                <Fragment>
                                    <View className = {"h-full w-1/2"}>
                                        <Text>{index}</Text>
                                        <Text>{item.title}</Text>
                                        <Image source = { item.image } className = {"size-full"} resizeMode = {"contain"}/>
                                    </View>
                                </Fragment>
                             )}
                        </Pressable>
                    )
                }
            }
            />
        </SafeAreaView>
    );
}
