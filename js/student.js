var cmarks = new Array();
for (let z = 0; z < 60; z++) {
    cmarks[z] = 0;
}

var pmarks = new Array();
for (let y = 0; y < 60; y++) {
    pmarks[y] = 0;
}

var mmarks = new Array();
for (let x = 0; x < 60; x++) {
    mmarks[x] = 0;
}
var presentDate = new Date();
var endtime;
let scheduletime, startTime;



$("#qbtn").hide();
$("#qstart").hide();
$("#head").hide();


$(document).ready(function () {



    $("#sure").hide();
    $("#nosure").hide();
    $("#subt").hide();

    // $(window).unbind('blur');

    db.collection('Timestamp').get().then(snapshot => {

        snapshot.docs.forEach(doc => {
            scheduletime = doc.data().start_time;
            endtime = doc.data().end_time;

        });
    }).then(function () {
        startTime = scheduletime.toDate();
        endtime = endtime.toDate();
        // alert(startTime+"\n"+presentDate);

        if (presentDate < startTime) {
            // alert("you came early");
            $("#qstart").show();


            var countDownDate = new Date(startTime).getTime();

            // Run myfunc every seconds
            var myfunc = setInterval(function () {

                var now = new Date().getTime();
                var timeleft = countDownDate - now;


                // if (timeleft == 0) {
                //     clearInterval(myfunc);
                //     document.getElementById("days").innerHTML = ""
                //     document.getElementById("hours").innerHTML = ""
                //     document.getElementById("mins").innerHTML = ""
                //     document.getElementById("secs").innerHTML = ""
                //     document.getElementById("end").innerHTML = "Quiz starts" +`<b>` + "NOW";
                //     $("#qbtn").show();
                //     return;

                // }


                // Calculating the days, hours, minutes and seconds left
                var befdays = Math.floor(timeleft / (1000 * 60 * 60 * 24));
                var befhours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var befminutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                var befseconds = Math.floor((timeleft % (1000 * 60)) / 1000);

                if (befdays < 10) {
                    befdays = "0" + befdays;
                }

                if (befhours < 10) {
                    befhours = "0" + befhours;

                }
                if (befminutes < 10) {
                    befminutes = "0" + befminutes;

                }
                if (befseconds < 10) {
                    befseconds = "0" + befseconds;

                }

                if (befdays == 0 && befhours == 0 && befminutes < 10) {
                    document.getElementById("days").style.color = "red";
                    document.getElementById("mins").style.color = "red";
                    document.getElementById("hours").style.color = "red";
                    document.getElementById("secs").style.color = "red";
                }

                // Result is output to the specific element
                document.getElementById("days").innerHTML = befdays + "d "
                document.getElementById("hours").innerHTML = befhours + "h "
                document.getElementById("mins").innerHTML = befminutes + "m "
                document.getElementById("secs").innerHTML = befseconds + "s "

                if (befdays == 0 && befhours == 0 && befminutes == 0 && befseconds == 0) {
                    clearInterval(myfunc);
                    document.getElementById("days").innerHTML = ""
                    document.getElementById("hours").innerHTML = ""
                    document.getElementById("mins").innerHTML = ""
                    document.getElementById("secs").innerHTML = ""
                    document.getElementById("end").innerHTML = "Quiz starts" + `<b> NOW </b>`;
                    $("#qstart").hide();
                    $("#qbtn").show();
                    return;

                }

                // Display the message when countdown is over

            }, 1000);

        }

        else if (presentDate >= endtime) {
            $(window).unbind('blur');
            document.getElementById("end").innerHTML = "Quiz ended";

            $("#qstart").hide();
        }
        else {
            $("#qbtn").show();
            $("#qstart").hide();
        }

    });




    firebase.auth().onAuthStateChanged(function (user) {

        // document.getElementById('username').innerHTML = snapshot.doc.data().Username;
        db.collection('users').doc(user.uid).get().then(snapshot => {


            document.getElementById('username').innerHTML = `  <img src="account.png" alt="" width="40px" height="40px">` + snapshot.data().Username;


        });
    });
    // document.section.style.backgroundImage='url("well.jpg")';
    // document.getElementById("toc").style.display = "none";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("phyque").style.display = "none";
    document.getElementById("chemque").style.display = "none";
    document.getElementById("matque").style.display = "none";
    document.getElementById("ptoc").style.display = "none";
    document.getElementById("ctoc").style.display = "none";
    document.getElementById("mtoc").style.display = "none";
    $("#subsbtn").hide();
    // it hides the questions at start
});


function phyq() {
    document.getElementById("chemque").style.display = "none";
    document.getElementById("matque").style.display = "none";

    $("#phyque").show();

    let phy = document.getElementById("phy");
    phy.classList.add("active");


    let chem = document.getElementById("chem");
    chem.classList.remove("active");
    let mat = document.getElementById("mat");
    mat.classList.remove("active");


    $("#ptoc").show();
    $("#ctoc").hide();
    $("#mtoc").hide();





}

// //////////////////////////////firebase /////////////////////////////////////////////
let count = 1; // for giving every list element a different id

