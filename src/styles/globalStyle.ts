import { fontFamilies } from "@/constants/fontFamilies";
import { darkMode, lightMode } from "@/utils/colors";
import DarkMode from "@/utils/darkMode.context";
import { useContext } from "react";
import { StyleSheet } from "react-native";

const {isDarkMode} = useContext(DarkMode)

export const globalStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: isDarkMode?darkMode.card:lightMode.card
    },
    
    text: {
        fontSize: 14,
        color: isDarkMode?darkMode.textWhite:lightMode.text,
        fontFamily:fontFamilies.regular
    },
    
    bottom:{
        borderRadius:12,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: isDarkMode?darkMode.card:lightMode.card,
        paddingHorizontal:16,
        paddingVertical: 16,
        flexDirection:'row',
        minHeight:56
    }

})