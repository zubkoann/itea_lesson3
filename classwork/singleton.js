const Singleton = {
  add: (_data, name, desc) => {
    let item = {
      id: (Math.random() * 100).toFixed(0),
      name: name,
      desc: desc,
    }
    _data.law.push(item);
    _data.citizensSatisfactions -= 10;
  },
  getAllLaw: ({law}) => [...law],
  readLaw: ({law}, name) => {
    let newarr = law.find(el => {
      return name == el.name;
    });
    return newarr.desc;
  },
  showSatisfactions: ({citizensSatisfactions}) => citizensSatisfactions,
  showBudget: ({budget}) => budget,
  celebrate: (_data) => {
    _data.budget -= 50000;
    _data.citizensSatisfactions += 5;
    return _data;
  },

};

export default Singleton;