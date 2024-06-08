import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NormalStyles from '../../../Styles/CoverageNormal';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../../../DataBase/CoverageDB.json'
const CoverageToday = () => {
  const d2dHousehold = data.d2dHousehold;
  const sweeping = data.Sweeping_6;
  const d2dCommercial = data.d2dCommercial;
  const sweeping5 = data.Sweeping;
  return (
      <ScrollView style={NormalStyles.ParentContainer}>
    <View style={NormalStyles.CardContainer}>
      <View style={NormalStyles.CardsvalueContainer}>
        <View style={NormalStyles.TextHeaderContainer1}>
          <Text style={NormalStyles.HeaderText}>D2D HouseHold</Text>
        </View>
        <View style={NormalStyles.TextBodyContainer}>
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Total Target :</Text><Text style={NormalStyles.BodyValue}>{d2dHousehold.target}</Text></View> 
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Total Acheived :</Text><Text style={NormalStyles.BodyValue}>{d2dHousehold.acheived}</Text></View> 
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Percentage acheived :</Text><Text style={NormalStyles.BodyValue}>{d2dHousehold.percentage} %</Text></View> 
        </View>
      </View>
    </View>

    <View style={NormalStyles.CardContainer}>
      <View style={NormalStyles.CardsvalueContainer}>
        <View style={NormalStyles.TextHeaderContainer1}>
          <Text style={NormalStyles.HeaderText}>Sweeping - More Than 6 m</Text>
        </View>
        <View style={NormalStyles.TextBodyContainer}>
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Total Target :</Text><Text style={NormalStyles.BodyValue}>{sweeping.target}</Text></View> 
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Total Acheived :</Text><Text style={NormalStyles.BodyValue}>{sweeping.acheived}</Text></View> 
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Percentage acheived :</Text><Text style={NormalStyles.BodyValue}>{sweeping.percentage} %</Text></View> 
        </View>
      </View>
    </View>

    <View style={NormalStyles.CardContainer}>
      <View style={NormalStyles.CardsvalueContainer}>
        <View style={NormalStyles.TextHeaderContainer1}>
          <Text style={NormalStyles.HeaderText}>D2D Commercial Establishment</Text>
        </View>
        <View style={NormalStyles.TextBodyContainer}>
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Total Target :</Text><Text style={NormalStyles.BodyValue}>{d2dCommercial.target}</Text></View> 
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Total Acheived :</Text><Text style={NormalStyles.BodyValue}>{d2dCommercial.acheived}</Text></View> 
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Percentage acheived :</Text><Text style={NormalStyles.BodyValue}>{d2dCommercial.percentage} %</Text></View> 
        </View>
      </View>
    </View>
    <View style={NormalStyles.CardContainer}>
      <View style={NormalStyles.CardsvalueContainer}>
        <View style={NormalStyles.TextHeaderContainer1}>
          <Text style={NormalStyles.HeaderText}> Sweeping 5-6m</Text>
        </View>
        <View style={NormalStyles.TextBodyContainer}>
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Total Target :</Text><Text style={NormalStyles.BodyValue}>{sweeping5.target}</Text></View> 
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Total Acheived :</Text><Text style={NormalStyles.BodyValue}>{sweeping5.acheived}</Text></View> 
         <View style={NormalStyles.TextContainer}><Text style={NormalStyles.BodyText}>Percentage acheived :</Text><Text style={NormalStyles.BodyValue}>{sweeping5.percentage} %</Text></View> 
        </View>
      </View>
    </View>

    </ScrollView>
    
  )
}

export default CoverageToday