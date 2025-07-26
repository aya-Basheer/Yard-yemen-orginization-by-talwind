 const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    function startAutoSlide() {
      interval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
      clearInterval(interval);
    }

    // زر التالي والسابق
    nextBtn.addEventListener("click", () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });

    // دعم السحب باللمس
    let startX = 0;
    let endX = 0;
    const slider = document.querySelector('.slider');

    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
      let deltaX = endX - startX;

      if (Math.abs(deltaX) > 50) {
        stopAutoSlide();

        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }

        startAutoSlide();
      }
    });

    // تشغيل تلقائي عند البداية
    showSlide(currentIndex);
    startAutoSlide();

      const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });