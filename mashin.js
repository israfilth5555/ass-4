//
  function onclickk(id){
        const joblist =document.getElementById("joblist");

        joblist.classList.add("hidden")
        const select =document.getElementById(id);

           select.classList.remove("hidden");
            const nojob= document.getElementById("no-job");
    nojob.classList.add("hidden")
  };
  

  function delect(dele){
    const djob1 = document.getElementById("list1")
    const djob2 = document.getElementById("list2")
    const djob3 = document.getElementById("list3")
    const djob4 = document.getElementById("list4")


    djob1.classList.add("hidden")

 
  const select1 = document.getElementById(dele);


    select1.classList.add("hidden")
   


}
document.getElementById("interview").addEventListener('click',function(){
    const nojob= document.getElementById("no-job");

    nojob.classList.remove("hidden");
    const joblist =document.getElementById("joblist");

        joblist.classList.add("hidden")
    

});
document.getElementById("rejected").addEventListener('click',function(){
    const nojob= document.getElementById("no-job");

    nojob.classList.remove("hidden");
    const joblist =document.getElementById("joblist");

        joblist.classList.add("hidden")
    

});




