const fs = require('fs');
const csv = require('csvtojson');

const csvFile = '/app/data/data.csv';
const htmlFile = '/app/data/report.html';

csv().fromFile(csvFile).then(data => {
    let rows = '';
    for (let i = 0; i < data.length; i++) {
        rows += '<tr>';
        rows += '<td>' + data[i].id + '</td>';
        rows += '<td><b>' + data[i].name + '</b></td>';
        rows += '<td>' + data[i].element + '</td>';
        rows += '<td>' + data[i].weapon + '</td>';
        rows += '<td>' + data[i].rarity + '★</td>';
        rows += '<td>' + data[i].region + '</td>';
        rows += '<td>' + data[i].attack + '</td>';
        rows += '</tr>';
    }
    
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Персонажи Genshin Impact</title>
<style>
body {
    font-family: Arial, sans-serif;
    background: #fef9f0;
    margin: 0;
    padding: 40px 20px;
}
.container {
    max-width: 1300px;
    margin: 0 auto;
    background: white;
    border-radius: 32px;
    padding: 30px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}
h1 {
    color: #e07a5f;
    text-align: center;
    font-size: 2rem;
}
.sub {
    text-align: center;
    color: #a8a29e;
    margin-bottom: 30px;
}
.badge {
    text-align: center;
    margin-bottom: 25px;
}
.badge span {
    background: #f4e4d4;
    color: #b8694a;
    padding: 6px 18px;
    border-radius: 40px;
    font-size: 0.9rem;
}
table {
    width: 100%;
    border-collapse: collapse;
    background: #fffdf9;
}
th {
    background: #f9ede4;
    color: #7c5c48;
    padding: 14px 10px;
    font-weight: bold;
}
td {
    padding: 12px 10px;
    border-bottom: 1px solid #f0e6df;
    color: #4b3a2e;
}
tr:hover td {
    background: #fef7f0;
}
.footer {
    text-align: center;
    margin-top: 30px;
    color: #cbbba7;
    font-size: 0.7rem;
}
</style>
</head>
<body>
<div class="container">
    <h1>путеводитель по Тейвату</h1>
    <div class="sub">любимые персонажи Genshin Impact</div>
    <div class="badge"><span>всего персонажей: ` + data.length + `</span></div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>имя</th>
                <th>стихия</th>
                <th>оружие</th>
                <th>редкость</th>
                <th>регион</th>
                <th>урон</th>
            </tr>
        </thead>
        <tbody>
            ` + rows + `
        </tbody>
    </table>
    <div class="footer">дата генерации: ` + new Date().toLocaleDateString() + `</div>
</div>
</body>
</html>`;
    
    fs.writeFileSync(htmlFile, html);
    console.log('report.html создан');
});
