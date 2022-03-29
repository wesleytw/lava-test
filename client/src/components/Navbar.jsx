import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

import logo from "../../images/logo.png";


const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer hover:text-[#1256bd] ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] shadow">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2 "><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


///opensea clone
// const style = {
//   wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
//   logoContainer: `flex items-center cursor-pointer`,
//   logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
//   searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
//   searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
//   searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
//   headerItems: ` flex items-center justify-end`,
//   headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
//   headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
// }
// const Navbar = () => {
//   return (
//     <div className={style.wrapper}>
      
//       <div className={style.searchBar}>
//         <div className={style.searchIcon}>
//           <AiOutlineSearch />
//         </div>
//         <input
//           className={style.searchInput}
//           placeholder="Search items, collections, and accounts"
//         />
//       </div>
//       <div className={style.headerItems}>

//         <div className={style.headerItem}> Stats </div>
//         <div className={style.headerItem}> Resources </div>
//         <div className={style.headerItem}> Create </div>
//         <div className={style.headerIcon}>
//           <CgProfile />
//         </div>
//         <div className={style.headerIcon}>
//           <MdOutlineAccountBalanceWallet />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Navbar;