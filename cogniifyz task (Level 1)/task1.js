// task 2 to change color of button (level 1)



const btn = document.getElementById('colorBtn');
btn.addEventListener('click', function () {
    // Toggle between two colors
    if (btn.style.backgroundColor === 'lightblue') {
        btn.style.backgroundColor = 'lightgreen';
    } else {
        btn.style.backgroundColor = 'lightblue';
    }
});