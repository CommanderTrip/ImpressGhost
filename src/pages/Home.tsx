import placeholder from "../assets/placeholder2.jpg";    // Placeholder image

const Home = () => {
    const handleClick = async () => {
        alert("HI");
    }

    return (
        <>
            <div className={"banner"}>
                <img src={placeholder} alt={"placeholder"}/>
            </div>
            <div className={"home-text"}>
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Id leo in vitae turpis massa sed elementum tempus egestas. Quisque egestas
                    diam in arcu cursus. Mattis rhoncus urna neque viverra justo nec. Proin fermentum leo vel orci. Nisl
                    pretium fusce id velit ut tortor pretium viverra suspendisse. Ullamcorper velit sed ullamcorper
                    morbi tincidunt ornare massa eget. Facilisis volutpat est velit egestas dui id. Lectus proin nibh
                    nisl condimentum id venenatis a condimentum vitae. Suscipit tellus mauris a diam maecenas sed enim
                    ut. Amet consectetur adipiscing elit ut aliquam. Iaculis urna id volutpat lacus laoreet non. Id
                    ornare arcu odio ut. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.<br/><br/>
                    Sed risus ultricies tristique nulla aliquet enim <a href={"/signup"}>tortor</a> at auctor. Integer
                    vitae justo eget magna
                    fermentum. Egestas sed sed risus pretium. Volutpat lacus laoreet non curabitur gravida arcu ac.
                    Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Adipiscing diam donec adipiscing
                    tristique risus nec. Neque sodales ut etiam sit amet nisl. Augue ut lectus arcu bibendum at varius
                    vel pharetra. Id venenatis a condimentum vitae sapien. Convallis posuere morbi leo urna molestie.
                    Senectus et netus et malesuada fames ac turpis. Lacus laoreet non curabitur gravida arcu ac. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.</p>
            </div>
            <button onClick={handleClick}>ClickME!</button>
        </>
    );
}

export default Home;