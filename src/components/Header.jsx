import SearchInput from "./SearchInput";

export default function Header({ submitPostalCode }) {

  return (

    <div className="header">
    <h1>Weather Canada</h1>

    <span>°C</span>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
    <span>F</span>
    <SearchInput submitPostalCode={submitPostalCode} />
  </div>
    )
}
