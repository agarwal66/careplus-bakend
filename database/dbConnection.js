import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://prateekkagarwal:huhiugiyiuygiuy7767@hospitalitycluster0.bbphnzw.mongodb.net/Hospitality-user-data?retryWrites=true&w=majority&appName=HospitalityCluster0"
    )
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
    
};
