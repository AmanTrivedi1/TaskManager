import { Button } from "@/components/ui/button";

const InfoPage = () => {
  return (
    <>
      <div className="md:max-w-screen-lg sm:mt-56 mb-10 px-4  mx-auto">
        <h1 className="text-3xl font-bold text-white text-center md:flex-start">
          {" "}
          Follow these steps
        </h1>
        <div className="flex items-center justify-center gap-x-2 md:flex-row flex-col">
          <div className="border rounded-md bg-gradient-to-br from-[#16E370] to-[#096BDE] border-brown mt-10 mb-[20px] h-52 w-80">
            <div className="px-4">
              <h1 className="text-white text-5xl font-extrabold  py-2">
                Step 1
              </h1>
              <p className="text-white">
                Create your account via a clerk Login from top right corner or
                click bellow to go further
              </p>
              <Button className="mt-4 ">Create Account</Button>
            </div>
          </div>
          {/* ?Step 2 */}
          <div className="border rounded-md bg-gradient-to-br from-[#16E370] to-[#096BDE] border-brown mt-10 mb-[20px] h-52 w-80">
            <div className="px-4">
              <h1 className="text-white text-5xl font-extrabold  py-2">
                Step 2
              </h1>
              <p className="text-white">
                After creating the account make a organistation chhose role
                admin or member
              </p>
              <Button className="mt-4 ">Create Org</Button>
            </div>
            {/* Step 2 */}
          </div>
          {/* Step 3 */}
          <div className="border rounded-md bg-gradient-to-br from-[#16E370] to-[#096BDE] border-brown mt-10 mb-[20px] h-52 w-80">
            <div className="px-4">
              <h1 className="text-white text-5xl font-extrabold  py-2">
                Step 3
              </h1>
              <p className="text-white">
                Invite will be sent to them ask them to join the group according
                to assigned role
              </p>
              <Button className="mt-4 ">Manage Org</Button>
            </div>
            {/* Step 2 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
