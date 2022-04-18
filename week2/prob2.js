const fs = require('fs');

textbook_data = {
    "name": "Strategy: An Introduction to Game Theory Third Edition",
    "author": "joel watson",
    "ISBN-13": "978-0393123876",
    "ISBN-10": "0393123871",
    "book_type": ["eTextbook", "Hardcover", "Paperback", "Loose Leaf"],
    "number_of_stock": {
        "new": [0 ,0 ,0 ,0],
        "used": [0 ,0 ,0 ,0]
    },
    "book_price":{
        "new": [0, 0, 0, 0],
        "used": [0, 0, 0, 0]
    },
    "shipment": ["airplane, ship, truck"],
    "shipment_price": [0, 0, 0],
    "available_country": ["korea"]
};

fs.writeFileSync("textbook.json", JSON.stringify(textbook_data, null, 2));