// holding inputs data
let title = document.getElementById('title');
let productPrice = document.getElementById('prod_price');
let tax = document.getElementById('tax');
let ads = document.getElementById('ads');
let disc = document.getElementById('disc');
let totalPrice = document.getElementById('total');
let count = document.getElementById('count');
let categ = document.getElementById('cat');
let btnCreate = document.getElementById('creatProd');
let mode  = 'create';
let upModeValue;
let AllButton = document.getElementsByTagName('button');
let body=document.getElementById('body');
let table  =   document.getElementById('Tab');
let header  =   document.getElementById('head1');
let header2  =   document.getElementById('head2');
let out  =   document.getElementById('logout');
let inp  =   document.getElementById('INP');
let thead  =   document.getElementById('Thead1');
let thead1  =   document.getElementById('Thead2');
let thead2  =   document.getElementById('Thead3');
let thead3  =   document.getElementById('Thead4');
let thead4  =   document.getElementById('Thead5');
let thead5  =   document.getElementById('Thead6');
let thead6  =   document.getElementById('Thead7');
let thead7  =   document.getElementById('Thead8');
let thead8  =   document.getElementById('Thead9');
let thead9  =   document.getElementById('Thead10');
let thead10  =   document.getElementById('Thead11');
let thead11  =   document.getElementById('Thead12');

//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   Creation   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// function getting product price.....................................
let res = 0;
function getTotalalPrice(){
    if(productPrice.value != ''){
        //convert string to number
        res = +productPrice.value + +tax.value + +ads.value - +disc.value;
        totalPrice.innerHTML = res;
        totalPrice.style.background = 'rgb(3, 84, 21)';
    }else{
        totalPrice.innerHTML = '';
        totalPrice.style.background = 'rgb(15, 80, 77)';
    }
}
//end of getting total price..........................................



//function create product --------------------------------------------
let product =[];
btnCreate.onclick=function CreateNewProudct(){
    product.push(title.value);
    product.push(productPrice.value);
    product.push(tax.value);
    product.push(ads.value);
    product.push(disc.value);
    product.push(res);
    product.push(count.value);
    product.push(categ.value);
    //console.log(product)
    //.. to local storage

    if(title.value!='' && productPrice.value!='' && count.value!='' && categ!=''&& isNaN(title.value) && isNaN(categ.value)){
        if(mode==='create'){
        if(+count.value!=0){
            AddToLocalStorage();
            //.. to clear Data
            ClearInputData();
            // .. To Read Data
            ReadDataToTable();
        }else{
            window.alert('No Count Data Enter')
        }
    }else{
        Allprod[upModeValue] = product;
        AddToLocalStorage();
        //.. to clear Data
        ClearInputData();
        // .. To Read Data
        ReadDataToTable();
    }
    }



    ShowDeleteAllBtn();

}

//end function create product -----------------------------------------


// function Add to local storage *************************************
if(localStorage.product!=null){
    Allprod=JSON.parse(localStorage.product);
}else{
    Allprod = [];
}
function AddToLocalStorage(){
    if(mode === 'create'){
        Allprod.push(product);
        product = [];
        localStorage.setItem('product',JSON.stringify(Allprod));
    }else{
        product = [];
        localStorage.setItem('product',JSON.stringify(Allprod));
        mode='create';
        if(localStorage.lang=='Ar'){
        btnCreate.innerHTML='انشاء';
    }else{
        btnCreate.innerHTML='Create';
    }
    }
}

//end of local Storge************************************************


//Clear Inputs field After Creation --------------------------------

function ClearInputData(){
    title.value='';
    productPrice.value='';
    tax.value='';
    ads.value='';
    disc.value='';
    count.value='';
    categ.value='';
}

//end of clearing Inputs --------------------------------------




//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Creation End &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&







// *************************************************************************************************** Reading Data To Table *********************************************************************************************************

let TableData = document.getElementById('TableData');

