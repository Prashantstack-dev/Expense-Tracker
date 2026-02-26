function exportToCSV(expenses){
    const headerRow= "title,amount,category,date";
    const headerList = expenses
    .map( expense => `${expense.title},${expense.amount},${expense.category},${expense.date}`)
    .join('\n')
    console.log(headerList);
const combined = headerRow + "\n" + headerList;
console.log(combined);

const blob = new Blob([combined], {type: 'text/csv'});
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'my_data.csv';
document.body.appendChild(link);
link.click(); //click the link to trigger download
//clean up by removing link and revoking object url
document.body.removeChild(link);
URL.revokeObjectURL(url);

}


export default exportToCSV;