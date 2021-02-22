let language=(prompt("Enter your language: es, de, en or fr")).toLocaleLowerCase;
if (language==='es'){
    window.console.log("Hello World translated in Spanish is: Hola Mundo");
}
else if (language==='de'){
    window.console.log("Hello World translated in German is: Hallo Welt");
}
else if (language==='fr'){
    window.console.log("Hello World translated in French is: Bonjour le monde");
}
else{
    window.console.log("Hello World translated in English is: Hellow World");
}