db.collection('physics').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});
function renderCafe(doc) {
    const qlist = document.querySelector('#pq');
    let li = document.createElement('li');
    li.setAttribute('id', 'fireq');
    let question = document.createElement('span');
    question.setAttribute('id', 'qno' + count); // Giving every li every a different id so that to connect to question number table

    // //////////////////table of contents dynamically adding//////////////////////////////////////////
    let ptc = document.querySelector("#pt");
    let ptli = document.createElement("li");
    let pta = document.createElement('a');
    pta.setAttribute('id', 'toc' + count);
    pta.setAttribute('href', '#qno' + count++);
    let pts = document.createElement('span');
    pts.textContent = count - 1;

    pta.appendChild(pts);
    ptli.appendChild(pta);
    ptc.appendChild(ptli);
    ////////////////////////////////dynamically adding table of contents finished///////////////////////////////////
    let img = document.createElement('img');
    let option1 = document.createElement('span');

    let option2 = document.createElement('span');

    let option3 = document.createElement('span');

    let option4 = document.createElement('span');


    let optionRef1 = document.createElement('img');
    let optionRef2 = document.createElement('img');
    let optionRef3 = document.createElement('img');
    let optionRef4 = document.createElement('img');

    li.setAttribute('data-id', doc.id);
    question.textContent = doc.data().question;


    if (doc.data().ImageRef !== "") {

        img.setAttribute("src", doc.data().ImageRef);
        // img.setAttribute("width", "304");
        // img.setAttribute("height", "228");
        img.style.width = "auto";
        img.style.height = "auto";
        img.style.maxWidth = "600px";
        img.style.maxHeight = "300px";

    }

    if (doc.data().optionRef1 !== "") {

        optionRef1.setAttribute("src", doc.data().optionRef1);
        // optionRef1.setAttribute("width", "304");
        // optionRef1.setAttribute("height", "228");

        optionRef1.style.width = "auto";
        optionRef1.style.height = "auto";
        optionRef1.style.maxWidth = "600px";
        optionRef1.style.maxHeight = "300px";


    }

    if (doc.data().optionRef2 !== "") {

        optionRef2.setAttribute("src", doc.data().optionRef2);
        optionRef2.style.width = "auto";
        optionRef2.style.height = "auto";
        optionRef2.style.maxWidth = "600px";
        optionRef2.style.maxHeight = "300px";

    }

    if (doc.data().optionRef3 !== "") {

        optionRef3.setAttribute("src", doc.data().optionRef3);
        optionRef3.style.width = "auto";
        optionRef3.style.height = "auto";
        optionRef3.style.maxWidth = "600px";
        optionRef3.style.maxHeight = "300px";

    }

    if (doc.data().optionRef4 !== "") {

        optionRef4.setAttribute("src", doc.data().optionRef4);
        optionRef4.style.width = "auto";
        optionRef4.style.height = "auto";
        optionRef4.style.maxWidth = "600px";
        optionRef4.style.maxHeight = "300px";

    }


    option1.textContent = "a.\t" + doc.data().option1;
    option2.textContent = "b.\t" + doc.data().option2;
    option3.textContent = "c.\t" + doc.data().option3;
    option4.textContent = "d.\t" + doc.data().option4;
    let oprefer1 = doc.data().optionRef1;
    let oprefer2 = doc.data().optionRef2;
    let oprefer3 = doc.data().optionRef3;
    let oprefer4 = doc.data().optionRef4;

    li.appendChild(question);
    li.appendChild(img);
    li.appendChild(option1);
    li.appendChild(optionRef1);
    li.appendChild(option2);
    li.appendChild(optionRef2);
    li.appendChild(option3);
    li.appendChild(optionRef3);
    li.appendChild(option4);

    li.appendChild(optionRef4);




    // ////////////////////////For selected options /////////////////////////////////////////////////////////////////

    // optionRef1.addEventListener("click",opimg1());
    //  function opimg1(){
    //     //  optionRef1.classList.add("selimg");
    //     optionRef1.style.border="15px solid rgb(26, 136, 170)";
    //     optionRef2.style.border="none";
    //     optionRef3.style.border="none";
    //     optionRef4.style.border="none";
    //  } 

    option1.addEventListener("click", myfunction);
    function myfunction() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let pans1 = question.getAttribute('id');
        let pres1 = pans1.replace(/\D/g, "");
        //  alert(res);

        if (option1.textContent == "a.\t" + doc.data().keyop || oprefer1 == doc.data().keyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            pmarks[pres1] = 1;
        }
        else {
            pmarks[pres1] = 0;
        }

        //  if(doc.data().optionRef1 != ""){
        //     optionRef1.addEventListener("click",opimg1());

        //  }
        option1.style.color = "black";
        option1.classList.add('selected');

        option2.classList.remove('selected');
        option3.classList.remove('selected');
        option4.classList.remove('selected');

        if (doc.data().optionRef1 != '') {
            optionRef1.classList.add("selimg");
            optionRef1.style.border = "15px solid rgb(26, 136, 170)";
        }


        optionRef2.style.border = "none";
        optionRef3.style.border = "none";
        optionRef4.style.border = "none";

        option2.style.color = "#999";
        option3.style.color = "#999";
        option4.style.color = "#999";

        ptli.style.backgroundColor = "green";
        ptli.style.border = "2px solid white"

    }

    // function opimg2(){
    //     //  optionRef1.classList.add("selimg");
    //     optionRef2.style.border="15px solid rgb(26, 136, 170)";
    //     optionRef1.style.border="none";
    //     optionRef3.style.border="none";
    //     optionRef4.style.border="none";
    //  } 

    option2.addEventListener("click", o2function);
    function o2function() {
        let pans2 = question.getAttribute('id');
        let pres2 = pans2.replace(/\D/g, "");
        //  alert(res);

        if (option2.textContent == "b.\t" + doc.data().keyop || oprefer2 == doc.data().keyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            pmarks[pres2] = 1;
        }
        else {
            pmarks[pres2] = 0;
        }
        // if(doc.data().optionRef2 != ""){
        //     optionRef2.addEventListener("click",opimg2());

        //  }

        option2.style.color = "black";
        option2.classList.add('selected');
        option1.classList.remove('selected');
        option3.classList.remove('selected');
        option4.classList.remove('selected');

        if (doc.data().optionRef2 != '') {
            optionRef2.classList.add("selimg");
            optionRef2.style.border = "15px solid rgb(26, 136, 170)";
        }

        optionRef1.style.border = "none";
        optionRef3.style.border = "none";
        optionRef4.style.border = "none";

        option1.style.color = "#999";
        option3.style.color = "#999";
        option4.style.color = "#999";

        ptli.style.backgroundColor = "green";
        ptli.style.border = "2px solid white"

    }

    // function opimg3(){
    //     //  optionRef1.classList.add("selimg");
    //     optionRef3.style.border="15px solid rgb(26, 136, 170)";
    //     optionRef1.style.border="none";
    //     optionRef2.style.border="none";
    //     optionRef4.style.border="none";
    //  } 

    option3.addEventListener("click", o3function);
    function o3function() {
        let pans3 = question.getAttribute('id');
        let pres3 = pans3.replace(/\D/g, "");
        //  alert(res);

        if (option3.textContent == "c.\t" + doc.data().keyop || oprefer3 == doc.data().keyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            pmarks[pres3] = 1;
        }
        else {
            pmarks[pres3] = 0;
        }
        // if(doc.data().optionRef3 != ""){
        //     optionRef3.addEventListener("click",opimg3());

        //  }
        option3.style.color = "black";
        option3.classList.add('selected');
        option1.classList.remove('selected');
        option2.classList.remove('selected');
        option4.classList.remove('selected');

        if (doc.data().optionRef3 != '') {
            optionRef3.classList.add("selimg");
            optionRef3.style.border = "15px solid rgb(26, 136, 170)";
        }

        optionRef1.style.border = "none";
        optionRef2.style.border = "none";
        optionRef4.style.border = "none";


        option2.style.color = "#999";
        option1.style.color = "#999";
        option4.style.color = "#999";

        ptli.style.backgroundColor = "green";
        ptli.style.border = "2px solid white"
    }

    // function opimg4(){
    //     //  optionRef1.classList.add("selimg");
    //     optionRef4.style.border="15px solid rgb(26, 136, 170)";
    //     optionRef1.style.border="none";
    //     optionRef2.style.border="none";
    //     optionRef3.style.border="none";
    //  } 

    option4.addEventListener("click", o4function);
    function o4function() {
        let pans4 = question.getAttribute('id');
        let pres4 = pans4.replace(/\D/g, "");
        //  alert(res);

        if (option4.textContent == "d.\t" + doc.data().keyop || oprefer4 == doc.data().keyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            pmarks[pres4] = 1;
        }
        else {
            pmarks[pres4] = 0;
        }

        // if(doc.data().optionRef4 != ""){
        //     optionRef4.addEventListener("click",opimg4());

        //  }

        option4.style.color = "black";
        option4.classList.add('selected');

        option1.classList.remove('selected');
        option2.classList.remove('selected');
        option3.classList.remove('selected');

        if (doc.data().optionRef4 != '') {
            optionRef4.classList.add("selimg");
            optionRef4.style.border = "15px solid rgb(26, 136, 170)";
        }

        optionRef1.style.border = "none";
        optionRef2.style.border = "none";
        optionRef3.style.border = "none";


        option2.style.color = "#999";
        option3.style.color = "#999";
        option1.style.color = "#999";

        ptli.style.backgroundColor = "green";
        ptli.style.border = "2px solid white"

    }

    //check-images-answers
    optionRef1.addEventListener("click", myfunctionim1);
    function myfunctionim1() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let pansi1 = question.getAttribute('id');
        let presi1 = pansi1.replace(/\D/g, "");
        // alert(presi1);

        if (oprefer1 == doc.data().keyop || option1.textContent == "a.\t" + doc.data().keyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            pmarks[presi1] = 1;
        }
        else {
            pmarks[presi1] = 0;
        }

        optionRef1.classList.add("selimg");
        optionRef1.style.border = "15px solid rgb(26, 136, 170)";
        optionRef2.style.border = "none";
        optionRef3.style.border = "none";
        optionRef4.style.border = "none";

        option1.style.color = "black";
        option1.classList.add('selected');
        option3.classList.remove('selected');
        option2.classList.remove('selected');
        option4.classList.remove('selected');



        option2.style.color = "#999";
        option3.style.color = "#999";
        option4.style.color = "#999";

        ptli.style.backgroundColor = "green";
        ptli.style.border = "2px solid white"
    }

    optionRef2.addEventListener("click", myfunctionim2);
    function myfunctionim2() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let pansi2 = question.getAttribute('id');
        let presi2 = pansi2.replace(/\D/g, "");
        // alert(presi2);

        if (oprefer2 == doc.data().keyop || option2.textContent == "b.\t" + doc.data().keyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            pmarks[presi2] = 1;
        }
        else {
            pmarks[presi2] = 0;
        }
        optionRef2.classList.add("selimg");
        optionRef2.style.border = "15px solid rgb(26, 136, 170)";
        optionRef1.style.border = "none";
        optionRef3.style.border = "none";
        optionRef4.style.border = "none";

        option2.style.color = "black";
        option2.classList.add('selected');
        option1.classList.remove('selected');
        option3.classList.remove('selected');
        option4.classList.remove('selected');



        option1.style.color = "#999";
        option3.style.color = "#999";
        option4.style.color = "#999";

        ptli.style.backgroundColor = "green";
        ptli.style.border = "2px solid white"

    }

    optionRef3.addEventListener("click", myfunctionim3);
    function myfunctionim3() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let pansi3 = question.getAttribute('id');
        let presi3 = pansi3.replace(/\D/g, "");
        // alert(presi3);

        if (oprefer3 == doc.data().keyop || option3.textContent == "c.\t" + doc.data().keyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            pmarks[presi3] = 1;
        }
        else {
            pmarks[presi3] = 0;
        }
        optionRef3.classList.add("selimg");
        optionRef3.style.border = "15px solid rgb(26, 136, 170)";
        optionRef1.style.border = "none";
        optionRef2.style.border = "none";
        optionRef4.style.border = "none";

        option3.style.color = "black";
        option3.classList.add('selected');
        option1.classList.remove('selected');
        option2.classList.remove('selected');
        option4.classList.remove('selected');



        option2.style.color = "#999";
        option1.style.color = "#999";
        option4.style.color = "#999";

        ptli.style.backgroundColor = "green";
        ptli.style.border = "2px solid white"

    }


    optionRef4.addEventListener("click", myfunctionim4);
    function myfunctionim4() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let pansi4 = question.getAttribute('id');
        let presi4 = pansi4.replace(/\D/g, "");
        // alert(presi4);

        if (oprefer4 == doc.data().keyop || option4.textContent == "d.\t" + doc.data().keyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            pmarks[presi4] = 1;
        }
        else {
            pmarks[presi4] = 0;
        }

        optionRef4.classList.add("selimg");
        optionRef4.style.border = "15px solid rgb(26, 136, 170)";
        optionRef2.style.border = "none";
        optionRef3.style.border = "none";
        optionRef1.style.border = "none";

        option4.style.color = "black";
        option4.classList.add('selected');

        option1.classList.remove('selected');
        option2.classList.remove('selected');
        option3.classList.remove('selected');


        option2.style.color = "#999";
        option3.style.color = "#999";
        option1.style.color = "#999";

        ptli.style.backgroundColor = "green";
        ptli.style.border = "2px solid white"

    }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------

    qlist.appendChild(li);
}

