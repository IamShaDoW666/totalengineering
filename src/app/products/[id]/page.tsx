import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductGallery } from "./components/product-gallery";
import { api } from "@/trpc/server";
import type { Graph } from "schema-dts";
import { headers } from "next/headers";
import { faker } from "@faker-js/faker";



export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await api.product.getById({ id: parseInt(params.id) });
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  return {
    title: product.name,
    description: product.description,
    metadataBase: new URL ("https://totalengg.in"),
    alternates: {
    canonical: '/',
    languages: {
        'en-US': '/en-US', 
      },
    },
    openGraph:{
    title:product.name,
    url:`${process.env.BASE_URL}`,
    description: product?.description ?? '',
    siteName:"https://totalengg.in",
    images:[
    {
     url:`${process.env.BASE_URL}`,
     width:"800",
     height:"800",
     }    
     ],
     locale: 'en_US',
     type: 'website',
    },
    twitter:{
    title:product.name,
    description:product?.description ?? '',
    site:"https://totalengg.in",
    images:[
    {    
    url:`${process.env.BASE_URL}$`,
    width:"800",
    height:"800",
    }
      
    ]
    }
    
  };

}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // const router = useRouter();
  const product = await api.product.getById({ id: parseInt(params.id) });
  const pathName = headers().get('x-next-pathname')!  
  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${process.env.BASE_URL}/#organization`,
        name: "Total Engineering",
      },
      {
        "@type": "ImageObject",
        "@id": `${process.env.BASE_URL}/#ImageObject`,
        url: `${process.env.BASE_URL}/${pathName}`,
        image: product?.images[0]?.path,

      },


      {
        "@type": "WebSite",
        "@id": `${process.env.BASE_URL}/#website`,
        url: `${process.env.BASE_URL}`,
        publisher: { "@id": `${process.env.BASE_URL}/#website` },
        inLanguage: "en-GB",
      },
      {
        "@type": "Product",
        "@id": `${process.env.BASE_URL}${pathName}`,
        url: `${process.env.BASE_URL}${pathName}`,
        name: product?.name,
        description: product?.description ?? '',
        image: product?.images[0]?.path,
        review: {
          "@type": "Review",
          name: product?.name + " Review",
          author: {
            "@type": "Person",
            name: faker.person.fullName()
          }
        }
      }
    ],
  };
  if (!product) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto mt-24 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ProductGallery images={product.images} />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              {/* <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p> */}
            </div>
            <Badge>{product.category?.name}</Badge>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">★★★★☆</span>
              {/* <span>{product.rating} out of 5</span> */}
            </div>
            {/* <div>
            <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div> */}
            {/* <AddToCartButton productId={product.id} stock={product.stock} /> */}
          </div>
        </div>
        <Separator className="my-8" />
        {/* <ProductReviews productId={product.id} /> */}
      </div>
    </>
  );
}
