import React, { Component } from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
// import EditButton from './EditButton';
// import EditMode from './EditMode';
import { Icon } from 'react-native-elements'

// <Icon
//   name='rowing' />


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
     console.log('wooooooha')
     console.log(this.props.rating)
     this.setState({newRating: parseInt(this.props.rating[0] +1)});
     console.log(this.state.newRating);
     // this.props.rating += 1;
     // console.log(this.props.rating += 1);
   }

   decreaseRating() {
     console.log('yeeeee')
     console.log(this.props.rating)
     this.setState({newRating: parseInt(this.props.rating[0] -1)});
     console.log(this.state.newRating);
   }

   render() {
      const editButton = <View><Text>Rating: {this.props.rating}</Text><Button onPress={() => this.enterEditMode()} title="edit" /></View>;
      const editMode = <View><View style = {styles.editMode}><Icon type='font-awesome' name='minus-square' onPress={() => this.decreaseRating()} /><Text>Rating: {this.state.newRating}</Text><Icon type='font-awesome' name='plus-square' onPress={() => this.increaseRating()} /></View><View><View style={styles.editMode}><Button onPress={() => this.leaveEditMode()} title="cancel" /><Button title="save" /></View></View></View>;

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
   }
})


export default RatingTab;
