validarEstructura=function(p){
 let e="";
 let l=p.length;
 if(l!=7&&l!=8){e+="La placa debe tener 7 u 8 caracteres. ";}

 let c0=p.charAt(0),c1=p.charAt(1),c2=p.charAt(2),c3=p.charAt(3),
     c4=p.charAt(4),c5=p.charAt(5),c6=p.charAt(6),c7=p.charAt(7);

 if(!esMayuscula(c0))e+="El primer carácter debe ser mayúscula. ";
 if(!esMayuscula(c1))e+="El segundo carácter debe ser mayúscula. ";
 if(!esMayuscula(c2))e+="El tercer carácter debe ser mayúscula. ";
 if(!esGuion(c3))e+="El cuarto carácter debe ser guión. ";
 if(!esDigito(c4))e+="El quinto carácter debe ser dígito. ";
 if(!esDigito(c5))e+="El sexto carácter debe ser dígito. ";
 if(!esDigito(c6))e+="El séptimo carácter debe ser dígito. ";
 if(l==8 && !esDigito(c7))e+="El octavo carácter debe ser dígito. ";

 return e==""?null:e;
}

obtenerProvincia=function(p){
 let c=p.charAt(0);
 if(c=="A")return"Azuay";
 if(c=="B")return"Bolívar";
 if(c=="C")return"Carchi";
 if(c=="G")return"Guayas";
 if(c=="P")return"Pichincha";
 return null;
}

obtenerTipoVehiculo=function(p){
 let c=p.charAt(1);
 if(c=="A"||c=="U"||c=="Z")return"Comercial";
 if(c=="E")return"Gubernamental";
 if(c=="X")return"Uso oficial";
 return"Particular";
}

obtenerDiaPicoYPlaca=function(p){
 let u=p.charAt(p.length-1);
 if(!esDigito(u))return null;
 let d=parseInt(u);
 if(d==1||d==2)return"Lunes";
 if(d==3||d==4)return"Martes";
 if(d==5||d==6)return"Miércoles";
 if(d==7||d==8)return"Jueves";
 return"Viernes";
}