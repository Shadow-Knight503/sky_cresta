import GreyBeams from "../assets/GreyBeamsBg.jpg"
import { useInView } from "react-intersection-observer";

function About() {
    const divStyle: React.CSSProperties = {
        backgroundImage: `url(${GreyBeams})`,
        backgroundSize: 'cover', // Optional: scale image to cover the entire div
        width: '100%',
    };

    const countData = [
        {data: '[--num:50]', name: "Projects"},
        {data: '[--num:900]', name: "Contracts"},
        {data: '[--num:1200]', name: "Engineers"},
        {data: '[--num:15]', name: "Publications"},
    ]

    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.2,    // Trigger when 10% of the element is visible
    });

    return (
        <article className="text-text font-prim px-24">
            <section className="flex min-h-[35vh] px-48 mt-4 gap-8 bg-accn/30 rounded-b-2xl">
                <div className="bg-left max-w-36 rounded-l-2xl" style={divStyle}></div>
                <h3 className="grow text-4xl text-center pt-12">Assuring
                    <span className="text-prim"> Excellence</span><br/>
                    every step of way
                    <blockquote className="italic mt-8 px-12 text-lg">We are a South India based integrated infrastructure and engineering company delivering end-to-end solutions across machinery, civil construction, and interior & exterior development. With strong technical expertise and structured project management systems, we serve residential, commercial, and industrial sectors across South India.
                    </blockquote>
                </h3>
                <div className="bg-right max-w-36 rounded-r-2xl" style={divStyle}></div>
            </section>
            <section className="mt-18 text-justify">
                <h2 className="text-3xl font-titl mb-2">Our Chairman's message</h2>
                <h3 className="text-2xl text-prim">"At Skycresta Solutions, we believe infrastructure development plays a vital role in shaping economic growth and modern communities.
                <br/><br/>Our mission is to build a professionally managed, performance-driven infrastructure company delivering reliable machinery solutions, high-quality civil construction, and refined interior & exterior environments across South India.
                <br/><br/>With a structured operational approach and a commitment to excellence, we strive to create long-term value for our clients and partners.
                <br/>We look forward to building enduring relationships and contributing to the region’s infrastructure growth."
                <br/><br/>[Chairman Name]
                <br/>Chairman & Managing Director
                </h3>
                <div className="flex justify-center text-center gap-32 mt-8">
                    {countData.map((count, ind) => (
                        <span ref={ref} key={ind}
                            className={`flex tabular-nums text-5xl relative 
                                font-bold mb-2 transition-[_--num] duration-[3s] 
                                ease-out [counter-set:_num_var(--num)] text-prim 
                                supports-[counter-set]:before:content-[counter(num)] 
                                ${inView ? `${count.data}` : '[--num:0]'}`}>
                            <span className="supports-[counter-set]:sr-only">0</span>+
                            <span className="absolute bottom-[-70%] text-lg text-text font-normal mb-2">
                                {count.name}</span>
                      </span>
                    ))}
                </div>
            </section>
        </article>
    )
}

export default About
