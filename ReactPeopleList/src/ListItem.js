import React, { Component } from 'react';
import { Button, View, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';


class ListItem extends Component {
   render() {
      return (
             <View style = {styles.item}>
                <Button style = {styles.butoon}
                  raised={false}
                  title={this.props.name}
                  onPress={() => {
                    this.props.navigation.navigate('Details', {
                      itemId: 95,
                      otherParam: this.props.name,
                    });
                  }}
                />
             </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
      // backgroundColor:'black'
   },
   butoon: {
      color:'black'
   }
})


export default withNavigation(ListItem);
