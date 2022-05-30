function solution (data, replace) {
  //Replace all values of "dynamic" with replace
  //console.log("data=", data, 'length=', Object.keys(data).length);

  if (data.hasOwnProperty("dynamic")) {
      if (!data.hasOwnProperty("static")) {
        let value = data['dynamic'];
        delete data["dynamic"];
        data["static"] = value;
      } else {
        data["static"] = data["dynamic"];
        delete data["dynamic"];
      }
    }

  console.log('data.length=', Object.keys(data).length, "typeof(data)=", typeof(data));
  for (let i=0; i<Object.keys(data).length; i++){
    console.log('data[i]=', data[i]);

    if ( (Array.isArray(data[i]) || typeof(data[i]) == "object") && Object.keys(data[i]).length > 0) {
      solution(data[i], replace)
    }

    console.log('data[i]=', data[i]);
    if (data[i] == "dynamic") {

      data[i] = "static";
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
