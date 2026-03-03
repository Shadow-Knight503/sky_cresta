import GreyBeams from "../assets/GreyBeamsBg.jpg"
import { useInView } from "react-intersection-observer";

function About() {
    const divStyle: React.CSSProperties = {
        backgroundImage: `url(${GreyBeams})`,
        backgroundSize: 'cover', // Optional: scale image to cover the entire div
        width: '100%',
    };

    const countData = [
        {data: '[--num:40]', name: "Projects"},
        {data: '[--num:900]', name: "Contracts"},
        {data: '[--num:1200]', name: "Engineers"},
        {data: '[--num:15]', name: "Publications"},
    ]

    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.1,    // Trigger when 10% of the element is visible
    });

    return (
        <article className="text-white font-prim px-24">
            <section className="flex min-h-[35vh] px-48 mt-4 gap-8">
                <div className="bg-left max-w-36 rounded-l-2xl" style={divStyle}></div>
                <h3 className="grow text-4xl text-center pt-12">Assuring
                    <span className="text-orange-500"> Excellence</span><br/>
                    every step of way
                    <blockquote className="italic mt-8 px-12 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet at commodi doloribus dolorum, eius fugit incidunt ipsam molestias, nam non nulla omnis placeat quisquam tenetur ut vero vitae, voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo impedit, voluptatem.
                    </blockquote>
                </h3>
                <div className="bg-right max-w-36 rounded-r-2xl" style={divStyle}></div>
            </section>
            <section className="mt-18 text-center">
                <h3 className="text-2xl text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dolorem explicabo iste saepe! Consectetur expedita, facere fugit molestias, mollitia necessitatibus perferendis quae quasi qui quia, quo tempora tempore vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eius eos illo, incidunt minima nam possimus quasi sit vel velit. Consectetur deleniti iusto, minima natus optio perspiciatis qui quis veritatis!
                </h3>
                <div className="flex justify-center text-center gap-32 mt-8">
                    {countData.map((count, ind) => (
                        <span ref={ref} key={ind}
                            className={`flex tabular-nums text-5xl relative 
                                font-extrabold mb-2 transition-[_--num] duration-[3s] 
                                ease-out [counter-set:_num_var(--num)] text-orange-500 
                                supports-[counter-set]:before:content-[counter(num)] ${
                                inView ? `${count.data}` : '[--num:0]'
                            }`}>
                            <span className="supports-[counter-set]:sr-only">40</span>+
                            <span className="absolute bottom-[-70%] text-lg text-white font-normal mb-2">
                                {count.name}</span>
                      </span>
                    ))}
                </div>
            </section>
        </article>
    )
}

export default About
