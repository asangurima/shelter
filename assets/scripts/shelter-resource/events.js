// SHELTER
'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetShelters = (event) => {
  event.preventDefault()

  api.getShelters()
    .then(ui.getSheltersSuccess)
    .catch(ui.getSheltersFailure)
}

//
// const onSignIn = (event) => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = getFormFields(form)
//   api.signIn(formData)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onChangePassword = (event) => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = getFormFields(form)
//   api.changePassword(formData)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onSignOut = (event) => {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
const addHandlers = () => {
  $('#RefreshSheltersButton').on('click', onGetShelters)
  // $('#-form').on('submit', onSignIn)
  // $('#-form').on('submit', onChangePassword)
  // $('#-form').on('submit', onSignOut)
}

module.exports = {
  // onGetShelters,
  addHandlers
}
