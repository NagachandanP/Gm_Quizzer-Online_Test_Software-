
const signupform = document.querySelector('#Register');
signupform.addEventListener('submit', (e) => {
   // $('#spinner').show();
    e.preventDefault();


    const uname = signupform['signup-username'].value;
    const email = signupform['signup-email'].value;
    const college = signupform['signup-college'].value;
    const password = signupform['signup-password'].value;
    const confirmpassword = signupform['confirm-password'].value;
    const phone = signupform['signup-phone'].value;


    //signup----------------

    if (confirmpassword == password) {
        $('#spinner').show();
        //auth.createUserWithEmailAndPassword(email, password).then(cred => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);

            return firebase.firestore().collection('users').doc(cred.user.uid).set({
                Username: uname,
                Email: email,
                Phone: phone,
                College: college
            });

        }).then(() => {
            const modal = document.querySelector('#signing');
            alert("Registered Account Successfully");
            $('#spinner').hide();
            signupform.reset();
            ToggleLogin();
        }).
            catch(function (error) {
                $('#spinner').hide();
                window.alert(error);


            });
        
        }

        else{
            alert("confirm password mismatched ");
        }
        });

//login-------------

const loginform = document.querySelector('#Login');
loginform.addEventListener('submit', (e) => {
    $('#spinner').show();
    e.preventDefault();

    const lemail = loginform['login-email'].value;
    const lpassword = loginform['login-password'].value;
    var uid = null;
    //auth.signInWithEmailAndPassword(lemail, lpassword).then(cred => {
    firebase.auth().signInWithEmailAndPassword(lemail, lpassword).then(cred => {
        console.log(cred.user);
        $('#spinner').hide();
        loginform.reset();
        //firebase.auth().onAuthStateChanged(user => {
        //  if (user) {

        ///uid = user.uid;
        // window.location = 'student.html'; //After successful login, user will be redirected to home.html
        window.location.replace("student.html");

        //}

        // });

    }).catch(function (error) {
        console.log("Login Failed!", error);
        $('#spinner').hide();
        window.alert(error);
        loginform.reset();
    });
})




