import './App.css'
import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css';



function Main(){
    return (
        <div class ='home'>
        
        <section id="hero-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="block wow fadeInUp" data-wow-delay=".3s">
          <section class="cd-intro">
            <h1 class='name'>
              <span>HI, my name is Hamza &amp; I AM A</span><br/>
              Software Developer  
            </h1>
          </section>
         
          <h2 class="intro">
          I am a Software developer,  who is developing new skills <br/> creating new apps and webpages
          </h2> 
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <div class="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2 class = 'abouth2'>
            ABOUT ME
          </h2>
        <img src='https://i.imgur.com/4HExyM0.png' class ='pfp'/>
        <div class='icons'>
        </div>
      
          <p class ='aboutp'>
          I'm from a immigrant household, my parents worked low income jobs to support our family.<br/> I've worked in the construction industry started from helper roles to management. Hobbies I have are music and cars. 
          </p>         
        </div>
      </div>
    </div>
  </div>
</section> 


<section id="works" class="works">
<hr/>
  <div class="container">
    <div class="section-heading">
      <h1 class="latest">Finished Projects</h1>
     
      <p class="projects">
        Here are the projects I worked on!<br/>
        <h2 class='button is-white is-medium is-inverted'><Link to="/Projects"> Projects </Link> </h2> 
      </p>
    </div>
  </div>
</section> 



<footer>
          <h2> Contact Me</h2>
          <a href="#">Email: hamzazafarullah1@gmail.com</a> |
          <a href="#">Github: Bigs55stock</a> |
          <a href="#">LinkedIn: www.linkedin.com/in/hamza-zafarullah-09b097253</a>
        </footer>

        </div>

    )
}
export default Main;
