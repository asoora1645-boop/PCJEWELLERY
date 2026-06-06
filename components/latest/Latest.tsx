export default function LatestReleases() {
  return (
    <section className="py-16 px-6">
      <div className="flex justify-center mb-8">
        <h2 className="text-[34px] font-medium uppercase tracking-wide text-gray-900">
          New Releases
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-[8.74px] px-3 py-4 max-md:grid-cols-1">
        
        <img
          src="/release2.jpg"
          alt="Release 1"
          className="w-full h-[400px] object-cover rounded-xl"
        />

        <img
          src="/bridal.jpg"
          alt="Release 2"
          className="w-full h-[400px] object-cover rounded-xl"
        />

        <img
          src="/release3.jpg"
          alt="Release 3"
          className="w-full h-[400px] object-cover rounded-xl"
        />

        <img
          src="/release1.jpg"
          alt="Release 4"
          className="w-full h-[400px] object-cover rounded-xl"
        />
      </div>
    </section>
  );
}