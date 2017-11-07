var matrix = [];
var tamLado;
var rotated = [];
var num;

window.onload = function() {
  tamLado = prompt('Tamanho Matrix:');
  if(tamLado) {
    num = tamLado*tamLado;
    for(var a = 0; a < tamLado; a++ ) {
        matrix.push([]);
        rotated.push([]);
        var original = document.querySelector('.original');
        var coluna = original.insertRow(0);
        for (var b = 0; b < tamLado; b++) {
          var linha = coluna.insertCell(0);
          linha.innerHTML = num;

          matrix[a].push(num);
          num--;
          rotated[a].push('');
        }
    }
  }

  gira(true, document.querySelector('.rotacionada'));
  gira(false, document.querySelector('.rotacionadaAnti'));
}



function gira(param, tabela) {
  for (i = 0; i < tamLado; i++) {
    var coluna = tabela.insertRow(0);
      for (j = 0; j < tamLado; j++) {
          if (param) {
            rotated[i][j] = matrix[tamLado - j - 1][i];
            var linha = coluna.insertCell(0);
            linha.innerHTML = rotated[i][j];
          } else {
            rotated[i][j] = matrix[j][tamLado - i - 1];
            var linha = coluna.insertCell(0);
            linha.innerHTML = rotated[i][j];
          }
      }
  }
}
