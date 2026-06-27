import Button from "../components/common/Button";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Container className="py-32">
        <SectionTitle
          title="Artist Portfolio"
          subtitle="Professional singer portfolio website built with React and Tailwind CSS."
        />

        <div className="flex justify-center gap-4">
          <Button>Book Show</Button>
          <Button variant="secondary">Listen Now</Button>
        </div>
      </Container>
    </main>
  );
}

export default Home;