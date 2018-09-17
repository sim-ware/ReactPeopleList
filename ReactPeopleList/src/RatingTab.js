import React, { Component } from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
// import EditButton from './EditButton';
// import EditMode from './EditMode';
import { Icon } from 'react-native-elements'
const myModule = require('../Firebase');


class RatingTab extends Component {
   constructor () {
     super();
     this.state = {
       editMode:false,
       newRating: 0
     };
     this.enterEditMode = this.enterEditMode.bind(this)
     this.leaveEditMode = this.leaveEditMode.bind(this)
     this.increaseRating = this.increaseRating.bind(this)
     this.decreaseRating = this.decreaseRating.bind(this)
     this.saveRating = this.saveRating.bind(this)
   }

   enterEditMode() {
     this.setState({
      editMode: true
     });
   }

   leaveEditMode() {
     this.setState({editMode:false});
   }

   increaseRating() {
     this.setState({newRating: parseInt(this.state.newRating + 1)});
   }

   decreaseRating() {
     this.setState({newRating: parseInt(this.state.newRating - 1)});
   }

   saveRating() {
     name = String(this.props.name);
     let key = name.substr(0,1).toLowerCase().charCodeAt(0) - 96;
     String(key).length == 1 ? key='0'+key : key=key
     let nRat = (parseInt(this.props.rating) + parseInt(this.state.newRating))
     const db = myModule.db;
     db.collection("people").doc(String(key)).update({
       "rating": nRat
     })
     this.setState({editMode:false});
   }

   render() {
      const editButton = <View><Text>Rating: {this.props.rating}</Text><Button onPress={() => this.enterEditMode()} title="edit" /></View>;
      const editMode = <View><View style = {styles.editMode}><Icon type='font-awesome' name='minus-square' onPress={() => this.decreaseRating()} /><Text>Rating: {(this.state.newRating == 0) ? this.props.rating : (parseInt(this.props.rating) + parseInt(this.state.newRating))}</Text><Icon type='font-awesome' name='plus-square' onPress={() => this.increaseRating()} /></View><View><View style={styles.editMode}><Button onPress={() => this.leaveEditMode()} title="cancel" /><Button onPress={() => this.saveRating()}title="save" /></View></View></View>;

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
   },
   editMode: {
      flexDirection: 'row',
      paddingHorizontal: 20,
   }
})


export default RatingTab;
