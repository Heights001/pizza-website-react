import React from 'react'
import img1 from './assets/pizza1.jpg'
import img2 from './assets/pizza2.jpg'
import img3 from './assets/pizza3.jpg'
import img4 from './assets/pizza4.jpg'

const types = () => {
  return (
    <div>
      <section class="p-8 bg-gray-100">
        <h2 class="text-4xl font-bold text-gray-800 text-center mb-8">Types of Pizza</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>

        {/* <!-- Card 1 --> */}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105 ease-in-out      duration-300 ">
          <img src={img4} alt="Veggie Pizza" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Veggie Pizza</h3>
            <p class="text-gray-600">Loaded with fresh veggies like bell peppers, onions, olives, and mushrooms.</p>
          </div>
      </div>
      
        {/* <!-- Card 2 --> */}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105 ease-in-out      duration-300 ">
          <img src={img2} alt="Pepperoni Pizza" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Pepperoni Pizza</h3>
            <p class="text-gray-600">A crowd favorite topped with spicy pepperoni and melting mozzarella cheese.</p>
          </div>
        </div>
      
        {/* <!-- Card 3 --> */}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105 ease-in-out      duration-300 ">
          <img src={img3} alt="BBQ Chicken Pizza" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-800 mb-2">BBQ Chicken Pizza</h3>
            <p class="text-gray-600">Savory barbecue sauce, tender chicken pieces, red onions, and fresh cilantro.</p>
          </div>
        </div>
      
        {/* <!-- Card 4 --> */}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105 ease-in-out      duration-300 ">
        <img src={img1} alt="Margherita Pizza" class="w-full h-48 object-cover" />

        <div class="p-4">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Margherita Pizza</h3>
          <p class="text-gray-600">A classic pizza with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil.</p>
        </div>
      </div>
      
      </section>
    </div>
  )
}

export default types