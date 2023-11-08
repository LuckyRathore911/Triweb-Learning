import CustomWrapper from "../CustomWrapper";

function AddProductForm() {
  function submission(event) {
    event.preventDefault();
  }
  return (
    <CustomWrapper>
      <form onSubmit={submission}>
        <div>
          <label htmlFor="id">Id</label>
          <input type="text" id="id"></input>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" id="image"></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea rows="5" id="description"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </CustomWrapper>
  );
}
export default AddProductForm;
