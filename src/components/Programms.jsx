import ProgramItem from "./ProgramItem";

import { PROGRAMMS } from "../data/programms";
export default function Programms() {
  return (
    <section className="programms container">
      <div className="programms-container grid grid-2">
        {PROGRAMMS.map((program) => (
          <ProgramItem key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}
