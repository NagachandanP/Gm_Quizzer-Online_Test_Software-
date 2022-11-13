$(document).ready(function () {

    document.body.style.backgroundImage = 'url("phy1.jpg")';
    document.body.style.backgroundSize = "contain"

    $("#phylec").show();
    $("#chelec").hide();
    $("#matlec").hide();
    $("#upload").hide();
    $("#cupload").hide();
    $("#mupload").hide();

    $("#uploadop1").hide();
    $("#uploadop2").hide();
    $("#uploadop3").hide();
    $("#uploadop4").hide();

    $("#cuploadop1").hide();
    $("#cuploadop2").hide();
    $("#cuploadop3").hide();
    $("#cuploadop4").hide();

    $("#muploadop1").hide();
    $("#muploadop2").hide();
    $("#muploadop3").hide();
    $("#muploadop4").hide();
    // document.getElementById("toc").style.display = "none";
    // document.getElementById("nav2").style.display = "none";
    // document.getElementById("phyque").style.display = "none";
    document.getElementById("chelec").style.display = "none";
    // document.getElementById("matque").style.display = "none";
    document.getElementById("matlec").style.display = "none";



    // it hides the questions at start
    db.collection('Timestamp').doc('YBKpy1NyZBf1bXGINliP').get().then(snapshot =>{
        // let sdate = new Date(snapshot.data().start_time);
        // let edate = new Date(snapshot.data().end_time).toDateString();
        document.getElementById("time").style.color="white";
        document.getElementById("time").innerHTML =  `<b>Test name: </b>` + snapshot.data().test_name +`<br>` + snapshot.data().start_time.toDate()  + '<br><span style="color: white;"> TO </span><br>' + snapshot.data().end_time.toDate();

    });
});
function phyq() {
    document.body.style.backgroundImage = 'url("phy1.jpg")'
    document.body.style.backgroundSize = "contain"
    document.getElementById("chelec").style.display = "none";
    document.getElementById("matlec").style.display = "none";

    $("#phylec").show();
    $("#chelec").hide();
    $("#matlec").hide();
    $("#cupload").hide();
    $("#mupload").hide();


    let phy = document.getElementById("phy");
    phy.classList.add("active");


    let chem = document.getElementById("chem");
    chem.classList.remove("active");

    let math = document.getElementById("mat");
    math.classList.remove("active");


}
function chemq() {
    document.body.style.backgroundImage = 'url("che.jpg")';
    document.getElementById("phylec").style.display = "none";
    document.getElementById("matlec").style.display = "none";

    $("#phylec").hide();
    $("#chelec").show();
    $("#matlec").hide();
    $("#upload").hide();
    $("#mupload").hide();

    let chem = document.getElementById("chem");
    chem.classList.add("active");


    let phy = document.getElementById("phy");
    phy.classList.remove("active");

    let math = document.getElementById("mat");
    math.classList.remove("active");

}
function mathq() {
    document.body.style.backgroundImage = 'url("math2.jpg")';
    document.getElementById("chelec").style.display = "none";
    document.getElementById("phylec").style.display = "none";

    $("#phylec").hide();
    $("#chelec").hide();
    $("#matlec").show();
    $("#cupload").hide();
    $("#upload").hide();

    let mat = document.getElementById("mat");
    mat.classList.add("active");


    let chem = document.getElementById("chem");
    chem.classList.remove("active");

    let phy = document.getElementById("phy");
    phy.classList.remove("active");

}

const qlist = document.querySelector('#ques-list');
const form = document.querySelector('#add-que');

