// Only change code below this line
function countdown(n){
  if (n<1)
  return [];
  else
  {
    var arr=countdown(n-1);
    arr.unshift(n);
    return arr;
  }
}
countdown(10);
// Only change code above this line