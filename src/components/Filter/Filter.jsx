const Filter = ({ handleFilterContact, name, value }) => {
  return (
    <form>
      <label>
        Finde contact by name
        <input
          onChange={handleFilterContact}
          name={name}
          type="text"
          value={value}
        />
      </label>
    </form>
  );
};

export default Filter;