function ReadDataToTable(){
    let data = '';
    for(let i = 0 ; i < Allprod.length ; i++){
        data += `
        <tr>
            <td>${i+1}</td>
            <td>${Allprod[i][0]}</td>
            <td>${Allprod[i][1]}</td>
            <td>${Allprod[i][2]}</td>
            <td>${Allprod[i][3]}</td>
            <td>${Allprod[i][4]}</td>
            <td>${Allprod[i][5]}</td>
            <td>${Allprod[i][7]}</td>
            <td>${Allprod[i][6]}</td>
            <th><button id="up"  onclick="UpdateData(${i})">Update</button></th>
            <th><button id="buy" onclick="BuyProduct(${i})">Buy One</button></th>
            <th><button id="dele" onclick="DeleteData(${i})">Delete</button></th>
        </tr>
        `
        ShowDeleteAllBtn();
    }
    TableData.innerHTML = data;
    getTotalalPrice();
}

//End Of function

// function onload show Data

function DataShow(){
    if(localStorage.product!= null){
        Allprod=JSON.parse(localStorage.product);
    }else{
        Allprod =[];
    }
    ReadDataToTable();
}

// End Of Function

//*************************************************************************************************************************End Reading Data ******************************************************************************************


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Delete Data ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Delete product Function

function DeleteData(i){
    Allprod.splice(i,1);
    localStorage.setItem('product',JSON.stringify(Allprod));
    ReadDataToTable();
    ShowDeleteAllBtn();
}
 // end Of Function

// Buy Product function

function BuyProduct(i){
    let NewCount=0;
    NewCount = Allprod[i][6];
    NewCount = +NewCount;
    NewCount--;
    if(NewCount==0){
        DeleteData(i);
    }else{
        Allprod[i][6]=NewCount;
        localStorage.setItem('product',JSON.stringify(Allprod));
        ReadDataToTable();
    }
    ShowDeleteAllBtn();
}

function DeleteAllData(){
    Allprod = [];
    localStorage.setItem('product',JSON.stringify(Allprod));
    ReadDataToTable();
    ShowDeleteAllBtn();
}
let del = document.getElementById('Del');
// let x = del.innerHTML=`Delete All (${Allprod.length})`

function ShowDeleteAllBtn(){
    let btnDelete = document.getElementById('DeleteAll');
    Allprod=JSON.parse(localStorage.product);
    if(Allprod!= ''){
        btnDelete.style.display='block';
    }else{
        btnDelete.style.display='none';
    }
}



// 0000000000000000000000000000000000000000000000000000000000000000000000000000 update Data 000000000000000000000000000000000000000000000000000000000000
function UpdateData(i){
    mode  = 'update';
    title.value = Allprod[i][0];
    productPrice.value = Allprod[i][1];
    tax.value = Allprod[i][2];
    ads.value = Allprod[i][3];
    disc.value = Allprod[i][4];
    count.value = Allprod[i][6];
    categ.value = Allprod[i][7];
    if(localStorage.lang=='Ar'){
        btnCreate.innerHTML='تعديل';
    }else{
        btnCreate.innerHTML='Update';
    }

    upModeValue=i;
    //btnCreate.innerHTML= mode;
    getTotalalPrice();
    CreateNewProudct();
    scroll({
        top:0,behavior:'smooth'
    })
}



//////////////////////////////////////////////// Search ?????????????????????????????????????????????????????????????????
let Stitle = document.getElementById('searchTit');
let Scat = document.getElementById('searchCat');
let Search = document.getElementById('search');
let modeSearch = "title";
function getSreachMode(id){
if(id === 'searchTit'){
        modeSearch = 'title';
        if(localStorage.lang==='Eng')
            Search.placeholder='Search By Title';
        else
            Search.placeholder='البحث باسم المنتج';
    }else{
        modeSearch = "cat";

        if(localStorage.lang==='Eng')
            Search.placeholder='Search By Category';
        else
            Search.placeholder = 'البحث بالفئه';

    }
    Search.value='';
    Search.focus();
    ReadDataToTable();
}

