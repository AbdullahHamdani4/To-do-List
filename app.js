const menuicon=document.querySelector(".menu-icon");
 const navlinks=document.querySelector(".navbarlinks");
 const input=document.querySelector(".input");
 const tasks=document.querySelector(".tasks");
 const span=document.querySelector("span");
 const cleartask=document.querySelector("#cleartask");
 menuicon.addEventListener("click",()=>{
  navlinks.classList.toggle('active');
 }
 );

 //..............................................................................................
 const button=document.querySelector(".button");
 const tasklist=document.querySelector("#tasklist");
 const addtask=()=>{
    const inpval=input.value;
    if(inpval===""){
        
        span.classList.add("show");

    }
    else{
        span.classList.remove("show");
        const newtask=document.createElement("li");
        newtask.textContent=inpval
       
         
          
        const delbtn=document.createElement("button");
        delbtn.innerText="❌"
        delbtn.addEventListener("click",()=>{
            newtask.remove()
        })
        newtask.appendChild(delbtn);
        tasklist.appendChild(newtask);
        input.value=""
    }
    
 };
 
    const confirmModal = document.getElementById("confirmModal");
    const okBtn = document.getElementById("okBtn");
    const cancelBtn = document.getElementById("cancelBtn");
     

   cleartask.addEventListener("click",()=>{
    confirmModal.style.display="flex";
   });
   okBtn.addEventListener("click",()=>{
    tasklist.innerHTML="";
    confirmModal.style.display="none";
   });
   cancelBtn.addEventListener("click",()=>{
    confirmModal.style.display="none";
   });
 
input.addEventListener("keydown",(whichkey)=>{
    if(whichkey.key === "Enter"){
        addtask()
    }
})
