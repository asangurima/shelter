
// SHELTER

'use strict'

const showSheltersTemplate = require('../templates/shelter-listing.handlebars')
// const store = require('../store.js')
//
const getSheltersSuccess = (data) => {
  console.log('sign up success- woohoo!' + data)

  const showSheltersHtml = showSheltersTemplate({ shelters: data.shelters })
  $('.content').html(showSheltersHtml)
}

const getSheltersFailure = () => {
  console.log('Could not retrieve shelter data-failure!')
  $('.content').text('Something went wrong. Unable to retrieve shelter data')
  setTimeout(() => {
    $('.content').html('')
  }, 3000)
}

// const signInSuccess = (responseData) => {
//   $('.auth-messages').text(`Successfully signed in!`)
//   setTimeout(() => {
//     $('.auth-messages').text(` Hello, ${responseData.user.email}!`)
//   }, 3000)
//   // this should make the sign out button display on succesful sign-in
//   $('#sign-out-form').removeClass('d-none')
//   $('#resetGame').removeClass('d-none')
//   $('#number-of-games').removeClass('d-none')
//   // $('.userMessages').html('x starts the game!')
//   $('.userMessages').html('')
//   const revealBoard = () => {
//     $('.game-board').removeClass('d-none')
//     $('.userMessages').html('x starts the game!')
//   }
//   $('#resetGame').on('click', revealBoard)
//   $('#change-pw-button').removeClass('d-none')
//   // this should make the sign in form disappear on succesful sign-in
//   $('#sign-in-form').addClass('d-none')
//   $('#signUpButton').addClass('d-none')
//   // save the token
//   store.user = responseData.user
// }
//
// const signInFailure = () => {
//   $('.auth-messages').text('Something went wrong, please try again!')
//   $('form').trigger('reset')
//   setTimeout(() => {
//     $('.auth-messages').html('')
//   }, 3000)
// }
//
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
  getSheltersSuccess,
  getSheltersFailure
  // signInSuccess,
  // signInFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
