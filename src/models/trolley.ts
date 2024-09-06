import { Schema, model } from "mongoose";
import Joi from "joi";

export const TrolleyValidation = Joi.object({
    name:Joi.string().min(3).max(50).trim().required(),
    width:Joi.number().required(),
    height:Joi.number().required(),
    length:Joi.number().required(),
    payload:Joi.number().required(),
}
    
);

interface ITrolley {
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
