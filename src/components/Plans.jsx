import { plans } from "../data/plans";
import PlanItem from "./PlanItem";

export default function Plans() {
  return (
    <div className="plans-container grid grid-2">
      {plans.map((plan) => (
        <PlanItem key={plan.id} {...plan} />
      ))}
    </div>
  );
}
