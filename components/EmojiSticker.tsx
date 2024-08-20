import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export default function EmojiSticker({ imageSize, stickerSource }) {
    // const pressed = useSharedValue<boolean>(false);
    const translateX = useSharedValue<number>(0);
    const translateY = useSharedValue<number>(0);
    const scaleImage = useSharedValue(imageSize);

    const drag = Gesture.Pan()
    // .onBegin(() => {
    //   pressed.value = true;
    // })
    .onChange((event) => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
    })
    // .onFinalize(() => {
    //     translateX.value = withSpring(translateX.value);
    //     translateY.value = withSpring(translateY.value);
    //     pressed.value = false;
    // });

    const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
        if (scaleImage.value !== imageSize * 2) {
            scaleImage.value = scaleImage.value * 2;
        }
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value)
        };
    });

    const containerStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value, },
            { translateY: translateY.value, },
            // { scale: withTiming(pressed.value ? 1.2 : 1) },
        ]
    }));

    return(
        <GestureDetector gesture={drag}>
            <Animated.View style={[containerStyle]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode="contain"
                        style={[imageStyle, { width: imageSize, height: imageSize }]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}