function renderCafe(doc) {
    let li = document.createElement('li');
    let question = document.createElement('span');
    let img = document.createElement('img');



    // let ImageRef = document.createElement('span');
    let option1 = document.createElement('span');
    let option2 = document.createElement('span');
    let option3 = document.createElement('span');
    let option4 = document.createElement('span');
    let keyop = document.createElement('span');
    let optionRef1 = document.createElement('img');
    let optionRef2 = document.createElement('img');
    let optionRef3 = document.createElement('img');
    let optionRef4 = document.createElement('img');
    let keyopref = document.createElement('img');
    let cross = document.createElement('div');


    li.setAttribute('data-id', doc.id);
    question.textContent = doc.data().question;
    // ImageRef.textContent = doc.data().ImageRef;

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
    // else{
    //     img.setAttribute("width", "0");
    //     img.setAttribute("height", "0");


    // }

    option1.textContent = "a.\t" + doc.data().option1;
    option2.textContent = "b.\t" + doc.data().option2;
    option3.textContent = "c.\t" + doc.data().option3;
    option4.textContent = "d.\t" + doc.data().option4;
    var qimg = doc.data().ImageRef;
    // optionRef1.textContent = "d.\t" +doc.data().optionRef1;
    // optionRef2.textContent = "d.\t" +doc.data().optionRef2;
    // optionRef3.textContent = "d.\t" +doc.data().optionRef3;
    // optionRef4.textContent = "d.\t" +doc.data().optionRef4;

    keyop.textContent = "Correct Answer:" + doc.data().keyop;

    if (doc.data().keyop == doc.data().option1) {
        if (doc.data().optionRef1 !== "") {
            keyopref.setAttribute("src", doc.data().optionRef1);
            keyopref.style.width = "auto";
            keyopref.style.height = "auto";
            keyopref.style.maxWidth = "600px";
            keyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().keyop == doc.data().option2) {
        if (doc.data().optionRef2 !== "") {
            keyopref.setAttribute("src", doc.data().optionRef2);
            keyopref.style.width = "auto";
            keyopref.style.height = "auto";
            keyopref.style.maxWidth = "600px";
            keyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().keyop == doc.data().option3) {
        if (doc.data().optionRef3 !== "") {
            keyopref.setAttribute("src", doc.data().optionRef3);
            keyopref.style.width = "auto";
            keyopref.style.height = "auto";
            keyopref.style.maxWidth = "600px";
            keyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().keyop == doc.data().option4) {
        if (doc.data().optionRef4 !== "") {
            keyopref.setAttribute("src", doc.data().optionRef4);
            keyopref.style.width = "auto";
            keyopref.style.height = "auto";
            keyopref.style.maxWidth = "600px";
            keyopref.style.maxHeight = "300px";
        }
    }
    if ((doc.data().keyop != doc.data().option1) && (doc.data().keyop != doc.data().option2)
        && (doc.data().keyop != doc.data().option3) && (doc.data().keyop != doc.data().option4)) {
        keyopref.setAttribute("src", doc.data().keyop);
        keyopref.style.width = "auto";
        keyopref.style.height = "auto";
        keyopref.style.maxWidth = "600px";
        keyopref.style.maxHeight = "300px";
        keyop.textContent = "correct answer: ";
    }
    cross.textContent = 'x';


    li.appendChild(question);
    // li.appendChild(ImageRef);
    li.appendChild(img);
    li.appendChild(option1);
    li.appendChild(optionRef1);
    li.appendChild(option2);
    li.appendChild(optionRef2);
    li.appendChild(option3);
    li.appendChild(optionRef3);
    li.appendChild(option4);

    li.appendChild(optionRef4);
    li.appendChild(keyop);
    li.appendChild(keyopref);
    li.appendChild(cross);

    qlist.appendChild(li);


    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();

        let id = e.target.parentElement.getAttribute('data-id');


        if ((doc.data().optionRef1 != '')) {
            store.refFromURL(doc.data().optionRef1).delete();
        }
        if ((doc.data().optionRef2 != '')) {
            store.refFromURL(doc.data().optionRef2).delete();
        }
        if ((doc.data().optionRef3 != '')) {
            store.refFromURL(doc.data().optionRef3).delete();
        }
        if ((doc.data().optionRef4 != '')) {
            store.refFromURL(doc.data().optionRef4).delete();
        }
        if ((doc.data().ImageRef != '')) {
            store.refFromURL(doc.data().ImageRef).delete();
        }

        db.collection('physics').doc(id).delete();



    });
}

// getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

// saving data

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((form.opref1.value != '' || form.option1.value != '') && (form.opref2.value != '' || form.option2.value != '') &&
        (form.opref3.value != '' || form.option3.value != '') && (form.opref4.value != '' || form.option4.value != '')) {

        db.collection('physics').add({
            question: form.question.value,
            ImageRef: form.ImageRef.value,
            option1: form.option1.value,
            option2: form.option2.value,
            option3: form.option3.value,
            option4: form.option4.value,
            optionRef1: form.opref1.value,
            optionRef2: form.opref2.value,
            optionRef3: form.opref3.value,
            optionRef4: form.opref4.value,

            keyop: form.keyop.value


        });


        form.question.value = '';
        form.ImageRef.value = '';
        // form.namebox.value='';
        form.myimg.setAttribute("src", " ");
        document.getElementById('UpProgress').innerHTML = '';
        form.option1.value = '';
        form.option2.value = '';
        form.option3.value = '';
        form.option4.value = '';

        form.op1img.value = '';
        form.op2img.value = '';
        form.op3img.value = '';
        form.op4img.value = '';
        form.optionRef1.value = ''
        form.optionRef2.value = ''
        form.optionRef3.value = ''
        form.optionRef4.value = ''
        form.keyop.value = '';

        // $("#uploadop1").show();
        // $("#uploadop2").show();
        // $("#uploadop3").show();
        // $("#uploadop4").show();
        $("#upload").hide();


        $("#uploadop1").hide();
        $("#uploadop2").hide();
        $("#uploadop3").hide();
        $("#uploadop4").hide();



    }

    else {
        alert("Please Fillout every options ");
    }

});




