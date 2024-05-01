module.exports = mongoose => {
    const schema = mongoose.Schema({
        code: String,
        name: String,
        price: Number,
        description: String,
        imageUrl: String,
        averageRating: Number,
    })
    
    schema.method('toJSON', function () {
        const {_v, _id, ...object} = this.toObject()
        object.id = _id;
        return object;
    })
    
    const Product = mongoose.model('products', schema);
    return Product;
}