export const Footer = () => {
  return (
    <div className="flex  bg-dark  gap-x-2   fixed bottom-0 text-xs  ">
      <p className="block mb-2 ml-2 hover:text-white cursor-pointer text-brown  px-2 py-2   ">
        Term & Condition
      </p>
      <span className=" block   text-brown  px-2 py-2  "> || </span>
      <p className="block mb-2 hover:text-white  cursor-pointer text-brown  px-2 py-2  ">
        Privacy & Policy
      </p>
    </div>
  );
};
