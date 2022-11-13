
let pfile1 = {};
let pfile2 = {};
let pfile3 = {};
let pfile4 = {};



function choosefileop1(e) {
    pfile1 = e.target.files[0];
    $("#uploadop1").show();

}

function uploadoption1() {
    document.getElementById("upop1progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Physicsopt/' + pfile1.name + ".png").put(pfile1).then(function () {
        
        document.getElementById("upop1progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#uploadop1").hide();
        
            firebase.storage().ref('Physicsopt/' + pfile1.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;

                document.getElementById('opref1').value = url;

                pfile1 = {};
            })

        

    }).catch(error => {
        alert("Error: image not uploaded");
    })

    //----------    link getting-------------------


}

function choosefileop2(e) {
    pfile2 = e.target.files[0];
    $("#uploadop2").show();
}

function uploadoption2() {
    document.getElementById("upop2progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Physicsopt/' + pfile2.name + ".png").put(pfile2).then(function () {
        document.getElementById("upop2progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#uploadop2").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Physicsopt/' + pfile2.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('opref2').value = url;

                pfile2 = {};
            })

        

    }).catch(error => {
        alert("Error: image not uploaded");
    })



}


function choosefileop3(e) {
    pfile3 = e.target.files[0];
    $("#uploadop3").show();
}

function uploadoption3() {
    document.getElementById("upop3progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Physicsopt/' + pfile3.name + ".png").put(pfile3).then(function () {
        document.getElementById("upop3progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#uploadop3").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Physicsopt/' + pfile3.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('opref3').value = url;

                pfile3 = {};
            
        })

    }).catch(error => {
        alert("Error: image not uploaded");
    })



}


function choosefileop4(e) {
    pfile4 = e.target.files[0];
    $("#uploadop4").show();
}

function uploadoption4() {
    document.getElementById("upop4progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Physicsopt/' + pfile4.name + ".png").put(pfile4).then(function () {
        document.getElementById("upop4progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#uploadop4").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Physicsopt/' + pfile4.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('opref4').value = url;

                pfile4 = {};
            

        })

    }).catch(error => {
        alert("Error: image not uploaded");
    })



}



///////////////////////////////////////////////chemistry///////////////////////////////////////////////


let cfile1 = {};
let cfile2 = {};
let cfile3 = {};
let cfile4 = {};



function cchoosefileop1(e) {
    cfile1 = e.target.files[0];
    $("#cuploadop1").show();
}

function cuploadoption1() {
    document.getElementById("cupop1progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Chemistryopt/' + cfile1.name + ".png").put(cfile1).then(function () {
        document.getElementById("cupop1progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#cuploadop1").hide();
        
            firebase.storage().ref('Chemistryopt/' + cfile1.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;

                document.getElementById('copref1').value = url;

                cfile1 = {};
            })

        

    }).catch(error => {
        alert("Error: image not uploaded");
    })

    //----------    link getting-------------------


}

function cchoosefileop2(e) {
    cfile2 = e.target.files[0];
    $("#cuploadop2").show();
}

function cuploadoption2() {
    document.getElementById("cupop2progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Chemistryopt/' + cfile2.name + ".png").put(cfile2).then(function () {
        document.getElementById("cupop2progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#cuploadop2").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Chemistryopt/' + cfile2.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('copref2').value = url;

                cfile2 = {};
            })

        

    }).catch(error => {
        alert("Error: image not uploaded");
    })



}


function cchoosefileop3(e) {
    cfile3 = e.target.files[0];
    $("#cuploadop3").show();
}

function cuploadoption3() {
    document.getElementById("cupop3progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Chemistryopt/' + cfile3.name + ".png").put(cfile3).then(function () {
        document.getElementById("cupop3progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#cuploadop3").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Chemistryopt/' + cfile3.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('copref3').value = url;

                cfile3 = {};
            
        })

    }).catch(error => {
        alert("Error: image not uploaded");
    })



}


function cchoosefileop4(e) {
    cfile4 = e.target.files[0];
    $("#cuploadop4").show();
}

function cuploadoption4() {
    document.getElementById("cupop4progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Chemistryopt/' + cfile4.name + ".png").put(cfile4).then(function () {
        document.getElementById("cupop4progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#cuploadop4").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Chemistryopt/' + cfile4.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('copref4').value = url;

                cfile4 = {};
            

        })

    }).catch(error => {
        alert("Error: image not uploaded");
    })



}


///////////////////////////////////////////////maths///////////////////////////////////////////////


let mfile1 = {};
let mfile2 = {};
let mfile3 = {};
let mfile4 = {};



function mchoosefileop1(e) {
    mfile1 = e.target.files[0];
    $("#muploadop1").show();
}

function muploadoption1() {
    document.getElementById("mupop1progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Mathsopt/' + mfile1.name + ".png").put(mfile1).then(function () {
        document.getElementById("mupop1progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#muploadop1").hide();
        
            firebase.storage().ref('Mathsopt/' + mfile1.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;

                document.getElementById('mopref1').value = url;

                mfile1 = {};
            })

        

    }).catch(error => {
        alert("Error: image not uploaded");
    })

    //----------    link getting-------------------


}

function mchoosefileop2(e) {
    mfile2 = e.target.files[0];

    $("#muploadop2").show();
}

function muploadoption2() {
    document.getElementById("mupop2progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Mathsopt/' + mfile2.name + ".png").put(mfile2).then(function () {
        document.getElementById("mupop2progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#muploadop2").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Mathsopt/' + mfile2.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('mopref2').value = url;

                mfile2 = {};
            })

        

    }).catch(error => {
        alert("Error: image not uploaded");
    })



}


function mchoosefileop3(e) {
    mfile3 = e.target.files[0];
    $("#muploadop3").show();
}

function muploadoption3() {
    document.getElementById("mupop3progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Mathsopt/' + mfile3.name + ".png").put(mfile3).then(function () {
        document.getElementById("mupop3progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#muploadop3").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Mathsopt/' + mfile3.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('mopref3').value = url;

                mfile3 = {};
            
        })

    }).catch(error => {
        alert("Error: image not  uploaded");
    })



}


function mchoosefileop4(e) {
    mfile4 = e.target.files[0];
    $("#muploadop4").show();
}

function muploadoption4() {
    document.getElementById("mupop4progress").innerHTML= ` <img src="../uploading.gif" alt="Please wait..." width="50" height="50"> `
    firebase.storage().ref('Mathsopt/' + mfile4.name + ".png").put(mfile4).then(function () {
        document.getElementById("mupop4progress").innerHTML="";
        alert(' image uploaded succesfully');
        $("#muploadop4").hide();
        //----------    link getting-------------------
        
            firebase.storage().ref('Mathsopt/' + mfile4.name + ".png").getDownloadURL().then(imgUrl => {
                var url = imgUrl;
                document.getElementById('mopref4').value = url;

                mfile4 = {};
            

        })

    }).catch(error => {
        alert("Error: image not uploaded");
    })



}