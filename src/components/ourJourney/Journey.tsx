import { CiFlag1 } from "react-icons/ci";
import { FaBuilding } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";



function Journey() {
  return (
    <div className="mt-32">
      <section id="Journey">
<div className="text-center mb-16">
<h2 className="inline-block text-3xl font-bold text-black relative pb-2">
        OUR JOURNEY
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-red-500"></span>
</h2>
<p className="text-gray-600 mt-4 max-w-2xl mx-auto">From a humble beginning to a global force in combat sports education, here are the milestones that shaped our academy.</p>
</div>
      </section>
<div className="relative">
<div className="absolute left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
<div className="space-y-16">
<div className="flex items-center justify-center relative">
<div className="w-1/2 flex justify-end pr-8">
<div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-right">
<h3 className="text-xl font-bold text-red-500">2003</h3>
<h4 className="text-lg font-semibold text-black mt-1 mb-2">starting of this journey </h4>
</div>
</div>
<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center z-10">
<span className="material-icons text-white"><CiFlag1 fill="white"/></span>
</div>
<div className="w-1/2"></div>
</div>
<div className="flex items-center justify-center relative">
<div className="w-1/2"></div>
<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center z-10">
<span className="material-icons text-white"><FaBuilding/></span>
</div>
<div className="w-1/2 flex justify-start pl-8">
<div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-left">
<h3 className="text-xl font-bold text-red-500">2006</h3>
<h4 className="text-lg font-semibold text-black mt-1 mb-2">reached first milestone of 20 students </h4>
</div>
</div>
</div>
<div className="flex items-center justify-center relative">
<div className="w-1/2 flex justify-end pr-8">
<div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-right">
<h3 className="text-xl font-bold text-red-500">2014</h3>
<h4 className="text-lg font-semibold text-black mt-1 mb-2"> gold in pancek silat mens category district level
</h4>
</div>
</div>
<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center z-10">
<span className="material-icons text-white"><FaTrophy/></span>
</div>
<div className="w-1/2"></div>
</div>
<div className="flex items-center justify-center relative">
<div className="w-1/2"></div>
<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center z-10">
<span className="material-icons text-white"><FaEarthAmericas/></span>
</div>
<div className="w-1/2 flex justify-start pl-8">
<div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-left">
<h3 className="text-xl font-bold text-red-500">2022</h3>
<h4 className="text-lg font-semibold text-black mt-1 mb-2">silver in women's state level championship </h4>
<h4 className="text-lg font-semibold text-black mt-1 mb-2">silver in junior boys in district level championship </h4>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Journey