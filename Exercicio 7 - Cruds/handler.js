const fs = require("fs");
const { parse } = require("querystring");

var url = require('url');
var path = require('path');

var listCarros = [];
var listUsuarios = [];


var readFile = (file) => {
    let html = fs.readFileSync(__dirname + "/views/html/" + file, "utf8");
    return html;
};

var collectData = (rq, cal) => {
    var data = '';
    rq.on('data', (chunk) => {
        data += chunk;
    });
    rq.on('end', () => {
        let new_element = parse(data);
        cal(parse(data));
    });
}

module.exports = (request, response) => {
    if (request.method === 'GET') {

        let url_parsed = url.parse(request.url, true);
        switch (url_parsed.pathname) {
            case '/':
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(readFile("index.html"));
                break;
            case '/element':
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end("Elemento: " + url_parsed.query.id + " acessado!");

                break;
            case '/carros':
                let carros = readFile("carros.html");
                let carro_line = `<tr>
                <td>{$id}</th>
                <td>{$nome}</th>
                <td>{$marca}</th>
                <td>{$modelo}</th>
                <td>{$preco}</th>
                <td>{$valorLoc}</th>
                <td>{$dispo}</th>
                <td>{$naoDispo}</th>
              </tr>`;
                let linhasCarros = "";
                listCarros.forEach((c) => {
                    console.log(c);
                    linhasCarros += carro_line.replace("{$id}", c.codigo)
                        .replace("{$nome}", c.nome)
                        .replace("{$marca}", c.marca)
                        .replace("{$modelo}", c.modelo)
                        .replace("{$preco}", c.preco)
                        .replace("{$valorLoc}", c.valorLoc)
                        .replace("{$dispo}", c.disponivel);
                });
                carros = carros.replace("{$linhasCarros}", linhasCarros);
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(carros);
                break;
            
                case '/usuarios':
                    let usuarios = readFile("usuarios.html");
                    let usuarios_line = `<tr>
                    <td>{$nome}</th>
                    <td>{$sobrenome}</th>
                    <td>{$cnh}</th>
                    <td>{$dataNasc}</th>
                    <td>{$telefone}</th>
                    <td>{$email}</th>
                    <td>{$endereco}</th>
                  </tr>`;
                    let linhasUsuarios = "";
                    listUsuarios.forEach((u) => {
                        console.log(u);
                        linhasUsuarios += usuarios_line.replace("{$nome}", u.nome)
                            .replace("{$sobrenome}", u.sobrenome)
                            .replace("{$cnh}", u.cnh)
                            .replace("{$dataNasc}", u.cnh)
                            .replace("{$telefone}", u.telefone)
                            .replace("{$email}", u.email)
                            .replace("{$endereco}", u.endereco);
                    });
                    usuarios = usuarios.replace("{$linhasUsuarios}", linhasUsuarios);
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(usuarios);
                    break;    

            default:
                break;
        }
    } else if (request.method === 'POST') {

        switch (request.url.trim()) {
            case '/carros_save':
                collectData(request, (data) => {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    listCarros.push(data);
                    response.end("Elemento: " + data.nome + " cadastrado!");
                });
                break;
                case '/usuarios_save':
                collectData(request, (data) => {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    listUsuarios.push(data);
                    response.end("Elemento: " + data.nome + " cadastrado!");
                });
                break;
            default:
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Not a post action!');
                break;
        }
    }
};