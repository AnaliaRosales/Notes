var Note = require('../models/Note.js');

module.exports = {
    list: async function (req, res) {
        const response = await Note.findAll()
        .then(function(data){
          const res = { data }
          return res;
        })
        .catch(error =>{
          const res = { error: error }
          return res;
        })
        res.json(response);
    },

    show: async function (req, res) {
        try {

            const { id } = req.params;
        
            const response = await Note.findOne({
              where: { id: id}
            })
            .then( function(data){
              const res = { data: data }
              return res;
            })
            .catch(error => {
              const res = { error: error }
              return res;
            })
            res.json(response);
        
          } catch (e) {
            console.log(e);
          }
    },

    /**
     * noteController.create()
     */
    create: async function (req, res) {

        try {
            const response = await Note.create({
                title : req.body.title,
                description : req.body.description,
                active : req.body.active
            })
            .then(function(data){
              const res = { data: data }
              return res;
            })
            .catch(error=>{
              const res = { error: error }
              return res;
            })
            res.json(response);
        
          } catch (e) {
            console.log(e);
          }
    },

    /**
     * noteController.update()
     */
    update: async function (req, res) {
        try {
            var id = req.params.id;
            var title = req.body.title;
            var description = req.body.description;
            var active = req.body.active === false ? false : true;
            const update = await Note.update({
              title, description, active
            },{
              where: { id: id}
            })

            const response = await Note.findOne({ where: {id: req.params.id} })
            .then(function(data){
              const res = { data: data }
              return res;
            })
            .catch(error=>{
              const res = { error: error }
              return res;
            })
            res.json(response);
        
          } catch (e) {
            console.log(e);
          }
    },

    /**
     * noteController.remove()
     */
    remove: async function (req, res) {
        try {

            const { id } = req.params;
        
            const response = await Note.destroy({
              where: { id: id }
            })
            .then( function(data){
              const res = { data: data }
              return res;
            })
            .catch(error => {
              const res = { error: error }
              return res;
            })
            res.json(response);
        
          } catch (e) {
            console.log(e);
          }
    }
};
