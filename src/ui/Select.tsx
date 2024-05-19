export const Select = () => {
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-gray-900">
        Select an option
      </label>
      <select className="bg-primary-light border border-primary-dark text-white text-xs rounded-lg block w-full p-1">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};
