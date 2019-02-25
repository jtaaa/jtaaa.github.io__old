import { Schema } from 'mongoose';

const UserSchema = new Schema({
  googleId: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  name: {
    type: {
      familyName: {
        type: String,
        required: true,
      },
      givenName: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  gender: {
    type: String,
  },
  photos: {
    type: [ String ],
    default: [],
    required: true,
  },
  roles: {
    type: [ String ],
    default: [],
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default UserSchema;
