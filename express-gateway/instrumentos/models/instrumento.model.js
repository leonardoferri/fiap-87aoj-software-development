module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      marca: String,
      modelo: String,
      instrumento: String,
      cor: String,
      valor: Number,
      alugado: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Instrumento = mongoose.model("instrumento", schema);
  return Instrumento;
};