Search.onkeyup = function FinalSearchResualt(){
    let value =Search.value.toLowerCase();
    let data = '';
    if(modeSearch === 'title'){
        for(let i = 0  ;   i < Allprod.length ; i++){
            let sInfo = Allprod[i][0].toLowerCase();
            if(sInfo.includes(value)){
                data += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${Allprod[i][0]}</td>
                        <td>${Allprod[i][1]}</td>
                        <td>${Allprod[i][2]}</td>
                        <td>${Allprod[i][3]}</td>
                        <td>${Allprod[i][4]}</td>
                        <td>${Allprod[i][5]}</td>
                        <td>${Allprod[i][7]}</td>
                        <td>${Allprod[i][6]}</td>
                        <th><button id="up"     onclick="UpdateData(${i})">Update</button></th>
                        <th><button id="buy"  onclick="BuyProduct(${i})">Buy One</button></th>
                        <th><button id="dele" onclick="DeleteData(${i})">Delete</button></th>
                    </tr>
                    `
            }
        }
    }
    else{
        for(let i = 0  ;   i < Allprod.length ; i++){
            let sInfo = Allprod[i][7].toLowerCase();
            if(sInfo.includes(value)){
                data += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${Allprod[i][0]}</td>
                        <td>${Allprod[i][1]}</td>
                        <td>${Allprod[i][2]}</td>
                        <td>${Allprod[i][3]}</td>
                        <td>${Allprod[i][4]}</td>
                        <td>${Allprod[i][5]}</td>
                        <td>${Allprod[i][7]}</td>
                        <td>${Allprod[i][6]}</td>
                        <th><button id="up"   onclick="UpdateData(${i})">Update</button></th>
                        <th><button id="buy"  onclick="BuyProduct(${i})">Buy One</button></th>
                        <th><button id="dele" onclick="DeleteData(${i})">Delete</button></th>
                    </tr>
                    `
            }
        }
    }
    TableData.innerHTML = data;
}







/////////////////////////////////////////////////////////////////////////


let colorMode  = localStorage.light;
function getMode(){
    if(colorMode=== 'light'){
        body.style.background = '#fff';
        title.style.background='#fce7e7f7';
        title.style.color='#000';
        productPrice.style.background= '#fce7e7f7';
        productPrice.style.color='#000';
        tax.style.background= '#fce7e7f7';
        tax.style.color='#000';
        ads.style.background= '#fce7e7f7';
        ads.style.color='#000';
        disc.style.background= '#fce7e7f7';
        disc.style.color='#000';
        count.style.background= '#fce7e7f7';
        count.style.color= '#000';
        categ.style.color='#000';
        categ.style.background= '#fce7e7f7';
        btnCreate.style.background= '#152a9a';
        table.style.color= '#000';
        header.style.color='#000';
        header2.style.color='#000';
        Search.style.background='#fce7e7f7';
        Search.style.color='#000';
        Stitle.style.background  = '#152a9a';
        Scat.style.background  = '#152a9a';
        del.style.background  = '#152a9a';
        out.style.background  = '#152a9a';
        inp.style.color  = '#000';
        thead.style.color  = '#000';
        thead1.style.color  = '#000';
        thead2.style.color  = '#000';
        thead3.style.color  = '#000';
        thead4.style.color  = '#000';
        thead5.style.color  = '#000';
        thead6.style.color  = '#000';
        thead7.style.color  = '#000';
        thead8.style.color  = '#000';
        thead9.style.color  = '#000';
        thead10.style.color  = '#000';
        thead11.style.color  = '#000';
    }
}



//  Language    ;


let MainLang  =  localStorage.lang;
function CheckLang(){
    if(MainLang ==='Ar'){
        body.style.direction = "rtl";
        title.placeholder='اسم المنتج';
        productPrice.placeholder='سعر المنتج';
        tax.placeholder='ضرايب';
        ads.placeholder='اعلانات';
        disc.placeholder='خصومات';
        count.placeholder='عدد';
        Search.placeholder='بحث';
        categ.placeholder='فئه';
        out.innerHTML='تسجيل خروج';
        btnCreate.innerHTML='انشاء';
        Scat.innerHTML='البحث من خلال الفئه';
        Stitle.innerHTML='البحث باسم المنتج';
        thead.innerHTML = 'المسلسل';
        thead1.innerHTML = 'اسم المنتج';
        thead2.innerHTML = 'سعر المنتج';
        thead3.innerHTML = 'الضرائب';
        thead4.innerHTML = 'الاعلانات';
        thead5.innerHTML = 'خصم';
        thead6.innerHTML = 'سعر النتج';
        thead7.innerHTML = 'فئه';
        thead8.innerHTML = 'عدد';
        thead9.innerHTML = 'تعديل';
        thead10.innerHTML = 'بيع';
        thead11.innerHTML = 'حذف';
        del.innerHTML = "حذف الكل";
        header.innerHTML = "مشروع اداره البيانات";
        header2.innerHTML = "ادخل المعلومات";
    }
}
