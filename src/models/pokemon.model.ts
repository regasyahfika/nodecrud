import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
    name: String,
    gender: String,
    type: String,
    height: Number,
    width: Number,
    photo: String
});

// creating models
export const Pokemon = mongoose.model('Pokemon', PokemonSchema);