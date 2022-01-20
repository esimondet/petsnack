const router = require('express').Router();

const { Pet, User } = require('../../models');

// get all pets

router.get('/', (req, res) => {
    Pet.findAll({
    })
        .then(dbPetData => res.json(dbPetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;