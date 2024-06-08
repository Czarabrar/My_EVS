import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const CoverageChart = ({ data, width, height,stepValue,maxValue, yAxisLabels=[],verticalLines = [] }) => {
 
  return (
    
    <View style={{ flex: 1 }}>
      <View style={styles.chartContainer}>
        <BarChart
        labelWidth={50}
          isAnimated={true}
          width={width}
          height={height}
          stackData={data}
          roundedTop
          barWidth={15}
          rulesType={'Dotted'}
          dashWidth={2}
          dashGap={3}
          yAxisLabelWidth={70}
          noOfSections={7}
          stepValue={stepValue}
          yAxisLabels={yAxisLabels}
          yAxisTextStyle={styles.axistext}
          maxValue={maxValue}
          
          // spacing={10}
        />
      </View>
      <View style={styles.verticalLinesContainer}>
        {verticalLines.map((line, index) => (
          <View
            key={index}
            style={[
              styles.verticalLine,
              {
                left: `${(index + 1) * (150 / (verticalLines.length + 1))}%`,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    paddingRight: 20,
  },
  verticalLinesContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 8,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex:-1,
    
  },
  verticalLine: {
    position: 'absolute',
    backgroundColor: 'grey',
    width: 0.6,
    height: '100%',
    // marginLeft:15,
    height:115
  },
  axistext:{
    fontFamily:'DMSans-SemiBold',
    fontSize:10,
    textAlign:'right',
    color:'#000'
  }
});

export default CoverageChart;
