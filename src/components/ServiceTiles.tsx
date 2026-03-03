function ServiceTiles() {
    const products = ["Excavators", "Cranes", "Road Machinery", "Mining Equipment",
        "Wind Machinery", "Aerial Work Platforms", "Foundation Solutions", "Trucks"]

    return (
        <article className="flex flex-wrap justify-center my-20 gap-8">
            <h2 className="text-gray-300 font-titl basis-1/2 text-4xl">
                Our <span className="text-orange-500"> Curated</span><br/>Services</h2>
            <p className="basis-1/3 text-white text-xs text-right self-end">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eveniet facere itaque labore natus officia suscipit velit. Assumenda cumque ipsa nisi pariatur repudiandae! Aliquid, doloremque eligendi est hic illum perferendis.</p>
            {products.map((prod) => (
                <div className="rounded-lg px-4 basis-[27.5%] bg-orange-950/50 p-4
                    hover:bg-orange-950 border-double border-4 border-orange-500 min-h-48
                    hover:scale-120 transition-all duration-200 ease-in-out
                    text-white font-semibold">
                    <h2 className="text-4xl font-titl">{prod}</h2>
                    <hr className="my-2 w-1/5 text-orange-500 border-t-4"/>
                    <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque
                        deleniti harum Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    {/*<p className="font-normal mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>*/}
                </div>
            ))}
        </article>
    )
}

export default ServiceTiles;
