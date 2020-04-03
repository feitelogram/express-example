const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        message: "I'm sorry, human. But this is not your fancy store.",
        thisIsAClothingStore: false,
        costOfADressAtExpressInDollars: 88,
        expressIsSlightlyOverPriced: ["true", "but so are many stores", "slave labor, bruh"]
    })
    })

app.listen(3000, () => console.log('The store is open!'))