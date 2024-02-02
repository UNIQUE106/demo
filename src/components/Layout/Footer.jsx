import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../NavBar/Logo";
import { Link } from "react-router-dom";

function Footer() {
  const [orderEmail, setOrderEmail] = useState("");

  function handleChange(e) {
    setOrderEmail(e.target.value);
  }

  function handleClick() {
    if (orderEmail.length >= 5) {
        toast.success(`Order Details Sent to ${orderEmail}`);
        
    } else {
        toast.error("Oops! Enter A Valid Email");
    }
  }

  return (
    <footer className="bg-gray-950 py-5 px-10 flex md:justify-between">
      <div>
          <div>
            <h4 className="font-lato text-green-500">
              NATIONWIDE DELIVERY AVAILABLE
            </h4>
            <h2 className="text-white text-4xl font-mont">
              Order Healthy Food Today!
            </h2>
            <div className="border-b-2 w-96 mt-5 flex gap-3">
              <input
                type="email"
                className="bg-inherit py-1 px-2 text-white border-0 outline-none text-xl w-[22rem]"
                placeholder="Enter Email"
                onChange={handleChange}
              />
              <img
                src="icons/send.svg"
                alt="send icon"
                className="w-[20px] cursor-pointer"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="mt-16">
            <Logo color="white"/>
            <p className="text-white text-xl">"Fresh Finds, Fast Delivery: <br /> Your Grocery Wishlist, Our Promise!"</p>
          </div>
      </div>

      <div className="flex flex-col items-end justify-between w-[50%]">
        <nav>
            <ul className="text-white flex flex-col gap-3 text-right text-xl">
                <Link><li className="hover:border-b-2 hover:border-green-500">Home</li></Link>
                <Link><li className="hover:border-b-2 hover:border-green-500">Fruits</li></Link>
                <Link><li className="hover:border-b-2 hover:border-green-500">Veggies</li></Link>
                <Link><li className="hover:border-b-2 hover:border-green-500">Affliate</li></Link>
            </ul>
        </nav>

        <div className="flex gap-5">
            <img src="icons/facebook.svg" alt="facebook icon" className="w-[30px]"/>
            <img src="icons/x.svg" alt="facebook icon" className="w-[30px]"/>
            <img src="icons/instagram.svg" alt="facebook icon" className="w-[30px]"/>
            <img src="icons/tiktok.svg" alt="facebook icon" className="w-[30px]"/>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </footer>
  );
}

export default Footer;