// real-time listener
db.collection('physics').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            renderCafe(change.doc);

        }
        else if (change.type == 'removed') {
            let li = qlist.querySelector('[data-id=' + change.doc.id + ']');
            qlist.removeChild(li);
        }
    })
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////chemistry///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
const cqlist = document.querySelector('#cques-list');
const cform = document.querySelector('#cadd-que');

function renderCq(doc) {
    let li = document.createElement('li');
    let question = document.createElement('span');
    let img = document.createElement('img');

    // let ImageRef = document.createElement('span');
    let option1 = document.createElement('span');
    let option2 = document.createElement('span');
    let option3 = document.createElement('span');
    let option4 = document.createElement('span');
    let ckeyop = document.createElement('span');
    let optionRef1 = document.createElement('img');
    let optionRef2 = document.createElement('img');
    let optionRef3 = document.createElement('img');
    let optionRef4 = document.createElement('img');
    let ckeyopref = document.createElement('img');
    let cross = document.createElement('div');


    li.setAttribute('data-id', doc.id);
    question.textContent = doc.data().question;
    // ImageRef.textContent = doc.data().ImageRef;

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
    // else{
    //     img.setAttribute("width", "0");
    //     img.setAttribute("height", "0");


    // }

    option1.textContent = "a.\t" + doc.data().option1;
    option2.textContent = "b.\t" + doc.data().option2;
    option3.textContent = "c.\t" + doc.data().option3;
    option4.textContent = "d.\t" + doc.data().option4;
    // optionRef1.textContent = "d.\t" +doc.data().optionRef1;
    // optionRef2.textContent = "d.\t" +doc.data().optionRef2;
    // optionRef3.textContent = "d.\t" +doc.data().optionRef3;
    // optionRef4.textContent = "d.\t" +doc.data().optionRef4;

    ckeyop.textContent = "correct answer:" + doc.data().ckeyop;

    if (doc.data().ckeyop == doc.data().option1) {
        if (doc.data().optionRef1 !== "") {
            ckeyopref.setAttribute("src", doc.data().optionRef1);
            ckeyopref.style.width = "auto";
            ckeyopref.style.height = "auto";
            ckeyopref.style.maxWidth = "600px";
            ckeyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().ckeyop == doc.data().option2) {
        if (doc.data().optionRef2 !== "") {
            ckeyopref.setAttribute("src", doc.data().optionRef2);
            ckeyopref.style.width = "auto";
            ckeyopref.style.height = "auto";
            ckeyopref.style.maxWidth = "600px";
            ckeyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().ckeyop == doc.data().option3) {
        if (doc.data().optionRef3 !== "") {
            ckeyopref.setAttribute("src", doc.data().optionRef3);
            ckeyopref.style.width = "auto";
            ckeyopref.style.height = "auto";
            ckeyopref.style.maxWidth = "600px";
            ckeyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().ckeyop == doc.data().option4) {
        if (doc.data().optionRef4 !== "") {
            ckeyopref.setAttribute("src", doc.data().optionRef4);
            ckeyopref.style.width = "auto";
            ckeyopref.style.height = "auto";
            ckeyopref.style.maxWidth = "600px";
            ckeyopref.style.maxHeight = "300px";
        }
    }
    if ((doc.data().ckeyop != doc.data().option1) && (doc.data().ckeyop != doc.data().option2)
        && (doc.data().ckeyop != doc.data().option3) && (doc.data().ckeyop != doc.data().option4)) {
        ckeyopref.setAttribute("src", doc.data().ckeyop);
        ckeyopref.style.width = "auto";
        ckeyopref.style.height = "auto";
        ckeyopref.style.maxWidth = "600px";
        ckeyopref.style.maxHeight = "300px";
        ckeyop.textContent = "correct answer: ";
    }



    cross.textContent = 'x';


    li.appendChild(question);
    // li.appendChild(ImageRef);
    li.appendChild(img);
    li.appendChild(option1);
    li.appendChild(optionRef1);
    li.appendChild(option2);
    li.appendChild(optionRef2);
    li.appendChild(option3);
    li.appendChild(optionRef3);
    li.appendChild(option4);

    li.appendChild(optionRef4);
    li.appendChild(ckeyop);
    li.appendChild(ckeyopref);
    li.appendChild(cross);

    cqlist.appendChild(li);


    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');

        if ((doc.data().optionRef1 != "")) {
            store.refFromURL(doc.data().optionRef1).delete();
        }
        if ((doc.data().optionRef2 != "")) {
            store.refFromURL(doc.data().optionRef2).delete();
        }
        if ((doc.data().optionRef3 != "")) {
            store.refFromURL(doc.data().optionRef3).delete();
        }
        if ((doc.data().optionRef4 != "")) {
            store.refFromURL(doc.data().optionRef4).delete();
        }
        if (doc.data().ImageRef != "") {
            store.refFromURL(doc.data().ImageRef).delete();
        }
        db.collection('chemistry').doc(id).delete();
    });
}

// getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

// saving data
cform.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((cform.copref1.value != '' || cform.coption1.value != '') && (cform.copref2.value != '' || cform.coption2.value != '') &&
        (cform.copref3.value != '' || cform.coption3.value != '') && (cform.copref4.value != '' || cform.coption4.value != '')) {

        db.collection('chemistry').add({
            question: cform.cquestion.value,
            ImageRef: cform.cImageRef.value,
            option1: cform.coption1.value,
            option2: cform.coption2.value,
            option3: cform.coption3.value,
            option4: cform.coption4.value,
            optionRef1: cform.copref1.value,
            optionRef2: cform.copref2.value,
            optionRef3: cform.copref3.value,
            optionRef4: cform.copref4.value,

            ckeyop: cform.ckeyop.value


        });


        cform.cquestion.value = '';
        cform.cImageRef.value = '';
        // form.namebox.value='';
        cform.cmyimg.setAttribute("src", " ");
        document.getElementById('cUpProgress').innerHTML = '';
        cform.coption1.value = '';
        cform.coption2.value = '';
        cform.coption3.value = '';
        cform.coption4.value = '';

        cform.cop1img.value = '';
        cform.cop2img.value = '';
        cform.cop3img.value = '';
        cform.cop4img.value = '';
        cform.coptionRef1.value = ''
        cform.coptionRef2.value = ''
        cform.coptionRef3.value = ''
        cform.coptionRef4.value = ''
        cform.ckeyop.value = '';

        // $("#cuploadop1").show();
        // $("#cuploadop2").show();
        // $("#cuploadop3").show();
        // $("#cuploadop4").show();
        $("#cupload").hide();

        $("#cuploadop1").hide();
        $("#cuploadop2").hide();
        $("#cuploadop3").hide();
        $("#cuploadop4").hide();

    }

    else {
        alert("Please Fillout every options ");
    }

});



