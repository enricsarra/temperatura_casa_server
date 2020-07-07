//  Create and Deploy Your First Cloud Functions
//  https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// ************ per treballar local ************
// ************ fi per treballar local ************


exports.helloWorld = functions.https.onRequest((request, response) => {
    let dataAvui = new Date();
    let dataMostrada = ` ${dataAvui.getHours()}h${dataAvui.getMinutes()}min del ${dataAvui.getDate()}/Jul/${dataAvui.getFullYear()}`;

    let temperatura = 31;
    let texte = `<h1>Ara mateix (${dataMostrada}) a casa meva hi ha - ${temperatura}ºC  </h1><h2>Les darreres 12 hores han estat així</h2>
    <h2> 11-12-13-14-15-16-17-18-19-20-21-23</h2> 
    <p>No vuy perdre el temps buscan hora de aquí. El compte de firebase el crea als estats units i encara que decideixo europa no em fa cas.... Ja ho miraré si cal </p>`;
    response.send(texte);
});

const app = express();
app.use(cors({ origin: true }));

app.get('/temperatura', async(req, res) => {

    let dataAvui = new Date();
    let dataMostrada = ` ${dataAvui.getHours()}h${dataAvui.getMinutes()}min del ${dataAvui.getDate()}/Jul/${dataAvui.getFullYear()}`;

    let temperatura = 31;
    let texte = `<h1>Ara mateix (${dataMostrada}) a casa meva hi ha - ${temperatura}ºC  </h1><h2>Les darreres 12 hores han estat així</h2>
    <h2> 11-12-13-14-15-16-17-18-19-20-21-22</h2> 
    <p>No vuy perdre el temps buscan hora de aquí. El compte de firebase el crea als estats units i encara que decideixo europa no em fa cas.... Ja ho miraré si cal </p> <h3>Desde express</h3>`;

    res.send(texte);
});
exports.api = functions.https.onRequest(app);
//  petición: https........./api/temperatura