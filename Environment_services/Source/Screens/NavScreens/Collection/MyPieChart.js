import { PieChart } from "react-native-gifted-charts";
import { View ,Text, StyleSheet} from "react-native";   
import Svg, {Circle} from 'react-native-svg';  
const MyPieChart = () => {
  const pieData = [
    {value: 53, color: '#628C6E', text: '53%'},
    {value: 16, color: '#E56730', text: '16%'},
    {value: 14, color: '#52AAA4', text: '14%'},
    {value: 4, color: '#EE4B3C', text: '4%'},
    {value: 13, color: '#9F9F9F', text: '13%'},
];
  const DottedCircle = () => (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View>
        <Svg height="100%" width="190" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="#207D4C"
            strokeWidth="1.5"
            fill="transparent"
            strokeDasharray="2 15"
          />
        </Svg>
      </View>
      <View style={{position: 'absolute', paddingTop: 35}}>
        <Text style={{color: 'blue',fontFamily:'Inter-Medium'}}>114 MT</Text>
      </View>
    </View>
  );

   
    
    return(
        <View style={styles.parentContainer}>
          <View style={styles.piecontainer}>
           <PieChart
            data={pieData}
            showText
            textSize={12}
            
            textColor="#fff"
            radius={70}
            innerRadius={44}
            donut
            centerLabelComponent={DottedCircle}
          />
          </View>
      <View style={{justifyContent:'center',paddingLeft:10,flexWrap:'wrap',width:120,paddingTop:20}}>
        <View style={styles.pievaluesContainer}>
          <View style={styles.degradablecircle}></View>
        <Text style={styles.PieValueText}>BioDegradable Wet Waste</Text>
        </View>
        <View  style={styles.pievaluesContainer}>
          <View style={styles.nondegradablecircle}></View>
        <Text style={styles.PieValueText}>NonDegradable waste</Text>
        </View>
        <View  style={styles.pievaluesContainer}>
          <View style={styles.recyclablecircle}></View>
        <Text style={styles.PieValueText}>Recyclable Dry Waste</Text>
        </View>
        <View  style={styles.pievaluesContainer}>
          <View style={styles.householdcircle}></View>
        <Text style={styles.PieValueText}>Household {"\n"}Hazardous Waste</Text>
        </View>
        <View  style={styles.pievaluesContainer}>
          <View style={styles.otherscircle}></View>
        <Text style={styles.PieValueText}>Mixed waste/Others</Text>
        </View>
      </View>
    </View>
    )
};
const styles = StyleSheet.create({
  parentContainer:{
    flexDirection:'row'
  },
  piecontainer:{
    paddingLeft:20,
    paddingTop:20
  },
  degradablecircle:{
  backgroundColor:'#628C6E',
  marginTop:5,
  width: 10,
  height:10,
  borderRadius:5,
  marginRight:5,
  },
  nondegradablecircle:{
    backgroundColor:'#E56730',
    marginTop:5,
    width: 10,
    height:10,
    borderRadius:5,
    marginRight:5,
    },
    recyclablecircle:{
      backgroundColor:'#52AAA4',
      marginTop:5,
      width: 10,
      height:10,
      borderRadius:5,
      marginRight:5,
      },
      householdcircle:{
        backgroundColor:'#EE4B3C',
        marginTop:5,
        width: 10,
        height:10,
        borderRadius:5,
        marginRight:5,
        },
        otherscircle:{
          backgroundColor:'#9F9F9F',
          marginTop:5,
          width: 10,
          height:10,
          borderRadius:5,
          marginRight:5,
          },
  pievaluesContainer:{
    flexDirection:'row',
    marginLeft:22
  },
  PieValueText:{
    fontFamily:'DMSans-SemiBold',
    fontSize:10,
    color:'#000',
    paddingBottom:3,
},
})
export default MyPieChart;