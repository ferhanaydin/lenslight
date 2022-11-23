import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Meraba Televole')
})

app.listen(port, () =>{
    console.log(`${port} numaralı Port dinleme başladı... `)
});