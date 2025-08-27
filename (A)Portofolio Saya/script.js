function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    const currentSection = document.querySelector('main section.active');
    const sectionToShow = document.getElementById(sectionId);

    if (currentSection === sectionToShow) return;

    const currentSectionIndex = Array.from(sections).indexOf(currentSection);
    const sectionToShowIndex = Array.from(sections).indexOf(sectionToShow);
    const direction = sectionToShowIndex > currentSectionIndex ? 'right' : 'left';

    currentSection.classList.add(direction === 'right' ? 'slide-out-left' : 'slide-out-right');

    currentSection.addEventListener('animationend', function handler() {
        currentSection.classList.remove('active', 'slide-out-left', 'slide-out-right');
        currentSection.removeEventListener('animationend', handler);

        sectionToShow.classList.add('active', direction === 'right' ? 'slide-in-right' : 'slide-in-left');

        sectionToShow.addEventListener('animationend', function handler() {
            sectionToShow.classList.remove('slide-in-right', 'slide-in-left');
            sectionToShow.removeEventListener('animationend', handler);

            if (sectionId === 'skills') {
                animateSkillBars();
            }
        });
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        const skillBarFill = skillBar.querySelector('.skill-bar-fill');
        const skillPercentage = skillBar.getAttribute('data-skill');

        skillBarFill.classList.remove('animate');
        void skillBarFill.offsetWidth;
        skillBarFill.classList.add('animate');

        skillBarFill.style.width = skillPercentage;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    function createRaindrop() {
        const raindrop = document.createElement("div");
        raindrop.className = "raindrop";
        raindrop.style.left = `${Math.random() * 50 + 25}%`;
        raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`;
        body.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, 5000);
    }

    setInterval(createRaindrop, 500);

    // Animate skill bars when 'skills' section is initially active
    if (document.getElementById('skills').classList.contains('active')) {
        animateSkillBars();
    }

    // Re-animate skill bars each time 'skills' section is shown
    document.getElementById('skills-link').addEventListener('click', function() {
        showSection('skills');
        animateSkillBars();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen yang dibutuhkan
    const overlay = document.getElementById('overlay');
    const largeImage = document.getElementById('largeImage');
    const imageInfo = document.getElementById('imageInfo');
    const certImages = document.querySelectorAll('.cert-image');
    const overlayContent = document.querySelector('.overlay .content');

    // Fungsi untuk menampilkan gambar besar dan informasi
    function showImage(imageSrc, infoText) {
        largeImage.src = imageSrc;
        imageInfo.textContent = infoText;
        overlay.classList.remove('hidden');
    }

    // Fungsi untuk menutup gambar besar
    function hideOverlay() {
        overlay.classList.add('hidden');
    }

    // Event listener untuk setiap gambar sertifikat
    certImages.forEach(function(certImage) {
        certImage.addEventListener('click', function() {
            var imageSrc = certImage.src;
            var infoText = certImage.getAttribute('data-info');
            showImage(imageSrc, infoText);
        });
    });

    // Event listener untuk menutup overlay saat mengklik di luar gambar atau informasi
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay || event.target === overlayContent) {
            hideOverlay();
        }
    });

    // Event listener untuk menutup overlay saat tombol Escape ditekan
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hideOverlay();
        }
    });
});