// $("li").click(function () {
//     window.scrollTo(0, 0);


// })




function chemq() {
    document.getElementById("phyque").style.display = "none";
    document.getElementById("matque").style.display = "none";

    $("#chemque").show();
    // $("#ctoc").show();
    let chem = document.getElementById("chem");
    chem.classList.add("active");

    let phy = document.getElementById("phy");
    phy.classList.remove("active");
    let mat = document.getElementById("mat");
    mat.classList.remove("active");


    $("#ctoc").show();
    $("#ptoc").hide();
    $("#mtoc").hide();
}
// //////////////////////////////firebase /////////////////////////////////////////////
let ccount = 1;   // for giving every list element a different id

db.collection('chemistry').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCq(doc);
    });
});
function renderCq(doc) {

    const cqlist = document.querySelector('#cq');
    let cli = document.createElement('li');
    cli.setAttribute('id', 'fireq');
    let cquestion = document.createElement('span');
    cquestion.setAttribute('id', 'cqno' + ccount); // Giving every li every a different id so that to connect to question number table

    // //////////////////table of contents dynamically adding//////////////////////////////////////////
    let ctc = document.querySelector("#ct");
    let ctli = document.createElement("li");
    let cta = document.createElement('a');
    cta.setAttribute('id', 'ctoc' + ccount);
    cta.setAttribute('href', '#cqno' + ccount++);
    let cts = document.createElement('span');
    cts.textContent = ccount - 1;

    cta.appendChild(cts);
    ctli.appendChild(cta);
    ctc.appendChild(ctli);
    ////////////////////////////////dynamically adding table of contents finished///////////////////////////////////

    let cimg = document.createElement('img');
    let coption1 = document.createElement('span');
    let coption2 = document.createElement('span');
    let coption3 = document.createElement('span');
    let coption4 = document.createElement('span');

    let coptionRef1 = document.createElement('img');
    let coptionRef2 = document.createElement('img');
    let coptionRef3 = document.createElement('img');
    let coptionRef4 = document.createElement('img');


    cli.setAttribute('data-id', doc.id);
    cquestion.textContent = doc.data().question;
    if (doc.data().ImageRef !== "") {

        cimg.setAttribute("src", doc.data().ImageRef);
        // cimg.setAttribute("width", "304");
        // cimg.setAttribute("height", "228");
        cimg.style.width = "auto";
        cimg.style.height = "auto";
        cimg.style.maxWidth = "600px";
        cimg.style.maxHeight = "300px";

    }



    if (doc.data().optionRef1 !== "") {

        coptionRef1.setAttribute("src", doc.data().optionRef1);
        // optionRef1.setAttribute("width", "304");
        // optionRef1.setAttribute("height", "228");

        coptionRef1.style.width = "auto";
        coptionRef1.style.height = "auto";
        coptionRef1.style.maxWidth = "600px";
        coptionRef1.style.maxHeight = "300px";


    }

    if (doc.data().optionRef2 !== "") {

        coptionRef2.setAttribute("src", doc.data().optionRef2);
        coptionRef2.style.width = "auto";
        coptionRef2.style.height = "auto";
        coptionRef2.style.maxWidth = "600px";
        coptionRef2.style.maxHeight = "300px";

    }

    if (doc.data().optionRef3 !== "") {

        coptionRef3.setAttribute("src", doc.data().optionRef3);
        coptionRef3.style.width = "auto";
        coptionRef3.style.height = "auto";
        coptionRef3.style.maxWidth = "600px";
        coptionRef3.style.maxHeight = "300px";

    }

    if (doc.data().optionRef4 !== "") {

        coptionRef4.setAttribute("src", doc.data().optionRef4);
        coptionRef4.style.width = "auto";
        coptionRef4.style.height = "auto";
        coptionRef4.style.maxWidth = "600px";

        coptionRef4.style.maxHeight = "300px";

    }
    coption1.textContent = "a.\t" + doc.data().option1;
    coption2.textContent = "b.\t" + doc.data().option2;
    coption3.textContent = "c.\t" + doc.data().option3;
    coption4.textContent = "d.\t" + doc.data().option4;

    let coprefer1 = doc.data().optionRef1;
    let coprefer2 = doc.data().optionRef2;
    let coprefer3 = doc.data().optionRef3;
    let coprefer4 = doc.data().optionRef4;


    cli.appendChild(cquestion);
    cli.appendChild(cimg);
    cli.appendChild(coption1);
    cli.appendChild(coptionRef1);
    cli.appendChild(coption2);
    cli.appendChild(coptionRef2);
    cli.appendChild(coption3);
    cli.appendChild(coptionRef3);
    cli.appendChild(coption4);

    cli.appendChild(coptionRef4);



    // ////////////////////////For selected options for chemistry//////////////////////////////////////////////////////////////////////////



    coption1.addEventListener("click", myfunction);
    function myfunction() {



        let ans1 = cquestion.getAttribute('id');
        let res1 = ans1.replace(/\D/g, "");
        //  alert(res);

        if (coption1.textContent == "a.\t" + doc.data().ckeyop || coprefer1 == doc.data().ckeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            cmarks[res1] = 1;
        }
        else {
            cmarks[res1] = 0;
        }



        coption1.style.color = "black";
        coption1.classList.add('selected');

        coption2.classList.remove('selected');
        coption3.classList.remove('selected');
        coption4.classList.remove('selected');

        if (doc.data().optionRef1 != '') {
            coptionRef1.classList.add("selimg");
            coptionRef1.style.border = "15px solid rgb(26, 136, 170)";
        }




        coptionRef2.style.border = "none";
        coptionRef3.style.border = "none";
        coptionRef4.style.border = "none";

        coption2.style.color = "#999";
        coption3.style.color = "#999";
        coption4.style.color = "#999";

        ctli.style.backgroundColor = "green";
        ctli.style.border = "2px solid white"

    }

    coption2.addEventListener("click", o2function);
    function o2function() {

        let ans2 = cquestion.getAttribute('id');
        let res2 = ans2.replace(/\D/g, "");
        if (coption2.textContent == "b.\t" + doc.data().ckeyop || coprefer2 == doc.data().ckeyop) {
            // alert("congrats crt answer");
            //let ans2 = cquestion.getAttribute('id');

            cmarks[res2] = 1;
        }
        else {
            cmarks[res2] = 0;
        }



        coption2.style.color = "black";
        coption2.classList.add('selected');

        coption1.classList.remove('selected');
        coption3.classList.remove('selected');
        coption4.classList.remove('selected');

        if (doc.data().optionRef2 != '') {
            coptionRef2.classList.add("selimg");
            coptionRef2.style.border = "15px solid rgb(26, 136, 170)";
        }



        coptionRef1.style.border = "none";
        coptionRef3.style.border = "none";
        coptionRef4.style.border = "none";

        coption1.style.color = "#999";
        coption3.style.color = "#999";
        coption4.style.color = "#999";

        ctli.style.backgroundColor = "green";
        ctli.style.border = "2px solid white"

    }
    coption3.addEventListener("click", o3function);
    function o3function() {

        let ans3 = cquestion.getAttribute('id');
        let res3 = ans3.replace(/\D/g, "");
        if (coption3.textContent == "c.\t" + doc.data().ckeyop || coprefer3 == doc.data().ckeyop) {
            // alert("congrats crt answer");
            //let ans3 = cquestion.getAttribute('id');

            cmarks[res3] = 1;
        }
        else {
            cmarks[res3] = 0;
        }



        coption3.style.color = "black";
        coption3.classList.add('selected');

        coption2.classList.remove('selected');
        coption1.classList.remove('selected');
        coption4.classList.remove('selected');

        if (doc.data().optionRef3 != '') {
            coptionRef3.classList.add("selimg");
            coptionRef3.style.border = "15px solid rgb(26, 136, 170)";
        }



        coptionRef2.style.border = "none";
        coptionRef1.style.border = "none";
        coptionRef4.style.border = "none";

        coption1.style.color = "#999";
        coption2.style.color = "#999";
        coption4.style.color = "#999";

        ctli.style.backgroundColor = "green";
        ctli.style.border = "2px solid white"

    }
    coption4.addEventListener("click", o4function);
    function o4function() {

        let ans4 = cquestion.getAttribute('id');
        let res4 = ans4.replace(/\D/g, "");
        if (coption4.textContent == "d.\t" + doc.data().ckeyop || coprefer4 == doc.data().ckeyop) {
            // alert("congrats crt answer");
            //let ans4 = cquestion.getAttribute('id');

            cmarks[res4] = 1;
        }
        else {
            cmarks[res4] = 0;
        }



        coption4.style.color = "black";
        coption4.classList.add('selected');

        coption2.classList.remove('selected');
        coption3.classList.remove('selected');
        coption1.classList.remove('selected');

        if (doc.data().optionRef4 != '') {
            coptionRef4.classList.add("selimg");
            coptionRef4.style.border = "15px solid rgb(26, 136, 170)";
        }



        coptionRef2.style.border = "none";
        coptionRef3.style.border = "none";
        coptionRef1.style.border = "none";

        coption2.style.color = "#999";
        coption3.style.color = "#999";
        coption1.style.color = "#999";

        ctli.style.backgroundColor = "green";
        ctli.style.border = "2px solid white"

    }
    ////////////////////////////////////////for selected options for chemistry finished//////////////////////////////////////////
    coptionRef1.addEventListener("click", myfunctionicm1);
    function myfunctionicm1() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let cansi1 = cquestion.getAttribute('id');
        let cresi1 = cansi1.replace(/\D/g, "");
        // alert(cresi1);

        if (coprefer1 == doc.data().ckeyop || coption1.textContent == "a.\t" + doc.data().ckeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            cmarks[cresi1] = 1;
        }
        else {
            cmarks[cresi1] = 0;
        }

        coptionRef1.classList.add("selimg");
        coptionRef1.style.border = "15px solid rgb(26, 136, 170)";

        coptionRef3.style.border = "none";
        coptionRef2.style.border = "none";
        coptionRef4.style.border = "none";

        coption1.style.color = "black";
        coption1.classList.add('selected');
        coption3.classList.remove('selected');
        coption2.classList.remove('selected');
        coption4.classList.remove('selected');



        coption2.style.color = "#999";
        coption3.style.color = "#999";
        coption4.style.color = "#999";

        ctli.style.backgroundColor = "green";
        ctli.style.border = "2px solid white"
    }

    coptionRef2.addEventListener("click", myfunctionim2);
    function myfunctionim2() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let cansi2 = cquestion.getAttribute('id');
        let cresi2 = cansi2.replace(/\D/g, "");
        // alert(cresi2);

        if (coprefer2 == doc.data().ckeyop || coption2.textContent == "b.\t" + doc.data().ckeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            cmarks[cresi2] = 1;
        }
        else {
            cmarks[cresi2] = 0;
        }
        coptionRef2.classList.add("selimg");
        coptionRef2.style.border = "15px solid rgb(26, 136, 170)";

        coptionRef1.style.border = "none";
        coptionRef3.style.border = "none";
        coptionRef4.style.border = "none";

        coption2.style.color = "black";
        coption2.classList.add('selected');
        coption1.classList.remove('selected');
        coption3.classList.remove('selected');
        coption4.classList.remove('selected');



        coption1.style.color = "#999";
        coption3.style.color = "#999";
        coption4.style.color = "#999";

        ctli.style.backgroundColor = "green";
        ctli.style.border = "2px solid white"

    }

    coptionRef3.addEventListener("click", myfunctionim3);
    function myfunctionim3() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let cansi3 = cquestion.getAttribute('id');
        let cresi3 = cansi3.replace(/\D/g, "");
        // alert(cresi3);

        if (coprefer3 == doc.data().ckeyop || coption3.textContent == "c.\t" + doc.data().ckeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            cmarks[cresi3] = 1;
        }
        else {
            cmarks[cresi3] = 0;
        }
        coptionRef3.classList.add("selimg");
        coptionRef3.style.border = "15px solid rgb(26, 136, 170)";

        coptionRef1.style.border = "none";
        coptionRef2.style.border = "none";
        coptionRef4.style.border = "none";

        coption3.style.color = "black";
        coption3.classList.add('selected');
        coption1.classList.remove('selected');
        coption2.classList.remove('selected');
        coption4.classList.remove('selected');



        coption2.style.color = "#999";
        coption1.style.color = "#999";
        coption4.style.color = "#999";

        ctli.style.backgroundColor = "green";
        ctli.style.border = "2px solid white"

    }


    coptionRef4.addEventListener("click", myfunctionim4);
    function myfunctionim4() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let cansi4 = cquestion.getAttribute('id');
        let cresi4 = cansi4.replace(/\D/g, "");
        // alert(cresi4);

        if (coprefer4 == doc.data().ckeyop || coption4.textContent == "d.\t" + doc.data().ckeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            cmarks[cresi4] = 1;
        }
        else {
            cmarks[cresi4] = 0;
        }

        coptionRef4.classList.add("selimg");
        coptionRef4.style.border = "15px solid rgb(26, 136, 170)";

        coptionRef2.style.border = "none";
        coptionRef3.style.border = "none";
        coptionRef1.style.border = "none";

        coption4.style.color = "black";
        coption4.classList.add('selected');

        coption1.classList.remove('selected');
        coption2.classList.remove('selected');
        coption3.classList.remove('selected');


        coption2.style.color = "#999";
        coption3.style.color = "#999";
        coption1.style.color = "#999";

        ctli.style.backgroundColor = "green";
        ctli.style.border = "2px solid white"

    }


    cqlist.appendChild(cli);


    // $("li").click(function () {
    //     window.scrollTo(0, 0);


    // })
}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////Mathematics/////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////firebase finished/////////////////////////////////////



