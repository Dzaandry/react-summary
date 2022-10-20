import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          image={meetup.image}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
