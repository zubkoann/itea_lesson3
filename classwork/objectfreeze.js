const  DeepFreeze = function(obj){
  let propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach(function (name) {
    let prop = obj[name];
    if (typeof prop == 'object' && prop !== null)
      DeepFreeze(prop);
  })
  return Object.freeze(obj);
};

export default DeepFreeze;








