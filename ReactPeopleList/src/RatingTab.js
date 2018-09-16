import React, { Component } from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
// import EditButton from './EditButton';
// import EditMode from './EditMode';


class RatingTab extends Component {
   constructor () {
     super();
     this.state = {
       editMode:false
     };
     this.enterEditMode = this.enterEditMode.bind(this)
     this.leaveEditMode = this.leaveEditMode.bind(this)
   }

   enterEditMode() {
     this.setState({
      editMode: true
     });
   }

   leaveEditMode() {
     this.setState({editMode:false});
   }

   render() {
      const editButton = <View><Text>Rating: {this.props.rating}</Text><Button onPress={() => this.enterEditMode()} title="edit" /></View>;
      const editMode = <View><Text>Rating: {this.props.rating}</Text><Button onPress={() => this.leaveEditMode()} title="cancel" /></View>;

      return (
             <View style = {styles.item}>
                {this.state.editMode ? editMode : editButton}
             </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
      alignItems: 'center',
   }
})


export default RatingTab;
