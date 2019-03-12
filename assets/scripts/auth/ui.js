'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('.register-msg').text('Successfully registered!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.register-msg').html('')
  }, 3000)
}

const signUpFailure = () => {
  $('.register-msg').text('Something went wrong. Try a different email.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.register-msg').html('')
  }, 3000)
}

const signInSuccess = (responseData) => {
  $('.user-messages').text(`Successfully signed in!`)
  setTimeout(() => {
    $('.user-messages').text(` Hello, ${responseData.user.email}!`)
  }, 3000)
  // this should make the sign out button display on succesful sign-in
  $('.modal-sign-in').modal('toggle')
  $('.navbar-collapse').collapse('hide')
  $('.signed-out-nav').addClass('d-none')
  $('.signed-in-nav').removeClass('d-none')
  // $('.userMessages').html('x starts the game!')
  // $('.userMessages').html('')
  // const revealBoard = () => {
  //   $('.game-board').removeClass('d-none')
  //   $('.userMessages').html('x starts the game!')
  // }
  // $('#resetGame').on('click', revealBoard)
  // $('#change-pw-button').removeClass('d-none')
  // this should make the sign in form disappear on succesful sign-in
  // $('#sign-in-form').addClass('d-none')
  // $('#signUpButton').addClass('d-none')
  // save the token
  store.user = responseData.user
}

const signInFailure = () => {
  $('.sign-in-msg').text('Something went wrong, please try again!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.sign-in-msg').html('')
  }, 3000)
}

// const changePasswordSuccess = () => {
//   $('.password-messages').text('Successfully updated password.')
//   $('form').trigger('reset')
//   setTimeout(() => {
//     $('.password-messages').html('')
//   }, 3000)
// }
//
// const changePasswordFailure = () => {
//   $('.password-messages').text('Something went wrong, please try again!')
//   $('form').trigger('reset')
//   setTimeout(() => {
//     $('.password-messages').html('')
//   }, 3000)
// }
//
// const signOutSuccess = () => {
//   $('.auth-messages').text('Successfully signed out.')
//   $('form').trigger('reset')
//   $('#number-of-games').addClass('d-none')
//   $('.game-board').addClass('d-none')
//   $('#resetGame').addClass('d-none')
//   $('#change-pw-button').addClass('d-none')
//   $('#sign-in-form').removeClass('d-none')
//   $('#sign-out-form').addClass('d-none')
//   $('.userMessages').html('Please sign-in to play.')
//   $('#signUpButton').removeClass('d-none')
//   store.user = null
//   setTimeout(() => {
//     $('.auth-messages').html('')
//   }, 3000)
// }
//
// const signOutFailure = () => {
//   $('.auth-messages').text('Something went wrong, please try again!')
//   setTimeout(() => {
//     $('.auth-messages').html('')
//   }, 3000)
// }
//
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
