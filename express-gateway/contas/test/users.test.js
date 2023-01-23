const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("/POST contas", () => {
  it("it should be create contas", (done) => {
    let contas = {
      contaname: "admintest",
      password: "admin123",
      email: "adim-test@gmail.com",
    };

    chai
      .request(app)
      .post("/api/contas/")
      .send(contas)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/PATCH/:id contas", () => {
  it("It shoudl UPDATE contas by id", (done) => {
    const id = 2;
    let contas = {
      id: id,
      contaname: "admintest-update",
      password: "admin123",
      email: "adim-test@gmail.com",
    };

    chai
      .request(app)
      .patch("/api/contas/" + id)
      .send(contas)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/GET contas", () => {
  it("It should GET all the contas", (done) => {
    chai
      .request(app)
      .get("/api/contas/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("It should GET contas by id", (done) => {
    const id = 1;
    chai
      .request(app)
      .get(`/api/contas/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/DELETE/:id contas", () => {
  it("It should DELETE contas by id", (done) => {
    const id = 3;
    chai
      .request(app)
      .delete("/api/contas/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
