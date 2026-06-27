import Navbar from "../components/layout/Navbar";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] text-white">
        <Container className="flex min-h-screen flex-col items-center justify-center">
          <SectionTitle
            title="Artist Portfolio"
            subtitle="Professional singer portfolio website built with React and Tailwind CSS."
          />

          <div className="mt-8 flex gap-4">
            <Button>Book Show</Button>
            <Button variant="secondary">Listen Now</Button>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Home;