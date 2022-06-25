



// fitur ganti halaman
// 1.seleksi nav item

let nav_item = document.querySelectorAll('.nav-link');
let navbar_nav = document.querySelector('.navbar-nav');
let jumbotron_container_home = document.querySelector('.jumbotron-container-home')


function pageHome(){
    let data = ` <div class="container c-jumbotron-home container-content" data-page="home">
    <div class="img-jumbotron-home" aria-label="image jumbotron home">
      <div class="img-profile-jumbotron-home">
        <img src="vendor/img/img-profile.jpg" alt="img-profile" class="">
      </div>
    </div>
    <h2 class="nama-profile">pramdani dwi putra</h2>
    <h4 class="nama-profesi">backend developer</h4>
    <section class="social-media">
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
     <a href="#"> <i class="fa-brands fa-github"></i></a>
     <a href="#"><i class="fa-brands fa-linkedin"></i></a>
    </section>
</div>`

return jumbotron_container_home.innerHTML = data;
}
function pageProject(){
   let data_project = ` <div class="container c-jumbotron-project container-content" data-page="project">
    <div class="card-template">
      <div class="card">
        <div class="card-img">
          <img src="vendor/img/node.jpg" alt="code node js">
        </div>
        <div class="card-body">
          <div class="caption-project"><h4>web login</h4></div>
        </div>
      </div>
      <div class="card">
      <div class="card-img">
      <img src="vendor/img/node.jpg" alt="code node js">
    </div>
    <div class="card-body">
      <div class="caption-project"><h4>web login</h4></div>
    </div>
      </div>
      <div class="card">
      <div class="card-img">
      <img src="vendor/img/node.jpg" alt="code node js">
    </div>
    <div class="card-body">
      <div class="caption-project"><h4>web login</h4></div>
    </div>
      </div>
      <div class="card">
      <div class="card-img">
      <img src="vendor/img/node.jpg" alt="code node js">
    </div>
    <div class="card-body">
      <div class="caption-project"><h4>web login</h4></div>
    </div>
      </div>
    </div> 
  </div>`

  return jumbotron_container_home.innerHTML = data_project;
}

pageHome()

navbar_nav.addEventListener('click',function(e){
    if(e.target.classList.contains('nav-link')){
        nav_item.forEach(el =>{
            if(el.classList.contains('active')){
            
                el.classList.remove('active')
            }
            
   
        })
        e.target.classList.add('active')
        let section = ``
        if(e.target.textContent === 'Home'){
            pageHome()
        }
         if(e.target.textContent === 'project'){
          pageProject()
        }
       
    e.preventDefault()
    }
})
