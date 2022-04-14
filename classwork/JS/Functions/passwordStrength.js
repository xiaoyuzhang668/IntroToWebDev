document.querySelector("#submitBtn").addEventListener("click", submitBtnClick);

function isStrongPassword(password) {
   return password.length >= 6 && /\d/.test(password) && password !== "password1";
}

function submitBtnClick() {
   let password = document.querySelector("#password").value;
   if (isStrongPassword(password)) {
      document.querySelector("#errorMsg").classList.add("hidden");
      document.querySelector("#password").classList.remove("error-textbox");
      // Remove error-textbox class

   } else {
      document.querySelector("#errorMsg").classList.remove("hidden");
 document.querySelector("#password").classList.add("error-textbox");
      // Add error-textbox class
      if (password.length < 6) {
         document.querySelectorAll("li")[0].classList.add("error");
      } else {       document.querySelectorAll("li")[0].classList.remove("error");
      }
      
        if (!(/\d/.test(password))) {
         document.querySelectorAll("li")[1].classList.add("error");
      } else {       document.querySelectorAll("li")[1].classList.remove("error");
      }
      
         if (password == "password1") {
         document.querySelectorAll("li")[2].classList.add("error");
      } else {       document.querySelectorAll("li")[2].classList.remove("error");
      }
         

   }
}