function matq() {
    document.getElementById("phyque").style.display = "none";
    document.getElementById("chemque").style.display = "none";

    $("#matque").show();
    $("#mtoc").show();
    let mat = document.getElementById("mat");
    mat.classList.add("active");

    let phy = document.getElementById("phy");
    phy.classList.remove("active");
    let chem = document.getElementById("chem");
    chem.classList.remove("active");


    $("#mtoc").show();
    $("#ptoc").hide();
    $("#ctoc").hide();
}
// //////////////////////////////firebase /////////////////////////////////////////////
let mcount = 1; // for giving every list element a different id

db.collection('maths').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        rendermq(doc);
    });
});
function rendermq(doc) {
    const mqlist = document.querySelector('#mq');
    let mli = document.createElement('li');
    mli.setAttribute('id', 'fireq');
    let mquestion = document.createElement('span');
    mquestion.setAttribute('id', 'mqno' + mcount); // Giving every li every a different id so that to connect to question number table

    // //////////////////table of contents dynamically adding//////////////////////////////////////////
    let mtc = document.querySelector("#mt");
    let mtli = document.createElement("li");
    let mta = document.createElement('a');
    mta.setAttribute('id', 'toc' + mcount);
    mta.setAttribute('href', '#mqno' + mcount++);
    let mts = document.createElement('span');
    mts.textContent = mcount - 1;

    mta.appendChild(mts);
    mtli.appendChild(mta);
    mtc.appendChild(mtli);
    ////////////////////////////////dynamically adding table of contents finished///////////////////////////////////

    let mimg = document.createElement('img');
    let moption1 = document.createElement('span');
    let moption2 = document.createElement('span');
    let moption3 = document.createElement('span');
    let moption4 = document.createElement('span');

    let moptionRef1 = document.createElement('img');
    let moptionRef2 = document.createElement('img');
    let moptionRef3 = document.createElement('img');
    let moptionRef4 = document.createElement('img');



    mli.setAttribute('data-id', doc.id);
    mquestion.textContent = doc.data().question;
    if (doc.data().ImageRef !== "") {

        mimg.setAttribute("src", doc.data().ImageRef);
        // mimg.setAttribute("width", "304");
        // mimg.setAttribute("height", "228");
        mimg.style.width = "auto";
        mimg.style.height = "auto";
        mimg.style.maxWidth = "600px";
        mimg.style.maxHeight = "300px";


    }

    if (doc.data().optionRef1 !== "") {

        moptionRef1.setAttribute("src", doc.data().optionRef1);
        // optionRef1.setAttribute("width", "304");
        // optionRef1.setAttribute("height", "228");

        moptionRef1.style.width = "auto";
        moptionRef1.style.height = "auto";
        moptionRef1.style.maxWidth = "600px";
        moptionRef1.style.maxHeight = "300px";


    }

    if (doc.data().optionRef2 !== "") {

        moptionRef2.setAttribute("src", doc.data().optionRef2);
        moptionRef2.style.width = "auto";
        moptionRef2.style.height = "auto";
        moptionRef2.style.maxWidth = "600px";
        moptionRef2.style.maxHeight = "300px";

    }

    if (doc.data().optionRef3 !== "") {

        moptionRef3.setAttribute("src", doc.data().optionRef3);
        moptionRef3.style.width = "auto";
        moptionRef3.style.height = "auto";
        moptionRef3.style.maxWidth = "600px";
        moptionRef3.style.maxHeight = "300px";

    }

    if (doc.data().optionRef4 !== "") {

        moptionRef4.setAttribute("src", doc.data().optionRef4);
        moptionRef4.style.width = "auto";
        moptionRef4.style.height = "auto";
        moptionRef4.style.maxWidth = "600px";

        moptionRef4.style.maxHeight = "300px";

    }


    moption1.textContent = "a.\t" + doc.data().option1;
    moption2.textContent = "b.\t" + doc.data().option2;
    moption3.textContent = "c.\t" + doc.data().option3;
    moption4.textContent = "d.\t" + doc.data().option4;
    let moprefer1 = doc.data().optionRef1;
    let moprefer2 = doc.data().optionRef2;
    let moprefer3 = doc.data().optionRef3;
    let moprefer4 = doc.data().optionRef4;


    mli.appendChild(mquestion);
    mli.appendChild(mimg);
    mli.appendChild(moption1);
    mli.appendChild(moptionRef1);
    mli.appendChild(moption2);
    mli.appendChild(moptionRef2);
    mli.appendChild(moption3);
    mli.appendChild(moptionRef3);
    mli.appendChild(moption4);
    mli.appendChild(moptionRef4);

    // ////////////////////////For selected options for Maths//////////////////////////////////////////////////////////////////////////



    moption1.addEventListener("click", myfunction);
    function myfunction() {
        //   let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let mans1 = mquestion.getAttribute('id');
        let mres1 = mans1.replace(/\D/g, "");
        if (moption1.textContent == "a.\t" + doc.data().mkeyop || moprefer1 == doc.data().mkeyop) {
            // alert("congrats crt answer");
            //let ans4 = cquestion.getAttribute('id');

            mmarks[mres1] = 1;
        }
        else {
            mmarks[mres1] = 0;
        }
        moption1.style.color = "black";
        moption1.classList.add('selected');

        moption2.classList.remove('selected');
        moption3.classList.remove('selected');
        moption4.classList.remove('selected');

        if (doc.data().optionRef1 != '') {
            moptionRef1.classList.add("selimg");
            moptionRef1.style.border = "15px solid rgb(26, 136, 170)";
        }


        moptionRef2.style.border = "none";
        moptionRef3.style.border = "none";
        moptionRef4.style.border = "none";

        moption2.style.color = "#999";
        moption3.style.color = "#999";
        moption4.style.color = "#999";

        mtli.style.backgroundColor = "green";
        mtli.style.border = "2px solid white"

    }

    moption2.addEventListener("click", o2function);
    function o2function() {
        let mans2 = mquestion.getAttribute('id');
        let mres2 = mans2.replace(/\D/g, "");
        if (moption2.textContent == "b.\t" + doc.data().mkeyop || moprefer2 == doc.data().mkeyop) {
            // alert("congrats crt answer");
            //let ans4 = cquestion.getAttribute('id');

            mmarks[mres2] = 1;
        }
        else {
            mmarks[mres2] = 0;
        }
        moption2.style.color = "black";
        moption2.classList.add('selected');

        moption1.classList.remove('selected');
        moption3.classList.remove('selected');
        moption4.classList.remove('selected');

        if (doc.data().optionRef2 != '') {
            moptionRef2.classList.add("selimg");
            moptionRef2.style.border = "15px solid rgb(26, 136, 170)";
        }


        moptionRef1.style.border = "none";
        moptionRef3.style.border = "none";
        moptionRef4.style.border = "none";

        moption1.style.color = "#999";
        moption3.style.color = "#999";
        moption4.style.color = "#999";

        mtli.style.backgroundColor = "green";
        mtli.style.border = "2px solid white"
    }
    moption3.addEventListener("click", o3function);
    function o3function() {
        let mans3 = mquestion.getAttribute('id');
        let mres3 = mans3.replace(/\D/g, "");
        if (moption3.textContent == "c.\t" + doc.data().mkeyop || moprefer3 == doc.data().mkeyop) {
            // alert("congrats crt answer");
            //let ans4 = cquestion.getAttribute('id');

            mmarks[mres3] = 1;
        }
        else {
            mmarks[mres3] = 0;
        }
        moption3.style.color = "black";
        moption3.classList.add('selected');

        moption1.classList.remove('selected');
        moption2.classList.remove('selected');
        moption4.classList.remove('selected');

        if (doc.data().optionRef3 != '') {
            moptionRef3.classList.add("selimg");
            moptionRef3.style.border = "15px solid rgb(26, 136, 170)";
        }


        moptionRef1.style.border = "none";
        moptionRef2.style.border = "none";
        moptionRef4.style.border = "none";

        moption1.style.color = "#999";
        moption2.style.color = "#999";
        moption4.style.color = "#999";

        mtli.style.backgroundColor = "green";
        mtli.style.border = "2px solid white"
    }
    moption4.addEventListener("click", o4function);
    function o4function() {
        let mans4 = mquestion.getAttribute('id');
        let mres4 = mans4.replace(/\D/g, "");
        if (moption4.textContent == "d.\t" + doc.data().mkeyop || moprefer4 == doc.data().mkeyop) {
            // alert("congrats crt answer");
            //let ans4 = cquestion.getAttribute('id');

            mmarks[mres4] = 1;
        }
        else {
            mmarks[mres4] = 0;
        }

        moption4.style.color = "black";
        moption4.classList.add('selected');

        moption1.classList.remove('selected');
        moption3.classList.remove('selected');
        moption2.classList.remove('selected');

        if (doc.data().optionRef4 != '') {
            moptionRef4.classList.add("selimg");
            moptionRef4.style.border = "15px solid rgb(26, 136, 170)";
        }


        moptionRef1.style.border = "none";
        moptionRef3.style.border = "none";
        moptionRef2.style.border = "none";

        moption1.style.color = "#999";
        moption3.style.color = "#999";
        moption2.style.color = "#999";

        mtli.style.backgroundColor = "green";
        mtli.style.border = "2px solid white"

    }
    ////////////////////////////////////////for selected options for maths finished//////////////////////////////////////////

    moptionRef1.addEventListener("click", myfunctionim1);
    function myfunctionim1() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let mansi1 = mquestion.getAttribute('id');
        let mresi1 = mansi1.replace(/\D/g, "");
        // alert(mresi1);

        if (moprefer1 == doc.data().mkeyop || moption1.textContent == "a.\t" + doc.data().mkeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            mmarks[mresi1] = 1;
        }
        else {
            mmarks[mresi1] = 0;
        }

        moptionRef1.classList.add("selimg");
        moptionRef1.style.border = "15px solid rgb(26, 136, 170)";
        moptionRef3.style.border = "none";
        moptionRef2.style.border = "none";
        moptionRef4.style.border = "none";

        moption1.style.color = "black";
        moption1.classList.add('selected');
        moption3.classList.remove('selected');
        moption2.classList.remove('selected');
        moption4.classList.remove('selected');



        moption2.style.color = "#999";
        moption3.style.color = "#999";
        moption4.style.color = "#999";

        mtli.style.backgroundColor = "green";
        mtli.style.border = "2px solid white"
    }

    moptionRef2.addEventListener("click", myfunctionim2);
    function myfunctionim2() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let mansi2 = mquestion.getAttribute('id');
        let mresi2 = mansi2.replace(/\D/g, "");
        // alert(mresi2);

        if (moprefer2 == doc.data().mkeyop || moption2.textContent == "b.\t" + doc.data().mkeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            mmarks[mresi2] = 1;
        }
        else {
            mmarks[mresi2] = 0;
        }
        moptionRef2.classList.add("selimg");
        moptionRef2.style.border = "15px solid rgb(26, 136, 170)";
        moptionRef1.style.border = "none";
        moptionRef3.style.border = "none";
        moptionRef4.style.border = "none";

        moption2.style.color = "black";
        moption2.classList.add('selected');
        moption1.classList.remove('selected');
        moption3.classList.remove('selected');
        moption4.classList.remove('selected');



        moption1.style.color = "#999";
        moption3.style.color = "#999";
        moption4.style.color = "#999";

        mtli.style.backgroundColor = "green";
        mtli.style.border = "2px solid white"

    }

    moptionRef3.addEventListener("click", myfunctionim3);
    function myfunctionim3() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let mansi3 = mquestion.getAttribute('id');
        let mresi3 = mansi3.replace(/\D/g, "");
        // alert(mresi3);

        if (moprefer3 == doc.data().mkeyop || moption3.textContent == "c.\t" + doc.data().mkeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            mmarks[mresi3] = 1;
        }
        else {
            mmarks[mresi3] = 0;
        }
        moptionRef3.classList.add("selimg");
        moptionRef3.style.border = "15px solid rgb(26, 136, 170)";
        moptionRef1.style.border = "none";
        moptionRef2.style.border = "none";
        moptionRef4.style.border = "none";

        moption3.style.color = "black";
        moption3.classList.add('selected');
        moption1.classList.remove('selected');
        moption2.classList.remove('selected');
        moption4.classList.remove('selected');



        moption2.style.color = "#999";
        moption1.style.color = "#999";
        moption4.style.color = "#999";

        mtli.style.backgroundColor = "green";
        mtli.style.border = "2px solid white"

    }


    moptionRef4.addEventListener("click", myfunctionim4);
    function myfunctionim4() {
        //     let ans = question.getAttribute('id');
        // if(option1 == doc.data().keyop){
        //     alert("congrats crt answer")
        // }
        let mansi4 = mquestion.getAttribute('id');
        let mresi4 = mansi4.replace(/\D/g, "");
        // alert(mresi4);

        if (moprefer4 == doc.data().mkeyop || moption4.textContent == "d.\t" + doc.data().mkeyop) {
            // alert("congrats crt answer");
            //  let ans1 = cquestion.getAttribute('id');

            mmarks[mresi4] = 1;
        }
        else {
            mmarks[mresi4] = 0;
        }

        moptionRef4.classList.add("selimg");
        moptionRef4.style.border = "15px solid rgb(26, 136, 170)";
        moptionRef2.style.border = "none";
        moptionRef3.style.border = "none";
        moptionRef1.style.border = "none";

        moption4.style.color = "black";
        moption4.classList.add('selected');

        moption1.classList.remove('selected');
        moption2.classList.remove('selected');
        moption3.classList.remove('selected');


        moption2.style.color = "#999";
        moption3.style.color = "#999";
        moption1.style.color = "#999";

        mtli.style.backgroundColor = "green";
        mtli.style.border = "2px solid white"

    }

    // $("li").click(function () {
    //     window.scrollTo(0, 0);


    // })

    mqlist.appendChild(mli);
}
// ////////////////////////////////////////////////////firebase finished/////////////////////////////////////







