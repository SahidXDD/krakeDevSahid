esMayuscula=function(c){
    let cd=c.charCodeAt(0);
    return cd>=65&&cd<=90;
}
esDigito=function(c){
    let cd=c.charCodeAt(0);
    return cd>=48&&cd<=57;
}
esGuion=function(c){
    return c.charCodeAt(0)==45;
}