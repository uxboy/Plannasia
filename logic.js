let sidebarmenuBtn = document.querySelector("#ham-icon-one");
let sidebarMenu = document.querySelector(".sidebar-menu");

let sidebarmenuBtnTwoTwo = document.querySelector("#ham-icon-two-two"); //cross

let hamiconThree = document.querySelector("#ham-icon-three"); //ham

// console.log(sidebarmenuBtn);
let mode = true;

sidebarmenuBtn.addEventListener("click",()=>{

    if(mode == true){
        sidebarMenu.style.display="block";
        sidebarMenu.style.transition = "background-color 1s ease";
        sidebarmenuBtnTwoTwo.style.visibility="visible";
        hamiconThree.style.visibility="hidden"
        mode = false
        sidebarmenuBtnTwoTwo.addEventListener("click",()=>{
            if(mode===false){
                sidebarMenu.style.display="none";
                hamiconThree.style.visibility="visible"
                sidebarmenuBtnTwoTwo.style.visibility="hidden";
                console.log("clicked");
                mode = true;
            }
        })
    }else{
        sidebarMenu.style.display="none";
        sidebarmenuBtnTwoTwo.style.visibility="hidden";
        hamiconThree.style.visibility="visible";
        mode = true;
    }
    console.log(mode);
})


hamiconThree.addEventListener("click",()=>{
    if(mode == true){
        sidebarMenu.style.display="block";
        sidebarMenu.style.transition = "background-color 1s ease";
        sidebarmenuBtnTwoTwo.style.visibility="visible";
        hamiconThree.style.visibility="hidden"
        mode = false
        sidebarmenuBtnTwoTwo.addEventListener("click",()=>{
            if(mode===false){
                sidebarMenu.style.display="none";
                hamiconThree.style.visibility="visible"
                sidebarmenuBtnTwoTwo.style.visibility="hidden";
                console.log("clicked");
                mode = true;
            }
        })
    }else{
        sidebarMenu.style.display="none";
        sidebarmenuBtnTwoTwo.style.visibility="hidden";
        hamiconThree.style.visibility="visible";
        mode = true;
    }
    console.log(mode);
})
