import React from 'react';
import Navbar from '../Navbar/Navbar';
import './index.css'
export default function Newsletter() {
  return (
    <div>  
<Navbar />
    <main>
        <section class="blog-single">
            <div class="blog">
                <div class="blog-img">
                    <img src="https://rvs-blog-page.vercel.app/assets/img/Article-Image.png" alt=""/>
                </div>
                <div class="blog-content">
                    <h2 class="blog-title">Weekly Newsletter: Tweets for Higher Engagements</h2>
                    <p class="blog-desc">In thi Weekly newsletter, we will be covering ten types of engaging tweets. This is the guide if you're just starting out of Twitter.</p>
                    <div class="blog-details">
                        <div class="blog-author-img">
                            <img src="https://rvs-blog-page.vercel.app/assets/img/User-Avatar.png" alt=""/>
                        </div>
                        <div class="blog-author-details">
                            <h4 class="blog-author-name">Jessica Andrews</h4>
                            <div class="blog-author-desig">Content Manager</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="blog-grid">
            <div class="blog">
                <div class="blog-img">
                    <img src="https://rvs-blog-page.vercel.app/assets/img/Article-1-Image.png" alt=""/>
                </div>
                <div class="blog-content">
                    <h2 class="blog-title">7 Tips for Organic Traffic</h2>
                    <p class="blog-desc">From SEO to integrating with Paid Advertising, this article covers it all.</p>
                    <div class="blog-details">
                        <div class="blog-author-img">
                            <img src="https://rvs-blog-page.vercel.app/assets/img/User-Avatar-1.png" alt=""/>
                        </div>
                        <div class="blog-author-details">
                            <h4 class="blog-author-name">Spencer David</h4>
                            <div class="blog-author-desig">SEO Specialist</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog">
                <div class="blog-img">
                    <img src="https://rvs-blog-page.vercel.app/assets/img/Article-2-Image.png" alt=""/>
                </div>
                <div class="blog-content">
                    <h2 class="blog-title">How To Start Your Own Business</h2>
                    <p class="blog-desc">Starting your own business in 2021 has never been easier.</p>
                    <div class="blog-details">
                        <div class="blog-author-img">
                            <img src="https://rvs-blog-page.vercel.app/assets/img/User-Avatar-2.png" alt=""/>
                        </div>
                        <div class="blog-author-details">
                            <h4 class="blog-author-name">Sara Frey</h4>
                            <div class="blog-author-desig">Business Leader</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog">
                <div class="blog-img">
                    <img src="https://rvs-blog-page.vercel.app/assets/img/Article-3-Image.png" alt=""/>
                </div>
                <div class="blog-content">
                    <h2 class="blog-title">5 Tips for Better Branding</h2>
                    <p class="blog-desc">From SEO to integrating with Paid Advertising, this article covers it all.</p>
                    <div class="blog-details">
                        <div class="blog-author-img">
                            <img src="https://rvs-blog-page.vercel.app/assets/img/User-Avatar-3.png" alt=""/>
                        </div>
                        <div class="blog-author-details">
                            <h4 class="blog-author-name">David Suns</h4>
                            <div class="blog-author-desig">Brand Manager</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

   
    </div>
  );
}
