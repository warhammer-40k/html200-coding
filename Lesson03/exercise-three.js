/*************************************************************
Create an array that has at least 5 strings:

Use a for loop to console log all of the elements plus the index and a comma
Example:

// 1,cats
// 2,dogs

..and so on
*************************************************************/

var names = [ "Johns", "Sam", "Mary", "Susan", "Pat" ];

for( var i = 0; i < names.length; i++ ){
  console.log( i, ',', names[i] );
}
