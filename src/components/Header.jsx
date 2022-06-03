import SearchInput from "./SearchInput";

export default function Header({ submitPostalCode, setStandardTemp, toggleWeather }) {
  return (
    <div className="header">
      <h1>Weather Canada</h1>

      <span>°C</span>
      <form onChange={(event)=>toggleWeather(event)}>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </form>
      <span>°F</span>
      <SearchInput submitPostalCode={submitPostalCode} />
    </div>
  );
}
