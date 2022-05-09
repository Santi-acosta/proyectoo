let persona = {edad: 20, peso: 75, nombres: "pedro", apellidos: "perez perez"};
for (const llave in persona) {
        console.log(persona[llave]);
    }
persona["edad"] = 21;
console.log(persona);
