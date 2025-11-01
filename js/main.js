console.log("hello");

let showCloseBtn = () => {
  let myNodeList = document.getElementsByTagName("li");

  for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
  }

  let close = document.getElementsByClassName("close");

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      let li = close[i].parentElement;
      li.style.display = "none";
    });
  }
};

showCloseBtn();

let liCollection = document.getElementsByTagName("li");
for (let i = 0; i < liCollection.length; i++) {
  liCollection[i].addEventListener("click", function () {
    liCollection[i].classList.toggle("checked");
  });
}

document
  .getElementsByClassName("addBtn")[0]
  .addEventListener("click", function () {
    var myInput = document.getElementById("myInput");
    let ulElement = document.getElementsByTagName("ul")[0];
    let liElement = document.createElement("li");
    let inputValue = document.createTextNode(myInput.value);
    liElement.appendChild(inputValue);
    ulElement.appendChild(liElement);

    showCloseBtn();
  });
