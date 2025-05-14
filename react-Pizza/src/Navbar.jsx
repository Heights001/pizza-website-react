import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="flex justify-between p-4 bg-red-500">
        <a href="#" class="text-white">Logo</a>
      <div class="relative group"></div>
          {/* <!-- Menu Button --> */}
          <button class="text-white focus:outline-none">Menu</button>
      </nav>
    </div>
  )
}

export default Navbar