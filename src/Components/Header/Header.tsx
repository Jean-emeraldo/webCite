import './Header.css'
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">
                <img src="./ChatGPT Image 4 mai 2025, 19_36_13.png" alt="1" width={100} />
                <div className="h-menu">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className="button">
                        <a href="">Contact</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;
