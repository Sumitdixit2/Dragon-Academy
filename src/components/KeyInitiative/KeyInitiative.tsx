import martialarts5 from "../../assets/martialarts5.jpeg"

function KeyInitiative() {
  return (
    <div className="mt-32">
<div className="text-center mb-12">
<h2 className="inline-block text-3xl font-bold text-black relative pb-2">
            KEY INITIATIVES
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-red-500"></span>
</h2>
</div>
<div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden">
<div className="md:w-1/2 flex justify-center items-center">
<img alt="A female martial artist stretching her leg, holding it up high." className="object-cover w-[30%] h-[60%]" src={martialarts5}/>
</div>
<div className="md:w-1/2 p-12">
<h3 className="text-2xl font-bold text-black mb-4">Empowering the Next Generation of Fighters</h3>
<p className="text-gray-600 mb-6">
            Our key initiative is to provide aspiring martial artists with the resources and support they need to succeed. We focus on comprehensive training programs, mentorship from experienced professionals, and access to a global network of opportunities. We believe in nurturing talent and fostering a community of dedicated fighters who are prepared to take on the world.
          </p>
</div>
</div>
</div>
  )
}

export default KeyInitiative