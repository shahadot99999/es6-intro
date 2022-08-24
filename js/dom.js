// change background color
document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
})

// text particular center posstion

document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})

// add new friend 
//add handler add friend button 
document.getElementById('add-friend').addEventListener('click', function () {

    //added id friends 
    const friendContainer = document.getElementById('friends');
    //added div create  inside id  
    const friend = document.createElement('div');

    // add friend inside id friend and div 
    friend.classList.add('friend');
    //it compile and excute result h3 and p task 
    friend.innerHTML = `
    <h3 class= "friend-name">New Friend </h3>
    <p> something new added </p>
    `
    // it show result.
    friendContainer.appendChild(friend);
})