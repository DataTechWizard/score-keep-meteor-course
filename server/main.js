import { Meteor } from 'meteor/meteor'
import { Players } from './../imports/api/players'

Meteor.startup(() => {
  console.log(Players.find().fetch())
})

// () => {} this is a call back function
// on server Meteor.startup call back function will
// start to run as soon as server process finish starting
