const Bill = document.getElementById('bill');
const Person = document.getElementById('person');
const TipPersen = document.getElementById('box');
const Reset = document.getElementById('reset');

var ShowTip = 0.00;
var ShowTotal = 0.00;

var inbill = 0.00;
var intip = 0.00;
var inper = 0.00;


// input value bill&person

Bill.addEventListener('focusout',()=>{
    let check = Bill.value;
        if (check === ''){
            Warning(Bill,'warnbill')
        } else if(check*1 != check){
            Bill.value = '';
            Warning(Bill,'warnbill')
        }
        else{
            let fix = parseFloat(check).toFixed(2);
            inbill = fix;
            Bill.value = inbill;
            Pass(Bill,'warnbill');
        }
})

Person.addEventListener('focusout',()=>{
    let check = Person.value;
        if(check === ''){
            Warning(Person,'warnper')
        }else if(check*1 != check){
            Person.value = '';
            Warning(Person,'warnper')
        }
        else{
            inper = parseFloat(check);
            Pass(Person,'warnper')
        }
})

// input value ,tips 

TipPersen.children[0].addEventListener('click',()=>{
    intip = 5/100;
    TipPersen.children[5].value ='';
    Clear();
    ActiveTip(0);
})

TipPersen.children[1].addEventListener('click',()=>{
    intip = 10/100;
    TipPersen.children[5].value ='';
    Clear();
    ActiveTip(1);
})

TipPersen.children[2].addEventListener('click',()=>{
    intip = 15/100;
    TipPersen.children[5].value ='';
    Clear();
    ActiveTip(2);
})

TipPersen.children[3].addEventListener('click',()=>{
    intip = 25/100;
    TipPersen.children[5].value ='';
    Clear();
    ActiveTip(3);
})

TipPersen.children[4].addEventListener('click',()=>{
    intip = 50/100;
    TipPersen.children[5].value ='';
    Clear();
    ActiveTip(4);
})

TipPersen.children[5].addEventListener('focusout',()=>{
    let check = TipPersen.children[5].value;
        if(check*1 != check){
            TipPersen.children[5].value = '';
        }else{
            intip = TipPersen.children[5].value/100;
            Clear();       
        }
})


// funtion cal

Calcalator = (b,t,p)=>{
    let tip;
    let total;
    tip = (b*t)/p;
    total = (b/p) + tip;
    ShowTip = tip.toFixed(2);
    ShowTotal = total.toFixed(2); 
    let check = tip*total;
        if(check > 0 && check !== Infinity){
            RealtimeShow(ShowTip,ShowTotal);
        }
}

// show

RealtimeShow = (tip,total) =>{
    document.getElementById('tip').innerHTML = "$"+tip;
    document.getElementById('total').innerHTML = "$"+total;
}

// reset & clear

Reset.addEventListener('click',()=>{
    Bill.value ='';
    TipPersen.children[5].value ='';
    Person.value ='';
    RealtimeShow('0.00','0.00');
    ShowTip = 0.00;
    ShowTotal = 0.00;
    inbill = 0.00;
    intip = 0.00;
    inper = 0.00;
    Clear();
    Reset.style.opacity = 0.3;
})

Clear = () =>{
    TipPersen.children[0].className = 'but';
    TipPersen.children[1].className = 'but';
    TipPersen.children[2].className = 'but';
    TipPersen.children[3].className = 'but';
    TipPersen.children[4].className = 'but';
}

// Warning

Warning = (out,id) =>{
    out.style.outline = "2px solid red"
    document.getElementById(id).innerHTML = "Can't be zero";
}

Pass = (out,id) =>{
    out.style.outline = "none"
    document.getElementById(id).innerHTML = "";
}

// Active state but in js

ActiveTip = (num) =>{
    TipPersen.children[num].className = "but active";
}

document.body.addEventListener('mouseover',()=>{
    if (inbill+inper+intip>0){
        Reset.style.opacity = 1;
    }
    Calcalator(inbill,intip,inper)

})