// real-time listener
db.collection('chemistry').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            renderCq(change.doc);

        }
        else if (change.type == 'removed') {
            let li = cqlist.querySelector('[data-id=' + change.doc.id + ']');
            cqlist.removeChild(li);
        }
    })
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////maths//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
const mqlist = document.querySelector('#mques-list');
const mform = document.querySelector('#madd-que');

function renderMq(doc) {
    let li = document.createElement('li');
    let question = document.createElement('span');
    let img = document.createElement('img');

    // let ImageRef = document.createElement('span');
    let option1 = document.createElement('span');
    let option2 = document.createElement('span');
    let option3 = document.createElement('span');
    let option4 = document.createElement('span');
    let mkeyop = document.createElement('span');
    let optionRef1 = document.createElement('img');
    let optionRef2 = document.createElement('img');
    let optionRef3 = document.createElement('img');
    let optionRef4 = document.createElement('img');
    let mkeyopref = document.createElement('img');
    let cross = document.createElement('div');


    li.setAttribute('data-id', doc.id);
    question.textContent = doc.data().question;
    // ImageRef.textContent = doc.data().ImageRef;

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
    // else{
    //     img.setAttribute("width", "0");
    //     img.setAttribute("height", "0");


    // }

    option1.textContent = "a.\t" + doc.data().option1;
    option2.textContent = "b.\t" + doc.data().option2;
    option3.textContent = "c.\t" + doc.data().option3;
    option4.textContent = "d.\t" + doc.data().option4;
    // optionRef1.textContent = "d.\t" +doc.data().optionRef1;
    // optionRef2.textContent = "d.\t" +doc.data().optionRef2;
    // optionRef3.textContent = "d.\t" +doc.data().optionRef3;
    // optionRef4.textContent = "d.\t" +doc.data().optionRef4;

    mkeyop.textContent = "correct answer:" + doc.data().mkeyop;

    if (doc.data().mkeyop == doc.data().option1) {
        if (doc.data().optionRef1 !== "") {
            mkeyopref.setAttribute("src", doc.data().optionRef1);
            mkeyopref.style.width = "auto";
            mkeyopref.style.height = "auto";
            mkeyopref.style.maxWidth = "600px";
            mkeyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().mkeyop == doc.data().option2) {
        if (doc.data().optionRef2 !== "") {
            mkeyopref.setAttribute("src", doc.data().optionRef2);
            mkeyopref.style.width = "auto";
            mkeyopref.style.height = "auto";
            mkeyopref.style.maxWidth = "600px";
            mkeyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().mkeyop == doc.data().option3) {
        if (doc.data().optionRef3 !== "") {
            mkeyopref.setAttribute("src", doc.data().optionRef3);
            mkeyopref.style.width = "auto";
            mkeyopref.style.height = "auto";
            mkeyopref.style.maxWidth = "600px";
            mkeyopref.style.maxHeight = "300px";
        }
    }

    if (doc.data().mkeyop == doc.data().option4) {
        if (doc.data().optionRef4 !== "") {
            mkeyopref.setAttribute("src", doc.data().optionRef4);
            mkeyopref.style.width = "auto";
            mkeyopref.style.height = "auto";
            mkeyopref.style.maxWidth = "600px";
            mkeyopref.style.maxHeight = "300px";
        }
    }
    if ((doc.data().mkeyop != doc.data().option1) && (doc.data().mkeyop != doc.data().option2)
        && (doc.data().mkeyop != doc.data().option3) && (doc.data().mkeyop != doc.data().option4)) {
        mkeyopref.setAttribute("src", doc.data().mkeyop);
        mkeyopref.style.width = "auto";
        mkeyopref.style.height = "auto";
        mkeyopref.style.maxWidth = "600px";
        mkeyopref.style.maxHeight = "300px";
        mkeyop.textContent = "correct answer: ";
    }

    cross.textContent = 'x';


    li.appendChild(question);
    // li.appendChild(ImageRef);
    li.appendChild(img);
    li.appendChild(option1);
    li.appendChild(optionRef1);
    li.appendChild(option2);
    li.appendChild(optionRef2);
    li.appendChild(option3);
    li.appendChild(optionRef3);
    li.appendChild(option4);

    li.appendChild(optionRef4);
    li.appendChild(mkeyop);
    li.appendChild(mkeyopref);
    li.appendChild(cross);

    mqlist.appendChild(li);


    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');

        if ((doc.data().optionRef1 != '')) {
            store.refFromURL(doc.data().optionRef1).delete();
        }
        if ((doc.data().optionRef2 != '')) {
            store.refFromURL(doc.data().optionRef2).delete();
        }
        if ((doc.data().optionRef3 != '')) {
            store.refFromURL(doc.data().optionRef3).delete();
        }
        if ((doc.data().optionRef4 != '')) {
            store.refFromURL(doc.data().optionRef4).delete();
        }
        if (doc.data().ImageRef != '') {
            store.refFromURL(doc.data().ImageRef).delete();
        }
        db.collection('maths').doc(id).delete();
    });
}

// getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

// saving data
mform.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((mform.mopref1.value != '' || mform.moption1.value != '') && (mform.mopref2.value != '' || mform.moption2.value != '') &&
        (mform.mopref3.value != '' || mform.moption3.value != '') && (mform.mopref4.value != '' || mform.moption4.value != '')) {

        db.collection('maths').add({
            question: mform.mquestion.value,
            ImageRef: mform.mImageRef.value,
            option1: mform.moption1.value,
            option2: mform.moption2.value,
            option3: mform.moption3.value,
            option4: mform.moption4.value,
            optionRef1: mform.mopref1.value,
            optionRef2: mform.mopref2.value,
            optionRef3: mform.mopref3.value,
            optionRef4: mform.mopref4.value,

            mkeyop: mform.mkeyop.value


        });


        mform.mquestion.value = '';
        mform.mImageRef.value = '';
        // form.namebox.value='';
        mform.mmyimg.setAttribute("src", " ");
        document.getElementById('mUpProgress').innerHTML = '';
        mform.moption1.value = '';
        mform.moption2.value = '';
        mform.moption3.value = '';
        mform.moption4.value = '';

        mform.mop1img.value = '';
        mform.mop2img.value = '';
        mform.mop3img.value = '';
        mform.mop4img.value = '';
        mform.moptionRef1.value = ''
        mform.moptionRef2.value = ''
        mform.moptionRef3.value = ''
        mform.moptionRef4.value = ''
        mform.mkeyop.value = '';

        // $("#muploadop1").show();
        // $("#muploadop2").show();
        // $("#muploadop3").show();
        // $("#muploadop4").show();
        $("#mupload").hide();

        $("#muploadop1").hide();
        $("#muploadop2").hide();
        $("#muploadop3").hide();
        $("#m uploadop4").hide();


    }

    else {
        alert("Please Fillout every options ");
    }

});



