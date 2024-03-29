import PropTypes from "prop-types";

const Header = ({title}) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{title}</a>
            </div>
        </nav>
    )
}

export default Header

Header.propTypes = {
    title: PropTypes.string.isRequired
}