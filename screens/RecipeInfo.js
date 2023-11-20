import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Dimensions,
    Animated,
    Modal,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../theme';
import Back from '../components/button/Back';
import ShareBubble from '../assets/sharebubble/sharebubble';
import Instagram from '../assets/media/Instagram';
import Facebook from '../assets/media/Facebook';
import Messages from '../assets/media/Messages';
import Twitter from '../assets/media/Twitter';

const screenWidth = Dimensions.get('window').width;

const RecipeInfo = ({ route, navigation }) => {
    const [showShareBubble, setShowShareBubble] = useState(true);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const { recipe } = route.params;

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
    };

    const fadeAnim = new Animated.Value(1);

    useEffect(() => {
        if (showShareBubble) {
            const timer = setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start(() => {
                    setShowShareBubble(false);
                });
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [showShareBubble]);


    return (
        <View>
            <View>
                <Image style={styles.img} source={{ uri: recipe.image_url }} />
            </View>
            <ScrollView>
                <View style={styles.back}>
                    <Back navigation={navigation} color="black" />
                </View>

                <View style={styles.recipe}>
                    <Animated.View style={{ opacity: fadeAnim }}>
                        {showShareBubble && <ShareBubble style={styles.shareBubble} />}
                    </Animated.View>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={toggleOverlay}>
                            <FontAwesome5 name={'share-alt'} size={25} color={colors.asparagus} solid />
                        </TouchableOpacity>

                        <FontAwesome5 name={'heart'} size={25} color={colors.asparagus} />
                    </View>
                    <Text style={styles.name}>{recipe.name}</Text>
                    <Text style={styles.cuisine}>{recipe.cuisine}</Text>
                    <View style={styles.infoWrapper}>
                        <View style={styles.info}>
                            <FontAwesome5 name={'clock'} size={15} color={colors.offWhite} />
                            <Text style={styles.infoText}>{recipe.mins} mins</Text>
                        </View>
                        <View style={styles.info}>
                            <FontAwesome5 name={'list'} size={15} color={colors.offWhite} />
                            <Text style={styles.infoText}>6 ingredients</Text>
                        </View>
                        <View style={styles.info}>
                            <FontAwesome5 name={'fire'} size={15} color={colors.offWhite} />
                            <Text style={styles.infoText}>{recipe.cals} cal</Text>
                        </View>
                    </View>
                    <Text style={styles.heading}>Description</Text>
                    <Text style={styles.description}>
                        {recipe.description}
                    </Text>
                    <Text style={styles.heading}>Ingredients</Text>
                    {recipe.ingredients.map((ingredient, index) => (
                        <Text key={index} style={styles.ingredient}>
                            {`${index + 1}. ${ingredient}`}
                        </Text>
                    ))}
                    <Text style={styles.heading}>Instructions</Text>
                    <View style={styles.steps}>
                        <Text style={styles.step}>
                            {recipe.instructions}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={overlayVisible}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                >
                    <View style={styles.overlayContent}>
                        <View style={styles.mediaBox}>
                            <Text style={{ fontFamily: 'Manrope-SemiBold', fontSize: 20 }}>Like this Recipe?</Text>
                            <Text style={{ fontFamily: 'Manrope-SemiBold', fontSize: 20 }}>Share it with a friend!</Text>
                            <View style={styles.medias}>
                                <Pressable>
                                    <Instagram />
                                </Pressable>
                                <Pressable>
                                    <Messages />
                                </Pressable>
                                <Pressable>
                                    <Twitter />
                                </Pressable>
                                <Pressable>
                                    <Facebook />
                                </Pressable>
                            </View>

                            <Pressable
                                style={styles.button}
                                title="Close"
                                onRequestClose={toggleOverlay}
                                onPress={toggleOverlay}
                            >
                                <Text style={{ color: colors.offWhite }}>Close</Text>
                            </Pressable>
                        </View>

                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        position: 'absolute',
        top: 0,
        width: 420,
    },
    back: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        marginLeft: 20,
        marginTop: 40
    },
    recipe: {
        position: 'relative',
        top: 200,
        backgroundColor: 'white',
        width: { screenWidth },
        height: 1200,
        border: 'solid',
        borderTopRightRadius: 250,
        paddingTop: 30,
        paddingLeft: 20,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    shareBubble: {
        position: 'absolute',
        left: -5,
        bottom: 5,
        zIndex: 1,
    },
    name: {
        fontFamily: 'Manrope-Bold',
        fontSize: 30,
        paddingTop: 20,
        paddingBottom: 10,
    },
    cuisine: {
        fontFamily: 'Manrope-Bold',
        backgroundColor: colors.offBlack,
        color: colors.offWhite,
        width: 65,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 5,
    },
    infoWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 15,
        paddingTop: 10,
    },
    info: {
        backgroundColor: colors.asparagus,
        width: 130,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        flexDirection: 'row',
        gap: 5,
        marginTop: 10,
    },
    infoText: {
        fontFamily: 'Manrope-Regular',
        color: colors.offWhite,
    },
    heading: {
        fontFamily: 'Manrope-Bold',
        fontSize: 22,
        paddingTop: 20,
        paddingBottom: 10,
    },
    description: {
        fontFamily: 'Manrope-Regular',
        width: 300,
    },
    ingredient: {
        fontFamily: 'Manrope-Regular',
    },
    steps: {
        width: 330,
        rowGap: 15,
        paddingLeft: 15,
    },
    step: {
        fontFamily: 'Manrope-Regular',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayContent: {
        width: '80%',
        alignItems: 'center',
    },
    overlayText: {
        fontSize: 50,
        color: 'white',
    },
    mediaBox: {
        width: 366,
        height: 219,
        backgroundColor: colors.offWhite,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    medias: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '6%'
    },
    button: {
        width: 163,
        height: 32,
        backgroundColor: colors.davysGray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
});

export default RecipeInfo;