module.exports = function check(str, bracketsConfig) {
//  your solution
let stack= [];
for( let i = 0; i <str.length; i++){
  stack.push(str[i])
  if( stack.length > 1){
    for(let i in bracketsConfig){
      if( stack[stack.length-2] === bracketsConfig[i][0] && stack[stack.length-1]===bracketsConfig[i][1] ){
        stack.pop();
        stack.pop();
      }
    }
  } 
}
 if (stack.length == 0){
   return true;
 } else{
   return false;
 }
}
