
document.addEventListener('DOMContentLoaded', function() {
    
   
    const menuItems = document.querySelectorAll('.menu-item');

   
    menuItems.forEach(item => {
        const arrow = item.querySelector('.arrow');
        
       
        arrow.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
            
           
            menuItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle the current menu
            item.classList.toggle('active');
        });
    });

   
    document.addEventListener('click', (e) => {
        // Check if click is outside any menu-item
        if (!e.target.closest('.menu-item')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

});
function validform() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;

    if (/\d/.test(name)) {
        alert("Name should not contain numbers!");
        return false;
    }
    

    if (!/^\d+$/.test(mobile)) {
        alert("Mobile number should contain only digits!");
        return false;
    }
}