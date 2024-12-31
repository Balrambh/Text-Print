function boxPrint(){

    var inpName= document.getElementById('name')

    var nameP = document.getElementById('namePrint')
    nameP.textContent = inpName.value;

    var inpAge= document.getElementById('age')
    var ageP = document.getElementById('agePrint')
    ageP.textContent = inpAge.value;

    var inpJob= document.getElementById('job')
    var jobP = document.getElementById('jobPrint')
    jobP.textContent = inpJob.value;

    
    document.getElementById('secondB').style.backgroundColor="#800080";
   
    
    

}

