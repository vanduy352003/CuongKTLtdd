import React from "react";

import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function CourseDetail(): React.JSX.Element {

    return (
        <View style={styles.f1}>
            <Image style={styles.backGroundImage} source={require('./assets/images/business.jpg')}/>
            <View style={styles.f1}>
                <View style={styles.navHeader}>
                    <TouchableOpacity>
                        <Image style={styles.smallIcon} source={require('./assets/icons/back.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.smallIcon} source={require('./assets/icons/more.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <View style={styles.bestSeller}>
                        <Text style={styles.bestSellerText}>BESTSELLER</Text>
                    </View>
                    <View style={styles.bestSellerShape}/>
                </View>
                <Text style={[styles.header2, styles.ml10]}>Design Thinking</Text>
                <View style={[styles.row, styles.ml10, styles.mt10]}>
                    <Image style={styles.smallIcon} source={require('./assets/icons/group.png')}/>
                    <Text style={[styles.ml5, styles.ratingText]}>55K</Text>
                    <Image style={[styles.smallIcon, styles.ml10]} source={require('./assets/icons/star.png')}/>
                    <Text style={[styles.ml5, styles.ratingText]}>4.1K</Text>
                </View>
                <Text style={[styles.mt20, styles.ml10, styles.header2]}>$50</Text>
            </View>
            <View style={[styles.f1, styles.popUp]}>
                <View>
                    <Text style={[styles.header3, styles.mb10, styles.mt30]}>Course Content</Text>
                    <View style={styles.fullChapter}>
                        <View style={styles.row}>
                            <Text style={styles.chapter}>01</Text>
                            <View style={styles.mh20}>
                                <Text>
                                    5:35 mins
                                </Text>
                                <Text style={styles.header3}>
                                    Welcome to the Course
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.greenCircle}>
                            <Image style={styles.smallIcon} source={require('./assets/icons/play-button.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fullChapter}>
                        <View style={styles.row}>
                            <Text style={styles.chapter}>01</Text>
                            <View style={styles.mh20}>
                                <Text>
                                    5:35 mins
                                </Text>
                                <Text style={styles.header3}>
                                    Welcome to the Course
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.greenCircle}>
                            <Image style={styles.smallIcon} source={require('./assets/icons/play-button.png')}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.fullChapter}>
                        <View style={styles.row}>
                            <Text style={styles.chapter}>02</Text>
                            <View style={styles.mh20}>
                                <Text>
                                    7:35 mins
                                </Text>
                                <Text style={styles.header3}>
                                    Design Thinking - Intro
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.greenCircle}>
                            <Image style={styles.smallIcon} source={require('./assets/icons/play-button.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fullChapter}>
                        <View style={styles.row}>
                            <Text style={styles.chapter}>03</Text>
                            <View style={styles.mh20}>
                                <Text>
                                    10:35 mins
                                </Text>
                                <Text style={styles.header3}>
                                    Design Thinking Process
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.greenCircle}>
                            <Image style={styles.smallIcon} source={require('./assets/icons/play-button.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.row]}>
                    <TouchableOpacity style={styles.shopIcon}>
                        <Image  source={require('./assets/icons/shopping-bag.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buyText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    backGroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute'
    },
    navHeader: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallIcon: {
        width: 20,
        height: 20,
    },
    bestSeller: {
        backgroundColor: 'rgb(255,218,114)',
        padding: 6,
        marginVertical: 10,
        marginLeft: 10,
        width: 100,
        borderRadius: 5
    },
    bestSellerShape: {
        marginLeft: -2,
        borderLeftWidth: 15,
        borderTopWidth: 15,
        borderBottomWidth: 15,
        borderRightWidth: 0,
        borderLeftColor: 'rgb(255,218,114)',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
    },
    bestSellerText: {
        fontWeight: '500',
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    header2: {
        fontWeight: '700',
        color: 'black',
        fontSize: 24,
    },
    ml10: {
        marginLeft: 10,
    },
    ml5: {
        marginLeft: 5,
    },
    mt10: {
        marginTop: 10,
    },
    mt20: {
        marginTop: 20,
    },
    ratingText: {
        color: 'rgb(103,108,140)'
    },
    f1: {
        flex: 1
    },
    popUp: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 10,
        justifyContent: 'space-between'
    },
    header3: {
        fontWeight: '700',
        color: 'black',
        fontSize: 18,
    },
    mb10: {
        marginBottom: 10,
    },
    mt30: {
        marginTop: 30,
    }, 
    chapter: {
        fontSize: 35,
        color: 'rgb(228,231,236)',
        fontWeight: '700'
    },
    mh20: {
        marginHorizontal: 20,
    },
    between: {
        justifyContent: 'space-between'
    },
    greenCircle: {
        borderRadius: 100,
        backgroundColor: 'rgb(81,202,149)',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    fullChapter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    shopIcon: {
        flex: 1,
        backgroundColor: 'rgb(254,238,239)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        paddingVertical: 15,
        marginRight: 15,
    },
    buyButton: {
        flex: 3,
        backgroundColor: 'rgb(117,144,249)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 50,
    },
    buyText: {
        fontWeight: '700',
        color: 'white',
        fontSize: 18,
    },
});

export default CourseDetail;