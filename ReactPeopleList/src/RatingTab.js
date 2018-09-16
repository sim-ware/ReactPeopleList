import React, { Component } from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';


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
     console.log('enteringEditMode')
     console.log(this.state.editMode)
     this.setState({
      editMode: true
     });
   }

   leaveEditMode() {
     console.log(this.state.editMode)
     this.setState({editMode:false});
     console.log('leavingEditMode')
     console.log(this.state.editMode)
   }

   render() {
      const editButton = <Button onPress={() => this.enterEditMode()} title="edit" />;
      const editMode = <Button onPress={() => this.leaveEditMode()} title="cancel" />;
      console.log('inRender')
      console.log(this.state.editMode);
      return (
             <View style = {styles.item}>
                <Text>Rating: {this.props.rating}</Text>
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
