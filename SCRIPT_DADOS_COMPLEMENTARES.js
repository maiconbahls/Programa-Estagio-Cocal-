// ============================================================
// COLE ESTE TRECHO NO SEU Google Apps Script (Code.gs)
// Adicione DENTRO da função doPost(e) existente,
// junto com os outros "if" de action.
// ============================================================

// Dentro do doPost(e), adicione este bloco:

/*

  if (params.action === 'getDadosComplementares') {
    var ss = SpreadsheetApp.openById('1lAEo8iYWjZUun58LU56r6rh7FGKvzT1HFhgUT6Hs218');
    var sheet = ss.getSheetByName('DADOS COMPLEMENTARES');

    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var result = [];

    for (var i = 1; i < data.length; i++) {
      var row = {};
      for (var j = 0; j < headers.length; j++) {
        var header = String(headers[j]).trim().toUpperCase();
        var value = data[i][j];

        // Formatar datas automaticamente
        if (value instanceof Date) {
          value = Utilities.formatDate(value, 'America/Sao_Paulo', 'dd/MM/yyyy');
        }

        row[header] = value;
      }

      // Só inclui se tiver matrícula preenchida
      if (row['MATRICULA'] || row['MATRÍCULA'] || row['ID']) {
        result.push(row);
      }
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }

*/

// ============================================================
// COLUNAS ESPERADAS NA ABA "DADOS COMPLEMENTARES":
// ============================================================
// A - MATRICULA (obrigatório, usado para vincular ao estagiário)
// B - CURSO (ex: "Engenharia de Dados - USP")
// C - BIO (ex: "Colaborador proativo, focado em tecnologia...")
// D - NASCIMENTO (data de nascimento)
// E - HOBBIES (ex: "Ciclismo, Game Dev, Leitura")
// F - FOTO (URL da foto, ex: link do Google Drive público)
// G - EMAIL (email pessoal)
// H - WHATSAPP (número com DDD, ex: 14991234567)
// I - LINKEDIN (URL completa ou username)
// ============================================================
// OBS: Os nomes das colunas podem variar, o sistema vai
// procurar automaticamente por variações como:
// CURSO, ESCOLARIDADE, FORMACAO
// BIO, SOBRE, RESUMO, DESCRICAO
// NASCIMENTO, DATA_NASC
// HOBBIES, INTERESSES
// FOTO, URL_FOTO, IMAGEM
// EMAIL, CORREIO
// WHATSAPP, CELULAR, TELEFONE
// LINKEDIN
// ============================================================
