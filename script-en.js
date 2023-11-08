document.getElementById('electriction_btn').addEventListener('click', function() {
    document.getElementById('electricians').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('asthetic_btn').addEventListener('click', function() {
    document.getElementById('aesthetics').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('driver_btn').addEventListener('click', function() {
    document.getElementById('drivers').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('gardener_btn').addEventListener('click', function() {
    document.getElementById('gardeners').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('plumber_btn').addEventListener('click', function() {
    document.getElementById('plumbers').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('assorted_btn').addEventListener('click', function() {
    document.getElementById('assorted').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cleaning_btn').addEventListener('click', function() {
    document.getElementById('cleaning').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});

// document.getElementById('scrollToTopButton').addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

var scrollToTopButton = document.getElementById('scrollToTopButton');
var contactButton = document.getElementById('contactButton');

// Function to show/hide the button based on scroll position
function toggleScrollButtonVisibility() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
        contactButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
        contactButton.style.display = 'none';
    }
}

// Add a scroll event listener to trigger the function
window.addEventListener('scroll', toggleScrollButtonVisibility);

// Function to scroll to the top
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// const languageToggle = document.getElementById('langButton');

// languageToggle.addEventListener('change', () => {
//     if (languageToggle.checked) {
//         // User toggled to Spanish
//         window.location.href = 'index-he.html'; // Redirect to the Spanish version
//     } else {
//         // User toggled to English (default language)
//         window.location.href = 'index-en.html'; // Redirect to the English version
//     }
// });

document.getElementById('langButton').addEventListener('click', function() {
    window.location.href = 'index-he.html';
});
