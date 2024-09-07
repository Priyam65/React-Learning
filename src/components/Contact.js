const Contact = () => {
  return (
    <div>
      {/* <h1>+911002003004</h1> */}
      <h2>priyampatra6@gmail.com</h2>
      <form>
        <input
          type="text"
          className="p-2 m-2 border border-black"
          placeholder="Name"
        />
        <input
          type="text"
          className="p-2 m-2 border border-black"
          placeholder="Message"
        />
        <button className="p-2 m-2 border border-black bg-gray-300 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
