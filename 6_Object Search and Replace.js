function solution (data, replace) {

  /*

  if (data.hasOwnProperty("dynamic")) {
      if (!data.hasOwnProperty(replace)) {
        //data[replace] = data['dynamic'];
        //console.log('data1=',data);
        //delete data["dynamic"];
      }
    }
  */
  if (Array.isArray(data) || typeof(data) == "object"){
    if (Object.keys(data).length > 0) {  //Changing values
      console.log('data=', data);
      for ( let i=0; i<Object.keys(data).length; i++ ) {
        let key = Object.keys(data)[i];
        if ( (Array.isArray(data[key]) || typeof(data[key]) == "object") && Object.keys(data[key]).length > 0) {
          solution(data[key], replace)
        } else if (data[key] == "dynamic") {
          //if VALUE == dinamic, then CHANGING this VALUE
          data[key] = replace;
        }
      }
    }
  }
  return data;
}


//Some garbage data
const data = {
  foo: "dynamic",
  bar: {
    baz: ["dynamic"]
  },
  dynamic: true
};

//Your solution
const result = solution(data, "static");
console.log(result);
