import React from 'react';
import { View, StyleSheet ,Text,ScrollView} from 'react-native';
import CoverageChart from '../Coverage/CoverageChart'
import { PieChart } from "react-native-gifted-charts";
import CollectionStyles from '../../../Styles/CollectionStyles';
import { styles } from 'react-native-gifted-charts/src/BarChart/styles';

import Svg, { Circle } from "react-native-svg";
import HorizontalChart from './HorizontalChart';
const DottedCircle = () => (
  <View style={{flexDirection:'row',justifyContent:'center'}}>
  <View>
  <Svg height="100%" width="190" viewBox="0 0 100 100">
  <Circle cx="50" cy="50" r="40" stroke="#207D4C" strokeWidth="1.5" fill="transparent" strokeDasharray="2 10" />
</Svg>
</View>
<View style={{position:'absolute',paddingTop:60}}>
<Text style={{color:'blue',}}>114 MT</Text>
</View>
</View>


);
const CollectionToday = () => {
  const stackData = [
    {
      stacks: [
       
        { value: 20000, color: '#F94144',borderTopLeftRadius:7 ,borderTopRightRadius:7,},
      ],
      label: 'Feb28',
    },
  ];



  const data = [
    {value: 78, color: '#1ED760'},
        {value: 22, color: '#F94144', text: '22%'},
       
  ];

  


  return (
<ScrollView>
    <View style={CollectionStyles.CardContainer}>
      <Text style={CollectionStyles.HeaderText}>Target vs Actual Collection (Mt)</Text>
      <View style={CollectionStyles.PieContainer}>
      <PieChart
      data={data}
      showText
      textColor="#fff"
      
      radius={105}
      innerRadius={70}
      pieInnerComponentWidth={200}
      pieInnerComponentHeight={200}
      textSize={14} 
      donut
      centerLabelComponent={DottedCircle}
    />

   
    <View style={{justifyContent:'center'}}>
      <View style={CollectionStyles.PieValueContainer}>
      <View style={CollectionStyles.PieValueBox}>
      <View style={CollectionStyles.redCircle}></View>
      <Text style={CollectionStyles.PieValueText}>Pending</Text>
      </View>
      <View style={CollectionStyles.PieValueBox}>
        <View style={CollectionStyles.greenCircle}></View>
        <Text style={CollectionStyles.PieValueText}>Actual{"\n"}Collection</Text>
      </View>
      </View>
    </View>
    </View>
    </View>

    <View style={CollectionStyles.CardContainer}>
      <View style={CollectionStyles.chartHeaderContainer}>
      <View style={CollectionStyles.chartHeaderWrapper}>
        <Text style={CollectionStyles.HeaderText}>D2D Household</Text>
        <View style={CollectionStyles.chartparams}>
        <View style={CollectionStyles.chartSubContainer}>
        <View style={CollectionStyles.redCircle}></View>
        <Text style={CollectionStyles.textparams}>Target</Text>
      </View>
      </View>

      <View style={CollectionStyles.chartHeaderWrapper}>
        <View  style={CollectionStyles.chartparams}>
        <Text style={CollectionStyles.greenCircle}>.</Text>
        <Text style={CollectionStyles.textparams}>Acheived</Text>
        </View>
      </View>
      </View>
      </View>
    <View >
      <View style={CollectionStyles.CardsvalueContainer}>
    <View style={CollectionStyles.container}>
      <HorizontalChart
        data={stackData}
        width={235}
        height={192}
        // verticalLines={[1,2,3,4,5,6,7]}
      />
    </View>
    </View>
    </View>
    </View>

</ScrollView>
  );
};



export default CollectionToday;
