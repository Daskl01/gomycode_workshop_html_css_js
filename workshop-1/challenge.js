let btnrotation=document.querySelector('.rotation')
    btnrotation.addEventListener('click',decreasesize)
    btnrotation.addEventListener('click',retour)
    
    function decreasesize(){
        let btnparent=document.querySelector('.parent')
        btnparent.classList.toggle("parent2")

    } 

    function retour(){
        let btnrotation=document.querryselector('.rotation')
        btnrotation.classList.toggle("rotation2")
    }