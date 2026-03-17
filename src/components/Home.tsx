import ContrBanner from "../assets/BulldozerBanner.jpg"
import CraneImg1 from "../assets/Crane1-removebg.png"
import CraneImg2 from "../assets/Crane2-removebg.png"
import CraneImg3 from "../assets/Crane3-removebg.png"
import GearImg from "../assets/Gear.svg"
import {Link} from "react-router-dom";

function Home() {
    const bannerStyle: React.CSSProperties = {
        backgroundImage: `url(${ContrBanner})`,
        backgroundSize: 'cover', // Optional: scale image to cover the entire div
        width: '100%',
    };

    return (
        <section className="text-text">
            <div className="relative bg-position-[center_top_63vh] h-[40vh] w-screen"
                style={bannerStyle}>
                <h2 className="absolute top-1/8 left-10 text-6xl font-titl text-slate-950">
                    Integrated <span className="text-prim">Infrastructure</span> &
                    <p className=""><span className="text-prim">Engineering</span>
                        {' '}Company in Chennai</p>
                    <p className="text-2xl w-1/3 mt-8">Delivering machinery solutions, civil construction, and
                        interior & exterior development with structured execution and professional excellence.</p>
                </h2>
                <div className="absolute bottom-4 right-4">
                    <button className="bg-prim rounded-xl p-3 text-accn font-semibold ml-4">
                        Request a Quote</button>
                    <button className="bg-prim rounded-xl p-3 text-accn font-semibold ml-4">
                        Contact Our Team</button>
                </div>
            </div>
            <article className="flex flex-wrap px-12 mt-8 font-prim">
                <div className="relative basis-1/2">
                    <img className="peer z-20 absolute -left-8 h-[40%] hover:scale-120 tranisition-size duration-300"
                         src={CraneImg1} alt="Crane Image"/>
                    <img className="absolute left-0 h-[50%] peer-hover:animate-gears" src={GearImg}
                         alt="Gear Image"/>
                    <img className="peer z-20 absolute left-48 top-12 h-[70%] hover:scale-120 tranisition-size duration-300"
                         src={CraneImg2} alt="Crane Image"/>
                    <img className="absolute left-48 top-12 h-[80%] peer-hover:animate-gears" src={GearImg}
                         alt="Gear Image"/>
                    <img className="peer z-20 absolute right-40 h-[30%] hover:scale-120 tranisition-size duration-300"
                         src={CraneImg3} alt="Crane Image"/>
                    <img className="absolute right-32 h-[35%] peer-hover:animate-gears" src={GearImg}
                         alt="Gear Image"/>
                </div>
                <p className="relative basis-1/2 px-8 text-lg text-justify">
                    <h3 className="text-3xl text-prim font-titl mb-2">About Skycresta</h3>
                    Skycresta Solutions is a South India based integrated infrastructure and engineering company delivering end-to-end solutions across machinery, civil construction, and interior & exterior development.
                    <br/>With strong technical expertise and structured project management systems, we serve residential, commercial, and industrial sectors across South India.
                    <br/>From equipment supply and engineering execution to finishing and long-term maintenance support, we provide complete lifecycle infrastructure solutions under one platform.
                    <br/><br/><span className="text-2xl">We are not only contractors —
                    <br/>We are also Infrastructure Partners.</span>
                    <Link to={"/about"}>
                        <button className="block mt-4 p-3 rounded-lg bg-prim text-accn
                            hover:bg-accn hover:text-prim transition-colors">Know more</button>
                    </Link>
                </p>
            </article>
        </section>
    )
}

export default Home;
