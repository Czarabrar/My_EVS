import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import CoverageChart from '../CoverageChart';
import ChartStyles from '../../../../Styles/CoverageChartStyles';
import { styles } from 'react-native-gifted-charts/src/BarChart/styles';
import NormalStyles from '../../../../Styles/CoverageNormal';
const CoverageWeekChart = () => {
  const stackData = [
    {
      stacks: [
        { value: 40000, color: '#90BE6D'},
        { value: 15000, color: '#F94144',borderTopLeftRadius:5 ,borderTopRightRadius:5},
      ],
      label: 'Feb25',
    },
    {
      stacks: [
        { value: 10000, color: '#90BE6D'},
        { value: 5000, color: '#F94144',borderTopLeftRadius:5 ,borderTopRightRadius:5},
      ],
      label: 'Feb26',
    },
    {
      stacks: [
        { value: 40000, color: '#90BE6D'},
        { value: 15000, color: '#F94144',borderTopLeftRadius:5 ,borderTopRightRadius:5},
      ],
      label: 'Feb27',
    },
    {
      stacks: [
        { value: 10000, color: '#90BE6D'},
        { value: 30000, color: '#F94144',borderTopLeftRadius:5 ,borderTopRightRadius:5},
      ],
      label: 'Feb28',
    },
  ];
  return (
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

  );
};



export default CoverageWeekChart;
