function addNewElement(p1) {
    // let parentTag = document.querySelector("input").parentElement.children[2];
    // let parentTag = p1.parentElement.children[2];
    let parentTag = p1.nextElementSibling;

    let msgTag = document.querySelector("#msgId");
    let msg = msgTag.value;
  
    let existingValue = parentTag.innerHTML;
    let newValue = `<div style="font-size: 30px; margin-top: 5px; display: flex; justify-content: space-between">
    <div>${msg}</div> 
    <input
      type="button"
      value="Delete"
      onclick="deleteTheMessage(this)"
      style="margin-left: 20px;"
    />
  </div>`;

    parentTag.innerHTML = newValue + existingValue;

    msgTag.value= "";
}
  
function deleteTheMessage(p1) {
    p1.parentElement.remove();
}