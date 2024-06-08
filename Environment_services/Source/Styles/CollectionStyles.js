import { StyleSheet } from "react-native";
const CollectionStyles = StyleSheet.create({
    CardContainer:{
        width:'91%',
        height:300,
        backgroundColor:'#fff',
        marginHorizontal:20,
        paddingBottom:30,
        marginTop:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderTopColor:'#086972',
        elevation:7,
        marginBottom:10,
        
    },
    RentContainer:{
        width:'91%',
        height:250,
        backgroundColor:'#fff',
        marginHorizontal:20,
        paddingBottom:20,
        marginTop:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderTopColor:'#086972',
        elevation:7,
        marginBottom:10,
    },
    PieContainer:{
        paddingVertical:30,
        paddingLeft:20,
        flexDirection:'row',
        width:200,
        paddingTop:10,
    },
  
    chartHeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10
        },
        chartSubContainer:{
        flexDirection:'row',
        paddingLeft:40
        },
        chartHeaderWrapper:{
        flexDirection:'row',

        
        },
        headerTextContainer:{
        width:'60%'
        },
        headerIconContainer:{
           flex:1,
           alignItems:'flex-end',
           paddingTop:5
        },
        HeaderText:{
        fontFamily:'DMSans-SemiBold',
        fontSize:18,
        color:'#000',
        paddingTop:10,
        paddingLeft:20,
        },
        HeaderText2:{
            fontFamily:'DMSans-SemiBold',
            fontSize:16,
            color:'#000',
            paddingTop:15,  
        },
        IconWrapper:{
            flexDirection:'row',
        },
        chartparams:{
        flexDirection:'row',
        paddingTop:15,
        marginRight:10
        },
        textparams:{
        fontFamily:'DMSans-SemiBold',
        fontSize:12
        },
        CardsvalueContainer:{
            // paddingTop:20,
            // paddingBottom:40,
            // paddingLeft:8,
            // paddingRight:20,
            // marginBottom:40
            // justifyContent:'center',
            // paddingLeft:20,
            // width:100
            justifyContent:'center',
            marginLeft:40
            
        },
        CardsValueHolder:{
            // width:'70',
            
            
        },
        container:{
            // paddingBottom:20,
        },
        redCircle:{
            backgroundColor:'#F94144',
            marginTop:5,
            width: 10,
            height:10,
            borderRadius:5,
            marginRight:5,
        },
        greenCircle:{
            backgroundColor:'#1ED760',
            marginTop:5,
            width: 10,
            height:10,
            borderRadius:5,
            marginRight:5,
        },
        PieValueContainer:{
            paddingLeft:40,
            
        },
        PieValueBox:{
            flexDirection:'row',
            
        },
        VoiletCircle:{
            backgroundColor:'#6A87D4',
            marginTop:5,
            width: 10,
            height:10,
            borderRadius:5,
            marginRight:5,
        },
        orangeCircle:{
            backgroundColor:'#DA917E',
            marginTop:5,
            width: 10,
            height:10,
            borderRadius:5,
            marginRight:5,
        },
        purpleCircle:{
            backgroundColor:'#AB3FD9',
            marginTop:5,
            width: 10,
            height:10,
            borderRadius:5,
            marginRight:5,
        },
        PieValueText:{
            fontFamily:'Inter-Medium',
            fontSize:12,
            color:'#000',
            paddingBottom:10,

        },
        barContainer:{
            width:'100%',
            flex:1,
            height:180,
            
        },
        selectedIcon:{
            tintColor:'#086972',
            marginHorizontal:10
        },
        unselectedIcon:{
            tintColor:'#000',
            
            marginHorizontal:10

        }
        
})
export default CollectionStyles