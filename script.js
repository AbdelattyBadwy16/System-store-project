
var title=document.getElementById('title');
let price=document.getElementById('price');
var taxes=document.getElementById('taxes');
var ads=document.getElementById('ads');
var discount=document.getElementById('discount');
var total=document.getElementById('total');
var btncreate=document.getElementById('btncreate');
var count=document.getElementById('count');
var category=document.getElementById('category');
// Total

function gettotal(){

    if(price.value !=''){
    let result = (+price.value + +taxes.value + +ads.value ) - +discount.value;
    total.innerHTML=result;
    total.style.background = 'green';
    }else {
        total.innerHTML=0;
        total.style.background = '#a00d02';
    }
   
}
let temp='create',tem;
// new project
let datapro ;

if(localStorage.product !=null){
    datapro = JSON.parse(localStorage.product);
}else datapro = [] ;


btncreate.onclick = function(){
    
    if(price.value !='' && title.value!='' && category.value !=''){
     
    let newpro = {
        title : title.value.toLowerCase(),
        price : price.value,
        taxes : taxes.value,
        ads   : ads.value,
        discount : discount.value,
        total : total.innerHTML,
        category : category.value.toLowerCase(),
    }
    if(temp==='create'){
    if(count.value>1){
    for(let i=0 ; i< (+count.value) ; i++){
     datapro.push(newpro);
}
    }else  datapro.push(newpro);
}else{
   datapro[tem]=newpro;
   total.style.background = '#a00d02';
   count.style.display ='block';
   btncreate.innerHTML = 'Create';
   temp='create';
   
}
localStorage.setItem('product' , JSON.stringify(datapro) );
cleardata();
}
document.getElementById('all').innerHTML= datapro.length;
showdata()
}

// clear all 

function cleardata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '0';
    count.value = '';
    category.value = '';
}

// read


function showdata(){
    var table='';

    for(let i=0 ; i<datapro.length ; i++){
        table += `
        <tr>
        <td>${i+1}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button onclick="update(${i})" id="btnupde">update</button></td>
        <td><button onclick="delpro(${i})" id="btnupde">delete</button></td>
    </tr>
`;

    }
    document.getElementById('tbody').innerHTML = table;
}

showdata();



// delete proudct 

function delpro(i){
    datapro.splice(i,1);
    localStorage.product= JSON.stringify(datapro);
    showdata();
    document.getElementById('all').innerHTML= datapro.length;
}


document.getElementById('all').innerHTML= datapro.length;

// update

function update(i){
     title.value = datapro[i].title;
     price.value = datapro[i].price;
     taxes.value = datapro[i].taxes;
     ads.value = datapro[i].ads;
     category.value = datapro[i].category;
     discount.value = datapro[i].discount;
     count.style.display='none';
     gettotal();
     btncreate.innerHTML ='Update';
     tem=i;
     temp="update";
     scroll({
        top:0,
        behavior:'smooth',
     })
}

// search


let mood= 'title';
let search=document.getElementById('search');
function getsearch(id){
    search.focus();
     if(id==='btntitle'){
        mood='title';
        search.placeholder='Search by Title'
     }else{
        mood = 'category';
        search.placeholder='Search by Category'
     }

     search.value = '';
     showdata();
}



function searchdata(value){
    var table ='';
    let cnt=1;
    if(mood=='title'){
        for(let i=0 ; i<datapro.length ; i++){
            if(datapro[i].title.includes(value.toLowerCase(),))
            {
                table += `
                <tr>
                <td>${cnt++}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="update(${i})" id="btnupde">update</button></td>
                <td><button onclick="delpro(${i})" id="btnupde">delete</button></td>
            </tr>
        `;
            }
        }
        }else{
            for(let i=0 ; i<datapro.length ; i++){
            if(datapro[i].category.includes(value))
            {
                table += `
                <tr>
                <td>${cnt++}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="update(${i})" id="btnupde">update</button></td>
                <td><button onclick="delpro(${i})" id="btnupde">delete</button></td>
            </tr>
        `;
            }
        }
        }
        document.getElementById('tbody').innerHTML = table;
    
}

// color
let a=0;
function color(){
   

    if(a==0){
        document.body.style.background= "white";
        document.body.style.color='black';
        a++;
    }else if(a==1){
        document.body.style.background= "green";
        document.body.style.color='black';
        a++;
    }else if(a==2){
        document.body.style.background= "blue";
        document.body.style.color='black';
        a++;
    }else if(a==3){
        document.body.style.background= "gray";
        document.body.style.color='black';
        a++;
    }else{
        document.body.style.background= "rgba(0, 0, 0, 0.963)";
        document.body.style.color='white';
        a=0;
    }
}