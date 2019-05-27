import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  type: {
    type: String,
  },
  code: {
    type: String,
  },
  name: {
    type: String,
  },
  enName: {
    type: String,
    optional: true,
  },
  parentId: {
    type: String,
    optional: true,
  },
  parents: {
    type: Object,
    optional: true,
  },
  'parents.province': {
    type: String,
    optional: true,
  },
  'parents.district': {
    type: String,
    optional: true,
  },
  'parents.commune': {
    type: String,
    optional: true,
  },
})
