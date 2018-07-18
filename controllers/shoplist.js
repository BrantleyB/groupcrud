const express = require('express');
const router = express.Router();
const Shoplist = require('../models/shoplist.js');

router.get('/', (req, res)=>{
    Shoplist.find({}, (err, foundShoplist)=>{
        res.json(foundShoplist);
    });
});

router.delete('/:id', (req, res)=>{
    Shoplist.findByIdAndRemove(req.params.id, (err, deletedItem)=>{
        res.json(deletedItem);
    });
});

router.post('/', (req, res)=>{
    Shoplist.create(req.body, (err, createdItem)=>{
        res.json(createdItem);
    });
});

router.put('/:id', (req, res)=>{
    Shoplist.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedItem)=>{
        res.json(updatedItem);
    });
});

module.exports = router;
