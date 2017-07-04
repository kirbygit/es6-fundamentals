// let and const are blockscopes
let name = 'Kirby';
(function(){
   const name = 'kboy';
  console.log(name);
})();

for (let i = 0; i < 10; i++) {
   console.log(i);
   setTimeout(function() {
     console.log('The number is ' + i);
   }, 1000);
 }

for (var index = 0; index < array.length; index++) {
  var element = array[index];

}
