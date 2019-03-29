import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin'
import SimpleSchema from 'simpl-schema'
import _ from 'lodash'
import moment from 'moment'

import Files from '../files/files'

// Get files
export const getFiles = new ValidatedMethod({
  name: 'getFiles',
  mixins: [CallPromiseMixin],
  validate: null,
  run({ selector, options }) {
    if (Meteor.isServer) {
      selector = selector || {}
      options = options || {}

      return Files.find(selector, options).fetch()
    }
  },
})

// Get file by id
export const getFileById = new ValidatedMethod({
  name: 'getFileById',
  mixins: [CallPromiseMixin],
  validate: null,
  run({ selector, options }) {
    if (Meteor.isServer) {
      selector = selector || {}
      options = options || {}

      return Files.findOne(selector, options)
    }
  },
})
