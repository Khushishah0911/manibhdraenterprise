window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000);
});
// Show ad modal with different image based on link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.rounded-navbar a');
    const adImage = document.getElementById('ad-image');
    const modal = document.getElementById('ad-modal');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href !== '#home') {
                e.preventDefault();

                // Set ad image based on section
                switch (href) {
                    case '#about':
                        adImage.src = 'img/ad1.jpg';
                        break;
                    case '#printing':
                        adImage.src = 'img/ad2.jpg';
                        break;
                    case '#services':
                        adImage.src = 'img/ad3.jpg';
                        break;
                    case '#contact':
                        adImage.src = 'img/ad1.jpg'; // or another ad
                        break;
                }

                modal.style.display = 'flex';

                // Scroll to section after short delay
                setTimeout(() => {
                    window.location.hash = href;
                }, 1000);
            }
        });
    });
});

// Close Ad
function closeAd() {
    const modal = document.getElementById('ad-modal');
    modal.style.display = 'none';
}