$("#qbtn").click(function () {

    $(window).blur(function () {

        var finalmarks = 0;
        for (var j = 0; j < cmarks.length; j++) {
            finalmarks = finalmarks + cmarks[j];
        }

        var pfinalmarks = 0;
        for (var i = 0; i < pmarks.length; i++) {
            pfinalmarks = pfinalmarks + pmarks[i];
        }


        var mfinalmarks = 0;
        for (var k = 0; k < mmarks.length; k++) {
            mfinalmarks = mfinalmarks + mmarks[k];
        }

        firebase.auth().onAuthStateChanged(function (user) {

            firebase.firestore().collection('users').doc(user.uid).update({
                // Username: user.uname,
                // Email:user.email,
                Physics: pfinalmarks,
                Chemistry: finalmarks,
                Mathematics: mfinalmarks,
                Totalmarks: pfinalmarks + finalmarks + mfinalmarks
            }).then(() => {
                if (1) {
                    $(window).unbind('blur');
                    // if(confirm("All 3 subjects will be submitted \n Are you sure to submit ?")){
                    //     window.location.replace("Thanks.html");
                    // }
                    if (confirm("You have gone to another tab or window as per instructions this is considered as malpractice \n Would you like to download your answer sheet?")) {

                        var pdown = document.getElementById("pq").innerHTML;
                        var cdown = document.getElementById("cq").innerHTML;
                        var mdown = document.getElementById("mq").innerHTML;
                        alert("Download within 20 seconds and u will be redirected ");
                        var originalContents = document.body.innerHTML;
                        document.body.innerHTML = `<h1 style="margin-left:50%">Physics</h1>` + pdown + `<h1 style="margin-left:50%">Chemistry</h1>` + cdown + `<h1 style="margin-left:50%">Mathematics</h1>` + mdown;
                        window.print();
                        setTimeout(function () {
                            document.body.innerHTML = originalContents;
            
                            firebase.auth().signOut().then(function () {
                                window.location.replace("Thanks.html");
                            });
                        }, 20000);


                    }


                    else {

                        // alert(" You had opened another tab or window, so This is considered as MALPRACTICE and \n we are SUBMITTING your Quiz");
                        firebase.auth().signOut().then(function () {
                            window.location.replace("Thanks.html");
                        });

                    }
                }
            });



        });
    });

    // $(window).unbind('blur');

    phyq();
    $("#subsbtn").show();
    $("#phyque").show();
    $("#nav2").show();
    $("#ptoc").show();
    $("#head").show();
    $("#qInst").hide();
    // $("#head3").hide();
    $("#qbtn").hide();
    $("#home").hide();
    $("#about").hide();
    $("#contact").hide();
    $("#qstart").hide();
    $("#end").hide();
    // document.getElementById("username").style.marginLeft = "600px"
    // document.getElementById("logout").style.marginLeft="200px"

    // above code shows the question after clicking button



    // ////////////////////////////////////////////////////////////////////timer/////////////////////////////////////////////////////////////////////////

    var end = new Date(endtime).getTime();

    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        var pnow = new Date().getTime();
        var count = end - pnow;
        count = count - 1;
        if (count < 0) {
            clearInterval(counter);
            document.getElementById("timer").innerHTML = "Submitted";
            // document.getElementById("subsbtn").click();

            // firebase.auth().signOut().then(function(){
            //     window.location.replace("Thanks.html");
            //   });

            var finalmarks = 0;
            for (var j = 0; j < cmarks.length; j++) {
                finalmarks = finalmarks + cmarks[j];
            }

            var pfinalmarks = 0;
            for (var i = 0; i < pmarks.length; i++) {
                pfinalmarks = pfinalmarks + pmarks[i];
            }


            var mfinalmarks = 0;
            for (var k = 0; k < mmarks.length; k++) {
                mfinalmarks = mfinalmarks + mmarks[k];
            }

            firebase.auth().onAuthStateChanged(function (user) {

                firebase.firestore().collection('users').doc(user.uid).update({
                    // Username: user.uname,
                    // Email:user.email,
                    Physics: pfinalmarks,
                    Chemistry: finalmarks,
                    Mathematics: mfinalmarks,
                    Totalmarks: pfinalmarks + finalmarks + mfinalmarks
                }).then(() => {
                    if (1) {
                        $(window).unbind('blur');
                        // if(confirm("All 3 subjects will be submitted \n Are you sure to submit ?")){
                        //     window.location.replace("Thanks.html");
                        // }
                        if (confirm("Would you like to download your answer sheet?")) {


                            var pdown = document.getElementById("pq").innerHTML;
                            var cdown = document.getElementById("cq").innerHTML;

                            var mdown = document.getElementById("mq").innerHTML;
                            alert("Download within 20 seconds and u will be redirected ");

                            var originalContents = document.body.innerHTML;
                            document.body.innerHTML = `<h1 style="margin-left:50%">Physics</h1>` + pdown + `<h1 style="margin-left:50%">Chemistry</h1>` + cdown + `<h1 style="margin-left:50%">Mathematics</h1>` + mdown;
                            window.print();
                            setTimeout(function () {
                                document.body.innerHTML = originalContents;
                
                                firebase.auth().signOut().then(function () {
                                    window.location.replace("Thanks.html");
                                });
                            }, 20000);


                        }


                        else {
                            firebase.auth().signOut().then(function () {
                                window.location.replace("Thanks.html");
                            });

                        }
                    }
                });



            });
            // function redirect() {
            //     alert("Are you sure ?");
            //     window.location.replace("Thanks")
            // }
            return;
        }

        // var seconds = count % 60;
        // var minutes = Math.floor(count / 60);
        // var hours = Math.floor(minutes / 60);
        // minutes %= 60;
        // hours %= 60;

        var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((count % (1000 * 60)) / 1000);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;

        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (hours == 0 && minutes < 10) {
            document.getElementById("timer").style.color = "red";

        }

        document.getElementById("timer").innerHTML = `<i class="fas fa-stopwatch" ></i>` + "  " + hours + ":" + minutes + ":" + seconds; // watch for spelling
    }
    //////////////////////////timer finished/////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////

    //below code shows tick mark for attended questions 
    // document.getElementById("qno1").onclick = function () {
    //     document.getElementById("toc1").innerHTML = "✔que1";
    // }

    // document.getElementById("qno2").onclick = function () {
    //     document.getElementById("toc2").innerHTML = "✔que2";
    // }
    // document.getElementById("qno3").onclick = function () {
    //     document.getElementById("toc3").innerHTML = "✔que3";
    // }
    // document.getElementById("qno4").onclick = function () {
    //     document.getElementById("toc4").innerHTML = "✔que4";
    // }
    // document.getElementById("qno5").onclick = function () {
    //     document.getElementById("toc5").innerHTML = "✔que5";
    // }
    // document.getElementById("qno6").onclick = function () {
    //     document.getElementById("toc6").innerHTML = "✔que6";
    // }
    // document.getElementById("qno7").onclick = function () {
    //     document.getElementById("toc7").innerHTML = "✔que7";
    // }
    // document.getElementById("qno8").onclick = function () {
    //     document.getElementById("toc8").innerHTML = "✔que8";
    // }

    // document.getElementById("qno9").onclick = function () {
    //     document.getElementById("toc9").innerHTML = "✔que9";
    // }

    // document.getElementById("qno10").onclick = function () {
    //     document.getElementById("toc10").innerHTML = "✔que10";
    // }


});


