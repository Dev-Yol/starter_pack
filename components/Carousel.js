import React, { useState, useRef } from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { Text, Card, Spacer } from 'components'
import { Metrics, Colors } from '@constants'
import Carousel from 'react-native-snap-carousel';
const itemWidth = (Metrics.width / 2) - Metrics.md;
export default props => {
    let carouselRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0)
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                {/* <Card style={styles.card} imageStyle={styles.image} imageSource={require('assets/image-placeholder.png')} > */}
                <Card style={styles.card} imageStyle={styles.image} imageSource={{uri:'https://i.imgur.com/UPrs1EWl.jpg'}} >
                    <Spacer sm />
                    <Text center b md>{item.title}</Text>
                </Card>
            </View>

        )
    }
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Carousel
                    layout={"default"}
                    ref={ref => carouselRef = ref}
                    data={props.data}
                    sliderWidth={itemWidth}
                    itemWidth={itemWidth}
                    renderItem={_renderItem}
                    centerContent
                    activeSlideAlignment='center'
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    onSnapToItem={index => setActiveIndex(index)}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Metrics.md,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    itemContainer: {
        // borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.white,
        marginHorizontal: 0,
    },
    card: {
        height: 225,
        justifyContent: 'center'
    },
    image: {
        height: 150
    }
})