import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();
    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const meetup = { title, image, address, description };

    props.onAddMeetup(meetup);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" type="text" ref={titleInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input id="image" type="url" ref={imageInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input id="address" type="text" ref={addressInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            id="description"
            rows="5"
            ref={descriptionInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
