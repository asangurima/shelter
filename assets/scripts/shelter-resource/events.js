// SHELTER
'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetShelters = () => {
  if (event) { event.preventDefault() }

  api.getShelters()
    .then(ui.getSheltersSuccess)
    .catch(ui.getSheltersFailure)
}

const onGetUserShelters = () => {
  event.preventDefault()
  api.getUserShelters()
    .then(ui.getUserSheltersSuccess)
    .catch(ui.getSheltersFailure)
}

// this is triggered on sign out! Need to clear the form.
const onRefreshShelters = (event) => {
  event.preventDefault()
  // console.log('Running on refresh events!')
  api.getShelters()
    .then(ui.getSheltersSuccess)
    .then($('.user-messages').text('Shelter data updated!', setTimeout(() => { $('.user-messages').text('') }, 3000)))
    .catch(ui.getSheltersFailure)
}

const onCreateShelter = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // console.log('before integering', formData)
  formData.shelter.avail_beds = parseInt(formData.shelter.avail_beds, 10)
  // console.log('after integering', formData)
  api.createShelter(formData)
    .then(ui.createShelterSuccess)
    .then(onGetUserShelters)
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
  // console.log('onUpdateShelter')
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).data('id')
  // console.log(id)
  api.updateShelter(formData, id)
    .then(ui.updateShelterSuccess)
    .then(onGetUserShelters)
    .catch(ui.updateShelterFailure)
}

const onDeleteShelter = (event) => {
  event.preventDefault()

  const id = $(event.target).data('id')
  api.deleteShelter(id)
    .then(ui.deleteShelterSuccess(id))
    .then(onGetUserShelters)
    .catch(ui.deleteShelterFailure)
}

const addHandlers = () => {
  $('#RefreshSheltersButton').on('click', onRefreshShelters)
  $('#create-shelter-form').on('submit', onCreateShelter)
  // $('#get-user-shelters-button').on('click', onGetUserShelters)
  $('#content').on('submit', '.update-shelter-form', onUpdateShelter)
  $('#content').on('click', '.delete-shelter-button', onDeleteShelter)
}

module.exports = {
  onGetShelters,
  onGetUserShelters,
  addHandlers
}
