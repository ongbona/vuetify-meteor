import { Meteor } from 'meteor/meteor'
import { FilesCollection } from 'meteor/ostrio:files'

const Files = new FilesCollection({
  storagePath: () => {
    // return `${Meteor.rootPath}/fileUpload` // root path
    // return `${process.env.PWD}/fileUpload` // project path
    // return `${Meteor.absolutePath}/fileUpload` // project path
    return `/data/fileUpload`
  },
  collectionName: 'Files',
})

export default Files
