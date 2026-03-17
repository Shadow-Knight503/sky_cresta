import VisionImg from "../assets/WhiteBlueprints.jpg"
import MissionImg from "../assets/ConstructionWorkers.jpg"

function VisMis() {
    return (
        <article className="px-24 mt-24">
            <section className="flex mt-8 justify-center">
                <h3 className="text-4xl text-prim font-titl basis-1/2 py-2 pl-8 my-auto">Why Choose Skycresta Solutions?
                    <ul className="text-xl text-text font-prim list-disc mt-4 list-disc">
                        <li>South India-Based Infrastructure Expertise</li>
                        <li>Integrated Engineering Solutions Under One Roof</li>
                        <li>Structured Project Planning & Execution</li>
                        <li>Dedicated Service & After-Sales Team</li>
                        <li>Transparent Communication & Timely Delivery</li>
                        <li>Strong Vendor & Supply Chain Network Across South India</li>
                    </ul>
                </h3>
                <img className="basis-1/3 w-12 rounded-2xl" src={VisionImg} alt="Vision Img"/>
            </section>
            <section className="flex mt-8 justify-center">
                <img className="basis-1/3 w-12 rounded-2xl" src={MissionImg} alt="Mission Img"/>
                <h3 className="text-4xl text-prim font-titl basis-1/2 py-2 pl-16 my-auto">Operational Strength
                    <ul className="text-xl text-text font-prim list-decimal list-outside list-disc mt-4">
                        <li>Skilled Engineering & Technical Team</li>
                        <li>Modern Equipment Fleet</li>
                        <li>Structured Project Management Systems</li>
                        <li>Quality Control & Monitoring Processes</li>
                        <li>Safety & Compliance Standards</li>
                    </ul>
                </h3>
            </section>
        </article>
    )
}

export default VisMis
