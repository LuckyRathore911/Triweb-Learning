import { useRef } from "react";

import CustomWrapper from "../CustomWrapper";

function AddProductForm(props) {
  const name_ref = useRef();
  const image_ref = useRef();
  const description_ref = useRef();

  function submission(event) {
    event.preventDefault();
    const name = name_ref.current.value;
    const image = image_ref.current.value;
    const description = description_ref.current.value;
    const product = {
      name,
      image,
      description,
    };
    props.addProductHandler(product);
  }

  return (
    <CustomWrapper>
      <form onSubmit={submission}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={name_ref}></input>
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" id="image" ref={image_ref}></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea rows="5" id="description" ref={description_ref}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </CustomWrapper>
  );
}
export default AddProductForm;
