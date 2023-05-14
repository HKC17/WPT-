function addnewmsg(p1){
    let parentTag = document.querySelector("#divId");
    let existingvalue = parentTag.innerHTML;

    let msgTag = document.querySelector("#msgId");
    let msg = msgTag.value;

    let position = p1 ? "end" : "start";
    let newValue = `<h1 style="display:flex; flex-bottom : 0;justify-content: ${position}">${msg}</h1>`;
    parentTag.innerHTML = existingvalue + newValue ;

    msgTag.value = "";
}