import { Image, StyleSheet } from "react-native";

export default function ImageViewer({placeholderImageSource, selectedImage}) {
    const imageSource = selectedImage ? { uri: selectedImage.uri } : placeholderImageSource;
    return(
        <Image source={imageSource} style={styles.image} />
        // <Image source={imageSource} style={[styles.image, selectedImage ? {
        //     width: selectedImage.width,
        //     height: selectedImage.height
        // } : null]} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
        resizeMode: 'contain',
      }
});