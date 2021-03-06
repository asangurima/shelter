
// SHELTER

'use strict'

const showSheltersTemplate = require('../templates/shelter-listing.handlebars')
const showUserSheltersTemplate = require('../templates/user-shelter-listing.handlebars')
// const store = require('../store.js')

// getting shelters (user & public)
const getSheltersSuccess = (data) => {
  const showSheltersHtml = showSheltersTemplate({ shelters: data.shelters })
  $('#content').html(showSheltersHtml)
}

const refreshShelterSuccess = (data) => {
  $('.user-messages').text('Updated shelter data')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
}

const getUserSheltersSuccess = (data) => {
  const showUserSheltersHtml = showUserSheltersTemplate({ shelters: data.shelters })
  $('#content').html(showUserSheltersHtml)
  $('.user-refresh-msg').text('Updated shelter data.')
  setTimeout(() => {
    $('.user-refresh-msg').text('')
  }, 2000)
}

const getSheltersFailure = () => {
  $('.content').text('Something went wrong. Unable to retrieve shelter data.')
  setTimeout(() => {
    $('.content').html('')
  }, 3000)
}

// creating shelters: (find a better place to display this)
const createShelterSuccess = (data) => {
  $('form').trigger('reset')
  $('.user-messages').text('Shelter profile created!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 3000)
}
//   const showSheltersHtml = showSheltersTemplate({ shelters: data })
//   $('form').trigger('reset')
//   $('#content').html(showSheltersHtml)
// }

const createShelterFailure = () => {
  $('form').trigger('reset')
  $('.content').text('Something went wrong. Unable to create shelter.')
  setTimeout(() => {
    $('.content').text('')
  }, 3000)
}

// Delete Shelters:
const deleteShelterSuccess = (id) => {
  // console.log('on delete success- lets dispose of this modal')
  // $(`#deleteModal-${id}`).modal('dispose')
  $('.user-messages').text('Deleted!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 3000)
  $('.modal-backdrop').hide()
  $('body').removeClass('modal-open')
}

const deleteShelterFailure = () => {
  $('.modal-delete-msg').text('Something went wrong, please try again!')
  setTimeout(() => {
    $('.modal-delete-msg').text('')
  }, 2000)
}

const updateShelterSuccess = () => {
  $('form').trigger('reset')
  $('.user-messages').text('Successfully updated!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
  $('.modal-backdrop').hide()
  $('body').removeClass('modal-open')
}

const updateShelterFailure = () => {
  $('form').trigger('reset')
  $('.modal-update-msg').text('Something went wrong, please try again!')
  setTimeout(() => {
    $('.modal-update-msg').text('')
  }, 2000)
}

module.exports = {
  getSheltersSuccess,
  refreshShelterSuccess,
  getUserSheltersSuccess,
  getSheltersFailure,
  createShelterSuccess,
  createShelterFailure,
  deleteShelterSuccess,
  deleteShelterFailure,
  updateShelterSuccess,
  updateShelterFailure
}
