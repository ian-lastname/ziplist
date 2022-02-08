const haha = ['a', 'b', 'c'];
const nums = [1, 2, 3];

function zipList(list1, list2) {
  let newList = [];
  for (let index = 0; index < list1.length; index++) {
    newList.push(list1[index]);
    newList.push(list2[index]);
  }
  return newList;
}

console.log(zipList(haha, nums));

function zipListTheSimpleWay(list1, list2) {
  let something = _.zip(list1, list2);
  return _.flatten(something);
}

console.log(zipListTheSimpleWay(haha, nums));