import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import List from "../models/listSchema";
import { ListInterface } from "../types/listInterface";

// Get all Lists
export const getLists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const lists = await List.find();
    if (!lists) {
      const error = new Error("Lists not found");
      throw error;
    }
    res.status(200).json({
      message: "Get all the Lists",
      payload: lists,
    });
  } catch (error) {
    console.error("Error in /lists route:", error);
    next(error);
  }
};
// Add List
export const addList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, date } = req.body;

    const newList: ListInterface = new List({
      title: title,
      description: description,
      date: date,
    });

    await newList.save();
    res.status(201).json({ message: "You added a new list", payload: newList });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get a single List by Id
export const getListById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const list = await List.findById(id);
    res.status(200).json({ message: "Get List by id", payload: list });
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      const error = new Error(`Not a vaild id`);
      next(error);
    } else {
      next(error);
    }
  }
};

// Update List
export const updateListById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedList = req.body;
    const updatedData = await List.findByIdAndUpdate(id, updatedList, {
      new: true,
    });
    if (!updatedData) {
      next(Error("List with this id not found"));
      return;
    }
    res
      .status(200)
      .json({ message: "You updated a List", payload: updatedData });
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      const error = new Error(`Not a vaild id`);
      next(error);
    } else {
      next(error);
    }
  }
};

// Delete List
export const deleteListById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const deletedList = await List.findByIdAndDelete(id);

    res.status(200).json({
      message: `You deleted a list with data:`,
      payload: deletedList,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
