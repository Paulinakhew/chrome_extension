function getInfo() {
  var length = document.getElementsByClassName("js-edit-label").length;
  for (i = 0; i < length; i++) {
      document.getElementsByClassName("js-edit-label")[i].click();
  }

  let label_names = []
  let label_descriptions = []
  let label_colours = []

  for (i = 1; i <= length; i++) {
    label_names.push(document.querySelectorAll("[id^='label-name']")[i].value);
    label_descriptions.push(document.querySelectorAll("[id^='label-description']")[i].value);
    label_colours.push(document.querySelectorAll("[id^='label-color']")[i].value);
    document.getElementsByClassName("js-edit-label-cancel")[i].click();
  }

  chrome.storage.sync.set(
    {
      'names': label_names,
      'descriptions': label_descriptions,
      'colours': label_colours
    }, function() {
      console.log(label_names);
      console.log(label_descriptions);
      console.log(label_colours);
    }
  )
}

var body = document.getElementsByClassName("subnav")[0];

let saveButton = document.createElement("button");
saveButton.innerHTML = "Save";
saveButton.className = "btn";
body.appendChild(saveButton);
saveButton.addEventListener("click", getInfo);

let fillButton = document.createElement("button");
fillButton.innerHTML = "Fill";
fillButton.className = "btn";
body.appendChild(fillButton);