// 


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{ items:1 },
            600:{ items:2 },
            1000:{ items:3 }
        }
    });
});

    
        document.getElementById('alertBtn').addEventListener('click', function() {
            Swal.fire({
                title: 'THANK YOU!',
                text: 'Your subscribution added successful!',
                icon: 'success',
                confirmButtonText: 'DONE'
            });
        });
  

           // Initialize all popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));
  
