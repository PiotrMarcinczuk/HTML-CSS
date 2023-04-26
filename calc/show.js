const div = document.getElementById('bug_forms');
function show(){
    
    if(div.style.display === 'flex'){
        div.style.display = 'none';
    }else{
        div.style.display = 'flex';
    }
    console.log(div.style.display);
}