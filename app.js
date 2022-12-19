const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePW"),
      pwFields =document.querySelectorAll(".password"),
      signUp =document.querySelector(".signup-link"),
      login =document.querySelector(".login-link");


   /*------voir / pas voir le passeword---------------*/
   pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", ()=> {
        pwFields.forEach(pwField =>{
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash","uil-eye");
                })
            }else{
                pwField.type = "password";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye","uil-eye-slash");
                })
            }
        })
    })
   });


   /* faire apparaitre le formulaire inscription */
   signUp.addEventListener('click', ( )=> {
        container.classList.add("active");
   });
   login.addEventListener('click', ( )=> {
    container.classList.remove("active");
    });


    /* let inp = document.getElementsByTagName('input');
    let addBtn =document.querySelector('login-signup');
    //add bnt disable
    inp.addEventListener('keyup', () => {
    if(inp.value.trim() != 0) {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
}); */

   /*  const validation = document.getElementsByClassName('login-signup'),
          mail =document.querySelector('mail');

          validation.addEventListener('click', valide);
          function valide(e) {
            if (mail.validity.valueMissing) {
                e.preventDefault();
            }
            
          }; */