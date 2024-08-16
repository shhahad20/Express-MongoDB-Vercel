import { Document } from 'mongoose'

export interface ListInterface extends Document {
  title: string
  description: string
  date: string
}

export type ListInput = Omit<ListInterface, '_id'>