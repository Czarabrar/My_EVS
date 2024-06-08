import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import CoverageChart from '../CoverageChart';
import ChartStyles from '../../../../Styles/CoverageChartStyles';
import { styles } from 'react-native-gifted-charts/src/BarChart/styles';
import data from '../../../../DataBase/CoverageDB.json'
import NormalStyles from '../../../../Styles/CoverageNormal';
const CoverageTodayChart = () => {
  const stackData = [
    {
      stacks: [
        { value: data.stackData.target, color: '#90BE6D'},
        { value: data.stackData.acheived, color: '#F94144',borderTopLeftRadius:4 ,borderTopRightRadius:4},
        
      ],
      spacing: 55,
      label: 'Feb28',
    },
  ];
  return (
<View>
    <View style={NormalStyles.CardContainer2}>
      <View style={ChartStyles.chartHeaderContainer}>
       
      <View style={ChartStyles.chartHeaderWrapper}>
        <View style={ChartStyles.mainHeaderText}>
        <Text style={ChartStyles.HeaderText}>D2D Household</Text>
        </View>

        <View style={ChartStyles.chartparams}>
        <View style={ChartStyles.chartSubContainer}>
        <View style={ChartStyles.redCircle}></View>
        <Text style={ChartStyles.textparams}>Target</Text>
      </View>
      <View style={ChartStyles.chartSubContainer}>
        <Text style={ChartStyles.greenCircle}>.</Text>
        <Text style={ChartStyles.textparams}>Acheived</Text>
        </View>
      </View>

      </View>
      </View>

    <View >
      <View style={ChartStyles.CardsvalueContainer}>
    <View style={ChartStyles.container}>
      <CoverageChart
        data={stackData}
        width={235}
        height={112}
        verticalLines={[1,2,3,4,5,6,7]}
        stepValue={10000}
        maxValue={60000}
        
      />
    </View>
    </View>
    </View>
    </View>

<View style={NormalStyles.CardContainer2}>
<View style={ChartStyles.chartHeaderContainer}>
       
       <View style={ChartStyles.chartHeaderWrapper}>
         <View style={ChartStyles.mainHeaderText}>
         <Text style={ChartStyles.HeaderText}>D2D Household - Lcv</Text>
         </View>
 
         <View style={ChartStyles.chartparams}>
         <View style={ChartStyles.chartSubContainer}>
         <View style={ChartStyles.redCircle}></View>
         <Text style={ChartStyles.textparams}>Target</Text>
       </View>
       <View style={ChartStyles.chartSubContainer}>
         <Text style={ChartStyles.greenCircle}>.</Text>
         <Text style={ChartStyles.textparams}>Acheived</Text>
         </View>
       </View>
 
       </View>
       </View>
<View >
<View style={ChartStyles.CardsvalueContainer}>
<View style={ChartStyles.container}>
<CoverageChart
  data={stackData}
  width={235}
  height={112}
  verticalLines={[1,2,3,4,5,6,7]}
  stepValue={10000}
  maxValue={60000}
/>
</View>
</View>
</View>
</View>

<View style={NormalStyles.CardContainer2}>
<View style={ChartStyles.chartHeaderContainer}>
       
       <View style={ChartStyles.chartHeaderWrapper}>
         <View style={ChartStyles.mainHeaderText}>
         <Text style={ChartStyles.HeaderText4}>D2D Household Commercial Establishment hcv</Text>
         </View>
 
         <View style={ChartStyles.chartparams}>
         <View style={ChartStyles.chartSubContainer}>
         <View style={ChartStyles.redCircle}></View>
         <Text style={ChartStyles.textparams}>Target</Text>
       </View>
       <View style={ChartStyles.chartSubContainer}>
         <Text style={ChartStyles.greenCircle}>.</Text>
         <Text style={ChartStyles.textparams}>Acheived</Text>
         </View>
       </View>
 
       </View>
       </View>
<View >
<View style={ChartStyles.CardsvalueContainer}>
<View style={ChartStyles.container}>
<CoverageChart
  data={stackData}
  width={235}
  height={112}
  verticalLines={[1,2,3,4,5,6,7]}
  stepValue={10000}
  maxValue={60000}
/>
</View>
</View>
</View>
</View>

</View>
  );
};



export default CoverageTodayChart;
