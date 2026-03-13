import {jsPDF} from "jspdf";
import {autoTable} from "jspdf-autotable"


function PDFgenerator(expenses) {
    const doc = new jsPDF();
  doc.text("Expense Report", 10, 10)
   autoTable(doc, {
    head: [["Date", "Title", "Category", "Amount"]],
    body: expenses.map(expense => [
        expense.date,
        expense.title,
        expense.category,
        expense.amount
    ])

   })

    doc.save('Test.pdf')

}
export default PDFgenerator;
