import Button from "../common/Button";
import Container from "../common/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <Container>
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-16 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="space-y-8">

            <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37]">
              ★ Official Artist
            </span>

            <div>
              <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                Your Brother
                <span className="block text-[#D4AF37]">
                  Singer Name
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                Experience soulful Gujarati Folk, Garba,
                Bhajans and unforgettable Live Concert
                Performances.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button>Book Show</Button>
              <Button variant="secondary">
                Watch Videos
              </Button>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 pt-6">

              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">
                  100+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Live Shows
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">
                  50K+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Followers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">
                  10+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Years
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-3xl" />

            <div className="relative flex h-[480px] w-[380px] items-center justify-center rounded-[40px] border border-[#D4AF37]/20 bg-[#111111] shadow-2xl">

              <span className="text-center text-gray-500">
                Singer Image
              </span>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;