export const SubmitButton: React.FC<{text: string }> = ({ text }) => {
  return (
    <button
      type="submit"
      aria-disabled={false}
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      {text}
    </button>
  );
};