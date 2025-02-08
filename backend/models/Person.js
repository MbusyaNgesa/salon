// models/Person.js
import mongoose from "mongoose";
import Person from "./models/Person.js";
const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  favoriteFoods: { type: [String], default: [] },
  email: { type: String, unique: true },
});

const Person = mongoose.model("Person", PersonSchema);
export default Person;
