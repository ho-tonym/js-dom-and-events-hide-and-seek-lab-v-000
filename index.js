function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
};

function increaseRankBy(n) {
  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i=0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML,10) + n).toString();
  };
};

function deepestChild() {
  const grandNode = document.getElementById('grand-node').querySelectorAll('div');
  return grandNode[grandNode.length-1]
};
