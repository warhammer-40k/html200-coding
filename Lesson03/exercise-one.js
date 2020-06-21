var names = [ "Johns", "Sam", "Mary", "Susan", "Pat" ];
console.log("Array before push:");
for( var i = 0; i < names.length; i++ ){
  console.log( i, names[i] );
}
names.push("Terry");
console.log("Array after push:");
for( var i = 0; i < names.length; i++ ){
  console.log( i, names[i] );
}
console.log("Removing the third element:");
names.splice(2,1);

for( var i = 0; i < names.length; i++ ){
  console.log( i, names[i] );
}

console.log("concatenating array elements");
var str = "";
for( var i = 0; i < names.length; i++ ){
  console.log( i, names[i] );
  str = str+ names[i]  + ',' ;
}
str = str.substring(0, str.length - 1);
console.log(str);
