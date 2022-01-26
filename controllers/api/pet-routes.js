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
router.post('/', (req, res) => {
    Pet.create({
        // not sure if the title part is needed
        title: req.body.title,
        pet_name: req.body.pet_name,
        species: req.body.species,
        breed: req.body.breed,
        // not sure if the image part is needed
        pet_image: req.body.pet_image,
        user_id: req.body.user_id
    })
})

module.exports = router;