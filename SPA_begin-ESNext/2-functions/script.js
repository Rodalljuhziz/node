//2.1 Fonctions simples
const sayHello = () => {
    return console.log('Hello');
}

const sayMyName = (first, last) => {
    return console.log(first, last);
}

const sayMyAge = (age) => {
    return console.log(age);
}
sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: function() {      //en arrow function ça retourne empty
        console.log(this)
    }
};

object.showThis();

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => {
        console.log('Hello');
    },
    sayMyName: () => {
        console.log(`${odile.name.first} ${odile.name.last}`);
    },
    sayMyAge: () => {
        console.log(`${odile.age}`);
    }
    //sayHello: ...
    //sayMyName:...
    //sayMyAge:...
};

//odile.sayHello()
//odile.sayMyName()
//odile.sayMyAge()
