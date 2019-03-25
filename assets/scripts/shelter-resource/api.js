
// SHELTER

'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createShelter = (formData) => {
  // console.log('data passed into AJAX req:', formData)
  return $.ajax({
    url: config.apiUrl + '/shelters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getShelters = () => {
  return $.ajax({
    url: config.apiUrl + '/shelters',
    method: 'GET'
  })
}

const getUserShelters = () => {
  return $.ajax({
    url: config.apiUrl + '/user-shelters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// how do I pass in the shelter id?
const getShelter = (id) => {
  return $.ajax({
    url: config.apiUrl + '/shelters/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updateShelter = (name, location, phone, beds) => {
//   return $.ajax({
//     url: config.apiUrl + `/shelters/${store.shelter.id}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'shelter': {
//         'name': name,
//         'location': location,
//         'phone_num': phone,
//         'avail_beds': beds
//       }
//     }
//   })
// }

const updateShelter = (data, id) => {
  // console.log('data')
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/shelters/' + id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data
  })
}

const deleteShelter = (id) => {
  // console.log('store:', store)
  return $.ajax({
    url: config.apiUrl + `/shelters/` + id,
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

module.exports = {
  createShelter,
  getShelters,
  getUserShelters,
  getShelter,
  updateShelter,
  deleteShelter
}
