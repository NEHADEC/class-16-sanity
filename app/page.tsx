
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/urlFor";

interface Iblog {
  name: string;
  description: string;
  price: number;
  image: { asset: { _ref: string } };
  category: string;
}

export default async function page() {
  let res: Iblog[] = await client.fetch(`*[_type == 'blog']`);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition transform duration-300"
          >
            {/* Image Section */}
            <img
  src={data.image ? urlFor(data.image).url() : '/placeholder-image.png'}
  alt={data.name || 'No Image'}
  className="w-full h-48 object-cover rounded-t-lg"
/>

            <h2 className="text-xl font-semibold mt-4">{data.name}</h2>
            <p className="text-gray-600 mt-2">{data.description}</p>
            <p className="text-lg font-bold mt-4">Price: ${data.price}</p>
            <p className="text-sm text-gray-500 mt-1">Category: {data.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
