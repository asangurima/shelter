'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('.register-msg').text('Successfully registered!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.register-msg').text('')
  }, 2000)
}

const signUpFailure = () => {
  $('.register-msg').text('Something went wrong. Try a different email.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.register-msg').text('')
  }, 2000)
}

const signInSuccess = (responseData) => {
  $('.user-messages').text(`Successfully signed in!`)
  setTimeout(() => {
    $('.user-messages').text(` Hello, ${responseData.user.email}!`)
  }, 2000)
  // Closes sign-in modal on successful sign in
  $('.modal-sign-in').modal('toggle')
  // This toggles the navbar closed on sign-in
  $('.navbar-collapse').collapse('hide')
  // hides signed-out view
  $('.signed-out-nav').addClass('d-none')
  // this should make the sign in view display on succesful sign-in
  $('.signed-in-nav').removeClass('d-none')

  // const revealBoard = () => {
  //   $('.game-board').removeClass('d-none')
  //   $('.userMessages').html('x starts the game!')
  // }

  // save the token
  store.user = responseData.user
}

const signInFailure = () => {
  $('.sign-in-msg').text('Something went wrong, please try again!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.sign-in-msg').text('')
  }, 2000)
}

const changePasswordSuccess = () => {
  $('.change-pw-msg').text('Successfully updated password.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.password-messages').text('')
  }, 2000)
}

const changePasswordFailure = () => {
  $('.change-pw-msg').text('Something went wrong, please try again!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.password-messages').text('')
  }, 2000)
}

const signOutSuccess = () => {
  $('.user-messages').text('Goodbye!')
  // $('#change-pw-button').addClass('d-none')
  $('.navbar-collapse').collapse('hide')
  $('.signed-out-nav').removeClass('d-none')
  $('.signed-in-nav').addClass('d-none')

  store.user = null
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
}

const signOutFailure = () => {
  $('..user-messages').text('Something went wrong, please try again!')
  setTimeout(() => {
    $('.auth-messages').text('')
  }, 2000)
}
//
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
