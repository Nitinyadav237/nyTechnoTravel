import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedTour, // Remove the quotes around savedTour, as it is already a variable
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Create. Try Again",
    });
  }
};
//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed To Update",
      error: error.message,
    });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTour = await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed To Delete",
      error: error.message,
    });
  }
};

//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not Found",
      error: error.message,
    });
  }
};

//getAll tour
export const getAllTour = async (req, res) => {
  //For pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not Found",
      error: error.message,
    });
  }
};

//get tour by search

export const getTourBySearch = async (req, res) => {
  // i means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  console.log(city);
  console.log(distance);
  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    console.log(tours);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not Found",
      error: error.message,
    });
  }
};

//get featured tour
export const getFeaturedTours = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not Found",
      error: error.message,
    });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Fetch",
      error: error.message,
    });
  }
};
