import { useEffect, useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState<boolean | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validarEmail(email)) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div className="grid grid-cols-6 grid-rows-6 gap-1 w-screen h-screen">
    //   <div className="bg-red-400 col-span-3">1</div>
    //   <div className="bg-blue-600 col-span-3 row-span-6 col-start-4">3</div>
    //   <div className="bg-teal-600  col-span-3 row-span-5 row-start-2">4</div>
    // </div>
    <main
      className=" w-screen min-h-screen flex flex-col font-josefinSans md:h-[800px] md:grid md:grid-cols-12 md:grid-rows-12 "
      style={{
        backgroundImage:
          windowWidth >= 768 ? "url('/images/bg-pattern-desktop.svg')" : "",
      }}
    >
      <picture className="h-[86px] flex justify-start items-center ml-7 md:col-span-7 md:row-span-2 md:h-[160px] ">
        <img
          src="../images/logo.svg"
          alt="logo"
          className="w-[100px] md:w-[158px] md:h-[33px] md:ml-[160px]"
        />
      </picture>
      {windowWidth >= 768 ? (
        <aside
          className="md:col-span-5 md:row-span-12"
          style={{
            backgroundImage: "url('../images/hero-desktop.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></aside>
      ) : (
        <picture className="w-full ">
          <img
            src={"../images/hero-mobile.jpg"}
            alt="hero-mobile"
            className="w-full"
          />
        </picture>
      )}

      <article className="flex flex-col gap-8 mt-6 justify-center items-center leading-[1.35rem] min-h-[400px]  md:col-span-7 md:row-span-10 row-start-4 md:pr-[120px]">
        <h1 className="text-DarkGrayishRed uppercase text-[38.4px] text-center w-[315px] min-h-[120px] tracking-[1rem] font-semibold leading-[2.63rem] md:text-[63px] md:leading-[4.63rem] md:text-left md:min-w-[400px]">
          {" "}
          <span className="text-DesaturatedRed font-extralight">
            We're
          </span>{" "}
          coming soon
        </h1>
        <p className="text-[14.4px] text-DesaturatedRed w-[315px] text-center font-light tracking-[0.028rem] md:text-[16px] md:text-left md:w-[400px]">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>

        <form
          action="#"
          className="w-[310px] flex justify-between items-center relative md:w-[445px] md:h-[56px]"
          onSubmit={handleSubmit}
        >
          <div className="relative w-[100%]">
            <input
              id="input"
              type="text"
              className="h-[44px] w-[100%] border-[1px] border-DesaturatedRed rounded-full bg-transparent text-[1rem] px-[2rem] text-DarkGrayishRed placeholder:text-DesaturatedRed outline-none focus:border-[2px] focus:border-SoftRed"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {validate === false && (
              <img
                src="../images/icon-error.svg"
                alt="icon-error"
                className="absolute right-20 top-1/2 transform -translate-y-1/2 md:right-24"
              />
            )}
          </div>

          <button className="bg-DesaturatedRed w-[65px] h-[44px] rounded-full flex justify-center items-center cursor-pointer absolute right-0 md:w-[85px]">
            <img
              src="../images/arrow_13050814.png"
              alt="icon-arrow"
              className="bg-none text-white w-[25px] h-[25px] filter brightness-0 invert"
            />
          </button>
        </form>
        {validate === true && (
          <p className="text-green-600 text-left ">
            Email registered correctly
          </p>
        )}
        {validate === false && (
          <>
            <p className="text-SoftRed text-left ">
              Please provide a valid Email
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default App;
