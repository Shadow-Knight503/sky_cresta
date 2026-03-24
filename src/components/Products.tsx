import { CubeTransparentIcon, CpuChipIcon, HomeModernIcon, WrenchScrewdriverIcon,
    TruckIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid"

function Products() {
    const divisions = [
        {division: 'Machinery Division (South India)',
            desc: "Reliable equipment solutions backed by responsive after-sales support.",
            content: [{ttl: "Services Include:",
                list: ["Machinery Rental Services in South India", "Construction Equipment Sales",
                    "Preventive Maintenance Programs", "Emergency Breakdown Support", "Spare Parts Supply",
                    "Annual Maintenance Contracts (AMC)", "Installation & Commissioning", "Operator Training"],
                    icons: [3, 2, 4, 1, 5, 4, 1, 3]
            }]
        }, {division: 'Civil Engineering Division (Tamil Nadu)',
            desc: "Professional civil construction services with structured execution.",
            content: [{ttl: "Residential Projects", list: ["Villas & Independent Houses", "Apartments",
                    "Gated Community Development", "Layout Infrastructure Works"], icons: [2, 4, 3, 1]},
                {ttl: "Commercial Projects", list: ["Office Buildings", "Retail & Commercial Spaces",
                    "Warehouses", "Institutional Buildings"], icons: [5, 2, 4, 3]},
                {ttl: "Turnkey & Development Projects",
                    list: ["Landowner Partnerships", "End-to-End Project Execution"], icons: [4, 3]},
            ]
        }, {division: 'Interior & Exterior Solutions Division (South India)',
            desc: "Design-driven interior and exterior execution for residential and commercial spaces.",
            content: [{ttl: "Residential Interiors", list: ["Modular Kitchens", "Living & Bedroom Design",
                    "False Ceiling & Lighting", "Custom Furniture", "Wardrobes & Storage Solutions",
                    "Bathroom & Vanity Design", "Balcony & Terrace Enhancement", "Smart Home Integration"],
                    icons: [3, 2, 4, 1, 5, 3, 2, 4]
            }, {ttl: "Commercial Interiors", list: ["Office Fit-outs", "Retail & Showroom Interiors",
                    "Restaurant & Café Interiors", "Co-working Space Design", "Reception & Lobby Design"],
                    icons: [1, 4, 5, 2, 3]
            }, {ttl: "Exterior & Industrial Works", list: ["Facade & Elevation Design",
                    "Structural Fabrication", "Exterior Cladding", "Landscape & Garden Development",
                    "Architectural Lighting", "Waterproofing Solutions"], icons: [4, 3, 4, 1, 5, 4]
            }]
        }
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
                        <div className="flex flex-wrap hover:bg-prim/10 my-2 p-2">
                            <h3 className="basis-full pb-2">{content.ttl}</h3>
                            <div className="flex flex-wrap gap-2">
                                {content.list.map((itm, inx) => (
                                    <p key={inx} className="flex items-center gap-2 border-2 border-prim
                                        p-2 rounded-lg text-lg">
                                        {content.icons[inx] === 1 ?
                                                <CubeTransparentIcon className="text-prim size-6" />:
                                            content.icons[inx] === 2 ?
                                                <CpuChipIcon className="text-prim size-6" />:
                                            content.icons[inx] === 3 ?
                                                <HomeModernIcon className="text-prim size-6" />:
                                            content.icons[inx] === 4 ?
                                                <WrenchScrewdriverIcon className="text-prim size-6" />:
                                            content.icons[inx] === 5 ?
                                                <TruckIcon className="text-prim size-6" />:
                                            <Square3Stack3DIcon className="text-prim size-6" />
                                        }
                                        {itm}</p>
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