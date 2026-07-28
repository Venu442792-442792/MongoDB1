
use ('ecomerce');

db.Products.updateOne(
    {
        category: "Electronics"
    },
    {
        $inc: {
            price: 100
        }
    }
);

//updating multiple products
db.Products.updateMany(
    {
        category: "Electronics"
    },
    {
        $inc: {
            price: 100
        }
    }
);