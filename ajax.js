
var para=document.getElementById('para');
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var list=JSON.parse(this.responseText);
        var checkbox1="<input type=checkbox id=customCheck1 onclick=countChecked(this)> ";
        var checkbox2="<input type=checkbox checked id=customCheck2 disabled onclick=countChecked(this)> ";
        var output='';
        var completed='';
        for(var i=0;i<list.length;i++){
            completed=list[i].completed;
            if(completed==true){
                output+=checkbox2;
                output+=list[i].title+'</input></br>';
            }
            else{
                output+=checkbox1;
                output+=list[i].title+'</input></br>';
            }            
        }
        para.innerHTML=output;        
    }
}
xhttp.open('GET','listitems.json',true);
xhttp.send();

function countChecked(){
    let myPromise= new Promise(function(myResolve, myReject) {
        var check=document.querySelectorAll('input[type="checkbox"]');
        var count=0;
        for(var i=0;i<check.length;i++){
            if(check[i].checked==true&&check[i].disabled==false){
                count++;
            }
            if(count<5){
                continue;
            }
            else{
                myResolve(check);
            }
        }  
    });
    
    myPromise
    .then(function(check){
        alert('Congrats. 5 Tasks have been Successfully Completed');
        alert('No more selection permitted');
        for(var i=0;i<check.length;i++){
            check[i].disabled=true;
        }
    }) 
    .catch(function(){
        alert('Error on selection');
    });    
}


// to edit option. It reset check boxes.
function editOption(){
    var inputCheck=document.querySelectorAll('#customCheck1');
    for(var i=0;i<inputCheck.length;i++){
        inputCheck[i].checked=false;
        inputCheck[i].disabled=false;
    }
}