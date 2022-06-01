function solution (data, replace) {
  if ( isArrOrObj(data) ){
    if (Object.keys(data).length > 0) {  //Changing values
      console.log('data=', data);
      for ( let i=0; i<Object.keys(data).length; i++ ) {
        let key = Object.keys(data)[i];
        if ( isArrOrObj(data[key]) ) {
          if ( Object.keys(data[key]).length > 0 ) {
            solution(data[key], replace);
          }
        } else if (data[key] == "dynamic") {
          //if VALUE == dinamic, then CHANGING this VALUE
          data[key] = replace;
        }
      }
    }
  }
  return data;
}

function isArrOrObj(var1) {
  return (Array.isArray(var1) || ( typeof(var1) === "object" && typeof(var1) !== null && typeof(var1) !== undefined) );
}

//Some garbage data
const data = {
  foo: "dynamic",
  bar: {
    baz: ["dynamic"]
  },
  //dynamic: true
  123 : 123
};

//Your solution
const result = solution(data, "static");
console.log(result);

/*
function solution(data, replace) {
  if (typeof data == 'object') {
    for (var p in data) {
      data[p] = solution(data[p], replace);
    }
  } else if (data == 'dynamic') {
    return replace;
  }

  return data;
}

for(var key in data){
    if(data[key]==="dynamic")data[key]=replace;
    else if(typeof data[key]==='object')solution(data[key],replace);
  }
  return data;
*/