////////////////////////////////////////////////////////////////////////////////
// below code shows coundown 
// var count = 150;
// var interval = setInterval(function () {
//     document.getElementById('count').innerHTML = count;
//     count--;
//     if (count === 0) {
//         clearInterval(interval);
//         document.getElementById('count').innerHTML = 'Done';
//         // or...
//         alert("You're out of time!");
//     }
// }, 1000);



// db.collection("physics").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());

//         var question= getElementById("phyque");
//         phyque.appendchild(doc.data());
//     });
// });

function checkresult() {


    var finalmarks = 0;
    for (var j = 0; j < cmarks.length; j++) {
        finalmarks = finalmarks + cmarks[j];
    }

    var pfinalmarks = 0;
    for (var i = 0; i < pmarks.length; i++) {
        pfinalmarks = pfinalmarks + pmarks[i];
    }


    var mfinalmarks = 0;
    for (var k = 0; k < mmarks.length; k++) {
        mfinalmarks = mfinalmarks + mmarks[k];
    }

    firebase.auth().onAuthStateChanged(function (user) {

        firebase.firestore().collection('users').doc(user.uid).update({
            // Username: user.uname,
            // Email:user.email,
            Physics: pfinalmarks,
            Chemistry: finalmarks,
            Mathematics: mfinalmarks,
            Totalmarks: pfinalmarks + finalmarks + mfinalmarks
        }).then(() => {
            // $(window).unbind('blur');
            document.getElementById("subt").innerHTML = "Are you sure to submit all 3 subjects?";
            $("#timer").hide();
            $("#subsbtn").hide();
            $("#sure").show();
            $("#nosure").show();
            $("#subt").show();

        });



    });
    // function redirect() {
    //     alert("Are you sure ?");
    //     window.location.replace("Thanks")
    // }



}

