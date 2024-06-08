import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SegregationStyles from '../../../Styles/SegregationStyles'
import GroupStack from './GroupStack'
import ScrollableChart from '../Coverage/ScrollableChart'
const SegregationWeek = () => {

  const fulldata = [
    {
      stacks: [
        {value: 10, color: '#05afae'},
        {value: 5, color: '#086972'},
        {value: 15, color: '#90be6d'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z1',
    },
    {
      stacks: [
        {value: 10, color: '#05afae'},
        {value: 5, color: '#086972'},
        {value: 15, color: '#90be6d'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z1',
    },
    {
      stacks: [
        {value: 10, color: '#05afae'},
        {value: 5, color: '#086972'},
        {value: 15, color: '#90be6d'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z1',
    },
    {
      stacks: [
        {value: 5, color: '#05afae'},
        {value: 5, color: '#f4b63e'},
        {value: 5, color: '#086972'},
        {value: 5, color: '#f94144'},
        {
          value: 10,
          color: '#05afae',
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        },
      ],
      label: 'z2',
    },

    {
      stacks: [
        {value: 8, color: '#f94144'},
        {value: 5, color: '#086972'},
        {value: 5, color: '#f4b63e'},
        {value: 12, color: '#90be6d'},
        {
          value: 8,
          color: '#05afae',
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        },
      ],
      label: 'z3',
    },
    {
      stacks: [
        {value: 5, color: '#086972'},
        {value: 5, color: '#90be6d'},
        {value: 10, color: '#05afae'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z4',
    },
  ];


  return (
    <View style={SegregationStyles.CardContainer}>
    <View style={SegregationStyles.ProgressHeader}>
        <Text style={SegregationStyles.HeaderText2}>
          Division wise waste Collection vs Segregation
        </Text>
        <View style={SegregationStyles.chartHeaderWrapper}>
          <View style={SegregationStyles.chartHeaderWrapper}>
            <View style={SegregationStyles.groupbarCircleone}></View>
            <Text style={SegregationStyles.HeaderText2}>Target</Text>
          </View>
          <View style={SegregationStyles.chartHeaderWrapper}>
            <View style={SegregationStyles.groupbarCircletwo}></View>
            <Text style={SegregationStyles.HeaderText2}>Collection</Text>
          </View>
          <View style={SegregationStyles.chartHeaderWrapper}>
            <View style={SegregationStyles.groupbarCirclethree}></View>
            <Text style={SegregationStyles.HeaderText2}>Segregation</Text>
          </View>
        </View>
      </View>
    <View style={SegregationStyles.GroupBarContainer}>
      <GroupStack />
      </View>
    </View>
  )
}

export default SegregationWeek