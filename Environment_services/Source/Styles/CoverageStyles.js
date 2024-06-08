import { StyleSheet } from "react-native";
const CoverageStyles = StyleSheet.create({
    parentContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
    },
    headerWrapper:{
        flexDirection:'row'
    },
    headerContainer:{
        width:'70%',
        height:60,
        backgroundColor:'#fff',
        paddingLeft:32,
    },
    navtitlecontainer:{
        width:62,
        paddingBottom:3,
        marginRight:30,
    },
    headerNavTitle:{
        flexDirection:'row', 
        marginTop:20,
        backgroundColor:'#fff'
    },
    selectedTitle:{
    borderBottomWidth:3,
    marginRight:30,
    paddingBottom:3,
    borderBottomColor:'#086972',
    width:62
    },
    navTitle:{
        fontFamily:'Inter-SemiBold',
        fontSize:18,
        color:'#000',
    },
    renderContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
    },
    navIconsContainer:{
        marginLeft:33,
        marginTop:20,
        width:63,
        height:28,
        alignItems:'center'
        // right:20,
        
    },
    navIcons:{
        flexDirection:'row',
        borderWidth:0.2,
        borderColor:'grey',
        borderRadius:3,
    },
    selectedIcon:{
        backgroundColor:'#086972',
        borderRadius:3,
        justifyContent:'center',
    },
    iconStyle:{
        color:'#000',
        padding:2,
    },
    selectedIconStyle:{
        backgroundColor:'#086972',
        // color:'#fff',
        color:'#fff',
        justifyContent:'center'
        // borderRadius:5,
    },
  



})
export default CoverageStyles;