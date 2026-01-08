import Plans from "./Plans";
import Programms from "./Programms";

export default function PlansAndProgramms() {
  return (
    <section className="plans-programs container">
      <menu className="menu">
        <li>
          <button className="menu-btn">Planos</button>
        </li>
        <li>
          <button className="menu-btn">Programas</button>
        </li>
      </menu>
      <Plans />
    </section>
  );
}
