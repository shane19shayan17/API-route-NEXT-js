const DeletedForm = ({ deleteHandler, deleteChangeHandler }) => {
    return (
        <form action="" className="w-full flex items-center mt-10 gap-x-4" onSubmit={(e) => deleteHandler(e)}>

            {/* inputs */}
            <div className="px-4 py-1 bg-[#f5c0bf] rounded-lg text-black text-lg">
                <input className="outline-none border-none" type="text" name="name" placeholder="name" onChange={(e) => deleteChangeHandler(e)} />
            </div>

            {/* button submit */}
            <div>
                <button className="px-4 py-1 bg-[#f5c0bf] rounded-lg text-lg text-black" type="submit">submit</button>
            </div>
        </form>
    );
}

export default DeletedForm;