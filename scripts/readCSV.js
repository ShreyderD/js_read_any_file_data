initCSV();

function initCSV() {
  var httpRequest1 = new XMLHttpRequest();

  httpRequest1.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      //console.log(this.responseText);
      var lines = this.responseText.split("\n");

      var strOut = `<table>`;
      for (let i = 0; i < lines.length; i++) {
        strOut += `<tr>`;
        strOut += singleLineTemplater(lines[i], ";", i);
        strOut += `</tr>`;
      }
      strOut += `</table>`;
    }
    if (strOut) {
      //console.log(strOut);
      document.getElementById("csv_output").innerHTML = strOut;
    }
  };
  httpRequest1.open("GET", "src/book_shelf.csv", true);
  httpRequest1.send();
}

function singleLineTemplater(text, slicer, lineNumber) {
  let line = "";
  let items = [];
  /*
  items = text.split(slicer);
  for (let j = 0; j < items.length; j++) {
    line += `<th>${items[j]}</th>`;
  }
  */

  if (lineNumber === 0) {
    items = text.split(slicer);
    for (let j = 0; j < items.length; j++) {
      line += `<th>${items[j]}</th>`;
    }
  } else {
    items = text.split(slicer);
    for (let j = 0; j < items.length; j++) {
      line += `<td>${items[j]}</td>`;
    }
  }
  return line;
}
