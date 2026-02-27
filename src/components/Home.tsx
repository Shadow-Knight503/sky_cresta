import ContrBanner from "../assets/BulldozerBanner.jpg"
import CraneImg1 from "../assets/Crane1-removebg.png"
import CraneImg2 from "../assets/Crane2-removebg.png"
import CraneImg3 from "../assets/Crane3-removebg.png"
import GearImg from "../assets/Gear.svg"

function Home() {
    const bannerStyle: React.CSSProperties = {
        backgroundImage: `url(${ContrBanner})`,
        backgroundSize: 'cover', // Optional: scale image to cover the entire div
        width: '100%',
    };

    return (
        <section className="">
            <div className="relative bg-position-[center_top_63vh] h-[40vh] w-screen"
                style={bannerStyle}>
                <h2 className="absolute top-1/8 left-10 text-6xl font-titl text-slate-950">
                    <span className="text-orange-700">Heavy</span> machinery
                    <p className="">electrical <span className="text-orange-700">repairs</span>,
                        <br/>installs and
                        <span className="text-orange-700"> servicing</span></p>
                </h2>
            </div>
            <article className="flex flex-wrap px-12 mt-8 font-prim">
                <div className="relative basis-1/2">
                    <img className="absolute left-0 h-[50%] invert" src={GearImg}
                         alt="Gear Image"/>
                    <img className="absolute -left-8 h-[40%] z-20" src={CraneImg1}
                         alt="Crane Image"/>
                    <img className="absolute left-48 top-12 h-[80%] invert" src={GearImg}
                         alt="Gear Image"/>
                    <img className="absolute left-48 top-12 h-[70%]" src={CraneImg2}
                         alt="Crane Image" />
                    <img className="absolute right-32 h-[35%] invert" src={GearImg}
                         alt="Gear Image"/>
                    <img className="absolute right-40 h-[30%]" src={CraneImg3}
                         alt="Crane Image" />
                </div>
                <p className="relative basis-1/2 px-8 text-white text-lg">
                    <h3 className="text-3xl text-orange-500 font-titl mb-2">What we do</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus molestias possimus quaerat
                    similique. Ab amet excepturi in velit! Expedita impedit iusto laborum maiores mollitia
                    necessitatibus nisi provident quae quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci cumque dignissimos dolorem earum illo iure mollitia ullam? Eius, eveniet, totam! Dignissimos excepturi iure libero nulla numquam reprehenderit soluta veritatis.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam amet aperiam architecto asperiores commodi dolor exercitationem explicabo incidunt ipsam magni minima nam placeat, sunt ullam unde voluptatem! Mollitia, sapiente.
                    <button className="block mt-12 p-3 rounded-lg bg-amber-500">Know more</button>
                </p>
            </article>
        </section>
    )
}

export default Home;
