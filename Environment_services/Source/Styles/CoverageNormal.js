import { StyleSheet } from "react-native";
const NormalStyles = StyleSheet.create({

    ParentContainer:{
        width:'100%',
        height:'100%',
        // borderWidth:1
    },
    
    CardContainer:{
        width:'90%',
        height:207,
        backgroundColor:'#fff',
        marginHorizontal:20,
        marginTop:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderTopWidth:8,
        borderTopColor:'#086972',
        elevation:7,
        marginBottom:15,
    },
    CardContainer2:{
        width:'90%',
        height:207,
        backgroundColor:'#fff',
        marginHorizontal:20,
        marginTop:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        // borderTopWidth:8,
        // borderTopColor:'#086972',
        elevation:7,
        marginBottom:15,
        // borderWidth:1
    },
    CardsvalueContainer:{
        padding:20
    },
    TextHeaderContainer1:{
        paddingTop:10,
        paddingBottom:10,
    },
    HeaderText:{
        fontFamily:'DMSans-SemiBold',
        color:'#000',
        fontSize:18,
        paddingBottom:10
    },
    TextBodyContainer:{
        
    },
    TextContainer:{
        flexDirection:'row'
    },
    BodyText:{
        fontFamily:'Inter-Medium',
        paddingBottom:12,
        fontSize:14,
        color:'#086971',
        paddingRight:10,
    },
    BodyValue:{
        fontFamily:'Inter-Medium',
        fontSize:14,
        color:'#000'
    }
})
export default NormalStyles;