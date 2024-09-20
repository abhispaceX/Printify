
import { Star } from 'lucide-react'

import ProductEarningsCalculator from './ProductEarningsCalculator'
import Footer from './Footer';
import ProductCarousel from './BestProduct'

import { Link } from 'react-router-dom'



const inspirationImages = [
  'https://printify.com/pfh/assets/products-display/grid-image-1.webp',
  'https://printify.com/pfh/assets/products-display/grid-image-2.webp',
  'https://printify.com/pfh/assets/products-display/grid-image-3.webp',
  'https://printify.com/pfh/assets/products-display/grid-image-4.webp',
]
const businessCards = [
    { title: 'POD Rockstars', description: '25k in our community of sellers', image: 'https://printify.com/pfh/assets/resources/rockstars.webp' },
    { title: 'Printify YouTube', description: '100k subscribers on the channel to learn POD', image: 'https://printify.com/pfh/assets/resources/youtube.webp' },
    { title: 'Amplified', description: '50k attendees at our online and in-person events', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SUE1Jffb-l6O9gM_QqX4AXbvnCutCQseNg&s' },
    { title: 'Printing Profits', description: "100k downloads on POD's best podcast", image: 'https://printify.com/pfh/assets/resources/printing-profits.webp' },
    { title: 'Mentoring Program', description: '100s of profitable store owners have taken our free and paid courses', image: 'https://printify.com/pfh/assets/resources/mentorship.webp' },
    { title: 'Printify Learning', description: 'Over 600 different articles and guides to creating your business', image: 'https://printify.com/pfh/assets/resources/learning.webp' },
  ]
 


export default function HomePage() {
    
  

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-8 md:py-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#31300a] leading-tight mb-6">
            CREATE AND SELL CUSTOM PRODUCTS
          </h1>
          <div className="flex flex-col space-y-2 mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#31300a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-[#31300a] text-sm md:text-base">100% Free to use</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#31300a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-[#31300a] text-sm md:text-base">900+ products</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#31300a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-[#31300a] text-sm md:text-base">Global delivery</span>
            </div>
          </div>
          <Link to ='/dashboard' >
          <button className="w-full md:w-auto bg-[#c6f37b] text-[#31300a] px-6 py-3 rounded-md text-lg font-semibold mb-4">
            Get started for free
          </button>
          </Link>
          <p className="text-sm text-[#31300a] mb-6">No credit card required</p>
          <div className="flex flex-wrap items-center">
            <span className="text-[#31300a] text-sm mr-2 mb-2">Trusted by 10M+ sellers</span>
            <div className="flex items-center mr-2 mb-2">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} size={16} className={index === 4 ? 'text-gray-300' : 'text-yellow-400'} fill={index === 4 ? 'none' : 'currentColor'} />
              ))}
            </div>
            <span className="text-[#31300a] font-semibold mr-2 mb-2">4.8</span>
            <span className="text-[#31300a] mr-2 mb-2">on</span>
            <img src="https://printify.com/pfh/assets/hero/shopify.svg" alt="Shopify logo" className="mr-2 mb-2" />
            <span className="text-[#31300a] mr-2 mb-2">and</span>
            <img src="https://printify.com/pfh/assets/hero/trustpilot.svg" alt="Trustpilot logo" className="mb-2" />
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className=" w-full md:w-3/4 h-60 md:h-80 absolute right-0 rounded-lg"></div>
          <video className='w-3/4' autoPlay loop muted >
          <source src="https://printify.com/pfh/assets/hero/newbies-hero-horizontal.mp4" type="video/mp4" />
        </video>
        </div>
      </div>
    

      {/* Product Examples */}
     

      {/* Start with $0 investment */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Start with $0<br />investment</h2>
            <ol className="space-y-6">
              <li className="flex">
                <span className="mr-4 font-bold">1</span>
                <div>
                  <h3 className="font-semibold">Select your product</h3>
                  <p className="text-gray-600">Choose from 800+ high-quality products including brands you know and love</p>
                </div>
              </li>
              <li className="flex">
                <span className="mr-4 font-bold">2</span>
                <div>
                  <h3 className="font-semibold">Add your design</h3>
                  <p className="text-gray-600">Creating your product is easy and fun!</p>
                </div>
              </li>
              <li className="flex">
                <span className="mr-4 font-bold">3</span>
                <div>
                  <h3 className="font-semibold">Start selling</h3>
                  <p className="text-gray-600">You set your profit margin, we take care of production and delivery</p>
                </div>
              </li>
            </ol>
            <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded">Start designing</button>
          </div>
          <div className="md:w-1/2">
            <video className='w-full' autoPlay muted loop >
                <source  src="https://printify.com/pfh/assets/steps/design.mp4" type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Your next bestseller awaits */}
         <ProductCarousel/>

      {/* Ideas and inspiration */}
      <section className="bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Ideas and inspiration</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          <img src={inspirationImages[0]} alt="Inspiration 1" className="w-full" />
          <img src={inspirationImages[1]} alt="Inspiration 2" className="w-full" />
          <img src={inspirationImages[2]} alt="Inspiration 3" className="w-full" />
          <img src={inspirationImages[3]} alt="Inspiration 4" className="w-full" />
        </div>
      </section>

      {/* See how much you can make */}
     <ProductEarningsCalculator/>

      {/* Real people use Printify */}
      <section className="py-20 w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Real people use Printify</h2>
        <div className=" w-full flex flex-col md:flex-row items-center bg-purple-100 rounded-lg overflow-hidden">
          <div className="md:w-1/2">
            <video controls className='w-full h-auto' >
              <source src="https://printify.com/wp-content/uploads/2023/03/Christina-Testimonial.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="md:w-1/2 p-8">
            <blockquote className="text-xl md:text-5xl mb-4">
              "I've been using Printify for about two years, it allowed me to quit my job within 9 months. Now I'm in Bali being a digital nomad and working on my store"
            </blockquote>
            <p className="font-semibold">Christina Umerez, Toronto</p>
            <button href="#" className="text-blue-600 hover:underline">Read more real-life stories of success</button>
          </div>
        </div>
      </section>

      {/* Connect and start selling */}
      <section className="py-20 px-4 bg-olive-900 bg-[#1b2403c3] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Connect and start selling</h2>
          <p className="mb-8">Printify integrates with all the top selling platforms in the world.</p>
          <div className="flex flex-wrap justify-end gap-6">
            <img src="https://printify.com/pfh/assets/integrations-stickers.webp" alt="Shopify" className="h-auto w-1/4" />
          </div>
          <button className="block mt-6 text-center underline">See all integrations</button>
        </div>
      </section>


      {/* As seen in */}
      <section className="py-20 px-4">
        <h2 className="text-xl font-semibold text-center mb-8">As seen in:</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="https://printify.com/pfh/assets/publishers/business-insider.svg" alt="Business Insider" className="h-8" />
          <img src="https://printify.com/pfh/assets/publishers/daily-mail.webp" alt="Daily Mail" className="h-8" />
          <img src="https://printify.com/pfh/assets/publishers/entrepreneur.webp" alt="Entrepreneur" className="h-8" />
          <img src="https://printify.com/pfh/assets/publishers/cnbc.webp" alt="CNBC" className="h-8" />
          <img src="https://printify.com/pfh/assets/publishers/forbes.webp" alt="Forbes" className="h-8" />
        </div>
      </section>
      {/* Printify is where your customers are */}
      <section className="py-20 px-4 bg-sky-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Printify is where<br />your customers are:</h2>
          <p className="mb-8">Our partner network delivers around the world, fast.</p>
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p className="text-4xl font-bold">59M+</p>
              <p>Total orders completed</p>
            </div>
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p className="text-4xl font-bold">209</p>
              <p>Countries and territories</p>
            </div>
            <div className="w-full md:w-auto">
              <p className="text-4xl font-bold">141</p>
              <p>Facilities</p>
            </div>
          </div>
          <img src="https://printify.com/pfh/assets/print-provider-map.svg" alt="World Map" className="w-full max-w-4xl mx-auto" />
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Everything you need to start<br />your own online business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                  < button className="text-blue-600 hover:underline text-sm">Learn more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

