// SHELTER
'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetShelters = () => {
  api.getShelters()
    .then(ui.getSheltersSuccess)
    .catch(ui.getSheltersFailure)
}

const onRefreshShelters = (event) => {
  event.preventDefault()

  api.getShelters()
    .then(ui.getSheltersSuccess)
    .catch(ui.getSheltersFailure)
}

const onCreateShelter = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log('before integering', formData)
  formData.shelter.avail_beds = parseInt(formData.shelter.avail_beds, 10)
  console.log('after integering', formData)
  api.createShelter(formData)
    .then(ui.createShelterSuccess)
    .catch(ui.createShelterFailure)
}

// const onGetShelter = (event) => {
//   event.preventDefault()
//
//   api.getShelter()
//     .then(ui.getShelterSuccess)
//     .catch(ui.getShelterFailure)
// }

const onUpdateShelter = (event) => {
  event.preventDefault()

  api.updateShelter()
    .then(ui.updateShelterSuccess)
    .catch(ui.updateShelterFailure)
}

const onDeleteShelter = (event) => {
  event.preventDefault()

  api.deleteShelter()
    .then(ui.deleteShelterSuccess)
    .catch(ui.deleteShelterFailure)
}

const addHandlers = () => {
  $('#RefreshSheltersButton').on('click', onRefreshShelters)
  $('#create-shelter-form').on('submit', onCreateShelter)
  // $('#get-shelter-form').on('submit', onGetShelter)
  $('#update-shelter-form').on('submit', onUpdateShelter)
  $('#delete-shelter-form').on('submit', onDeleteShelter)
  // $('#-form').on('submit', onUpdateShelter)
}

module.exports = {
  onGetShelters,
  addHandlers
}
