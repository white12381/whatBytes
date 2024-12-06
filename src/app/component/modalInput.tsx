interface props {
  page: number;
  text: string;
  boldText: string;
  name: string;
  placeholder: string; max?: number
}
const ModalInput = ({ page, text, boldText, name, placeholder, max }: props) => {
  return (
    <div className="flex justify-between mt-5 items-center">
      <div className="flex space-x-3">
        <p className="bg-blue-900 text-white font-semibold rounded-full h-6 w-6 relative">
          <p className="relative top-0 left-2">{page}</p>
        </p>
        <p>
          {text} <span className="font-bold">{boldText}</span>
        </p>
      </div>
      <input
        placeholder={placeholder}
        required
        min={0} max={max}
        name={name}
        type="number"
        className="inputNumber border border-blue-900 outline-blue-900 invalid:border-red-900 invalid:outline-red-900 invalid:mr-8 rounded-md w-36 p-2 "
      />
    </div>
  );
};
export default ModalInput;
