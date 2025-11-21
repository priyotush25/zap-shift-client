
const Input = ({ label, labelClass, input, inputClass, title, value }) => {
    return (
        <div>
            <label className={`block text-gray-600 text-xl font-semibold mb-1 ${labelClass}`}>{label}</label>
            <input type={input} value={value} placeholder={title} className={`w-full px-4 py-2 rounded-md border border-gray-400 ${inputClass}`} />
        </div>
    );
};

export default Input;