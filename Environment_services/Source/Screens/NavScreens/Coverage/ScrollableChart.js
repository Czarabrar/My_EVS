import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BarChart } from 'react-native-gifted-charts';

const ScrollableChart = ({ data, width, height,stepValue,maxValue, yAxisLabels=[],verticalLines = [] }) => {
 
  return (
    <ScrollView horizontal={true}>
    <View style={{ flex: 1 }}>
      <View style={styles.chartContainer}>
        <BarChart
          width={width}
          height={height}
          stackData={data}
          isAnimated={true}
          animationDuration={1000}
          barWidth={20}
          roundedTop
          roundedBottom
          rulesType={'solid'}
          yAxisLabelWidth={40}
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
    </ScrollView>
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
    left: -7,
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
    // height: '100%',
    // marginLeft:15,
    height:120
  },
  axistext:{
    fontFamily:'DMSans-SemiBold',
    color:'#000'
  }
});

export default ScrollableChart;
