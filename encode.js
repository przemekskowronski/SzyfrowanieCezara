function encode() {
  var shift = parseInt(document.getElementById('shift').value);
  var text = document.getElementById("text").value;
  let x = [];


  if (shift < 26 && shift > -26) {
    for (var i = 0; i < text.length; i++) {

      if ((text.charCodeAt(i) <= 122 && text.charCodeAt(i) >= 97) || (text.charCodeAt(i) <= 90 && text.charCodeAt(i) >= 65)) {
        
        x[i] = text.charCodeAt(i) + shift;

        if (x[i] > 122) {
          x[i] -= 26;
        }

        else if ((x[i] < 97 && (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122))) {
          x[i] += 26;
        }

        else if (x[i] > 90 && (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) {
          x[i] -= 26;
        }

        else if (x[i] < 65 && (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) {
          x[i] += 26;
        }
      }

      else {
        x[i] = text.charCodeAt(i);
      }

    }

    var ea = document.getElementsByTagName('p')[3];

    var ec = document.createElement('p');
    ec.id = "eh";
    ec.innerText = "Odkodowana liczba:";
    document.body.insertBefore(ec, ea);

    var encstring = String.fromCharCode.apply(null, x);
    var p = document.createElement('p');
    p.innerText = encstring;
    p.id = "enctext"
    document.body.insertBefore(p, ea);
  }

  else {

    var pf = document.createElement('p');
    pf.innerText = "Błąd, wpisz liczbę pomiędzy -26 a 26"
    document.body.appendChild(pf);
  }

}