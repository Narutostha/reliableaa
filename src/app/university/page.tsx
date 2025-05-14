//@refresh
import UniversityMain from "@/components/university/UniversityMain";
import Wrapper from "@/layout/DefaultWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable College",
};

const University = () => {
  return (
    <>
      <Wrapper>
        <main className="main-area">
          <UniversityMain />
        </main>
      </Wrapper>
    </>
  );
}

export default University;