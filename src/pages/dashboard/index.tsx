const Dashboard = () => {
  return (
    <div style={{ height: "2000px" }}>
      <div
        className="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#444444_0%,#333333_50%,#222222_100%)] px-4 py-40 pt-[10vh] lg:min-h-dvh"
      >
        <div className="flex w-full items-start lg:h-[70dvh]">
          <div className="mx-auto mt-[5%] w-full max-w-screen-2xl">
            <h1 className="text-center text-4xl sm:text-5xl lg:text-start">
              <span className="text-4xl text-primary sm:text-5xl opacity-[1]">
                Coursify
              </span>
              <span className="invisible" />
              <br />
              <span className="mt-6 text-4xl sm:text-5xl opacity-[1]">
                UN RINCON DE APRENDIZAJE
              </span>
            </h1>
            <h2 className="mt-6 text-center font-poppins text-lg font-normal text-neutral-300 sm:text-xl sm:font-semibold lg:max-w-2xl lg:text-start">
              !Prepárate para sumergirte en un universo de aprendizaje continuo
              y descubrir todo lo nuevo que Coursify tiene para ti!
            </h2>
          </div>
          <div
            className="absolute left-[55%] z-[-1] hidden aspect-video w-[110dvh] lg:block"
            style={{ opacity: 1, transform: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
