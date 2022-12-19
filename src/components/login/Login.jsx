import { AiFillFacebook } from "react-icons/ai";

function Login() {
  return (
    <div className="w-[350px] flex flex-col justify-between  min-h-[581px]">
      <div className="mt-2 w-full border flex justify-center py-2.5 box-border ">
        <div className="w-[268px] flex flex-col items-center mb-2.5">
          <div className="my-8 h-[52px] w-[175px] bg-inst-pattern bg-right-top bg-[length:173px_184px] "></div>
          <form action="" className="pt-6 box-border w-full">
            <label className="block relative w-full border h-[38px] mb-2">
              <label
                htmlFor="number"
                className="absolute left-2 top-2/4 -translate-y-2/4 text-xs text-light-gray peer-valid:text-red-700"
              >
                Telefon numarası, kullanıcı adı veya e-posta
              </label>
              <input
                id="number"
                required={true}
                type="text"
                className="bg-transparent w-11/12 focus:outline-none absolute left-2 top-2/4 -translate-y-2/4 text-xs
                  peer"
              />
            </label>
            <label className="block relative w-full border h-[38px] mb-2">
              <span className="absolute left-2 top-2/4 -translate-y-2/4 text-xs text-light-gray peer-focus:text-7xl">
                Şifre
              </span>
              <input
                required={true}
                type="password"
                className="bg-transparent w-11/12 focus:outline-none absolute left-2 top-2/4 -translate-y-2/4 text-xs
                  peer"
              />
            </label>
            <button className="w-full my-2 p-1 bg-light-blue text-white rounded bg-blue-100">
              Log in
            </button>
          </form>
          <div className="relative w-full h-8 flex items-center justify-center mt-2.5 mb-4.5">
            <span
              className="text-light-gray font-semibold after:align-middle after:h-[.07px] after:w-2/5 after:absolute after:top-1/2 after:translate-y-1/2 after:right-0 after:bg-light-gray after:inline-block
              before:absolute before:left-0 before:top-1/2 before:translate-y-1/2 before:align-middle before:h-[.07px] before:w-2/5 before:bg-light-gray before:inline-block"
            >
              Or
            </span>
          </div>
          <button className="w-full my-4 flex justify-center items-center">
            <AiFillFacebook className="mr-4 text-[#385185] text-xl" />
            <span className="text-[#385185] text-sm font-semibold">
              {" "}
              Log in with Facebook
            </span>
          </button>
          <div className="w-full flex justify-center mt-3">
            <a href="" className="text-dark-blue text-xs">
              Did you forget your password?
            </a>
          </div>
        </div>
      </div>
      <div className="border h-20 flex justify-center items-center text-sm">
        <span className="">Don't have an account?</span>
        <a href="" className="font-semibold text-login-btn ml-2">
          Register
        </a>
      </div>
    </div>
  );
}

export default Login;
