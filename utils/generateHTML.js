export const generateHTML = (labelsSpentCollection) => {
    const currentDate = new Date().toLocaleDateString();
  
    const tableRows = labelsSpentCollection
      .map((item) => `
        <tr>
          <td>${item.size}</td>
          <td>${item.quantity}</td>
        </tr>
      `)
      .join('');
  
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h1>Отчёт по расходу этикеток за ${currentDate}</h1>
        <table>
          <tr>
            <th>Размер бумаги</th>
            <th>Этикеток израсходовано</th>
          </tr>
          ${tableRows}
        </table>
      </body>
      </html>
    `;
  };
  