document.getElementById("year").innerHTML = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');

    if (form) {
      console.log('Form found!');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Successfully Submitted!');
      });
    } else {
      console.log('Form not found!');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("mySelect");
    const output = document.getElementById("demo");

    select.addEventListener("change", function () {
        output.textContent = "You selected: " + select.value;
    });
});

