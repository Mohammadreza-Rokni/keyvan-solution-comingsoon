document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.coming-soon-content').style.display = 'block';
    }, 3000);
});