initJSON();

function initJSON() {
  var httpRequest2 = new XMLHttpRequest();

  httpRequest2.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      //console.log(this.responseText);
      //console.log(JSON.parse(this.responseText).library.books[0].id);

      let data = JSON.parse(this.responseText);
      let books = data.library.books;

      var strOut = `<table>`;
      for (let i = 0; i < books.length; i++) {
        strOut += singleLineTemplater(books[i], i);
      }
      strOut += `</table>`;
    }
    if (strOut) {
      //console.log(strOut);
      document.getElementById("json_output").innerHTML = strOut;
    }
  };
  httpRequest2.open("GET", "src/book_shelf.json", true);
  httpRequest2.send();
}

function singleLineTemplater(text, lineNumber) {
  let line = "";

  //get Header-line for the Table
  if (lineNumber === 0) {
    let keys = Object.keys(text);
    line = `<table>
            <tr>
            <th>${keys[0]}</th>
            <th>${keys[1]}</th>
            <th>${keys[2]}</th>
            <th>${keys[3]}</th>
            <th>${keys[4]}</th>
            <th>${keys[5]}</th>
            <th>${keys[6]}</th>
            <tr>`;
  }

  //Populate table body
  line += `</tr><td>${text.id}</td>
          <td>${text.author}</td>
          <td>${text.title}</td>
          <td>${text.genre}</td>
          <td>${text.price}</td>
          <td>${text.publish_date}</td>
          <td>${text.description}</td></tr>`;
  return line;
}
