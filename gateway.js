const fs = require('fs')
const http = require('http')
const lines = fs.readFileSync('.env', 'utf-8').split('\n').filter(Boolean)

let envs = lines.reduce((valorAnterior, valorActual, indice, vector) => {
	let palabras = valorActual.split('=')
	valorAnterior[palabras[0]] = palabras[1]
	return valorAnterior
}, {})

const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const morgan = require('morgan')
app.use(morgan('tiny'))

// APIS
app.use('/api/ppl', proxy({ 
  pathRewrite: {'^/api/ppl' : '/api/ppl'},
  target: `http://localhost:${envs['PPL_PORT']}` 
}))

app.use('/api/login', proxy({
  pathRewrite: {'^/api/login' : '/api/login'}, 
  target: `http://localhost:${envs['LOGIN_PORT']}` 
}))

app.use('/api/att', proxy({
  pathRewrite: {'^/api/att' : '/api/att'}, 
  target: `http://localhost:${envs['ATT_PORT']}`,
  ws: true,
  changeOrigin:true,
  secure: false
}))

// front
app.use('/assessment/estudiantes', proxy({
  target: `http://localhost:${envs['FRONT_PORT']}`,
  pathRewrite: {'^/ppl/estudiantes' : '/ppl/estudiantes'}
}))

app.use('/assessment/profesores', proxy({
  target: `http://localhost:${envs['FRONT_PORT']}`,
  pathRewrite: {'^/assessment/profesores' : '/assessment/profesores'}
}))

app.use('/att/profesores', proxy({
  target: `http://localhost:${envs['FRONT_PORT']}`,
  pathRewrite: {'^/att/profesores' : '/att/profesores'}
}))

app.use('/att/estudiantes', proxy({
  target: `http://localhost:${envs['FRONT_PORT']}`,
  pathRewrite: {'^/att/estudiantes' : '/att/estudiantes'}
}))

app.use('/', proxy({
  target: `http://localhost:${envs['FRONT_PORT']}`,
  pathRewrite: {'^/' : '/'}
}))

app.listen(envs['MICROSERVICIO_PORT'], () => {
    console.log('Proxy listening on port 8000')
});