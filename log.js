// $(".form-box").hide();
// $("#inputOtp").hide();
// $("#verifyotp").hide();



const phoneregform = document.querySelector("Phone-Register");

var loginphone = document.getElementById("phoneloginbtn");
var phoneinput = document.getElementById("inputPhone");
var otpinput = document.getElementById("inputOtp");
var verifyotp = document.getElementById("verifyotp");
const logphone = document.getElementById("phoneloginbtn");
let resp = '';

logphone.addEventListener("click", function () {
    $('#spinner1').show();
    window.recaptchaVerifier = '';
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...

        },
        'expired-callback': function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
            alert("Response expired,Solve reCAPTCHA again ")
            $('#spinner1').hide();
        }
    });

    var cverify = window.recaptchaVerifier;
   
    if(phoneinput.value!=''){

      if(otpinput.value !='')
      {
          otpinput.value='';
      }
    firebase.auth().signInWithPhoneNumber(phoneinput.value, cverify).then(function (response) {
        console.log(response);
        resp = response;
        
        $("#phoneloginbtn").hide();
        alert("SMS sent");
        otpinput.value='';
        $('#spinner1').hide();
        // $("#inputOtp").show();
        // $("#verifyotp").show();
        window.confirmationResult = response;
    }).catch(function (error) {
        // firebase.auth().signOut().then(function(){
        firebase.auth().signOut().then(function () {
            $('#spinner1').hide();

            alert(error);
            window.location.reload();

            //     grecaptcha.reset(widgetId);
            //   });
        });



    });
    }else{
        alert("Enter your Phone number");
    }
})

verifyotp.onclick = function () {
    $('#spinner1').show();
    
    
    if (otpinput.value != '' && phoneinput.value !='') {
        if(resp !='')
        {
         confirmationResult.confirm(otpinput.value).then(function (response) {

            firebase.auth().onAuthStateChanged(function (user) {
                // alert(user.uid);
                // alert("Done");
                document.getElementById("inputPhone").value = '';
                document.getElementById("inputOtp").value = '';

                const userDocRef = firebase.firestore().collection('users').doc(user.uid);
                userDocRef.get().then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        alert("Login Successfull");
                        $('#spinner1').hide();
                        window.location.replace("student.html");
                    }
                    else {
                        alert("User not exists,Create your account");
                        $('#spinner1').hide();
                        window.location.replace("fill-out-form.html");
                    }
                })

                //window.location.replace("fill-out-form.html");
            });
            console.log(response);



         }).catch(function (error) {


            $('#spinner1').hide();
            alert("Invalid OTP");

         });
        }
        else{
            alert("Get OTP");
        }
    }
    else{
        alert("Enter all details");
    }
}



function checkuser() {
    firebase.auth().onAuthStateChanged(function (user) {
        alert("Phone: " + user.phoneNumber + " uid: " + user.uid);
    });
}
function logouto() {
    firebase.auth().signOut().then(function () {
        alert("log out succesfully");
    });
}