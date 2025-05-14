//@refresh
import HomeMain from "@/components/university/UniversityMain";
import Wrapper from "@/layout/DefaultWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable College",
};

const Home = () => {
  return (
    <>
        <Wrapper>
          <main className="main-area">
            <HomeMain />
          </main>
        </Wrapper>
    </>
  );
}

export default Home