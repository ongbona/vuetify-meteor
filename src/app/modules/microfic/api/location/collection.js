import { Mongo } from 'meteor/mongo'
import Schema from './schema'

const Location = new Mongo.Collection('microfis_location')
Location.attachSchema(Schema)
Location.timestamp()

export default Location
