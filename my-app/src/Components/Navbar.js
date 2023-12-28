// import React from 'react';
// import Logo from "../asset/Logo.png";
// import "./NavbarStyles.css";


// const Navbar = () => {
//   return (
//     <div>
//         <div className='navbar'>
//        <input type='checkbox' name='' id='chk1'/>
//        <div  >
//         <img className='logo' src={Logo} alt='Logo'></img>
//        </div>
//        <div className='Search-box'>
//         <form action=''>
//             <input type='text' name='search' id='srch' placeholder='Search'> 
//             </input><button><i class="fa-solid fa-magnifying-glass"></i></button> 
//         </form>
//        </div>
//        <ul>
//         <li><a href='#'>Home</a></li>
//         <li><a href='#'>About</a></li>
//         <li><a href='#'>Login</a></li>
//        </ul>
//     </div>
//     </div>
//   )
// }

// export default Navbar



import React from 'react';
import "./NavbarStyles.css";
import Logo from "../asset/Logo.png";


const Navbar = () => {
  return (
    <div>
    
    <div className='navbar'>
        <img className='logo' src={Logo} alt='Logo'></img>
       <div className='name'> Genei Facility management
       </div>
      
       <div className='Search-box'>
        <form action=''>
            <input type='text' name='search' id='srch' placeholder='Search'> 
            </input><button><i class="fa-solid fa-magnifying-glass"></i></button> 
        </form>
       </div>
<nav>
	<ul>
    <li><a href='#'>Home</a></li>
    <li><a href='#'>About</a></li>
    <li><a href='#'>Login</a></li>
  </ul>
	
	<div class="animation start-home"></div>
</nav>
    </div>
    </div>
  )
}

export default Navbar
