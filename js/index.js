const notifications = document.querySelectorAll(".not_msg");
const reset = document.getElementById("reset");
const num_nots = document.querySelector(".nots_num");
var value = 0;
activeNotifications(notifications);


function activeNotifications (array) {
    array.forEach((element)=> {
        if(element.classList.contains("unread")){
            value++;
        }
        
    });
    num_nots.innerHTML = value;
}

reset.addEventListener("click", ()=> {
    notifications.forEach((element)=> {
        value = 0;
        element.classList.remove("unread");
        activeNotifications(notifications);
    });
});


notifications.forEach((element)=> {
    element.addEventListener("click", () => {
        value = 0
        element.classList.remove("unread");
        activeNotifications(notifications);
    });
});