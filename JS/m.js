/// change lang
let langbtn = document.getElementById('Language');
let body = document.getElementById('bo');
langmode = localStorage.lang;
let user=document.getElementById("Email");
let pass=document.getElementById("password");
let log=document.getElementById("Log");
let reg=document.getElementById("reg");
let mod=document.getElementById("mod");
let head=document.getElementById("head");
let head2=document.getElementById("head2");
let flag = false;
function checkLang() {
    user.focus();
    checkMode();
    if(localStorage.lang=='Eng'){
        langbtn.innerHTML='Arabic';
        user.placeholder = 'Email';
        pass.placeholder = 'Password'
        log.innerHTML="Login";
        reg.innerHTML="Register";
        mod.innerHTML="light Mode";
        head.innerHTML='Welcome To Cruds Project';
        head2.innerHTML='Enter Your Data';
        body.style.direction='ltr';
    }else{
        langbtn.innerHTML='الانجليزيه';
        user.placeholder='اسم المستحدم';
        pass.placeholder='الرقم السري';
        log.innerHTML="تسجيل دخول";
        reg.innerHTML="تسجيل البيانات";
        mod.innerHTML="اللون الفانج";
        head.innerHTML='اهلا بكم في مشروع اداره البيانات';
        head2.innerHTML='ادخل بياناتك';
        body.style.direction='rtl';
    }
}
function ChangeLang(){
    user.focus();
    if(localStorage.lang==''||localStorage.lang=='Eng'){
        langu="Ar";
        localStorage.setItem("lang",langu);
        langbtn.innerHTML='الانجليزيه';
        user.placeholder='اسم المستحدم';
        pass.placeholder='الرقم السري';
        log.innerHTML="تسجيل دخول";
        reg.innerHTML="تسجيل البيانات";
        mod.innerHTML="اللون الفانج";
        head.innerHTML='اهلا بكم في مشروع اداره البيانات';
        head2.innerHTML='ادخل بياناتك';
        body.style.direction='rtl';
    }else{
        langu="Eng";
        localStorage.setItem("lang",langu);
        langbtn.innerHTML='Arabic';
        user.placeholder = 'Email';
        pass.placeholder = 'Password'
        log.innerHTML="Login";
        reg.innerHTML="Register";
        mod.innerHTML="light Mode";
        head.innerHTML='Welcome To Cruds Project';
        head2.innerHTML='Enter Your Data';
        body.style.direction='ltr';
    }
}



// ligit mode


let lightMoode ;
let lightBtn = document.getElementById("mod");


function checkMode(){
    user.focus();
    lightMoode = localStorage.light;
    if(lightMoode==='light'||lightMoode==''){
        body.style.background='#fff';
        user.style.background='#fce7e7f7';
        pass.style.background='#fce7e7f7';
        user.style.color='#000';
        pass.style.color='#000';
        log.style.background='#152a9a';
        reg.style.background='#152a9a';
        mod.style.background='#152a9a';
        langbtn.style.background='#152a9a';
        head.style.color='#000';
        head2.style.color='#000';
        if(localStorage.lang==='Eng'){
            mod.innerHTML = 'Dark Mode';
        }else{
            mod.innerHTML = 'اللون الغامق';
        }
        console.log(lightMoode);
    }

    else{
        body.style.background='#222';
        user.style.background='#111';
        pass.style.background='#111';
        user.style.color='#fff';
        pass.style.color='#fff';
        log.style.background='blueviolet';
        reg.style.background='blueviolet';
        mod.style.background='blueviolet';
        langbtn.style.background='blueviolet';
        head.style.color='#fff';
        head2.style.color='#fff';
        if(localStorage.lang==='Eng'){
            mod.innerHTML = 'Light Mode';
        }else{
            mod.innerHTML = 'اللون الفاتح';
        }
    }
}

function hover(id){
    lightMoode = localStorage.light;
    if(lightMoode==='light'||lightMoode===''){
        if(id==='Log'){
            log.style.background='rgb(0, 13, 81)';
        }else if(id==='reg'){
            reg.style.background = 'rgb(0, 13, 81)';
        }else if(id==='mod'){
            mod.style.background = 'rgb(0, 13, 81)';
        }else{
            langbtn.style.background='rgb(0, 13, 81)';
        }
    }else{
        if(id==='Log'){
                log.style.background='rgb(37, 3, 65)';
            }else if(id==='reg'){
                reg.style.background = 'rgb(37, 3, 65)';
            }else if(id==='mod'){
                mod.style.background = 'rgb(37, 3, 65)';
            }else{
                langbtn.style.background='rgb(37, 3, 65)';
            }
    }
}


function reversehover(){
    if(localStorage.light==='light'){
        log.style.background='#152a9a';
        reg.style.background='#152a9a';
        mod.style.background='#152a9a';
        langbtn.style.background='#152a9a';
    }
    else{
        log.style.background='blueviolet';
        reg.style.background='blueviolet';
        mod.style.background='blueviolet';
        langbtn.style.background='blueviolet';
    }

}


mod.onclick = function ChangeMode(){
    user.focus();
    lightMoode = localStorage.light;
    if(lightMoode==='light'||lightMoode==''){
        localStorage.setItem('light','Dark');
        if(localStorage.lang==='Eng'){
            mod.innerHTML = 'Light Mode';
        }else{
            mod.innerHTML = 'اللون الفاتح';
        }
        checkMode();
    }else{
        localStorage.setItem('light','light');
        if(localStorage.lang==='Eng'){
            mod.innerHTML = 'Dark Mode';
        }else{
            mod.innerHTML = 'اللون الغامق';
        }
        checkMode();
    }
}



let Acount = [];

let AllAcc ;
if(localStorage.users !=null){
    AllAcc = JSON.parse(localStorage.users);
}else{
    AllAcc = [];
}
reg.onclick = function CreateNewAcount(){
    Acount.push(user.value);
    Acount.push(pass.value);
    AllAcc.push(Acount);
    localStorage.setItem('users',JSON.stringify(AllAcc))
    Acount=[];
    pass.value='';
    user.value='';
}


log.onclick=()=>{
    for(let i = 0 ; i<AllAcc.length ; i++){
        if(AllAcc[i].includes(user.value)){
            if(AllAcc[i][1]===pass.value){
                location.href = 'opretion.html';
                flag=true;
            }
        }
    }
    if(!flag){
        window.alert('Account Not Exist');
    }
    pass.value='';
    user.value='';
}
