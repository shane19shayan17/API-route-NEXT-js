const homeData = {
    products: [
        { id: 1, name: "A", price: "120$", link: "" },
        { id: 2, name: "B", price: "1220$", link: "" },
        { id: 3, name: "C", price: "650$", link: "" },
        { id: 4, name: "D", price: "9650$", link: "" },
        { id: 5, name: "E", price: "90$", link: "" },
        { id: 6, name: "F", price: "290$", link: "" },
    ]
}


export const GET = async (request) => {
    try {
        return new Response(
            JSON.stringify(homeData),
            { status: 200, headers: { "Content-Type": "application/json" } }
        )
    }

    catch (error) {
        return new Response(
            JSON.stringify({ "error": error }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        )
    }
}

export const POST = async (request) => {
    try {

        const newdata = await request.json();

        homeData.products.push(newdata);

        return new Response(
            JSON.stringify({ success: true, data: newdata }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        )

    } catch (error) {
        console.log(error.message);

    }
}

export const DELETE = async (request) => {
    try {
        const deleted = await request.json();

        homeData.products = homeData.products.filter(
            (e) => e.name !== deleted.name
        );

        return new Response(
            JSON.stringify({ success: true, data: deleted }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ success: false, error: err.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};

