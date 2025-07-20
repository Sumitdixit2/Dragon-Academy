import vid1 from "../../assets/Vid1.mp4"
import vid2 from "../../assets/Vid2.mp4"
import vid3 from "../../assets/Vid3.mp4"
import martialartsi from "../../assets/martial arts i.jpeg"
import martialartsii from "../../assets/martialartsii.jpeg"
import martialartsiii from "../../assets/martialartsiii.jpeg"


function Gallery() {
  return (
    <div className="mt-32">
<div className="text-center mb-16">
  <section id="Gallery">
<h2 className="inline-block text-3xl font-bold text-black relative pb-2">
        OUR GALLERY
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-red-500"></span>
</h2>
  </section>
<p className="text-gray-600 mt-4 max-w-2xl mx-auto">A glimpse into the life at Kombat Academy. Explore our training, events, and community moments.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative">
<video controls className="w-full h-64">
  <source src={vid1} type="video/webm" />

  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />

  Download the
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  or
  <a href="/shared-assets/videos/flower.mp4">MP4</a>
  video.
</video>
</div>
<div className="group relative">
<video controls className="w-full h-64">
  <source src={vid2} type="video/webm" />

  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />

  Download the
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  or
  <a href="/shared-assets/videos/flower.mp4">MP4</a>
  video.
</video>
</div>
<div className="group relative">
<img alt="A group photo of students and instructors" className="w-full h-64 object-cover rounded-lg shadow-md" src={martialartsi}/>
</div>
<div className="group relative">
<img alt="A fighter wrapping their hands before a match" className="w-full h-64 object-cover rounded-lg shadow-md" src={martialartsii}/>
</div>
<div className="group relative">
<video controls className="w-full h-64">
  <source src={vid3} type="video/webm" />

  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />

  Download the
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  or
  <a href="/shared-assets/videos/flower.mp4">MP4</a>
  video.
</video>

</div>
<div className="group relative">
<img alt="Celebrating a victory at a competition" className="w-full h-64 object-cover rounded-lg shadow-md" src={martialartsiii}/>
</div>
</div>
</div>
  )
}

export default Gallery