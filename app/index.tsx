import {FlatList, Pressable, Text, View, Image} from "react-native";
import {images, offers} from "@/constants"
import {SafeAreaView} from "react-native-safe-area-context";
import './global.css'
import {Fragment} from "react";
import cn from "clsx";
import {colors} from "nativewind/src/tailwind/color";



export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                data = {offers}
                renderItem = {({item, index}) => {
                    const isEven: boolean = index % 2 === 0;
                    return (
                        <Pressable
                            className =
                                {cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')}
                                style = {{ backgroundColor : item.color }}
                                android_ripple = {{ color : "#fffff22" }}
                        >
                            {({ pressed }) => (
                                <Fragment>
                                    <View className = {"h-full w-1/2"}>
                                        <Image source = { item.image } className = {"size-full"} resizeMode = {"contain"}/>
                                    </View>
                                    <View className = {cn("offer-card__info", isEven ? 'pl-10' : 'pr-10')}>
                                        <Text className = "h1-bold text-white leading-tight">
                                            {item.title}
                                        </Text>
                                        <Image source = {images.arrowRight}
                                               className = "size=30"
                                               resizeMode = "contain"
                                               tintColor = "#fffffff"
                                        />
                                    </View>
                                </Fragment>
                             )}

                        </Pressable>
                    )
                }
            }
                contentContainerClassName = "pt-28 px-5"
            />
        </SafeAreaView>
    );
}
