document.getElementById("int").addEventListener('click',function(){
    const interview= document.getElementById("interviewCount");
    let inter =parseInt(interview.innerText) ||0;
    inter = inter+1;
    console.log(inter)
    interview.innerText = inter;

    const hide =document.getElementById("list1");

    
    const repalce =document.getElementById("no-job");
   repalce.classList.remove("hidden");
   repalce.innerHTML = ""; 
    // const interv = document.createElement("div");
    // interv.appendChild(hide.cloneNode(true));
    //interv.innerHTML = hide;

    repalce.appendChild(hide);
    

});
document.getElementById("re").addEventListener('click',function(){
    const reject= document.getElementById("rejectedCount");
    let rnter =parseInt(reject.innerText) ||0;
    rnter = rnter+1;
    console.log(rnter)
    reject.innerText = rnter;


        const interview= document.getElementById("interviewCount");
    let inter =parseInt(interview.innerText) ||0;
    if (inter > 0) {
        inter = inter - 1;
        console.log("Interview Decreased:", inter);
        interview.innerText = inter;
    }
    const inteehide =document.getElementById("no-job");
    inteehide.classList.add("hidden")

    const hide = document.getElementById("list1");
    const replace = document.getElementById("no-job1");

    
    if (hide && replace) {
        replace.classList.remove("hidden"); // নো-জব সেকশন শো করা
        replace.innerHTML = "";            // ভেতরের আগের নোটিফিকেশন মুছে ফেলা
        replace.appendChild(hide);         // কার্ডটি নতুন জায়গায় স্থানান্তর করা
    }
    

});