// real-time listener
db.collection('maths').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            renderMq(change.doc);

        }
        else if (change.type == 'removed') {
            let li = mqlist.querySelector('[data-id=' + change.doc.id + ']');
            mqlist.removeChild(li);
        }
    })
})


function Logout() {
    firebase.auth().signOut().then(cred => {
        // alert("Logout successfull");
        if (confirm("Are you sure want to logout?"))
            window.location.replace("../index.html");
    })

}


function checkuser() {
    firebase.auth().onAuthStateChanged(function (user) {
        alert("email: " + user.email + " uid: " + user.uid);

    });
}





document.getElementById("setdate").onclick = function () {

    if(test_name.value == '' || strt_time.value == ''|| end_time.value==''){
        alert("Please fill all details");
    }

    else{
    var test = document.getElementById("test_name").value;

    document.getElementById("time").style.color = "white";
    let date = new Date(strt_time.value);
    let edate = new Date(end_time.value);
    // var myTimestamp = firebase.firestore.Timestamp.fromDate(date);

    db.collection('Timestamp').doc('YBKpy1NyZBf1bXGINliP').update({
        start_time: date,
        end_time: edate,
        test_name : test

    }).then(function () {
        alert("Scheduled test time successfully");

        document.getElementById("time").innerHTML = `<b> Test name:</b>` +test_name.value+ `<br>` +strt_time.value + '<br><span style="color: white;"> TO </span><br>' + end_time.value;
    });



    //     var d = new Date();    
    // d = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    // var yyyymmdd = d.toISOString().slice(0,0); 

    // document.getElementById("count").innerHTML=yyyymmdd;

}
}
