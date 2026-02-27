function FAQs() {
    const faqs = [
        {que: "Where are we located ?", ans: "Somewhere, anywhere, everywhere"},
        {que: "Where are we located ?", ans: "Somewhere, anywhere, everywhere"},
        {que: "Where are we located ?", ans: "Somewhere, anywhere, everywhere"},
        {que: "Where are we located ?", ans: "Somewhere, anywhere, everywhere"},
    ]

    return (
        <section className="px-24 mt-4 text-4xl">
            <h2 className="font-titl text-orange-500 mb-6">FAQs</h2>
            <div className="justify-center">
                {faqs.map((faq) => (
                    <div className="group rounded-lg px-4 py-2 text-orange-500 text-xl bg-gray-900
                        h-[75%] my-2 mx-12 mb-2"
                        onClick={(e) => e.currentTarget.classList.toggle("active")}>
                        {faq.que}
                        <hr className="hidden group-[.active]:block text-white mt-2 mb-1 w-12" />
                        <p className="hidden group-[.active]:block text-white">{faq.ans}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQs;
