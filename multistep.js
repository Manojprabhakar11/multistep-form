const nextBtn=document.querySelector("#btn");
const submitBtn=document.querySelector("#btn1");
const fName=document.querySelector("#fName");
const lName=document.querySelector("#lName");
const fNameE=document.querySelector(".fNameE");
const lNameE=document.querySelector(".lNameE");
const profile=document.querySelector("#profile");
const education=document.querySelector("#education");
const email=document.querySelector("#email");
const phNo=document.querySelector("#phNo");
const profileE=document.querySelector(".profileE");
const emailE=document.querySelector(".emailE");
const phNoE=document.querySelector(".phNoE");
const male=document.querySelector("#male");
const female=document.querySelector("#female");
const others=document.querySelector("#others");
const dobC=document.querySelector("#dobC");
const dobE=document.querySelector(".dobE");
const nameRes=document.querySelector(".nameResV");
const dobRes=document.querySelector(".dobResV");
const phNoRes=document.querySelector(".phNoResV");
const emailRes=document.querySelector(".emailResV");
const sexRes=document.querySelector(".sexResV");
const educationResV=document.querySelector(".educationResV");
const educationRes=document.querySelector(".educationRes");
const profileRes=document.querySelector(".profileResP");
const card1=document.querySelector(".card1");
const card2=document.querySelector(".card2");
const card3=document.querySelector(".card3");
const card4=document.querySelector(".card4");
const card5=document.querySelector(".card5");
const nextBtnH=document.querySelector(".btn1");
const submitBtnH=document.querySelector(".btn2");

let currentSlide=1;
// sumbit btn
submitBtn.addEventListener("click",()=>{
    dobC.classList.remove("shake");
    let sex;
    currentSlide++;
    if(document.querySelector("#male").checked){
        sex=document.querySelector("#male").value;
    }
    if(document.querySelector("#female").checked){
        sex=document.querySelector("#female").value;
    }
    if(document.querySelector("#others").checked){
        sex=document.querySelector("#others").value;
    }
    if(sex&&dobC.value){
        
        if(currentSlide===5){
        document.querySelector(".container").style.display="none";
        document.querySelector(".containerR").style.display="block";
        nextBtnH.style.display="none";
        submitBtnH.style.display="none";
        card5.classList.add("active");
        nameRes.innerHTML=fName.value+" "+lName.value;
        // console.log(`${profile.value}`)
        profileRes.innerHTML=`<img class="profileRes" src="${profile.value}">`;
        dobRes.innerHTML=dobC.value;
        phNoRes.innerHTML="+91"+" "+phNo.value;
        sexRes.innerHTML=sex;
        emailRes.innerHTML=email.value;
        if(education.value){
            educationRes.innerHTML="Education:"
            educationResV.innerHTML=education.value;
        }
        }
        dobC.classList.remove("shake");
        card4.classList.remove("active");
    }
    else{
        if(!sex&&dobC.value===""){
            dobC.classList.add("shake");
            dobE.innerHTML="DOB is reqiured";
            document.querySelector(".sexE").innerHTML="*Gender is reqiured";
        }
        else{
            if(dobC.value===""){
                dobC.classList.add("shake");
                dobE.innerHTML="*DOB is reqiured";
                document.querySelector(".sexE").innerHTML="";
            }
            else if(!sex){
                document.querySelector(".sexE").innerHTML="*Gender is reqiured";
                dobC.classList.remove("shake");
                dobE.innerHTML="";
            }
        }
    }
    
});
// next btn

nextBtn.addEventListener("click",()=>{
    if(currentSlide===1){
        if(fName.value!==""&&lName.value!==""){
            currentSlide++;
            fNameE.innerHTML="";
            lNameE.innerHTML="";
            card1.classList.remove("active");
            card2.classList.add("active");
            fName.classList.remove("shake");
            lName.classList.remove("shake");
        }
        else{
            if(fName.value===""&&lName.value===""){
                fName.classList.add("shake");
                lName.classList.add("shake");
                fNameE.innerHTML="*First Name is reqiured";
                lNameE.innerHTML="*Last Name is reqiured";
            }
            else if(fName.value===""){
                lName.classList.remove("shake");
                fName.classList.add("shake");
                fNameE.innerHTML="*First Name is reqiured";
                lNameE.innerHTML="";
            }
            else if(lName.value===""){
                fName.classList.remove("shake");
                lName.classList.add("shake");
                lNameE.innerHTML="*Last Name is reqiured";
                fNameE.innerHTML="";
            }
        }
    }
    else if(currentSlide===2){
        if(profile.value!==""){
            currentSlide++;
            card2.classList.remove("active");
            card3.classList.add("active");
            profile.classList.remove("shake");
            profileE.innerHTML="";
        }
        else{
            profile.classList.add("shake");
            profileE.innerHTML="*profile picture is reqiured";
        }
    }
    else if(currentSlide===3){
        if(email.value!==""&&phNo.value!==""&&((phNo.value).length===10)&&((email.value).includes("@gmail"))){
            currentSlide++;
            // console.log((phNo.value).length<=10);
            nextBtnH.style.display="none";
            submitBtnH.style.display="block";
            card3.classList.remove("active");
            card4.classList.add("active");
            email.classList.remove("shake");
            phNo.classList.remove("shake");
        }
        else{
            if(email.value===""&&phNo.value===""){
                email.classList.add("shake");
                phNo.classList.add("shake");
                phNoE.innerHTML="*phone Number is reqiured";
                emailE.innerHTML="*email is reqiured";
            }
            else if(email.value===""){
                phNo.classList.remove("shake");
                email.classList.add("shake");
                emailE.innerHTML="*email is reqiured";
                phNoE.innerHTML="";
                
            }
            else if(phNo.value===""){
                email.classList.remove("shake");
                phNo.classList.add("shake");
                phNoE.innerHTML="*phone Number is reqiured";
                emailE.innerHTML="";
                
            }
            else if(!((email.value).includes("@gmail.com"))&&!((phNo.value).length===10)){
                emailE.innerHTML="*Enter valid E-mail";
                phNoE.innerHTML="*Enter valid phone Number";
            }
            else if(!((email.value).includes("@gmail.com"))){
                emailE.innerHTML="*Enter valid E-mail";
                phNoE.innerHTML="";
            }
            else if(!((phNo.value).length===10)){
                phNoE.innerHTML="*Enter valid phone Number";
                emailE.innerHTML="";
            }
        }
    }
    console.log(currentSlide);
});