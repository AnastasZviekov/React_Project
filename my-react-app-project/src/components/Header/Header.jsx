const Header = () => {
    return (
        <header>
            <a className="logo" href="/">Pizza Day</a>
            <form action="">
                <input type="text" placeholder="Search for the order #"/>
            </form>
            <h1 className="title">
                The best pizza.
                <br/>
                <span>Straight out of the oven, straight to you.</span>
            </h1>
        </header>
    )
}

export default Header;