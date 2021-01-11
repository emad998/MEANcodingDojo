function bracesValid(braces){
  var arr = [];
  arr = braces.split('');
  var count = 0
  for (var i=0; i<arr.length; i++){
    if (arr[i] == '(' || arr[i] == '{' || arr[i] == '[') {
        count += 1;
    } else if (arr[i] == ')' || arr[i] == '}' || arr[i] == ']'){
        count -= 1;
    }
  }

  if (count == 0){
      return true
  } else {
      return false
  }



}




console.log(bracesValid("[{()}"))