import { Request, Response } from "express";
import { TrolleyValidation, Trolley } from "../models/trolley";

//create trolley

const createTrolley = async (req: Request, res: Response) => {
  try {
    const { error } = TrolleyValidation.validate(req.body);
    if (error) {
      return res.status(400).send(error.details);
    }
    const trolley = new Trolley(req.body);
    await trolley.save();
    res.status(201).json(trolley);
  } catch (error) {
    res.status(400).json(error);
  }
};

//get trolley

const getTrolley = async (req: Request, res: Response) => {
  try {
    const trolleys = await Trolley.find();

    res.status(200).json(trolleys);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update Trolley

const updatetrolley = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { error } = TrolleyValidation.validate(req.body);

    if (error) {
      return res.status(400).send(error.details);
    }
    const updatedtrolley = await Trolley.findByIdAndUpdate(id, req.body);

    if (!updatedtrolley) {
      return res.status(404).json({ message: "Trolley not found" });
    }
    res.status(200).json(updatedtrolley);
  } catch (error) {
    res.status(400).json(error);
  }
};

// filter trolley

const filterTrolley = async (req: Request, res: Response) => {
  const {
    name,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    minLength,
    maxLength,
    minPayload,
    maxPayload,
  } = req.query;

  const filter: any = {};
  if (name) filter.name = name;
  if (minWidth) filter.width = { $gte: Number(minWidth) };
  if (maxWidth) filter.width = { ...filter.width, $lte: Number(maxWidth) };
  if (minHeight) filter.height = { $gte: Number(minHeight) };
  if (maxHeight) filter.height = { ...filter.height, $lte: Number(maxHeight) };
  if (minLength) filter.length = { $gte: Number(minLength) };
  if (maxLength) filter.length = { ...filter.length, $lte: Number(maxLength) };
  if (minPayload) filter.payload = { $gte: Number(minPayload) };
  if (maxPayload)
    filter.payload = { ...filter.payload, $lte: Number(maxPayload) };

  try {
    const trolleys = await Trolley.find(filter);
    res.status(200).json(trolleys);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createTrolley, getTrolley, updatetrolley, filterTrolley };
