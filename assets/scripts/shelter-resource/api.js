
// SHELTER

'use strict'

const config = require('../config.js')
const store = require('../store.js')
//
// const createShelter = () => {
//   return $.ajax({
//     url: config.apiUrl + '/shelters',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: ''
//   })
// }

const getShelters = () => {
  return $.ajax({
    url: config.apiUrl + '/shelters',
    method: 'GET'
  })
}

// Do i need this to just get shelters belonging to signed in user?
// const getUserShelters = () => {
//   return $.ajax({
//     url: config.apiUrl + '/shelters',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

// how do I pass in the shelter id?
// const getShelter = () => {
//   return $.ajax({
//     url: config.apiUrl + `/shelters/${store.shelter.id}`,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

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

const deleteShelter = (shelterId) => {
  // console.log('store:', store)
  return $.ajax({
    url: config.apiUrl + `/shelters/` + shelterId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  // createShelter,
  getShelters,
  // getUserShelters,
  // getShelter,
  // updateShelter,
  deleteShelter
}
