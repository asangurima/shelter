'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const shelterEvents = require('./shelter-resource/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // this "gets" all shelters on the front page without having to press a button
  shelterEvents.onGetShelters()
  // adds handlers for Authorization
  authEvents.addHandlers()
  // adds handlers for all shelter resource events
  shelterEvents.addHandlers()
})
