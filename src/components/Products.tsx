function Products() {
    const divisions = [
        {division: 'Machinery Division (South India)',
            desc: "Reliable equipment solutions backed by responsive after-sales support.",
            content: [{ttl: "Services Include:",
                list: ["Machinery Rental Services in South India", "Construction Equipment Sales",
                    "Preventive Maintenance Programs", "Emergency Breakdown Support", "Spare Parts Supply",
                    "Annual Maintenance Contracts (AMC)", "Installation & Commissioning", "Operator Training"]}
            ]
        }, {division: 'Civil Engineering Division (Tamil Nadu)',
            desc: "Professional civil construction services with structured execution.",
            content: [{ttl: "Residential Projects", list: ["Villas & Independent Houses", "Apartments",
                    "Gated Community Development", "Layout Infrastructure Works"]},
                {ttl: "Commercial Projects", list: ["Office Buildings", "Retail & Commercial Spaces",
                    "Warehouses", "Institutional Buildings"]},
                {ttl: "Turnkey & Development Projects", list: ["Landowner Partnerships", "End-to-End Project Execution"]},
            ]
        }, {division: 'Interior & Exterior Solutions Division (South India)',
            desc: "Design-driven interior and exterior execution for residential and commercial spaces.",
            content: [{ttl: "Residential Interiors", list: ["Modular Kitchens", "Living & Bedroom Design",
                    "False Ceiling & Lighting", "Custom Furniture", "Wardrobes & Storage Solutions",
                    "Bathroom & Vanity Design", "Balcony & Terrace Enhancement", "Smart Home Integration"]},
                {ttl: "Commercial Interiors", list: ["Office Fit-outs", "Retail & Showroom Interiors",
                    "Restaurant & Café Interiors", "Co-working Space Design", "Reception & Lobby Design"]},
                {ttl: "Exterior & Industrial Works", list: ["Facade & Elevation Design",
                    "Structural Fabrication", "Exterior Cladding", "Landscape & Garden Development",
                    "Architectural Lighting", "Waterproofing Solutions"]},
            ]
        },
    ]

    return (
        <article className="justify-center px-2 md:px-[5rem] xl:px-[15rem] mt-12 gap-8">
            <h2 className="text-prim font-titl basis-full text-4xl text-center">Our Core Divisions</h2>
            {divisions.map((division) => (
                <div className="rounded-lg px-4 w-64 w-full my-4
                    hover:scale-105 transition-transform duration-200 ease-in-out font-semibold">
                    <h2 className="basis-2/5 text-2xl font-titl inline">{division.division}</h2> -
                    <span className="basis-3/5"> {division.desc}</span>
                    <hr className="w-1/9 text-prim border-t-4 basis-full"/>
                    {division.content.map((content) => (
                        <div className="flex hover:bg-prim/10 my-2 p-2">
                            <h3 className="basis-1/3">{content.ttl}</h3>
                            <div className="basis-2/3 flex flex-wrap gap-2 text-center">
                                {content.list.map((itm) => (
                                    <p className="bg-prim text-white px-2 rounded-lg grow-1">{itm}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </article>
    )
}

export default Products;
