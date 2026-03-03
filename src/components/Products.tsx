function Products() {
    const products = ["Excavators", "Cranes", "Road Machinery", "Mining Equipment",
        "Wind Machinery", "Aerial Work Platforms", "Foundation Solutions"]

    return (
        <article className="flex flex-wrap justify-center px-[15%] mt-12 gap-8">
            <h2 className="text-orange-500 font-titl basis-full text-4xl text-center">Our Services</h2>
            {products.map((prod) => (
                <div className="rounded-lg px-4 w-64
                    hover:scale-120 transition-transform duration-200 ease-in-out
                    text-white font-semibold">
                    <h2 className="text-4xl font-titl">{prod}</h2>
                    <hr className="my-2 w-1/3 text-orange-500 border-t-4" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque deleniti harum</p>
                </div>
            ))}
        </article>
    )
}

export default Products;
