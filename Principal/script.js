document.getElementById('more-options').addEventListener('click', function(event) {
    event.preventDefault();
    var window = document.getElementById('floating-window');
    if (window.style.display === 'none') {
        window.style.display = 'block';
    } else {
        window.style.display = 'none';
    }
    window.addEventListener('mouseleave', function() {
        window.style.display = 'none';
    });
});


document.getElementById('btn1').addEventListener('click', function() {
    var content = document.getElementById('content1');
    var arrow = document.getElementById('img1');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.classList.add('rotated');
    } else {
        content.style.display = 'none';
        arrow.classList.remove('rotated');
    }
});

document.getElementById('btn2').addEventListener('click', function() {
    var content = document.getElementById('content2');
    var arrow = document.getElementById('img2');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.classList.add('rotated');
    } else {
        content.style.display = 'none';
        arrow.classList.remove('rotated');
    }
});

document.getElementById('btn3').addEventListener('click', function() {
    var content = document.getElementById('content3');
    var arrow = document.getElementById('img3');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.classList.add('rotated');
    } else {
        content.style.display = 'none';
        arrow.classList.remove('rotated');
    }
});
