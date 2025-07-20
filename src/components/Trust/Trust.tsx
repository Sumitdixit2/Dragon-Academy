import martialarts1 from "../../assets/martialarts1.jpeg";
import martialarts2 from "../../assets/martial arts 2.jpeg";
import martialarts3 from "../../assets/martial arts 3.jpeg"
import martialarts4 from "../../assets/martial arts 4.jpeg"

function Trust() {
  return (
    <div className="mt-32 bg-gray-100 py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-black mb-2">TRUSTED BY THE BEST</h2>
<p className="text-gray-600">We partner with world-renowned institutions to bring you the highest quality education.</p>
<div className="mt-4 flex justify-center">
<div className="w-24 h-1 bg-red-500"></div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
<div className="flex justify-center">
<img alt="Partner logo 1" className="h-20 object-contain grayscale transition duration-300 hover:grayscale-0" src={martialarts1}/>
</div>
<div className="flex justify-center">
<img alt="Partner logo 2" className="h-20 object-contain grayscale transition duration-300 hover:grayscale-0" src={martialarts2}/>
</div>
<div className="flex justify-center">
<img alt="Partner logo 3" className="h-20 object-contain grayscale transition duration-300 hover:grayscale-0" src={martialarts3}/>
</div>
<div className="flex justify-center">
<img alt="Partner logo 4" className="h-20 object-contain grayscale transition duration-300 hover:grayscale-0" src={martialarts4}/>
</div>

</div>
</div>
</div>
  )
}

export default Trust






