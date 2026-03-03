import Project from "./Project.tsx";

function Gallery() {
    const projs = [
        {nme: "RedHook", clt: "Lot Of Books Inc", dur: "12 months",
            gal: [
                "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg",
                "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
                "https://images.pexels.com/photos/1451416/pexels-photo-1451416.jpeg",
                "https://images.pexels.com/photos/638487/pexels-photo-638487.jpeg",
                "https://images.pexels.com/photos/4276427/pexels-photo-4276427.jpeg"
            ]
        }, {nme: "BlueSink", clt: "Lot Of Games Inc", dur: "18 months",
            gal: [
                "https://images.pexels.com/photos/1451416/pexels-photo-1451416.jpeg",
                "https://images.pexels.com/photos/638487/pexels-photo-638487.jpeg",
                "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg",
            ]
        } , {nme: "GreenSlurp", clt: "Lot Of Movies Inc", dur: "4 months",
            gal: [
                "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg",
                "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg",
                "https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg",
                "https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg",
                "https://images.pexels.com/photos/1451416/pexels-photo-1451416.jpeg",
                "https://images.pexels.com/photos/638487/pexels-photo-638487.jpeg",
            ]
        }
    ]

    return (
        <article className="text-white px-24 mb-12">
            <section className="flex my-24">
                <h2 className="text-4xl grow">A <span className="text-orange-500"> Glimpse </span>
                    into <br/>our work</h2>
                <p className="text-sm basis-1/3 text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis dignissimos dolore dolorem dolores dolorum ducimus eaque fugiat, necessitatibus nemo quaerat
                    quidem quod ullam velit voluptatum. Ratione!</p>
            </section>
            {projs.map((proj, pInd) => (
                <Project key={pInd} ind={pInd}
                         nme={proj.nme} clt={proj.clt} dur={proj.dur} gal={proj.gal} />
            ))}
        </article>
    )
}

export default Gallery