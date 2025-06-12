import { IoPrintOutline } from "react-icons/io5";

const PrintButton = ({ iconClasses }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="b-std aspect-square h-full rounded-[12px] bg-neutral-300 p-[8px] transition-colors hover:bg-teal-700 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-teal-500"
      aria-label="Print page"
    >
      <IoPrintOutline className={iconClasses} />
    </button>
  );
};

export default PrintButton;
