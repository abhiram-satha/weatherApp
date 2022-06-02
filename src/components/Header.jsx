import SearchInput from "./SearchInput";

export default function Header({ submitPostalCode, setStandardTemp }) {
  return (
    <div className="header">
      <h1>Weather Canada</h1>

      <span>°C</span>
      <form >
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </form>
      <span>F</span>
      <SearchInput submitPostalCode={submitPostalCode} />
    </div>
  );
}
