



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
function pageSkill(){
  let data_project = ` <div class="container c-jumbotron-skill container-content" aria-label="container-skill" data-page="skill">
  <div class="skill-template">
    <div class="card card-skill">
      <div class="card-body-skill">
        <div class="card-desc">
          <img src="vendor/img/python.jpg" alt="" class="img-desc">
          <h5 class="card-text">Python</h5>
          <span class="pengalaman"><span class="lama">2 year</span> of experience</span>
        </div>
      </div>
    </div>
    <div class="card card-skill">
      <div class="card-body-skill">
        <div class="card-desc">
          <img src="vendor/img/django.jpg" alt="" class="img-desc">
          <h5 class="card-text">Django</h5>
          <span class="pengalaman"><span class="lama">1 year</span> of experience</span>
        </div>
      </div>
    </div>
    <div class="card card-skill">
      <div class="card-body-skill">
        <div class="card-desc">
          <img src="vendor/img/database.png" alt="" class="img-desc s">
          <h5 class="card-text">Mysql</h5>
          <span class="pengalaman"><span class="lama">7 month</span> of experience</span>
        </div>
      </div>
    </div>
    <div class="card card-skill">
      <div class="card-body-skill">
        <div class="card-desc">
          <img src="vendor/img/git.jpg" alt="" class="img-desc">
          <h5 class="card-text">Git</h5>
          <span class="pengalaman"><span class="lama">7 month</span> of experience</span>
        </div>
      </div>
    </div>
    
  </div>
</div>`

 return jumbotron_container_home.innerHTML = data_project;
}

function pageLoading(){
  let data_project_loading =` <div class="container jumbotron-animate-loading">
                                <div class="loading">
                                  
                                </div>
                              </div>`
                              
   return jumbotron_container_home.innerHTML = data_project_loading;
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
      
        if(e.target.textContent === 'Home'){
          pageLoading()
          setTimeout(() => {
            pageHome()
          }, 500);
          
        }
         if(e.target.textContent === 'project'){
   
          pageLoading()
          setTimeout(() => {
            pageProject()
          }, 500);
        }
        if(e.target.textContent === 'skill'){
      
          pageLoading()
          setTimeout(() => {
            pageSkill()
          }, 500);
        
        }
       
    e.preventDefault()
    }
})
