document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.container'); // все контейнеры
  const skillBars = document.querySelectorAll('.skills__bar');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Добавляем анимацию появления для контейнера
        entry.target.classList.add('visible');

        // Если в контейнере есть шкалы — запускаем анимацию заполнения
        const bars = entry.target.querySelectorAll('.skills__bar');
        bars.forEach((bar, index) => {
          const value = bar.getAttribute('data-progress');
          setTimeout(() => {
            bar.style.width = value + '%';
          }, index * 300);
        });

        // После появления — больше не наблюдаем за этим контейнером
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  // Наблюдаем за каждым контейнером
  containers.forEach(container => observer.observe(container));
});
