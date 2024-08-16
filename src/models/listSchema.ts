import { Schema, model } from 'mongoose'
import { ListInterface } from '../types/listInterface'

 const listSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date:{
        type: String,
        required: true,
    }
  },
  { timestamps: true }
)

export const List = model<ListInterface>('Lis', listSchema)

export default List