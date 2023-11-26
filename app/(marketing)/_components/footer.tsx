export const Footer = () => {
  return (
    <div className="flex transition bg-dark ease-in-out delay-150  justify-center gap-x-2   fixed bottom-0 text-xs  ">
      <p className="block mb-2 ml-2 cursor-pointer text-brown  px-2 py-2  hover:rounded-lg hover:border border-brown ">
        Term & Condition
      </p>
      <span className=" block   text-brown  px-2 py-2  "> || </span>
      <p className="block mb-2  cursor-pointer text-brown  px-2 py-2  hover:rounded-lg hover:border border-brown">
        Privacy & Policy
      </p>
    </div>
  );
};
