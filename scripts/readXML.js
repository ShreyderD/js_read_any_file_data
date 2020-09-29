initXML();

function initXML() {
  var httpRequest3 = new XMLHttpRequest();

  httpRequest3.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      //console.log(this.responseXML);
      var lines = this.responseXML.getElementsByTagName("book");

      //get Header-line for the Table
      var strOut2 = `<table>
                    <tr>
                    <th>${lines[0].nextElementSibling.childNodes[1].nodeName}</th>
                    <th>${lines[0].nextElementSibling.childNodes[3].nodeName}</th>
                    <th>${lines[0].nextElementSibling.childNodes[5].nodeName}</th>
                    <th>${lines[0].nextElementSibling.childNodes[7].nodeName}</th>
                    <th>${lines[0].nextElementSibling.childNodes[9].nodeName}</th>
                    <th>${lines[0].nextElementSibling.childNodes[11].nodeName}</th>
                    <th>${lines[0].nextElementSibling.childNodes[13].nodeName}</th>
                    <tr>`;
      for (let i = 0; i < lines.length; i++) {
        strOut2 += `<tr>`;
        strOut2 += singleLineTemplater(lines[i], i);
        strOut2 += `</tr>`;
      }
      strOut2 += `</table>`;
    }
    if (strOut2) {
      document.getElementById("xml_output").innerHTML = strOut2;
    }
  };
  httpRequest3.open("GET", "src/book_shelf.xml", true);
  httpRequest3.send();
}

function singleLineTemplater(text, lineNumber) {
  let line = "";

  var bookId = text.getElementsByTagName("bookId")[0].innerHTML;
  var author = text.getElementsByTagName("author")[0].innerHTML;
  var title = text.getElementsByTagName("title")[0].innerHTML;
  var genre = text.getElementsByTagName("genre")[0].innerHTML;
  var price = text.getElementsByTagName("price")[0].innerHTML;
  var publish_date = text.getElementsByTagName("publish_date")[0].innerHTML;
  var description = text.getElementsByTagName("description")[0].innerHTML;

  line = `<td>${bookId}</td>
          <td>${author}</td>
          <td>${title}</td>
          <td>${genre}</td>
          <td>${price}</td>
          <td>${publish_date}</td>
          <td>${description}</td>`;
  return line;
}
