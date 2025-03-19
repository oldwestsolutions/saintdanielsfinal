<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 py-12">
  {/* Image container - now on the left */}
  <div className="md:w-1/2">
    <Image
      src="/hero-image.png"
      alt="Hero Image"
      width={500}
      height={500}
      className="w-full h-auto"
    />
  </div>

  {/* Text and button container - now on the right */}
  <div className="md:w-1/2 space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold">
      Your Health, Our Priority
    </h1>
    <p className="text-lg text-gray-600">
      Experience exceptional healthcare services with our dedicated team of professionals.
    </p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
      Book Appointment
    </button>
  </div>
</div> 