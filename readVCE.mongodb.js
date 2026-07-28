use ('ecommerce');

//db.products.find({price:{$lt:20}});

//db.products.find({$and :[{category:"Home"},{price:{$lt:20}}]});

// db.products.find({price : {$lt: 20}}, {_id:1, name:1, stock:1});




//{
   // use('ecommerce');

// db.products.find({category:"Electronics"});

// gt,lt,gte,lte

// db.products.find({price:{$lt:20}});

// db.products.find({$and :[{category:"Home"},{price:{$lt: 20}}]});

// db.products.find({price:{$lt:20}},{_id: 0,name:1,stock:1}); -projection

// db.products.find({price:{$lt : 20}}).sort({price:-1});

// db.products.find({price:{$gt:0}},{_id: 0,name:1,stock:1,price:1}).sort({price:-1});

// db.products.find({price:{$gt:0}},{_id: 0,name:1,stock:1,price:1}).sort({price:-1}).limit(1);

// db.products.find({price:{$gt:0}},{_id: 0,name:1,stock:1,price:1}).sort({price:-1}).limit(4).skip(2);
//  }


///update query

// db.products.updateMany(
//     {category:"Electronics"},
//     {$inc :{price:100}}
// );

// db.orders.deleteMany({price:{$lt:20}});

db.products(
    {1st stage/condition}, - category:Electronics
    {update } - {}
)