import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const studentSchema: Schema = new Schema({
    nid: {
        type: Number,
        required: [true, "El D.N.I. es necesario"],
        unique: true
    },
    names: {
        type: String,
        required: [true, "Los nombres son necesarios"]
    },
    surnames: {
        type: String,
        required: [true, "Los apellidos son necesarios"]
    },
    dateOfBirth: {
        type: Date,
    },
    address: {
        type: String,
    },
    contactNumber: {
        type: String
    }
});

studentSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });

export default model("Student", studentSchema);