let spacePhoto= document.getElementById("photo")
const getdata=(data)=>{
    console.log(data)
    data.forEach((photo)=>{
        let card = 
        // let card = ` 
        //     <section class="col-4 mt-md-3 mt-sm-3">
        //         <section>
        //             <h5 class="text-center">${photo.name}</h5>
        //             <a data-toggle="collapse" href="${photo.id}" data-target="#${photo.id}" role="button" aria-expanded="false" aria-controls="collapseExample"><img src="${photo.photo}" class="img-fluid mx-auto d-block" alt="..."></a>
        //         </section>
        //     </section>
        //     <section class="row mt-3">
        //             <section class="col-12">
        //               <section class="collapse multi-collapse" id="${photo.id}">
        //                 <section class="card card-body">
        //                     Aquí la info del speaker Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        //                 </section>
        //               </section>
        //             </section>`
        spacePhoto.innerHTML += card;
    });
}

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-139317831-1');