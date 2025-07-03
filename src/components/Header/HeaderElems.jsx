import HeaderElem from "./HeaderElem.jsx";
import emailLogo from "../../assets/email.svg";
import userLogo from "../../assets/user.svg";
import arrowLogo from "../../assets/down-arrow.svg";
import phoneLogo from "../../assets/phone.svg";
import heartLogo from "../../assets/heart.svg";
import cartLogo from "../../assets/cart.svg";

export default function HeaderElems() {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <HeaderElem
          imgSrc={emailLogo}
          textlabel="alupu@griddynamics"
          isCart={false}
        />
        <HeaderElem imgSrc={phoneLogo} textlabel="0740513074" isCart={false} />
      </div>
      <div className="flex justify-evenly items-center">
        <HeaderElem imgSrc={arrowLogo} textlabel="English" isCart={false} />

        <HeaderElem imgSrc={arrowLogo} textlabel="USD" isCart={false} />
        <HeaderElem imgSrc={userLogo} textlabel="Login" isCart={false} />
        <HeaderElem imgSrc={heartLogo} textlabel="Wishlist" isCart={false} />
        <HeaderElem imgSrc={cartLogo} isCart={true} />
      </div>
    </>
  );
}
