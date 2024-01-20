export default function Calculations() {
  function getkWh(formData) {
    const kWh = formData.get("kWh");
    alert(kWh);
  }
  return (
    <>
      <form action={getkWh}>
        <input name="kWh"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
