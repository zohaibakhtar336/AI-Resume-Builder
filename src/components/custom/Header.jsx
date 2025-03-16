// import React from "react";
// import { Button } from "../ui/button";
// import { Link } from "react-router-dom";
// import { UserButton, useUser } from "@clerk/clerk-react";

// function Header() {
//   const { user, isSignedIn } = useUser();

//   return (
//     <div className="p-2 px-4 flex justify-between items-center shadow-md">

//       {/* Logo */}
//       <Link to="/dashboard">
//         <img
//           src="/logo.svg"
//           alt="logo"
//           className="cursor-pointer"
//           width={90}
//           height={60}
//         />
//       </Link>

//       {/* Navigation Links */}
//       {isSignedIn ? (
//         <div className="flex gap-3 items-center">
//           <Link to={"/dashboard"}>
//             <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
//               Dashboard
//             </Button>
//           </Link>
//           <UserButton />
//         </div>
//       ) : (
//         <Link to="/auth/sign-in">
//           <Button className="bg-blue-600 text-white hover:bg-blue-700">
//             Get Started
//           </Button>
//         </Link>
//       )}
//     </div>
//   );
// }

// export default Header;






import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { isSignedIn } = useUser(); // ✅ `user` variable remove kiya (kyunki use nahi ho raha)

  return (
    <div className="p-2 px-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <Link to="/dashboard">
        <img
          src="/logo.svg"
          alt="logo"
          className="cursor-pointer"
          width={90}
          height={60}
        />
      </Link>

      {/* Navigation Links */}
      {isSignedIn ? (
        <div className="flex gap-4 items-center">  {/* ✅ Thoda aur spacing clean look ke liye */}
          <Link to="/dashboard">
            <Button variant="outline" className="border-gray-400 text-gray-800 hover:bg-gray-100">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
