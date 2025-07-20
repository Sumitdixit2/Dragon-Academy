import martialarts1 from "../../assets/martialarts1.jpeg"

function Footer() {
  return (
    <footer className="bg-black text-white mt-32 rounded-t-4xl">
<div className="container mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="flex items-center">
<img alt="Kombat Academy Logo" className="h-8 mr-2" src={martialarts1}/>
<span className="text-xl font-bold">Dragon Martial Arts Academy 
</span>
</div>
<p className="mt-4 text-gray-400">Empowering the next generation of fighters through world-className training and education.</p>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">About Us</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Contact Us</a></li>
</ul>
</div>

</div>
<div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-500 text-sm">© 2024 Dragon Martial Arts Academy 
. All rights reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-white" href="https://www.facebook.com/people/Dragon-Martial-Arts-Academy/100063820970956/?rdid=C3AXZYBFXfncf5dp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19BwKyNyty%2F">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>

<a className="text-gray-400 hover:text-white" href="https://www.instagram.com/dragonmartialartss">
<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.011 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.531 2.011 9.885 2 12.315 2zm-1.04 1.291c-1.02.046-1.636.21-2.18.41a3.608 3.608 0 00-1.24 1.24c-.2.544-.364 1.16-.41 2.18-.046 1.008-.058 1.35-.058 3.78s.012 2.772.058 3.78c.046 1.02.21 1.636.41 2.18a3.608 3.608 0 001.24 1.24c.544.2 1.16.364 2.18.41 1.008.046 1.35.058 3.78.058s2.772-.012 3.78-.058c1.02-.046 1.636-.21 2.18-.41a3.608 3.608 0 001.24-1.24c.2-.544.364 1.16.41-2.18.046-1.008.058-1.35.058-3.78s-.012-2.772-.058-3.78c-.046-1.02-.21-1.636-.41-2.18a3.608 3.608 0 00-1.24-1.24c-.544-.2-1.16-.364-2.18-.41-1.008-.046-1.35-.058-3.78-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
</div>
</footer>
  )
}

export default Footer