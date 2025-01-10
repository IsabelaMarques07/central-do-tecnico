const images = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
    'images/image-6.jpg',
    'images/image-7.jpg'
    // ... adicione mais imagens se necessário
  ];
  
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselIndicators = document.querySelector('.carousel-indicators');
  
  images.forEach((image, index) => {
    // Cria os itens do carrossel (slides)
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }
  
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.classList.add('d-block', 'w-100'); // Classes do Bootstrap para tornar a imagem responsiva
    imgElement.alt = `Imagem ${index + 1}`;
  
    carouselItem.appendChild(imgElement);
    carouselInner.appendChild(carouselItem);
  
    // Cria os indicadores (miniaturas)
    const indicatorButton = document.createElement('button');
    indicatorButton.type = 'button';
    indicatorButton.dataset.bsTarget = '#myCarousel';
    indicatorButton.dataset.bsSlideTo = index;
    indicatorButton.setAttribute('aria-label', `Slide ${index + 1}`);
    
    if (index === 0) {
      indicatorButton.classList.add('active');
      indicatorButton.setAttribute('aria-current', 'true');
    }
  
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnail.classList.add('d-block', 'w-100'); // Classes do Bootstrap para as miniaturas
    thumbnail.style.width = '80px';
    thumbnail.style.height = '60px';
    thumbnail.style.objectFit = 'cover';
  
    indicatorButton.appendChild(thumbnail);
    carouselIndicators.appendChild(indicatorButton);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var accordionButtons = document.querySelectorAll('.accordion .btn-link');

    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var icon = this.querySelector('i');
            var isExpanded = this.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
});
    document.addEventListener('DOMContentLoaded', function () {
        var carouselElement = document.getElementById('carouselExample');
        var carousel = new bootstrap.Carousel(carouselElement, {
            interval: 3000, // Tempo em milissegundos entre slides
            wrap: true, // Permite que o carousel volte ao primeiro slide após o último
            pause: 'hover', // Pausa o carousel quando o mouse está sobre ele
            ride: 'carousel' // Inicia o carousel automaticamente
        });

        // Adiciona eventos de controle manual
        document.querySelector('.carousel-control-prev-reviews').addEventListener('click', function () {
            carousel.prev();
        });

        document.querySelector('.carousel-control-next-reviews').addEventListener('click', function () {
            carousel.next();
        });
    });