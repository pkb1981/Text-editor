document.getElementById('make-bold').addEventListener('click', function () {
    const textFieldArea = document.getElementById('textarea-id');
    textFieldArea.style.fontWeight = 'bold';
});
document.getElementById('make-italic').addEventListener('click', function () {
    const textFieldArea = document.getElementById('textarea-id');
    textFieldArea.style.fontStyle = 'italic';
});
document.getElementById('make-underline').addEventListener('click', function () {
    const textFieldArea = document.getElementById('textarea-id');
    textFieldArea.style.textDecoration = 'underline';
});
document.getElementById('left-aligned').addEventListener('click', function () {
    const textFieldArea = document.getElementById('textarea-id');
    textFieldArea.style.textAlign = 'left';
});
document.getElementById('center-aligned').addEventListener('click', function () {
    const textFieldArea = document.getElementById('textarea-id');
    textFieldArea.style.textAlign = 'center';
});
document.getElementById('right-aligned').addEventListener('click', function () {
    const textFieldArea = document.getElementById('textarea-id');
    textFieldArea.style.textAlign = 'right';
});

