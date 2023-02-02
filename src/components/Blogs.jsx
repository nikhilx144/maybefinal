import React from 'react'
import '../styles/Blogs.css'
import Blog1 from '../assets/blog-1.jpg'
import Blog2 from '../assets/blog-2.jpg'
import Blog3 from '../assets/blog-3.jpg'
import Blog4 from '../assets/blog-4.jpg'
import Blog5 from '../assets/blog-5.jpg'
import Blog6 from '../assets/blog-6.jpg'

const Title = 'Blogs';

function Blogs() {
  return (
    <div>
      <title>{ Title }</title>
        <section id="blog">
          <div className="blog-heading">
            <span>Recent Posts</span>
            <h3>Blogs</h3>
          </div>
          <div className="blog-container">
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog1 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 1</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog2 } alt="" />  
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 2</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog3 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 3</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog4 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 4</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog5 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 5</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog6 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 6</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Blogs