const Error404 = () => {
    return (<>
        <div className="error404" style={{
            width: "100 %",
            minHeight: "100vh",
            backgroundColor: " #263a49",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: " 50px",
        }}>
            <h1 style={{
                fontSize: "30vh",
                fontWeight: 700,
                backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/fond.jpg"}) `,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundClip: "text",
                webkitBackgroundClip: "text",
                color: "transparent",
            }}
            >Error 404 </h1>



            <h2
                style={{
                    fontSize: '13vh',
                    fontWeight: 700,
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/fond.jpg"})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundClip: "text",
                    webkitBackgroundClip: "text",
                    color: "transparent",
                }}
            >Page not found</h2>
        </div >

    </>)
};

export default Error404; 