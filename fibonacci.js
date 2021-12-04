const promt=require("prompt-sync")();
console.clear();
console.log("Aplicacion para imprimir FIBONACCI \nDesarrollado por : Martin Anduaga");
var a=0,b=1,c=0,limite=0;
limite=promt("Escribir el limite de la serie --> ");
console.log(limite);
for(;;c=a+b){
    a=b;
    b=c;
    if(c>limite)
        break;
    process.stdout.write(c+" ");
}