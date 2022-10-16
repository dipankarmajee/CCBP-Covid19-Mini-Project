// import {Component} from 'react'
// import {Link} from 'react-router-dom'
// import {ImMenu2} from 'react-icons/im'

// import './index.css'

// class Header extends Component {
//   state = {isToggleActive: false}

//   whenToggleButtonClick = () => {
//     this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
//   }

//   showDropDownMenu = () => (
//     <>
//       <ul className="navBar">
//         <Link to="/" className="link">
//           <li className="item">Home</li>
//         </Link>
//         <Link to="/about" className="link">
//           <li className="item">About</li>
//         </Link>
//         <Link to="/vaccination" className="link">
//           <li className="item">Vaccination</li>
//         </Link>
//       </ul>
//     </>
//   )

//   render() {
//     const {isToggleActive} = this.state

//     return (
//       <>
//         <ul className="header-container">
//           <Link to="/" className="link">
//             <h2 className="logo">COVID19INDIA</h2>
//           </Link>

//           <ul className="navBar">
//             <Link to="/" className="link">
//               <li className="item">Home</li>
//             </Link>
//             <Link to="/about" className="link">
//               <li className="item">About</li>
//             </Link>

//             <Link to="/vaccination" className="link">
//               <li className="item">Vaccination</li>
//             </Link>
//           </ul>
//         </ul>
//         <ul className="mobile-menu">
//           <div className="mobile-header-container">
//             <Link to="/" className="link">
//               <h1 className="logo">
//                 COVID19<span className="india">INDIA</span>
//               </h1>
//             </Link>
//             <button
//               type="button"
//               className="toggle-button"
//               onClick={this.whenToggleButtonClick}
//             >
//               <ImMenu2 className="menuIcon" alt="menu" />
//             </button>
//           </div>
//           <div className="menu">
//             {isToggleActive ? this.showDropDownMenu() : null}
//           </div>
//         </ul>
//       </>
//     )
//   }
// }

// export default Header

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const onClickMenuButton = () => {
    console.log('menu button triggered')
  }
  return (
    <ul className="header">
      <Link to="/" className="nav-link">
        <h3 className="title">
          COVID19<span className="title-span">INDIA</span>
        </h3>
      </Link>
      <div className="menu-button-container">
        <button
          type="button"
          className="menu-button"
          onClick={onClickMenuButton}
        >
          <img
            alt="menu-icon"
            className="menu-icon"
            src="https://res.cloudinary.com/dti4rul7e/image/upload/v1665511606/Covid19%20Dashboard%20-%20React%20JS%20Mini%20Project/menu-icon_pxfsun.svg"
          />
        </button>
      </div>
      <div className="menu-section">
        <li>
          <Link to="/" className="nav-link">
            <p className="menu-content">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/vaccination" className="nav-link">
            <p className="menu-content">Vaccination</p>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <p className="menu-content">About</p>
          </Link>
        </li>
      </div>
    </ul>
  )
}

export default Header
