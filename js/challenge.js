// Have counter increment by 1 every second
document.addEventListener("DOMContentLoaded", function(event){
const count = document.getElementById("counter")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const likesClass = document.getElementsByClassName("likes")
const commentList = document.getElementsByClassName("comments")
const userComment = document.getElementById("comment-input").value

// Counter function. Using setInterval function from js
let counterTimer = setInterval(function(){
    count.textContent = parseInt(count.textContent) + 1
}, 1000);

// Plus and minus buttons increment/decrement the counter

document.body.addEventListener("click", function(event){
    if(event.target.id === "plus"){
        newCount = parseInt(count.textContent) + 1
        count.textContent = newCount
    }
    else if (event.target.id === "minus"){
        newCount = parseInt(count.textContent) - 1
        count.textContent = newCount
    }
    else if (event.target.id === "heart"){
        number = 1
        createLike(number)
    }
    else if (event.target.id === "submit"){
        createComment(userComment)
    }
})


    function createLike(number){
        const likeLi = document.createElement("li")
        if(number <= 1){
        likeLi.innerHTML = `<li data-num="${count.textContent}">
        ${count.textContent} has been liked 
        <span> ${number}</span> time</li>`
        likesClass[0].appendChild(likeLi)
    }
        else if (number > 1){
        likeLi.innerHTML = `<li data-num="${count.textContent}">
        ${count.textContent} has been liked 
        <span> ${number}</span> time</li>`
        likesClass[0].appendChild(likeLi)
    }
}

// Comment box. Pull user input values and append them to the div id=list as a <p> tag
    function createComment(userInput){
        const commentP = document.createElement("p")
        commentP.innerHTML = userInput
        commentList.append(commentP)
    }
})



