import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="hover:opacity-75 sm:ml-10 ml-4 ">
          <Image
            src="./VectorLogo.svg"
            alt="Logo"
            width={100}
            height={100}
            sizes="100vw"
            style={{ width: "50%", height: "50%" }}
          />
        </div>
      </Link>
    </>
  );
};

export default Logo;
