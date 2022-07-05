import Button from "../ui/button";
import Modal from "./modal";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";
import { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState();
  const [showSignUp, setShowSignUp] = useState();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        loginShow={showLogin}
        signUpShow={showSignUp}
      />

      <div className="hidden p-2 xl:flex items-center text-white bg-blue-600 fixed w-full bottom-0 rounded-tr rounded-tl drop-shadow-xl">
        <Image src={Logo} alt={`Viraal Logo`} width={40} height={40} />

        <p className="text-lg mx-2 mr-auto">
          <span className="font-bold">Join the Viraal community!</span>
          &nbsp; Discover the best live streams anywhere.
        </p>

        <Button
          color="bg-gray-500"
          onClick={() => {
            setIsOpen(true);
            setShowSignUp(true);
            setShowLogin(false);
          }}
        >
          Sign Up
        </Button>
      </div>
    </>
  );
}
