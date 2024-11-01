const apiKey = 'AIzaSyDa_QKQD84jTfx5Yrqp4GRAGVzHFLTHEKY'; 
const spreadsheetId = '1GoO66csdSBzRx34K2LRHkfg48vtDBq-QGzbo28E4nLw'; 
const range = 'A2:B30'; 

function carregarDados() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const conteudoDiv = document.getElementById("conteudo");
        conteudoDiv.innerHTML = ''; // Limpa o conteúdo anterior
  
        // Verifica se há dados e, em caso afirmativo, itera sobre eles
        if (data.values) {
          data.values.forEach(row => {
            const div = document.createElement('div');
            div.innerHTML = `${row[0]}, ${row[1]}`;
            conteudoDiv.appendChild(div);
          });
        } else {
          conteudoDiv.innerHTML = 'Nenhum dado encontrado.';
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }

carregarDados(); // Chama a função ao carregar a página

setInterval(carregarDados, 5000); // Atualiza a cada 5 segundos