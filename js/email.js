(function () {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements)
      .filter(function (k) {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      })
      .map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

    var formData = {};
    fields.forEach(function (name) {
      var element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(", ");
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return { data: formData, honeypot: honeypot };
  }

  function handleFormSubmit(event) {
    // handles form submit without any jquery
    event.preventDefault(); // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        var formElements = form.querySelector(".email_wrap");
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }
        var thankYouMessage = form.querySelector(".aftersend");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
      }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data)
      .map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
  }

  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  }
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();

function emailCheck() {
  document.querySelector(".gform").action =
    "https://script.google.com/macros/s/AKfycbzf3ohTINytzngdNrf0NkCbFrcCaHrS17YH5AXaJOKVPEPy9wPb_JnlJPEupPYqaOUO/exec";
  const email = document.getElementById("email").value;
  if (email != "") {
    let exptext =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    console.log(exptext.test);
    if (exptext.test(email) == false) {
      // 이메일 형식이 알파벳+숫자 @ 알파벳+숫자.알파벳+숫자 형식이 아닐 경우
      alert("입력한 메일형식이 올바르지 않습니다.");
      document.formtag.email.focus();
      document.querySelector(".gform").action = "";
    }
  }
  let imgUpload = document.getElementById("image").files[0];
  const file = URL.createObjectURL(imgUpload);
  console.log(imgUpload)
  document.querySelector(".previewImg").src = file;
}

// function returnPage() {
//   let referrer = document.referrer;
//   console.log("이전페이지 URL:" + referrer);
// }

// function getImageFiles(e) {
//   const files = e.currentTarget.files;
//   [...files].forEach(file => {
//     if (!file.type.match("image/.*")) {
//       alert('이미지 파일만 업로드가 가능합니다.');
//       return;
//     }
//   })
// }

// const getImageFiles = (e) => {
//   const selectedFile = [...imgUpload.files];
//   const fileReader = new FileReader();

//   fileReader.readAsDataURL(selectedFile[0]);

//   fileReader.onload = function () {
//     document.getElementById("previewImg").src = fileReader.result;
//   };
// };

// imgUpload.addEventListener("change", getImageFiles)