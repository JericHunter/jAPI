const express = require('express');
const router = express.Router();
const Quote = require('../models/quotes.js')

// GET
router.get("/", (req, res) => {
    Quote.find({}).then(quotes => {
        res.json( quotes );
    })
    .catch(err => {
        console.log(err.message);
        res.json({ 'no quotes found, message: ': err.message });
    })
})

router.get("/title", function(req, res) {
    Quote.findOne({ title: req.params.title }).lean()
    .then(quote => {
        console.log(quote)
        res.json({ 'author': quote.author, 'quote': quote.quote,
                    'year': quote.pubYear,
        });
    })
    .catch(err => {
        console.log(err);
    });
});

// ADD
router.post("/add/quote", (req, res) => {
    const quote = new Quote(req.body);
    quote.save(function(err, quote) {
        console.log(req.body.title)
        console.log(err)
        res.json({'addition: ': 'success', 'quote: ': quote})
    });
});

// DELETE
router.delete("/delete/:quote", (req, res) => {
    Quote.findOneAndRemove({author: req.params.author}, (err, Quote) => {
        res.json({'removal:': 'success', 'quote: ': req.params.quote})
    });
})

// UPDATE
router.post("/update/quote", (req, res) => {
    Quote.findOne({_id: req.body.id}).exec().then(function(book) {
        quote.author = req.body.title || quote.author;
        console.log(`updated quote: ${req.body.author}`)
        res.json({'update: ': 'success', 'quote updated: ': quote})
        return quote.save();
    }).catch(function(err) {
        console.log(err)
    });
})

module.exports = router;
