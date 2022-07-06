const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');


//codigo necesario para leer req.body o req.params
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

//registrar parciales {{ > }}

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req,res)=> {
	res.render('index' , {
		titulo: 'Inicio'
	});
	
})

app.get('/log-in' , (req,res)=> { //falta hacer el metodo post para el login
	res.render('log-in' , {
		titulo: 'Log In'
	});
	
	
})

app.get('/sobre-nosotros', (req,res)=> {
	res.render('sobre-nosotros' , {
		titulo: 'Sobre Nosotros'
	});
	
	
})


app.get('/como-comprar', (req,res)=> {
	res.render('como-comprar' , {
		titulo: 'Como Comprar'
	});
	
	
})

app.get('/productos', (req,res)=> {
	res.render('productos' , {
		titulo: 'Productos'
	});
	
	
})

app.get('/contacto', (req,res)=> {
	res.render('contacto' , {
		titulo: 'Contacto'
	});
	
	
})

app.get('/terms' , (req,res)=> {
	res.render('terms' , {
		titulo: 'Terminos y Condiciones'
	}); //deberia ser un estatico
	
	
	
})





app.listen(3000, () => {
	console.log('Servidor en puerto 3000');
	
})

