const Form = ({ submit, change }) => {

    const inputs = [
        { id: 1, type: "text", name: "name" },
        { id: 2, type: "text", name: "price" },
        { id: 3, type: "text", name: "id" },
        { id: 4, type: "text", name: "link" },
    ]

    return (
        <form action="" className="w-full flex items-center mt-10 gap-x-4" onSubmit={(e) => submit(e)}>

            {/* inputs */}
            {
                inputs.map((e) => {
                    return (
                        <div key={e.id} className="px-4 py-1 bg-[#f5c0bf] rounded-lg text-black text-lg">
                            <input className="outline-none border-none" type={e.type} name={e.name} placeholder={e.name} onChange={(e) => change(e)} />
                        </div>
                    )
                })
            }

            {/* button submit */}
            <div>
                <button className="px-4 py-1 bg-[#f5c0bf] rounded-lg text-lg text-black" type="submit">submit</button>
            </div>
        </form>
    );
}

export default Form;