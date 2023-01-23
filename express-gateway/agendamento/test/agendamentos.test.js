const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("/POST agendamentos", () => {
  it("it should be create agendamentos", (done) => {
    let agendamentos = {
      agendamentoname: "admintest",
      password: "admin123",
      email: "adim-test@gmail.com",
    };

    chai
      .request(app)
      .post("/api/agendamentos/")
      .send(agendamentos)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/PATCH/:id agendamentos", () => {
  it("It shoudl UPDATE agendamentos by id", (done) => {
    const id = 2;
    let agendamentos = {
      id: id,
      agendamentoname: "admintest-update",
      password: "admin123",
      email: "adim-test@gmail.com",
    };

    chai
      .request(app)
      .patch("/api/agendamentos/" + id)
      .send(agendamentos)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/GET agendamentos", () => {
  it("It should GET all the agendamentos", (done) => {
    chai
      .request(app)
      .get("/api/agendamentos/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("It should GET agendamentos by id", (done) => {
    const id = 1;
    chai
      .request(app)
      .get(`/api/agendamentos/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/DELETE/:id agendamentos", () => {
  it("It should DELETE agendamentos by id", (done) => {
    const id = 3;
    chai
      .request(app)
      .delete("/api/agendamentos/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
