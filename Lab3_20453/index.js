//Autor: Filip Kłos 20453
//Dany kod jest wzięty z zadania 3, lekko zmodyfikowany, by pokazać działanie modułu string-length
//Moduł string-length służy do wyliczenia poprawnej długości stringa, nawet jezeli ma wielobajtowe znaki np. emotki
//Poniższy kod pokaze róznice pomiedzy natywnym liczeniem stringa a tym z modulu
const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    // Użycie utf-8, by poprawnie pokazać na stronie emotke
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    // Przykładowe zdanie z zadania 3 dodane z emotką
    const exampleString = "Hello, from node.js serwer 🦄!";
    
    // Uzycie natywnej funkcji w JS do wyliczenia długości podanego powyzej ciągu znaków
    const nativeLength = exampleString.length;
    
    // Importowanie string-lengtha oraz uzycie go do wyliczenia dlugosci powyszego ciagu znaków
    const { default: stringLength } = await import('string-length');
    const realLength = stringLength(exampleString);
    
    // Zwrócenie zdania na podstawie ktorej kod dziala oraz wyniki z wyliczania
    response.end(`Zdanie: "${exampleString}"\nNative-length: ${nativeLength}\nString-length: ${realLength}\n`);
});

server.listen(port, hostname, () => {
    util.log(v8.getHeapStatistics());
    console.log(path.basename(__filename));
    util.log(path.join(__dirname, 'uploads', 'images'));
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Modul string-length sluzy do wyliczenia poprawnej dlugosci stringa, nawet jezeli ma wielobajtowe znaki np. emotki`);
    console.log(`Jak sie uruchomi index nodem, to mozna wejsc na 127.0.0.1:8888, aby zobaczyc rezultat i porownac string-length z natywnym liczeniem dlugosci`)
});
