import Plans from "./Plans";
import Programms from "./Programms";
import { useBooleanHook } from "../hooks/useBooleanHook";

export default function PlansAndProgramms() {
  const {
    value: showPlans,
    setTrue: showPlansView,
    setFalse: showProgrammsView,
  } = useBooleanHook(true);

  return (
    <section className="plans-programs container">
      <menu className="menu">
        <li>
          <button
            className={showPlans ? "menu-btn btn-actived" : "menu-btn"}
            onClick={showPlansView}
          >
            Planos
          </button>
        </li>
        <li>
          <button
            className={!showPlans ? "menu-btn btn-actived" : "menu-btn"}
            onClick={showProgrammsView}
          >
            Programas
          </button>
        </li>
      </menu>
      {!showPlans ? <Programms /> : <Plans />}
    </section>
  );
}
