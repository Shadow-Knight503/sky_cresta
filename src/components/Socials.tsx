import {FacebookEmbed, InstagramEmbed} from "react-social-media-embed";

function Socials() {
    const instaLnks = [
        "https://www.instagram.com/world_record_egg/p/BsOGulcndj-/",
        "https://www.instagram.com/world_record_egg/p/BsOGulcndj-/",
        "https://www.instagram.com/world_record_egg/p/BsOGulcndj-/",
        "https://www.instagram.com/world_record_egg/p/BsOGulcndj-/",
        "https://www.instagram.com/world_record_egg/p/BsOGulcndj-/",
        "https://www.instagram.com/world_record_egg/p/BsOGulcndj-/",
        "https://www.instagram.com/world_record_egg/p/BsOGulcndj-/"
    ]
    const fbLnks = [
        "https://www.facebook.com/photo/?fbid=1211613484474273&set=pcb.1211615921140696&__cft__[0]=AZbQDVXu9A6-F-ZxbHJWAp0x49ctAMngdTXJkr21uS_SlRLLo---bsqoR_q9Y-gVDB1Z-pICck-H9Hk9nQcVNfeNp3GAsTPoLYQaeg5fcbHAT-OHmzIxvXzaz_fpXvxDhEndoOArfTFFCEFsiZCu6vkU6EUibfOAa25VXWNUm6uceLyMba-xx19pM8IFJOOccLM&__tn__=*b0H-R",
        "https://www.facebook.com/photo/?fbid=1201607582141530&set=pcb.1201607662141522&__cft__[0]=AZZkzcbPWoOTNdKcECiEc8kpZnA9b91rfpBTmWVQcGe1l7KqbIFfDPQXq2FhDE9rkcwb041G3bcNS8nlYRkD21DUD2OJDBbiGqQkQ65JLw5rhfxFIwvt78GZBorx3LwBnWd6mFAGsPA-G-m_P5XIdl_c0d8ydwZJGLui_MbTbaJuSoDn4BqnTN6vMKiT_x4EbmY&__tn__=*b1H-R",
        "https://www.facebook.com/photo/?fbid=1199780362324252&set=a.549265560709072&__cft__[0]=AZaPOlrolFpg2OOKpb042CuHWNvOAQVATtKf76uO1bZkoa0hEjwPfzDoeALpjxq8hJLPlPYjpSb_QxN6zYf_EOTlA32Z-NW9QjBI3J6dCCj3ymEqEIWPO9ImofCMR9u4DUI8eRM3hJzVITd20DzS1bg7Jot83w-6wt7b6ECf8LRktrcpsQB2MtrHLyVk9LtwsZ0&__tn__=EH-R",
        "https://www.facebook.com/photo/?fbid=1211613484474273&set=pcb.1211615921140696&__cft__[0]=AZbQDVXu9A6-F-ZxbHJWAp0x49ctAMngdTXJkr21uS_SlRLLo---bsqoR_q9Y-gVDB1Z-pICck-H9Hk9nQcVNfeNp3GAsTPoLYQaeg5fcbHAT-OHmzIxvXzaz_fpXvxDhEndoOArfTFFCEFsiZCu6vkU6EUibfOAa25VXWNUm6uceLyMba-xx19pM8IFJOOccLM&__tn__=*b0H-R",
        "https://www.facebook.com/photo/?fbid=1201607582141530&set=pcb.1201607662141522&__cft__[0]=AZZkzcbPWoOTNdKcECiEc8kpZnA9b91rfpBTmWVQcGe1l7KqbIFfDPQXq2FhDE9rkcwb041G3bcNS8nlYRkD21DUD2OJDBbiGqQkQ65JLw5rhfxFIwvt78GZBorx3LwBnWd6mFAGsPA-G-m_P5XIdl_c0d8ydwZJGLui_MbTbaJuSoDn4BqnTN6vMKiT_x4EbmY&__tn__=*b1H-R",
        "https://www.facebook.com/photo/?fbid=1199780362324252&set=a.549265560709072&__cft__[0]=AZaPOlrolFpg2OOKpb042CuHWNvOAQVATtKf76uO1bZkoa0hEjwPfzDoeALpjxq8hJLPlPYjpSb_QxN6zYf_EOTlA32Z-NW9QjBI3J6dCCj3ymEqEIWPO9ImofCMR9u4DUI8eRM3hJzVITd20DzS1bg7Jot83w-6wt7b6ECf8LRktrcpsQB2MtrHLyVk9LtwsZ0&__tn__=EH-R",
    ]

    return (
        <article className="px-24 mt-8">
            <h3 className="text-2xl text-orange-500 font-titl basis-full mb-2">Instagram</h3>
            <section className="flex flex-nowrap gap-4 overflow-x-scroll">
                {instaLnks.map((instaLnk) => (
                    <InstagramEmbed url={instaLnk} className="shrink-0"/>
                ))}
            </section>
            <h3 className="text-2xl text-orange-500 font-titl basis-full mb-2 mt-4">Facebook</h3>
            <section className="flex flex-nowrap gap-4 overflow-x-scroll">
                {fbLnks.map((fbLnk) => (
                    <FacebookEmbed url={fbLnk} className="shrink-0"/>
                ))}
            </section>
        </article>
    )
}

export default Socials;
