const user = require("../models/userModel");
const userModel = require("../models/userModel");

const exists = (utilisateur) => {
  return userModel.findOne(
    {
      pass: utilisateur.pass,
      contact: { mail: utilisateur.mail },
    },
    (user, err) => {
      if (err) {
        console.log(err);
      }
      return user;
    }
  );
};

const addUser = (utilisateur) => {
  const newUser = new userModel({
    nom: utilisateur.nom,
    prenom: utilisateur.prenom,
    pass: utilisateur.pass,
    contact: {
      mail: utilisateur.contact.mail,
      tel: utilisateur.contact.tel,
    },
    adresse: {
      idVille: utilisateur.adresse.idVille,
      adresse: utilisateur.adresse.adresse,
    },
  });
  newUser.save();

  return newUser;
};

exports.exists = exists;
exports.addUser = addUser;
