
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    author: { type: String, required: true },
    quote: { type: String, required: true },
    year: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date},
});

QuoteSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
      this.createdAt = now;
    }

    next();
});

Quote = mongoose.model("Quote", QuoteSchema);
module.exports = Quote;
