//Ejercicio 1 EloquentJavaScript

for(let i=0; i<=7; i++){
    let Contador="*".repeat(i);
    console.log(Contador);
}

/*//Ejercicio 2 EloquentJavaScript FizzBuzz/ parte 1: Fizz
for (let i = 0; i <= 100; i++){
    
    if(i%3!==0){
        console.log(i)
    }else if(i%3==0){
        console.log("Fizz");
    }
}*/

//Ejercicio 2 EloquentJavaScript FizzBuzz/ parte 2: Buzz
for (let i=0;i<=100;i++){
    if(i%5==0 && !i%3==0 ){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}