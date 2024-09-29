const sub = document.getElementById('submit').value
document.getElementById('lists').cell 

 var selRow = null
const postData=()=>{
   
    let formData =readFormData()
     
    if(selRow == null){
        insertData(formData)
    }else{
        updateData(formData)
    }

    reset()
    if(document.getElementById("checked").checked=true){
        document.getElementById("checked").checked=false;
    }
    if(document.getElementById("max").checked=true){
        document.getElementById("max").checked=false;
    }
   
   
}


function readFormData(){
     let formData={}
     formData['income']=document.getElementById('income').value
     formData['expence']=document.getElementById('expence').value
     formData['max']=document.getElementById('max').value
     formData['checked']=document.getElementById('checked').value

     return formData
}

function insertData( data){
    let table = document.getElementById('lists').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow(table.length)

    cell1 = newRow.insertCell(0);
    cell1.innerText = data.income

    cell2 = newRow.insertCell(1);
    cell2.innerText = data.expence

    cell3 = newRow.insertCell(2);
    cell3.innerText = data.max;
    

    cell4 = newRow.insertCell(3);
    cell4.innerText = data.checked

    cell5 = newRow.insertCell(4);
    cell5.innerText = data.income-data.expence

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<button class="btn btn-primary  btns" onclick="onEdit(this)">Edit<button> <button class="btn btn-danger btns" onclick="onDelete(this)">DELETE<button>'

    
}

function reset(){
    document.getElementById('income').value=""
    document.getElementById('expence').value=""
    document.getElementById('max').value
    document.getElementById('checked').value
     selRow=null
}

function onEdit(dt){
    selRow = dt.parentElement.parentElement

    document.getElementById('income').value=selRow.cells[0].innerText;
    document.getElementById('expence').value=selRow.cells[1].innerText;
    document.getElementById('max').value=selRow.cells[2].innerText;
    document.getElementById('checked').value=selRow.cells[3].innerText;
}

function updateData(formData){
   selRow.cells[0].innerText = formData.income;
   selRow.cells[1].innerText = formData.expence;
   selRow.cells[2].innerText = formData.max;
   selRow.cells[3].innerText = formData.checked;
   selRow.cells[4].innerText = formData.income-formData.expence

}

function onDelete(dt){

    if(confirm("confirm to Delete...")){
    let row = dt.parentElement.parentElement
    document.getElementById('lists').deleteRow(row.rowIndex)
    }

}