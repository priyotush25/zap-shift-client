const Input = ({ label, labelClass, input, inputClass, title, value, ...rest }) => {
    return (
        <div>
            <label className={`block text-gray-600 text-xl font-semibold mb-1 ${labelClass}`}>
                {label}
            </label>
            <input
                type={input}
                placeholder={title}
                className={`w-full px-4 py-2 text-xl font-medium rounded-md border border-gray-400 ${inputClass}`}
                {...rest}
            />
        </div>
    );
};

export default Input;
