// Task 1.1 JS Start
var count=1;
var count_2=1;

var dom = document.body.innerHTML;

function getLength(){
    return document.getElementsByClassName('col').length;
}

// Add text box Function
function addTextBox()
{

    if(getLength()<10)
    {
        let textbox = document.getElementById("mainframe");
        let node =document.createElement('div');
        node.innerHTML = `<div id= '${count}' class="col p-3"><input type="text"   placeholder="Name"/><button type="button" class="btn btn-primary"  id="removeBtn" onclick="removeTextBox(${count})">-</button></div>`;
        textbox.appendChild(node)
        count++;
    }
    if(getLength()>1)
    {
        document.getElementById("removeBtn").disabled = false;   
    }
    if(getLength()>=10){ 
        document.getElementById("addBtn").disabled = true; 
        document.getElementById("addBtn").style.backgroundColor="gray";
        alert("Add Button is Disable You can't not add more than 10 text");
        
    } 
}
 //remove text box function
function removeTextBox(id){
    document.getElementById(`${id}`).parentElement.remove();
    // count--;
    if(getLength()<=10 )
    {
        document.getElementById("addBtn").disabled = false; 
        document.getElementById("addBtn").style.backgroundColor="blue"
    }
    if(getLength()==1)
    {
        document.getElementById("removeBtn").disabled = true;
        alert("You Can't able to remove Text Box")
    }
    
    

}
//Task 1.1 Js End


// Task 1.2 Js Start

function addRow() {
    if (count_2 <= 5) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "New Cell1";
        cell2.innerHTML = "New Cell2";
        count_2++;
    }
    if (count_2 > 1) {
        document.getElementById("removeRow").disabled = false;
    }
    else {
        document.getElementById("addRow").disabled = true;
    }
}
function removeRow() {
    if (count_2 <= 5) {
        document.getElementById("addRow").disabled = false;
        document.getElementById("addRow").style.backgroundColor = "blue"

    }
    if (count_2 == 1) {
        document.getElementById("removeRow").disabled = true;
        alert("You Can't able to remove table row")
    }
    if(count_2>1){
        document.getElementById("myTable").deleteRow(0);
        count_2 -= 1;
    }
}

function refresh(){
    document.body.innerHTML = dom;
}




