let btn = document.createElement("button");
btn.innerHTML = "Open List in Jira";
btn.onclick = function () {
  let startString = "https://unity3d.atlassian.net/issues/?jql=issuekey%20in%20(";
  let connector = "%2C%20";
  let endString = ")";
  let myString = startString;

  const result = document.evaluate('//span[text()[contains(.,"IN-")]]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  
  if (result.snapshotLength == 0) alert("Please 'Add aggregation' > 'bug-identifier - head' and 'Group by' > 'bug-identifier - head'");
  else
  {
    for(let i = 0; i < result.snapshotLength; i++)
      {
        let node = result.snapshotItem(i).textContent;
        myString += node;
        if (i != result.snapshotLength - 1) myString+=connector;
        else myString+= endString;
      }
    window.open(myString, '_blank');
  }
};
document.body.appendChild(btn);



