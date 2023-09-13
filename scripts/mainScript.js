
function isValid(s) {
    if (/^[а-яА-Я]+$/.test(s)) {
        return true
    }   
    else {
        return false
    }
};

async function checkFirstNameAndSecondName(){

    var firstname = document.getElementById("firstname").getElementsByTagName('input')[0].value
    var secondname = document.getElementById("secondname").getElementsByTagName('input')[0].value
    var checkFirstName = isValid(firstname)
    var checkSecondName = isValid(secondname)
    console.log(checkFirstName,checkSecondName)
    if(checkFirstName && checkSecondName){
        console.log(`all good`)
        window.localStorage.setItem('firstname', firstname);
        window.localStorage.setItem('secondname', secondname);
        console.log(window.localStorage.getItem('firstname'), window.localStorage.getItem('secondname'))
        return window.location.href = "./pages/variant.html";
    }
    else{
        console.log(`not good`)
        return window.location.href = "./pages/wrongFirstNameOrSecondName.html"
    }
}

function goToAnyVariant(variant){
    if(variant === 1){
        window.localStorage.setItem('variat', 1)
        return window.location.href = "../pages/first_var.html"
    }
    else if(variant === 2){
        window.localStorage.setItem('variat', 2)
        return window.location.href = "../pages/second_var.html"
    }
    else{
        return window.location.href = "../pages/wrongFirstNameOrSecondName.html"
    }
}