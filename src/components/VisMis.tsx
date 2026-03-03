import VisionImg from "../assets/WhiteBlueprints.jpg"
import MissionImg from "../assets/ConstructionWorkers.jpg"

function VisMis() {
    return (
        <article className="px-24 mt-24">
            <section className="flex mt-8 justify-center">
                <h3 className="text-3xl text-orange-500 basis-1/2 py-2 pr-8">Our Vision
                    <p className="text-lg text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Architecto, aspernatur cumque dicta dolore dolorem eius et ipsam magnam mollitia officiis
                        perspiciatis quidem ratione sapiente tempora vel vero voluptas voluptate voluptatum! Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <ul className="text-lg text-white list-disc list-inside mt-4">
                        <li>Stuff to do</li>
                        <li>More stuff to do</li>
                        <li>Some more stuff to do</li>
                        <li>Last few stuff to do</li>
                    </ul>
                </h3>
                <img className="basis-1/3 w-12 rounded-2xl" src={VisionImg} alt="Vision Img"/>
            </section>
            <section className="flex mt-8 justify-center">
                <img className="basis-1/3 w-12 rounded-2xl" src={MissionImg} alt="Mission Img"/>
                <h3 className="text-3xl text-orange-500 basis-1/2 py-2 pl-8">Our Mission
                    <p className="text-lg text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Architecto, aspernatur cumque dicta dolore dolorem eius et ipsam magnam mollitia officiis
                        perspiciatis quidem ratione sapiente tempora vel vero voluptas voluptate voluptatum! Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <ul className="text-lg text-white list-decimal list-inside mt-4">
                        <li>Stuff to do</li>
                        <li>More stuff to do</li>
                        <li>Some more stuff to do</li>
                        <li>Last few stuff to do</li>
                    </ul>
                </h3>
            </section>
        </article>
    )
}

export default VisMis
