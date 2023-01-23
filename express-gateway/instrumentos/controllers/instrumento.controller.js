const db = require("../models");
const Instrumento = db.instrumentos;

// Create and Save a new Instrumento
exports.createOne = (req, res) => {

    // Validando a requisição
    if (!req.body.modelo) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio." });
        return;
    }

    // Criando um novo Instrumento
    const instrumento = new Instrumento({
        modelo: req.body.modelo,
        marca: req.body.marca,
        instrumento: req.body.instrumento,
        cor: req.body.cor,
        valor: req.body.valor,
        alugado: req.body.alugado ? req.body.alugado : false
    });

    // Salvando instrumento no BD
    instrumento
        .save(instrumento)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro aconteceu durante a criação de um novo instrumento."
            });
        });
};

// Retrieve all Instrumentos from the database.
exports.findAll = (req, res) => {
    const modelo = req.query.modelo;
    var condition = modelo ? { modelo: { $regex: new RegExp(modelo), $options: "i" } } : {};

    Instrumento.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro aconteceu ao trazer todos os instrumentos."
            });
        });
};

// Find a single Instrumento with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Instrumento.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Não encontrado o instrumento com o id: " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Erro ao procurar instrumento pelo id: " + id });
        });
};

// Update a Instrumento by the id in the request
exports.updateOne = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Dados para atualização não podem estar vazios."
        });
    }

    const id = req.params.id;

    Instrumento.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Não foi possível atualizar o instrumento com o id=${id}. Talvez o id não foi encontrado.`
                });
            } else res.send({ message: "Instrumento atualizado com sucesso." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro ao atualizar o instrumento com o id: " + id
            });
        });
};

// Delete a Instrumento with the specified id in the request
exports.deleteOne = (req, res) => {

    const id = req.params.id;

    Instrumento.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Não foi possível deletar o instrumento com o id=${id}. Talvez o id não foi encontrado.`
          });
        } else {
          res.send({
            message: "Instrumento deletado com sucesso."
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro: Não fi possível deletar o istrumento com o id: " + id
        });
      });
};

// Delete all Instrumentos from the database.
exports.deleteAll = (req, res) => {
    Instrumento.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} instrumentos deletados com sucesso!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu durante exclusão de todos os tutoriais."
      });
    });
};

// Find all instrumentos alugados 
exports.findAllAlugados = (req, res) => {
    Instrumento.find({ alugado: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro aconteceu durante busca."
      });
    });
};