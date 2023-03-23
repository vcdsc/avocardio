import axios from "axios";

// This is just so we do not need to repeat the full headers every time.
// const config = {
//   headers: {
//     "X-RapidAPI-Key": "6f5b539b57msh0b7a1cfc8bbb294p1e1a40jsndd2475bad2c3",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

const config = {
  headers: {

    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "",
  },
};

const API = {
  getBodyParts: function () {
    return axios
      .get("http://localhost:3000/bodyPartList", config)
      .then(function (response) {
        return response.data;
      });
  },
  getExercisesByBodyPart: function (bodypart) {
    return axios
      .get(`http://localhost:3000/exercises/?bodyPart=${bodypart}`, config)
      .then(function (response) {
        return response.data.slice(0, 3);
      });
  },
};

export default API;
