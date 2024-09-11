import { Schema, model } from "mongoose";
import Joi from "joi";

export const TrolleyValidation = Joi.object({
    name:Joi.string().min(3).max(50).trim(),
    width:Joi.number(),
    height:Joi.number(),
    length:Joi.number(),
    payload:Joi.number(),
}
    
);

export interface ITrolley {
  name: string;
  width: number;
  height: number;
  length: number;
  payload: number;
}

const TrolleySchema = new Schema<ITrolley>({
  name: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  length: {
    type: Number,
  },
  payload: {
    type: Number,
  },
});

export const Trolley = model<ITrolley>('Trolley',TrolleySchema)
