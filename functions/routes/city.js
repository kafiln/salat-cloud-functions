/* eslint-disable consistent-return */
const router = require("express").Router();
const db = require("../config/db");

const toDto = lang => city => ({
  name: city.names[lang],
  id: city._id
});

const byName = (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0);

// Search by Id
router.get("/:id", async (req, res) => {
  const { lang } = req;
  const { id } = req.params;

  if (!parseInt(id)) {
    return res.status(400).json({ error: `Id should be a number` });
  }

  db.ref(`cities`)
    .once("value")
    .then(city => {
      // const cityResult = city.val().filter(e => e._id === id)[0];
      console.log(city);
      if (!city) {
        return res
          .status(404)
          .json({ error: `Id not found, no city with the given Id: ${id}` });
      }
      return res
        .status(200)
        .json(toDto(lang)(city.val().filter(e => e._id === id)[0]));
    })
    .catch(err => console.log(err));
});

// Gets all the cities
router.get("/", async (req, res) => {
  const { lang } = req;

  db.ref(`cities`)
    .once("value")
    .then(city => {
      if (!city) {
        return res
          .status(404)
          .json({ error: `Id not found, no city with the given Id` });
      }
      return res.status(200).send(
        city
          .val()
          .map(toDto(lang))
          .sort(byName)
      );
    })
    .catch(err => console.log(err));
});

module.exports = router;
