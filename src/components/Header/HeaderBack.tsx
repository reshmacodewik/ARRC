import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/colors';

interface HeaderProps {
    showBack?: boolean;
    title?: string;
    onBackPress?: () => void;
}

const HeaderBack: React.FC<HeaderProps> = ({
    showBack = false,
    title,
    onBackPress,
}) => {
    return (
        <View style={headerStyles.container}>

            <View style={headerStyles.left}>
                {showBack ? (
                    <TouchableOpacity
                        style={headerStyles.backBtn}
                        onPress={onBackPress}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <Icon name="chevron-back" size={20} color={COLORS.white} />
                    </TouchableOpacity>
                ) : (
                    <Image source={IMAGES.logo} style={headerStyles.logo} resizeMode="contain" />
                )}
                {title && (
                    <Text style={headerStyles.title}>{title}</Text>
                )}
            </View>

            {/* Right side */}
            {/* <View style={headerStyles.right}>
                <TouchableOpacity style={headerStyles.notifBtn}>
                    <Icon name="notifications-outline" size={22} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity style={headerStyles.avatarWrapper}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                        style={headerStyles.avatar}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 14,
        backgroundColor: 'transparent',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
    },
    backBtn: {
        width: 30,
        height: 30,
        borderRadius: 18,
        backgroundColor: '#BE9748',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        width: 70,
        height: 36,
    },
    title: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    notifBtn: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: 'rgba(255,255,255,0.06)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#C49C51',
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
});

export default HeaderBack;