function suresubmit() {


    if (1) {
        $(window).unbind('blur');

        if (confirm("Would you like to download your answer sheet?")) {


            var pdown = document.getElementById("pq").innerHTML;
            var cdown = document.getElementById("cq").innerHTML;

            var mdown = document.getElementById("mq").innerHTML;

            alert("Download within 20 seconds and u will be redirected ");
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = `<h1 style="margin-left:50%">Physics</h1>` + pdown + `<h1 style="margin-left:50%">Chemistry</h1>` + cdown + `<h1 style="margin-left:50%">Mathematics</h1>` + mdown;
            window.print();

            setTimeout(function () {
                document.body.innerHTML = originalContents;

                firebase.auth().signOut().then(function () {
                    window.location.replace("Thanks.html");
                });
            }, 20000);

        }

        else {
            firebase.auth().signOut().then(function () {
                window.location.replace("Thanks.html");
            });

        }
    }
}

function nosubmit() {

    document.getElementById("subt").innerHTML = "";
    $("#subsbtn").show();
    $("#sure").hide();
    $("#nosure").hide();
    $("#timer").show();
}

    //   else{


    //   }

    // then(function(){

    //     if(confirm("All 3 subjects will be submitted \n Are you sure to submit ?")){
    //         window.location.replace("Thanks.html");
    //     }



    // alert(finalmarks);

