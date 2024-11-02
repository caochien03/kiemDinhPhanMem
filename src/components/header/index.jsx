import "./header.scss";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-left">
                    <div className="header-logo">Quality Assurance</div>
                    <div className="header-search">
                        <input
                            className="input-search"
                            type={"text"}
                            placeholder="Tìm kiếm"
                        />
                    </div>
                </div>
                <div className="header-right">
                    <div className="account">Tên tài khoản</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
