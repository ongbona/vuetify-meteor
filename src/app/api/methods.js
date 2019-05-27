import {Meteor} from 'meteor/meteor';

Meteor.methods({
  getEmployee(){
    Meteor._sleepForMs(5000)
    console.log('method called');

    let data = {name: 'A', gender: 'M'}

    return data
  }
})