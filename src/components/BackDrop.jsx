export default function BackDrop({ open }) {
  return <>{open && <div className="backdrop"></div>}</>;
}
