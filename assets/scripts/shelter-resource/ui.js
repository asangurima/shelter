
// SHELTER

'use strict'

const showSheltersTemplate = require('../templates/shelter-listing.handlebars')
const showUserSheltersTemplate = require('../templates/user-shelter-listing.handlebars')
// const store = require('../store.js')
//
const getSheltersSuccess = (data) => {
  const showSheltersHtml = showSheltersTemplate({ shelters: data.shelters })
  $('#content').html(showSheltersHtml)
}

const getUserSheltersSuccess = (data) => {
  const showUserSheltersHtml = showUserSheltersTemplate({ shelters: data.shelters })
  $('#content').html(showUserSheltersHtml)
}

const getSheltersFailure = () => {
  $('.content').text('Something went wrong. Unable to retrieve shelter data')
  setTimeout(() => {
    $('.content').html('')
  }, 3000)
}

// how do I make only shelters of the current_user display??
const createShelterSuccess = (data) => {
  $('.user-messages').text('Shelter profile created!')
  const showSheltersHtml = showSheltersTemplate({ shelters: data })
  $('#content').html(showSheltersHtml)
}

const createShelterFailure = () => {
  $('.content').text('Something went wrong. Unable to create shelter.')
  setTimeout(() => {
    $('.content').html('')
  }, 3000)
}

module.exports = {
  getSheltersSuccess,
  getUserSheltersSuccess,
  getSheltersFailure,
  createShelterSuccess,
  createShelterFailure
}
