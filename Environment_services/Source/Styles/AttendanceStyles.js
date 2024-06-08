import { StyleSheet } from "react-native";
const AttendanceStyles = StyleSheet.create({
    parentContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
    },
    headerContainer:{
        width:'100%',
        height:60,
        paddingLeft:32,
        
        backgroundColor:'#fff',
    
    },
    headerNavTitle:{
        flexDirection:'row', 
        marginTop:20,

    },
    navtitlecontainer:{
        width:65,
        paddingBottom:5,
        marginRight:30,
    },
    selectedTitle:{
    borderBottomWidth:3,
    width:65,
    marginRight:30,
    borderBottomColor:'#086972',
    },
    navTitle:{
        fontFamily:'Inter-Medium',
        fontSize:18,
        // paddingTop:6,
        color:'#000',
        // marginRight:30
        textAlign:'center'
    },
    renderContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
    },
    AttendanceTodayContainer:{
        width:'100%',
        height:'100%'
    },
    attendenceCardContainer:{
        width:'90%',
        height:240,
        backgroundColor:'#fff',
        marginHorizontal:20,
        marginTop:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        elevation:5,
        marginBottom:20
    },
    attendenceCardContainer2:{
        width:'90%',
        height:150,
        backgroundColor:'#fff',
        marginHorizontal:20,
        marginTop:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        elevation:5,
        marginBottom:20
    },
    cardHeaderContainer:{
        justifyContent:'center',
        alignContent:'center',
        borderBottomWidth:2,
        borderBottomColor:'#086972'
    },
    cardHeaderText:{
        textAlign:'center',
        fontFamily:'DMSans-SemiBold',
        paddingVertical:5,
        fontSize:16,
        color:'#086972'
    },
    childCardsContainer:{
        // backgroundColor:'#ff3',
        height:'100%',
        width: '100%',
        flexWrap:'wrap',
        flexDirection:'row',
        alignContent:'stretch',
        paddingBottom:50,
        borderRadius:20,
        marginLeft:5

    },
    childCards:{
        width:140,
        height:70,
        marginHorizontal:20,
        marginTop:20,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        flexDirection:'row',
        borderBottomWidth:0.4,
        borderRightWidth:0.4,
        borderRightColor:'grey',
        borderBottomColor:'grey'
        
    },
    childCardLogo:{
        backgroundColor:'#086972',
        width:'50%',
        justifyContent:'center',
        paddingLeft:15,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        
    },
    iconStyle:{
        color:'#fff',

    },
    childCardValue:{
        // backgroundColor:'#fff',
        width:'50%',
        justifyContent:'center',
        
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    iconText:{
        fontFamily:'Inter-SemiBold',
        color:'#000',
        textAlign:'center',
        fontSize:14
    }

})
export default AttendanceStyles;