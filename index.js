const heightBox = document.getElementById("height");
const weightBox = document.getElementById("weight");

heightBox.addEventListener("input", updateBMI);
weightBox.addEventListener("input", updateBMI);

function updateBMI() {
  const bmi = weightBox.value / ((heightBox.value * heightBox.value) / 10000);
  document.getElementById("result").innerHTML =
    "Your BMI is : " + bmi.toFixed(2); 
}
let result = document.getElementById("result");
let selectR = null;

function onFormSubmit() {
  if (validation()) {
    let formData = readFormData();
    if (selectR == null) 
    newRecord(formData);
    else updateForm(formData);
    Reset();
  }
}
function readFormData() {
  let formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["weight"] = document.getElementById("weight").value;
  formData["height"] = document.getElementById("height").value;
  formData.bmi = weight.value / (((height.value / 100) * height.value) / 100);
  formData.diff = formData.bmi; // ((18.5 + 23) / 2) 
  return formData;
}

function newRecord(data) {
  let table = document
    .getElementById("allList")
    .getElementsByTagName("tbody")[0];
  let newRoll = table.insertRow(table.lenght);
  cell1 = newRoll.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRoll.insertCell(1);
  cell2.innerHTML = data.weight;
  cell3 = newRoll.insertCell(2);
  cell3.innerHTML = data.height;
  cell4 = newRoll.insertCell(3);
  cell4.innerHTML = data.bmi.toFixed(2);
  //Use Bmi color
  if(data.bmi < 18.5){
      cell4.style.color = "red";
      alert("น้ำหนักน้อยกว่ามาตรฐาน");
  }else if(data.bmi > 18.5 && data.bmi <= 23){
      cell4.style.color = "green"
      alert("ปกติ");
  }else if(data.bmi > 23 && data.bmi <= 30){
      cell4.style.color = "Cyan "
      alert("อ้วนระดับ1");
  }else if(data.bmi > 30 ){
      cell4.style.color = "blue "
      alert("อ้วนระดับ2");
  }
  cell5 = newRoll.insertCell(4);
  cell5.innerHTML = data.diff.toFixed(2)
  if(data.diff > 23 ){
      cell5.innerHTML = "++"+(data.diff - 20.75).toFixed(2);
  }else if(data.diff > 18.5 && data.diff <= 23 ){
      cell5.innerHTML = "+-"+(data.diff - 20.75).toFixed(2);
  }else if(data.diff < 18.5){
      cell5.innerHTML = "-"+(data.diff - 20.75).toFixed(2);
  }
  cell6 = newRoll.insertCell(5);
  cell6.innerHTML = `<button onClick="editData(this)">Edit</button>
                          <button onClick="deleteData(this)">Delete</button>`; // Use Back quote if use double or single quote is problems.
  
                      }

function Reset() {
  document.getElementById("name").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  // document.getElementById("bmi").value = "";
  selectR = null;
}

function editData(td) {
  selectR = td.parentElement.parentElement;
  document.getElementById("name").value = selectR.cells[0].innerHTML;
  document.getElementById("weight").value = selectR.cells[1].innerHTML;
  document.getElementById("height").value = selectR.cells[2].innerHTML;
  // document.getElementById("bmi").value = selectR.cells[3].innerHTML;
}

function updateForm(formData) {
  selectR.cells[0].innerHTML = formData.name;
  selectR.cells[1].innerHTML = formData.weight;
  selectR.cells[2].innerHTML = formData.height;
  selectR.cells[3].innerHTML = formData.bmi.toFixed(2);
  if(formData.bmi < 18.5){
      selectR.cells[3].style.color = "red";
      alert("น้ำหนักน้อยกว่ามาตรฐาน");
  }else if(formData.bmi > 18.5 && formData.bmi <= 23){
      selectR.cells[3].style.color = "green"
      alert("ปกติ");
  }else if(formData.bmi > 23 && formData.bmi <= 30){
      selectR.cells[3].style.color = "Cyan "
      alert("อ้วนระดับ1");
  }else if(formData.bmi > 30 ){
      selectR.cells[3].style.color = "blue "
      alert("อ้วนระดับ2");
  }
  selectR.cells[4].innerHTML = formData.diff.toFixed(2);
  if(formData.diff > 23 ){
      selectR.cells[4].innerHTML = "++"+(formData.diff - 20.75).toFixed(2);
  }else if(formData.diff > 18.5 && formData.diff <= 23 ){
      selectR.cells[4].innerHTML = "+-"+(formData.diff - 20.75).toFixed(2);
  }else if(formData.diff < 18.5){
      selectR.cells[4].innerHTML = "-"+(formData.diff - 20.75).toFixed(2);
  }
}

function deleteData(td) {
  if (confirm("Are you sure to delete this reacord ?")) {
    deleteR = td.parentElement.parentElement;
    document.getElementById("allList").deleteRow(deleteR.rowIndex);
    Reset();
  }
}

function validation() {
  isValid = true;
  if (document.getElementById("name").value == "") {
    isValid = false;
    document.getElementById("ValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document.getElementById("ValidationError").classList.contains("hide")
    )
      document.getElementById("ValidationError").classList.add("hide");
  }
  return isValid;
}